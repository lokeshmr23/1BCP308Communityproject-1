import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const output=process.env.EVIDENCE_DIR||'evidence/v1.1';fs.mkdirSync(output,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
const page=await context.newPage();const errors=[],checks=[];
page.on('pageerror',e=>errors.push(String(e)));
const navigate=async route=>{await page.locator(`nav a[href="#${route}"]`).click();await page.waitForFunction(r=>document.querySelector(`nav a[href="#${r}"]`).getAttribute('aria-current')==='page',route);};
const check=(name,value)=>{assert.ok(value,name);checks.push(name);};
try{
 await page.goto('http://127.0.0.1:3000');await page.waitForSelector('[data-start="numbers"]');
 await page.screenshot({path:output+'/app-desktop.png',fullPage:true});
 check('home loads four main activities',await page.locator('.learn-card').count()===4);
 await page.locator('.hero [data-start="numbers"]').click();
 await page.locator('[data-choice="2"]').click();check('wrong answer gives retry feedback',(await page.locator('#feedback').innerText()).includes('choose again'));
 await page.locator('[data-choice="1"]').click();check('correct answer unlocks next',await page.locator('#next').isEnabled());
 await page.locator('#next').click();
 for(let n=2;n<=5;n++){await page.locator(`[data-choice="${n}"]`).click();await page.locator('#next').click();}
 check('five-card session completes',(await page.locator('h1').innerText()).includes('wonderful step'));
 await navigate('progress');check('first-try record excludes retry',(await page.locator('.metric strong').allTextContents()).join(',')==='5,4,1');
 const download=page.waitForEvent('download');await page.locator('#export').click();await (await download).saveAs(output+'/example-practice.csv');check('CSV export works',fs.readFileSync(output+'/example-practice.csv','utf8').includes('false'));
 await page.reload();await page.waitForSelector('.metric');check('default does not persist logs',(await page.locator('.metric strong').first().innerText())==='0');
 await page.locator('#settings-open').click();await page.locator('#remember').check();await page.locator('#large').check();await page.locator('#contrast').check();await page.locator('#length').selectOption('3');await page.locator('#settings .full').click();
 await navigate('learn');await page.locator('[data-start="shapes"]').click();
 for(const shape of ['circle','square','triangle']){await page.locator(`[data-choice="${shape}"]`).click();await page.locator('#next').click();}
 await navigate('progress');await page.reload();await page.waitForSelector('.metric');check('opt-in progress survives reload',(await page.locator('.metric strong').first().innerText())==='3');check('larger text and contrast survive reload',await page.locator('body.large.contrast').count()===1);
 await page.locator('#reset').click();await page.locator('#confirm-reset').click();check('reset clears records',(await page.locator('.metric strong').first().innerText())==='0');
 await page.locator('#settings-open').click();await page.locator('#large').uncheck();await page.locator('#contrast').uncheck();await page.locator('#remember').uncheck();await page.locator('#settings .full').click();
 await navigate('learn');await page.locator('#language').click();check('Kannada language switch',await page.locator('html').getAttribute('lang')==='kn');await page.evaluate(()=>document.querySelector('#toast').textContent='');await page.screenshot({path:output+'/app-kannada.png',fullPage:true});await page.locator('#language').click();
 await navigate('district');check('district map served',await page.locator('.map').evaluate(img=>img.complete&&img.naturalWidth>0));await page.screenshot({path:output+'/app-map.png',fullPage:true});
 await navigate('educators');await page.locator('#identify').click();await page.waitForFunction(()=>document.querySelector('#model-result').textContent.includes('prediction'));check('local model predicts example',(await page.locator('#model-result').innerText()).includes('matches'));
 await page.locator('#source-search').fill('ODbL');check('source finder filter works',await page.locator('#source-results .resource').count()===1);
 const a11y=[];for(const route of ['learn','progress','district','educators']){await navigate(route);const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();a11y.push({route,violations:a.violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.map(n=>n.target)}))});}
 fs.writeFileSync(output+'/accessibility.json',JSON.stringify(a11y,null,2));check('automated a11y checks have no serious or critical findings',a11y.every(x=>x.violations.every(v=>!['critical','serious'].includes(v.impact))));
 await page.setViewportSize({width:390,height:844});await navigate('learn');await page.screenshot({path:output+'/app-mobile.png',fullPage:true});check('mobile has no horizontal overflow',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.evaluate(async()=>{await navigator.serviceWorker.ready;});await page.reload();await page.waitForSelector('.learn-card');await context.setOffline(true);await page.reload();await page.waitForSelector('.learn-card');check('offline reload after cache works',await page.locator('.learn-card').count()===4);await page.locator('[data-start="life"]').click();await page.locator('[data-choice="a"]').click();check('offline activity grades',await page.locator('#next').isEnabled());
 check('no browser runtime exceptions',errors.length===0);
 fs.writeFileSync(output+'/browser-results.json',JSON.stringify({browser:'Chromium 141 / Playwright 1.56.1',checks,errors,status:'PASS',note:'Automation only. Not school fieldwork or full accessibility certification.'},null,2));
 console.log(checks.map(x=>'PASS: '+x).join('\n'));console.log(`RESULT: ${checks.length} browser checks passed`);
}finally{await browser.close();}

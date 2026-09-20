import {chromium,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base=process.env.BASE_URL||'http://localhost:3000';
const output=process.env.EVIDENCE_DIR||'evidence/v1.1';fs.mkdirSync(output,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage(),results=[],errors=[],a11y=[];
page.on('pageerror',e=>errors.push(e.message));
const check=async(name,fn)=>{await fn();results.push({name,passed:true});console.log('PASS:',name);};
const go=async(hash,selector)=>{await page.evaluate(h=>location.hash=h,hash);await page.waitForSelector(selector);};
const save=async(name)=>page.screenshot({path:`${output}/${name}.png`,fullPage:true});
await page.goto(base);await page.waitForSelector('.journey-steps');
await check('home has six labelled journey buttons and two USE ME entry points',async()=>{await expect(page.locator('[data-journey]')).toHaveCount(6);await expect(page.locator('[data-open-guide]')).toHaveCount(2);});
await check('USE ME opens the guide without starting or logging practice',async()=>{await page.click('#use-me');await expect(page.locator('#guide-step-title')).toHaveText('A little help to get started.');assert.ok(page.url().endsWith('#guide'));assert.equal(await page.evaluate(()=>localStorage.length),0);});
await save('guide-desktop');
await check('first guide page offers Begin practice and starts numbers',async()=>{await page.click('[data-guide-action="begin"]');await expect(page.locator('.question-box .eyebrow')).toHaveText('Numbers');await expect(page.locator('#question-heading')).toBeVisible();});
await check('help preserves the current question and enabled Next state',async()=>{
 const q=await page.locator('#question-heading').textContent();
 const lesson=JSON.parse(fs.readFileSync('public/data/lessons.json')).find(c=>c.category==='numbers');
 await page.click(`[data-choice="${lesson.answer}"]`);await expect(page.locator('#next')).toBeEnabled();
 await page.click('#use-me');await page.click('[data-guide-action="resume"]');
 await expect(page.locator('#question-heading')).toHaveText(q);await expect(page.locator('#next')).toBeEnabled();
});
await check('keyboard navigation moves between guide steps and focuses the new heading',async()=>{await page.click('#use-me');await page.locator('[data-guide-next]').focus();await page.keyboard.press('Enter');await expect(page.locator('[data-journey="choose"]')).toHaveAttribute('aria-current','step');await expect(page.locator('#guide-step-title')).toBeFocused();await page.click('[data-guide-prev]');await expect(page.locator('[data-guide-prev]')).toBeDisabled();});
await check('all six guide panels work and have just one active step',async()=>{for(const id of ['discover','choose','learn','practise','review','share']){await page.click(`[data-journey="${id}"]`);await expect(page.locator('[aria-current="step"]')).toHaveCount(1);await expect(page.locator(`[data-journey="${id}"]`)).toHaveAttribute('aria-current','step');}await expect(page.locator('[data-guide-next]')).toBeDisabled();});
await check('settings open and close from the guide without losing the step',async()=>{await page.click('[data-journey="discover"]');await page.click('[data-guide-action="settings"]');await expect(page.locator('#settings')).toBeVisible();await page.keyboard.press('Escape');await expect(page.locator('#settings')).not.toBeVisible();await expect(page.locator('[data-journey="discover"]')).toHaveAttribute('aria-current','step');});
await check('Choose takes the learner to activities and keyboard focus follows',async()=>{await page.click('[data-journey="choose"]');await page.click('[data-guide-action="choose"]');await expect(page.locator('#activities-title')).toBeFocused();await expect(page.locator('.learn-card')).toHaveCount(4);});
await check('home Discover, Learn and Choose all reach their intended content',async()=>{await page.click('[data-journey="learn"]');await expect(page.locator('#guide-step-title')).toHaveText('Look. Read. Choose.');await page.click('[data-guide-exit]');await page.click('[data-journey="discover"]');await expect(page.locator('#guide-step-title')).toHaveText('A little help to get started.');await page.click('[data-guide-exit]');await page.click('[data-journey="choose"]');await expect(page.locator('#activities-title')).toBeFocused();});
await check('home Practise resumes active practice instead of resetting it',async()=>{await page.click('[data-journey="practise"]');await expect(page.locator('#next')).toBeEnabled();});
await check('guide practice selector launches the selected activity',async()=>{await page.click('#use-me');await page.click('[data-journey="practise"]');await page.selectOption('#guide-category','shapes');await page.click('[data-guide-action="practice"]');await expect(page.locator('.question-box .eyebrow')).toHaveText('Shapes');});
await check('Review opens the existing device progress view',async()=>{await go('learn','.journey-steps');await page.click('[data-journey="review"]');await expect(page.locator('#export')).toBeVisible();});
await check('Share opens public resources, not the CSV exporter',async()=>{await go('learn','.journey-steps');await page.click('[data-journey="share"]');await expect(page.locator('#public-app-link')).toHaveValue('https://sahaya-learning.onrender.com');await expect(page.locator('.public-resource')).toHaveCount(3);await expect(page.locator('#export')).toHaveCount(0);});
await save('share-desktop');
await check('copy action uses only the canonical public app link',async()=>{await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async value=>window.copiedValue=value}}));await page.click('#copy-app-link');await expect(page.locator('#share-feedback')).toContainText('No practice records included');assert.equal(await page.evaluate(()=>window.copiedValue),'https://sahaya-learning.onrender.com');});
await check('blocked clipboard gives a selected manual-copy URL and readable feedback',async()=>{await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('blocked');}}}));await page.click('#copy-app-link');await expect(page.locator('#share-feedback')).toContainText('copy it manually');await expect(page.locator('#public-app-link')).toBeFocused();assert.equal(await page.locator('#public-app-link').evaluate(e=>e.selectionEnd-e.selectionStart),36);});
await check('native sharing, when available, receives no learner or session fields',async()=>{await page.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async data=>window.sharedValue=data}));await go('learn','.journey-steps');await go('share','#native-share');await page.click('#native-share');assert.deepEqual(await page.evaluate(()=>window.sharedValue),{title:'Sahaya • Community Learning',url:'https://sahaya-learning.onrender.com'});});
await check('native share cancellation is quiet and failure offers a fallback',async()=>{await page.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async()=>{throw new DOMException('cancelled','AbortError');}}));await page.click('#native-share');await expect(page.locator('#share-feedback')).toBeEmpty();await page.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async()=>{throw Error('unavailable');}}));await page.click('#native-share');await expect(page.locator('#share-feedback')).toContainText('Use Copy app link');});
await check('guide and Share switch to Kannada with local font content',async()=>{await page.click('#language');await expect(page.locator('html')).toHaveAttribute('lang','kn');await expect(page.locator('#copy-app-link')).toHaveText('ಆ್ಯಪ್ ಲಿಂಕ್ ನಕಲಿಸಿ');await page.click('#use-me');await expect(page.locator('#guide-step-title')).toHaveText('ಪ್ರಾರಂಭಿಸಲು ಸ್ವಲ್ಪ ಸಹಾಯ.');await expect(page.locator('#use-me')).toHaveText('ಬಳಸಿ');});
await save('guide-kannada');
await check('new views have zero detected axe violations in English and Kannada',async()=>{
 for(const lang of ['kn','en']){
  if(await page.locator('html').getAttribute('lang')!==lang)await page.click('#language');
  for(const route of ['learn','guide','share']){
   await go(route,route==='learn'?'.hero':route==='guide'?'#guide-detail':'#public-app-link');
   const scan=await new AxeBuilder({page}).analyze();a11y.push({lang,route,violations:scan.violations});assert.deepEqual(scan.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),[]);
  }
 }
});
await check('320px and 390px new layouts have no horizontal overflow in either language',async()=>{
 for(const width of [320,390]){
  await page.setViewportSize({width,height:844});
  for(const lang of ['en','kn']){
   if(await page.locator('html').getAttribute('lang')!==lang)await page.click('#language');
   for(const route of ['learn','guide','share']){
    await go(route,route==='learn'?'.hero':route==='guide'?'#guide-detail':'#public-app-link');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} ${lang} ${route}`);
    const box=await page.locator('#use-me').boundingBox();assert.ok(box.x>=0&&box.x+box.width<=width);
   }
  }
 }
});
await page.setViewportSize({width:390,height:844});await go('guide','#guide-detail');await save('guide-mobile-kannada');
await check('large text plus high contrast works for new mobile routes',async()=>{await page.click('#settings-open');await page.check('#large');await page.check('#contrast');await page.keyboard.press('Escape');for(const route of ['learn','guide','share']){await go(route,route==='learn'?'.hero':route==='guide'?'#guide-detail':'#public-app-link');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route);}});
await page.click('#settings-open');await page.uncheck('#large');await page.uncheck('#contrast');await page.keyboard.press('Escape');await page.click('#language');await go('guide','#guide-detail');await save('guide-mobile');
await check('guide exit returns to the preceding route',async()=>{await go('progress','#export');await page.click('#use-me');await page.click('[data-guide-exit]');await expect(page.locator('#export')).toBeVisible();});
await check('footer guide entry remembers its previous route',async()=>{await page.click('footer a[href="#guide"]');await page.waitForSelector('#guide-detail');await page.click('[data-guide-exit]');await expect(page.locator('#export')).toBeVisible();});
await check('guide module and both new views work after an offline reload',async()=>{await page.evaluate(async()=>{await navigator.serviceWorker.ready;});await page.reload();await page.waitForSelector('#export');await context.setOffline(true);await page.reload();await page.waitForSelector('#export');await page.click('#use-me');await expect(page.locator('#guide-detail')).toBeVisible();await page.click('[data-guide-action="begin"]');await expect(page.locator('#question-heading')).toBeVisible();await go('share','#public-app-link');await expect(page.locator('#public-app-link')).toBeVisible();await context.setOffline(false);});
await check('no persistence or browser exceptions introduced by the journey',async()=>{assert.equal(await page.evaluate(()=>localStorage.length),0);assert.deepEqual(errors,[]);});
fs.writeFileSync(`${output}/journey-browser-results.json`,JSON.stringify({release:'1.1.0',browser:'Chromium',checks:results.length,results,errors},null,2));
fs.writeFileSync(`${output}/journey-accessibility.json`,JSON.stringify(a11y,null,2));
await browser.close();console.log(`RESULT: ${results.length} journey browser checks passed`);

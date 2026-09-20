import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JOURNEY_STEPS,journeyText,PUBLIC_LINKS,getJourneyStep,publicShareData,renderJourney,renderGuide,renderShare} from '../public/journey.js';
test('learning journey has exactly six ordered, unique stages',()=>assert.deepEqual(JOURNEY_STEPS.map(s=>s.id),['discover','choose','learn','practise','review','share']));
test('guide content and all interface strings are bilingual',()=>{
 for(const v of Object.values(journeyText))assert.ok(v.en&&v.kn);
 for(const s of JOURNEY_STEPS){for(const k of ['label','summary','title','intro','actionLabel','value'])assert.ok(s[k].en&&s[k].kn);for(const lang of ['en','kn']){assert.equal(s.tips[lang].length,3);assert.ok(s.tips[lang].every(t=>typeof t==='string'&&t.length>0));}}
});
test('unknown guide step falls back safely to Discover',()=>{assert.equal(getJourneyStep('<img onerror=x>').id,'discover');assert.equal(getJourneyStep(null).id,'discover');});
test('guide exposes one current step with accessible control labels',()=>{
 for(const s of JOURNEY_STEPS)for(const lang of ['en','kn']){const html=renderGuide(lang,s.id);assert.equal((html.match(/aria-current="step"/g)||[]).length,1);assert.ok(html.includes(`data-journey="${s.id}"`));assert.ok(html.includes('id="guide-step-title"'));assert.ok(html.includes(s.title[lang]));}
});
test('home journey has labelled buttons, not icon-only controls',()=>{const html=renderJourney('en');assert.equal((html.match(/data-journey=/g)||[]).length,6);assert.equal((html.match(/class="journey-label"/g)||[]).length,6);assert.ok(!html.includes('aria-current'));});
test('share payload is canonical public link only, with no runtime state',()=>{assert.deepEqual(publicShareData(),{title:'Sahaya • Community Learning',url:'https://sahaya-learning.onrender.com'});assert.ok(!Object.values(PUBLIC_LINKS).some(url=>/localhost|127\.0\.0\.1|e2b\.app/.test(url)));assert.ok(Object.values(PUBLIC_LINKS).every(url=>new URL(url).protocol==='https:'));});
test('share page has real public resources and an explicit copy fallback field',()=>{const html=renderShare('en',false);for(const k of ['repository','manual','slides'])assert.ok(html.includes(`href="${PUBLIC_LINKS[k]}"`));assert.ok(html.includes('readonly'));assert.ok(html.includes(`value="${PUBLIC_LINKS.app}"`));assert.ok(!html.includes('id="native-share"'));assert.ok(renderShare('en',true).includes('id="native-share"'));});

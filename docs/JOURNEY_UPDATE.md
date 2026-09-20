# Sahaya v1.1 — USE ME & icon-based Customer Value Journey

**Release date:** 20 September 2026  
**Developed and shared by:** Dr. Lokesh M R, Professor, ISE, A J Institute of Engineering and Technology, Mangaluru  
**Project:** 1BCP308 · PO5 / PO6 · SDG 4

This release applies an educational—not commercial—Customer Value Journey: **Discover → Choose → Learn → Practise → Review → Share**. The learner-facing heading is “Your learning journey”. There are no purchases, subscriptions, referrals, analytics, stage locks or completion claims.

## 1. Objective

Help learners and educators understand Sahaya before starting, find a suitable activity, practise at their own pace, review device-level activity, and optionally share public educational resources. The existing bilingual learning application is updated in place; this is not a separate mock-up.

## 2. Tools and resources

- Existing dependency-free vanilla JavaScript application, HTML and CSS.
- New `public/journey.js`: English/Kannada guide content, original inline SVG icons, rendering helpers and fixed public resource links.
- Existing bundled Noto Sans Kannada font; no icon CDN or extra network dependency.
- Node test runner, Playwright Chromium and axe-core for technical checks.
- Existing source/model/map datasets are unchanged. No new learner dataset is collected.

Public application: https://sahaya-learning.onrender.com  
GitHub: https://github.com/lokeshmr23/1BCP308Communityproject-1

## 3. Journey design and user value

| Stage | Icon | Home-page action | Learner/educator value |
|---|---|---|---|
| Discover | Compass | Opens the introductory USE ME guide | Understand the tool and available adjustments |
| Choose | Four tiles | Scrolls to activities and moves keyboard focus to their heading | Choose numbers, colours, shapes or everyday life |
| Learn | Open book | Opens the card-instructions guide | Understand question, choices, read-aloud and Next card |
| Practise | Pencil | Resumes active practice; otherwise opens the practice selector | Try without a timer; select a new activity when appropriate |
| Review | Bars | Opens existing My progress | Reflect on completed cards and first tries, without ranking learners |
| Share | Connected nodes | Opens the public-resources page | Share access to the resource, not personal practice data |

Within the guide, selecting an icon opens its explanation. Previous/Next controls move between guide panels. The active icon means **the page being read**, not a completed learning stage. Every icon has a visible text label; icons themselves are decorative to screen readers.

## 4. Implementation and usage

### USE ME

A prominent **USE ME** button is available in the header and on the home-page hero. In Kannada its label is **ಬಳಸಿ**.

1. Open USE ME to read the short introductory guide.
2. Choose **Begin practice · Numbers** for a quick start, **Learning settings** to adjust preferences, or **Choose an activity** for another category.
3. The Practise guide panel has a category selector and a Begin practice button.
4. Opening help does not reset an unfinished practice session. **Resume my practice** returns to its current card and answer state. Starting a new practice intentionally replaces that session.
5. **Back to where I was** returns to the prior application route. A directly opened `#guide` page returns to the home page by default.

Routes: `#guide` and `#share`; all existing routes remain available. Preferences retain the existing `sahaya-v1` storage key so this interface update does not intentionally discard saved opt-in records. Guide step state is temporary and is not persisted.

### Public sharing

- Copy app link always copies **https://sahaya-learning.onrender.com**. It never copies the current browser URL, which could be a local preview.
- Native Share appears only when the browser provides `navigator.share`; its payload contains just the public app URL and the Sahaya title.
- Blocked/unavailable clipboard access selects the readable URL and gives manual-copy instructions.
- Native share cancellation is handled quietly; other failures suggest copying the public link.
- Separate GitHub cards open the source repository, `reports/` and `presentation/` in new tabs. These external pages require internet.
- No CSV, practice score, learner identity, diagnostic information, session token, registration or tracking is added. The existing CSV export remains separate in My progress.
- VTUHub's independent-initiative disclaimer is included. No VTU endorsement or guaranteed educational outcome is claimed.

### Offline and accessibility

The rebuilt content-hashed service worker includes `journey.js`. After a successful first cache on a supported secure origin, the guide and local practice work offline. External resources and some browser voices still require connectivity.

Responsive layout checks cover 320px and 390px widths in both languages. Controls have labels, keyboard focus indicators and explicit focus handling. Larger text/high contrast are retained. These technical measures do not replace individual access assessments or a full accessibility audit.

## 5. Verification and results

Executed on the local v1.1 build, not on the deployed Render site:

| Check | Result |
|---|---|
| Node unit tests | **16 passed**: 9 original engine tests + 7 journey tests |
| Original Chromium regression suite | **19 passed** |
| New journey Chromium suite | **25 passed** |
| Total Chromium checks | **44 passed** |
| axe, existing four main routes | **0 detected violations** in the configured WCAG scan |
| axe, home/guide/share × English/Kannada | **0 detected violations** in 6 full scans |
| Deterministic source/site verification | **23 hashes verified** before and after regeneration |
| Offline cache | `sahaya-a497d60b99446ed5`; **19 precached files** |

New checks cover quick start, six guide panels, keyboard navigation, settings, category selection, resume without resetting an answered card, route return, Review/Share links, public-only share payloads, denied clipboard fallback, native share cancellation, bilingual switching, mobile widths, large text/contrast, and offline reload. Native share and clipboard branches are tested with controlled browser mocks; this is not a real operating-system share-sheet or device integration certification.

Actual logs, scan results and screenshots are in `evidence/v1.1/`. All practice data in test evidence is generated by automation, not by learners. Current artifact hashes are in `evidence/artifact-manifest.json`; the baseline manifest is preserved as `evidence/artifact-manifest-v1.0.json` for historical reference, not verification of v1.1 files.

Reproduce:

```sh
npm ci
npm test
npm run build
pip install -r requirements.txt
python scripts/verify_artifacts.py
npx playwright install --with-deps chromium
# Terminal 1: node server.mjs
# Terminal 2:
npm run test:browser
```

The browser tests write to `evidence/v1.1/`, leaving the original report's historical screenshots intact. An alternative output directory can be supplied with `EVIDENCE_DIR`.

## 6. Reflection, limitations and release handover

- Kannada educational review, school approval, learner trials, measured educational benefit and comprehensive assistive-technology testing remain pending.
- Counts are device-level activity summaries, not an ability assessment or validated learning-gain measure. Shared browsers combine users' records; retention is off by default.
- The **48-page report and 25-slide presentation are preserved baseline documents**, not regenerated v1.1 documentation. Read this release addendum alongside them; their historical UI screenshots and test counts should not be described as the v1.1 interface.
- Original syllabus mapping, PO5/PO6, SDG 4, data/model attribution and safeguards remain unchanged. UCI model accuracy remains repository digit-classification performance, not learner improvement.
- The known public Render application exists, but this prepared update does **not** modify the remote GitHub repository or redeploy Render automatically. Upload/commit the extracted release contents, then deploy the latest commit.
- See root `UPDATING.md` for upload, Render refresh, smoke-test and rollback instructions. After publishing, confirm the footer says **v1.1** and both USE ME and Share work on the actual production origin.

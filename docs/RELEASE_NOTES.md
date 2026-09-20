# Release 1.1.0 — 20 September 2026

- Added prominent bilingual USE ME guidance with Begin practice, category choice, settings and resume controls.
- Added original labelled SVG icons for Discover → Choose → Learn → Practise → Review → Share.
- Added a public-resource sharing page, canonical app URL, GitHub manual/slides/source links, and clipboard/native-share fallbacks. No learner records enter the share payload.
- Preserved existing activities, local storage key, progress/CSV controls, model and district map.
- 16 unit tests; 44 Chromium checks (19 regression + 25 journey); 0 detected axe violations on the tested routes/languages; 23 deterministic artifact hashes; 19 precached files.
- Release-specific evidence is in `evidence/v1.1/`; the original report and presentation remain baseline documents. [Full update addendum](JOURNEY_UPDATE.md).
- Public deployment exists at https://sahaya-learning.onrender.com. This update must still be committed/uploaded and redeployed by the owner; no remote changes are claimed.

---

The following notes describe the original delivery state, before the owner's public deployment and this update.

# Release 1.0.0 — 20 September 2026

## Delivered
- 48-page PDF companion and editable DOCX using the supplied book's 15-week, six-section chapter pattern.
- English/Kannada learning prototype: 30 cards, local device progress, CSV export, settings, district map and source/model workspace.
- Original UCI source split, geoBoundaries district derivative, local 3-NN model and source attribution.
- 9 passing engine tests, 19 passing Chromium checks, 0 detected axe violations on 4 main views, 15 two-pass evidence programs.
- 22 source/site artifact hashes verified before and after deterministic regeneration.
- Local Git history, Render static Blueprint, CI and deployment documentation.

## Known limitations and pending work
- No school-specific requirement approval, actual field survey/trial, Kannada expert review, full accessibility certification or measured learner benefit.
- No remote Git push or Render account deployment. Connect your own account following docs/DEPLOYMENT.md.
- Practice logs are device-level, not per learner; retention is opt-in. The example CSV is automation-generated.
- Model accuracy is repository digit classification, not an educational outcome. No Kannada-digit recognition, learner handwriting collection or large-model inference.
- Main learner UI is bilingual; technical notes/map annotations are English. Read-aloud depends on installed browser voices and may use network services.
- Offline use requires successful first cache, a supporting secure-origin browser and retained cache. No file:// guarantee.
- Map source vintage is 2021; the Mangaluru point is approximate and the map is not a current legal or navigation reference.

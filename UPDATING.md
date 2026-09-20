# Install Sahaya v1.1 — USE ME & learning journey

Prepared 20 September 2026. The source has been updated and tested locally. The remote GitHub repository and live Render application have **not** been modified by this delivery.

## 1. Back up, extract, upload

1. Download the existing repository ZIP or record its current commit before updating. Keep any changes you made after this package was prepared.
2. Extract `Sahaya-v1.1-USE-ME-GitHub-Ready.zip` on your computer. **Do not upload the ZIP itself**; GitHub will not extract it for you.
3. Open https://github.com/lokeshmr23/1BCP308Communityproject-1 and go to the root **Code → Add file → Upload files** page.
4. Drag the **contents** of the extracted folder (files and folders together), not its enclosing folder, onto the upload area. At the repository root you should see `package.json`, `render.yaml`, `public/`, `scripts/`, `tests/`, `docs/`, `reports/`, and `presentation/`. Include hidden `.github/` and `.gitignore` if your file picker hides them.
5. This release is kept below 100 files for one browser upload. If needed, upload in two batches, preserving root-relative paths. Commit with a message such as `Add USE ME guide and learner value journey v1.1`.
6. Review GitHub's diff. The intended runtime changes are `public/index.html`, `public/app.js`, `public/styles.css`, `public/sw.js`, and new `public/journey.js`. Supporting changes update version, tests, documentation and artifact hashes. Original lesson/model/map data and the baseline report/slides are unchanged. Extra existing remote files are not removed by an upload.

If using Git locally instead: clone your repository, copy the extracted contents over that working tree, inspect `git diff`, run the tests, then add/commit/push the intended changes. No credentials should be committed.

## 2. Redeploy the existing Render site

The existing application is https://sahaya-learning.onrender.com.

- Use the **existing** connected Render site; there is no need to create a new service.
- Root directory: blank (repository root).
- Build command: `node scripts/build.mjs`.
- Publish directory: `public`.
- No environment secrets, database or Python runtime are needed for the deployed static app.
- If auto-deploy is enabled, wait for the new commit to deploy. Otherwise use **Manual Deploy → Deploy latest commit**.
- A successful local check does not establish a successful remote build; review GitHub Actions and Render logs after uploading.

## 3. Refresh and smoke-test

1. Open the production app online. Let the new service worker install, close/reopen the app tab and refresh. Check the footer for **v1.1**.
2. If the old screen persists, hard-refresh or test in a private window. Clearing *all site data* can delete opt-in local practice records—do not use that as the first troubleshooting step.
3. Click header **USE ME**. Confirm the short guide opens; **Begin practice · Numbers** should start a card.
4. Open USE ME while practising, then **Resume my practice**. Confirm the same card returns.
5. Try the six home journey icons. Review must open My progress; Share must show public resources, not a CSV download.
6. Switch English/Kannada. Check a phone-sized screen, keyboard navigation, larger text and contrast.
7. Copy the Share link and paste it into a temporary text field. It must be exactly `https://sahaya-learning.onrender.com`, with no practice records or extra query string. Cancel native sharing if no real message is intended.
8. Follow the GitHub source/manual/slides links. They require internet.
9. After a successful online cache, test an offline reload and a local activity. External links/voices may not work offline.

## 4. Release contents and evidence

- `docs/JOURNEY_UPDATE.md`: six-section release addendum, journey mapping, privacy/accessibility limits and test results.
- `evidence/v1.1/`: current screenshots and actual technical receipts, including **16 unit tests and 44 Chromium checks**.
- `evidence/artifact-manifest.json`: **23** current source/site hashes; the v1.0 manifest is archived separately.
- `reports/` and `presentation/`: unchanged **48-page baseline report** and **25-slide author-updated baseline presentation**, with editable versions and notes. They do not depict the new v1.1 guide; read the addendum alongside them.
- `SHA256SUMS.txt`: hashes of the upload-package files (excluding itself).

Reproduce with Node 20+ (22 recommended): `npm ci`, `npm test`, `npm run build`. For Chromium checks: `npx playwright install --with-deps chromium`, run `node server.mjs` in one terminal and `npm run test:browser` in another. Python artifact regeneration uses `pip install -r requirements.txt` then `python scripts/verify_artifacts.py`.

## 5. Rollback

If production checks fail, revert your v1.1 update commit in GitHub/Git and redeploy that prior revision in Render. The old interface may be cached until refreshed. Do not delete local practice records merely to roll back the interface. Inspect any deployment issue before another upload.

## 6. Classroom disclaimer

Educator review of Kannada and access needs is still required. No school trial or learning-gain claim is made. VTUHub is independent, not an official VTU channel. Sharing is optional and must not expose names, diagnoses, private record screenshots or learner CSV files.

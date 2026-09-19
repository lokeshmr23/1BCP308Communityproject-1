# Sahaya — GitHub-ready learning project

English–Kannada community learning prototype • 1BCP308 • PO5 / PO6 • SDG 4

This upload edition is deliberately **below GitHub’s browser upload file-count limit**. It puts `render.yaml`, `package.json`, and `public/` at the repository root. It includes the functioning app, secondary data, local model, attribution, test/rebuild scripts, 48-page report and latest 25-slide presentation with Dr. Lokesh M R’s author information.

## Upload this edition to GitHub

1. Extract **Sahaya-GitHub-Ready.zip** on your computer. GitHub does **not** unpack an uploaded ZIP into a running project.
2. Open the extracted folder until you see `render.yaml`, `package.json`, `public/`, `scripts/`, `reports/`, and `presentation/` together.
3. In your repository, go to the **top-level Code page → Add file → Upload files**. Refresh or cancel any rejected upload first.
4. Drag **all files and folders inside** the extracted folder onto the upload area. Include `.github` and `.gitignore`. Do not drag the outer folder and do not upload the ZIP itself.
5. Wait for the upload to finish, then choose **Commit changes**. If GitHub still reports a file-count limit, upload `public/` first, commit, and upload the remaining contents in a second batch. Keep every folder at the repository root.
6. Confirm that `render.yaml` is visible on the repository’s top-level Code page, not inside `Project/`, `sahaya/`, or an archive wrapper folder.

If a previous upload created duplicate nested directories, do not use them as the deployment root. Review them before removing anything; no remote files are changed by this package.

## Render: recommended deployment

Choose **New → Blueprint**, connect your Git repository, and use the root `render.yaml`.

For a manual **Static Site**:

| Setting | Value |
|---|---|
| Root directory | Leave blank |
| Build command | `node scripts/build.mjs` |
| Publish directory | `public` |
| Environment secrets | None |
| Backend start command | None — this is a static site |

The project does not require Python at Render runtime. Python only rebuilds the bundled secondary-data/model artifacts. No database is required. Check current hosting terms and quotas. Remote deployment has not been performed by this delivery.

## Run locally

Node.js 20+ (22 LTS recommended):

```sh
node scripts/build.mjs
node server.mjs
```

Open `http://localhost:3000` on the same computer. The local server is for development; Render serves `public/` directly.

## Technical verification

```sh
npm ci
npm test
npm run build
pip install -r requirements.txt
python scripts/verify_artifacts.py
```

For browser automation, install Chromium using `npx playwright install --with-deps chromium`, start `node server.mjs` in another terminal, then run `npm run test:browser`. The included GitHub Actions workflow runs these checks after publication. A remote Actions result is not claimed before GitHub runs it.

## Report and presentation

- `reports/Community-Project-Sahaya-Continuation.pdf` — 48-page report.
- `reports/Community-Project-Sahaya-Continuation.docx` — editable report.
- `presentation/Sahaya-Classroom-Presentation.pptx` — latest 25 slides, author credits, profile, contacts, acknowledgement and dedication.
- `presentation/Sahaya-Classroom-Presentation.pdf` — presentation PDF.
- `presentation/Sahaya-Classroom-Speaker-Notes.md` — notes (also embedded in PowerPoint).

This lightweight upload edition omits the old Git-history bundle, duplicated documentation, report-generation programs, and archived weekly captures/screenshots to keep the file count low. They remain available in the earlier **Sahaya-Complete-Updated-Package.zip**, which is the full archival/reproduction handover. Do not upload that combined archive’s entire extracted contents through the browser in a single batch.

## Classroom and data safeguards

School approval, Kannada educator review, individual access validation and learner trials remain pending. The model’s 97.83% score is UCI digit classification, not a learning outcome. Practice records are local, anonymous and device-level, with retention off by default. No diagnosis or learner cloud database is provided. Offline use requires a successful first cache; browser voices may need a network.

Original code: MIT. UCI data/model vectors and Twemoji graphics: CC BY 4.0. Derived district data: ODbL 1.0. Noto Sans Kannada: SIL OFL 1.1. See `docs/SOURCES.md`, `LICENSE` and the bundled font licence.

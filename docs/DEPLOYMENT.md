# Git → Render deployment

## What is already done
The repository is initialized locally with commits. The tested browser app and generated service worker are bundled. `render.yaml` describes a **static site**. No secret or API key is required. A live sandbox preview is separate from a public Render deployment.

## 1. Run locally
Install Node.js 20+ (22 LTS recommended). From this folder:

```sh
node scripts/build.mjs
node server.mjs
```
Visit `http://localhost:3000`. For another port: `PORT=8080 node server.mjs` (POSIX). This server binds to 0.0.0.0 and is only a local/preview convenience. Render serves `public/` directly.

## 2. Publish Git
Create an empty repository in your GitHub/GitLab account. Do not put private school records in it.

```sh
# The delivered project already has a local Git history.
git status
git log --oneline
# If you copied only the working files instead of cloning the supplied bundle:
# git init -b main
# git add .
# git commit -m "Add Sahaya learning prototype"
git remote add origin https://github.com/YOUR_ACCOUNT/sahaya-learning.git
git push -u origin main
```
Authenticate through your provider's normal mechanism; do not write tokens to the repository.

## 3. Create the Render static site
In Render: **New → Blueprint**, connect the repository, use `render.yaml`, review and create resources. Alternatively **New → Static Site** with:

| Setting | Value |
|---|---|
| Branch | main |
| Root directory | repository root (blank) |
| Build command | `node scripts/build.mjs` |
| Publish directory | `public` |
| Environment variables | none |
| Rewrite routes | none; navigation uses URL hashes |

For this static site, do not set a Python start command, gunicorn, disk, database, or server port. Python is needed only to reproduce the secondary-data artifacts, not for deployment. Check current Render account limits/pricing. No universal free-tier promise is made.

## 4. Verify before sharing
- Open the assigned HTTPS `*.onrender.com` URL, check all navigation and Kannada.
- Complete an activity, export CSV, reset, test settings and local-storage opt-in.
- Load once, wait for service-worker activation, reopen, disconnect and reload to verify offline use on the actual device. No offline guarantee before first complete cache.
- Inspect Educators → model example and Our district → map/GeoJSON.
- Close all tabs and reopen following a deployment to allow waiting service workers to activate.
- Confirm school content review and permission before involving learners.

## Rollback / maintenance
Use Git tags and Render deploy history. Revert the faulty commit, push, and let the site rebuild; the content-derived cache key changes. Close old tabs to activate the new version. Browser progress is not a server backup and can be lost on clearing storage, changing origin or cache policies.

## Continuous integration
`npm ci`, `npm test`, `npm run build`; optional browser automation requires `npx playwright install --with-deps chromium` and a running local server. The supplied GitHub Actions workflow handles this. Remote GitHub/Render execution is not claimed until you connect your account.

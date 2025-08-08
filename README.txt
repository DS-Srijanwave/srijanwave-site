
# SRIJANWAVE - Customizable (JSON + Admin) Static Site

## What's included
- `index.html` — Dynamic one-page site that reads `config.json`.
- `config.json` — All editable content (text, images, links, colors).
- `admin.html` — Password-protected admin UI. Edit content, download updated `config.json`.
- `index.js` — Helper for previewing admin changes in a new tab.
- `images/` — Placeholder images.

## How admin works (important)
- Admin uses a SHA-256 hashed password. The password you provided was used to generate the hash embedded in `admin.html`.
- Admin edits content in browser and **downloads** the updated `config.json`.
- To make edits live on GitHub Pages, upload the new `config.json` to the repository root (replace the existing file).

## Publishing on GitHub Pages (quick steps)
1. Create a new GitHub repo (e.g. `srijanwave-site`).
2. Upload all files and folders from this package to the repo root.
3. Commit and push.
4. In GitHub, go to **Settings > Pages** and set the branch to `main` (or `master`) and root `/`.
5. Save — your site will be live at `https://<username>.github.io/<repo>` within a minute.

## Notes on security & workflow
- This is a static-only solution (no server). The admin does not directly change files in your GitHub repo.
- For automatic updates via admin, you'd need to add a server or use GitHub API with a token (I can help set that up later if you want).
- The admin password is securely verified via SHA-256; the plain password is not stored in the files.

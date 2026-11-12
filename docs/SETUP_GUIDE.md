# Cheetah Cyber Cafe — Setup Guide (Stage 1)

## 1. What is included
- A new public-facing `index.html` using the forest-green, ivory and antique-gold brand palette.
- No dummy vacancy cards. The public site starts with an empty state until real records are connected.
- Search and filters for Bihar, Government Jobs, Admissions, Scholarships and Government Schemes.
- Same-site opportunity detail view, with official notification and WhatsApp assistance links.
- Initial source registry for the five websites.
- Apps Script health-check starter.

The original single HTML file remains in the repository unchanged as a backup/reference.

## 2. Preview locally
1. Open the GitHub repository and switch to branch `stage-1-foundation`.
2. Download the repository ZIP from GitHub, or use GitHub's web editor.
3. Open the extracted folder in VS Code.
4. Run Live Server on `index.html`, or run `python -m http.server 8000`.
5. Open `http://localhost:8000`.

The site reads `data/opportunities.json`. It intentionally contains zero opportunities at this stage.

## 3. Vercel deployment
1. Open the existing Vercel project connected to `manishvarma6/cheetah-cyber`.
2. Keep the production branch set to `main`.
3. For a preview, select branch `stage-1-foundation` and deploy it as a Preview Deployment, if your Vercel project permits branch previews.
4. No build command is needed for this static HTML foundation. Set the output directory to the repository root (or leave the framework preset as Other with root output).
5. Check the preview URL on desktop and mobile before merging anything into `main`.

Do not change the production domain or production branch as part of this stage.

## 4. Configure Google Apps Script (health check only)
1. Create a new Google Sheet named `Cheetah Cyber Cafe — Opportunities Database`.
2. Open Extensions → Apps Script.
3. Copy the contents of `backend/Code.gs` into the Apps Script editor and save.
4. In Project Settings → Script Properties, add `CHEETAH_SPREADSHEET_ID` with the ID from the Google Sheet URL. Alternatively, run `saveSpreadsheetId("YOUR_SHEET_ID")` once from the editor, then remove the test call.
5. Deploy → New deployment → Web app.
6. Execute as: Me. Access: Anyone only for the public read-only health endpoint, if you choose to test it. Do not add write/admin actions to a public deployment.
7. Test the deployment URL with `?action=health`. Expected result: JSON with `ok: true` and `stage: 1`.

The Stage 1 script does not yet read the sheet or publish opportunities. Stage 2 will create the sheet tabs and read-only API.

## 5. Initial source registry
The five candidate sources are listed in `config/sources.json`. RSS URLs are candidates, not a guarantee of complete coverage. During the monitoring stage, test each feed and relevant category page, record source post URLs, identify the official department link, and respect the site's terms, robots.txt and rate limits.

## 6. Automatic publishing safeguards
The selected mode is automatic, but publication must be conditional. A record should not appear publicly unless:
- it belongs to one of the four configured categories and is relevant to Bihar;
- the source post and official department/notification source are retained;
- title, organization and qualification/eligibility summary are present;
- deadline is valid, or the official notice clearly states that the scheme is ongoing / has no fixed deadline;
- official notification URL is valid;
- application URL is present when the opportunity accepts online applications;
- duplicate checks pass.

If required information is missing or conflicting, set `publication_status = "needs_review"` rather than publishing it. The official notification remains authoritative. Never infer age limits, fees, vacancy counts or dates.

## 7. Security
- Never commit passwords, OTPs, API keys, OAuth tokens, private keys or service-account JSON.
- Do not expose the full Google Sheet or write-capable Apps Script endpoints to the public.
- Keep admin write operations behind owner authentication.
- Do not collect unnecessary Aadhaar or bank details in the opportunity database.
- Customers should enter their own OTPs and passwords.

## 8. What comes next
Stage 2: create the Google Sheets tabs, headers, IDs, duplicate rules, validation status fields and a read-only published-opportunities API. Stage 3: implement the source monitors and scheduled triggers.

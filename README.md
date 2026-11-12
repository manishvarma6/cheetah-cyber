# Cheetah Cyber Cafe — Bihar Opportunities

Public website foundation for Cheetah Cyber Cafe, Nutan Nagar, Gaya, Bihar.

## Current project settings
- Region: Bihar
- Categories: Government Jobs, Admissions, Scholarships, Government Schemes
- Publishing policy: automatic only after required-field and source validation
- Public frontend: static HTML on Vercel
- Data source: JSON now; Apps Script / Google Sheets API to be connected in Stage 2
- WhatsApp: +91 72941 13555

## Repository layout
- `index.html` — public opportunities website
- `data/opportunities.json` — local data contract / empty starter list
- `config/sources.json` — source registry for the five initial notification sites
- `backend/Code.gs` — Google Apps Script health endpoint and safe API foundation
- `docs/SETUP_GUIDE.md` — setup instructions
- `Cheetah Cyber Cafe · Latest Forms & Opportunities.html` — original uploaded design, preserved unchanged

## Run locally
Use VS Code Live Server, or run:
```bash
python -m http.server 8000
```
Then open http://localhost:8000.

## Deploy
Vercel can deploy this static site directly from the repository. The root directory is the repository root; no build command is required for this stage.

## Important
This is the project foundation, not a live scraping or notification system yet. No demo opportunities are included. Do not publish guessed dates, fees, eligibility, vacancy counts, or application links. Connect the private Google Sheets database and validated feed in Stage 2/3 before expecting live records.

Never put Google credentials, service-account keys, private sheet data, or admin secrets in frontend files.
# Stage 2 — Database setup

The prepared database workbook and Apps Script starter are delivered as separate files in the project handoff.

## Included capabilities in the starter
- Initializes the required Google Sheets tabs.
- Seeds the five configured notification sources.
- Reads RSS/Atom feeds where feed URLs are configured.
- Deduplicates detected feed entries into `Raw_Posts`.
- Writes monitoring status and run logs.
- Exposes a read-only JSON endpoint for verified, published opportunities.

## Important
RSS discovery is only a first ingestion layer. HTML-only source parsing, PDF extraction/OCR, official notice validation, field extraction, eligibility validation and automatic publication still require implementation and testing. Do not publish unverified notices.

See `Cheetah_Cyber_Setup_Guide.md` delivered with the database workbook for setup steps.
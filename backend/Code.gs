/**
 * Cheetah Cyber Cafe — Apps Script foundation
 * Stage 1: health endpoint only. Stage 2 will add the private Sheets database.
 * Do not store credentials or secrets in frontend code.
 */
const APP_CONFIG = Object.freeze({
  REGION: "Bihar",
  CATEGORIES: ["Government Jobs", "Admissions", "Scholarships", "Government Schemes"],
  SPREADSHEET_ID_PROPERTY: "CHEETAH_SPREADSHEET_ID",
  PUBLICATION_STATUS: "published"
});

function doGet(e) {
  const action = e && e.parameter && e.parameter.action ? e.parameter.action : "health";
  if (action === "health") {
    return jsonOutput({
      ok: true,
      service: "Cheetah Cyber Cafe API",
      stage: 1,
      region: APP_CONFIG.REGION,
      message: "Foundation is deployed. Opportunities API will be enabled after database setup."
    });
  }
  return jsonOutput({ ok: false, error: "Endpoint not available in Stage 1." });
}

function jsonOutput(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run once in the Apps Script editor after creating the Google Sheet.
 * The spreadsheet ID is kept in Script Properties, never in public HTML.
 */
function saveSpreadsheetId(spreadsheetId) {
  if (!spreadsheetId || typeof spreadsheetId !== "string") {
    throw new Error("A valid Google Spreadsheet ID is required.");
  }
  PropertiesService.getScriptProperties()
    .setProperty(APP_CONFIG.SPREADSHEET_ID_PROPERTY, spreadsheetId.trim());
}

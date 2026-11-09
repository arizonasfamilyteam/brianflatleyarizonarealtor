/**
 * Brian Flatley website lead capture.
 * Deploy as a Web App: Execute as Me; access: Anyone.
 * The script creates/uses a sheet named "Website Leads".
 */
const SHEET_NAME = 'Website Leads';
const HEADERS = [
  'Submitted At','Lead Type','Name','Email','Phone','Property Address',
  'Property Type','Bedrooms','Bathrooms','Square Feet','Condition',
  'Timeline','Notes','Calculator Details','Page URL'
];

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1,1,1,HEADERS.length).setFontWeight('bold');
    }
    const row = [
      p.submittedAt || new Date().toISOString(),
      p.leadType || '',
      p.name || '',
      p.email || '',
      p.phone || '',
      p.propertyAddress || '',
      p.propertyType || '',
      p.bedrooms || '',
      p.bathrooms || '',
      p.squareFeet || '',
      p.condition || '',
      p.timeline || '',
      p.notes || '',
      p.calculatorDetails || '',
      p.pageUrl || ''
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({success:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Brian Flatley website lead endpoint is running.');
}

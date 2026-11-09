BRIAN FLATLEY WEBSITE PACKAGE

FILES
- index.html: complete responsive website with interactive mortgage calculator, home valuation form, mortgage inquiry modal, FAQ accordion, and mobile navigation.
- Code.gs: Google Apps Script endpoint that stores leads in a Google Sheet tab called "Website Leads".
- assets/hero-image.jpg: place a wide landscape Arizona property photo here for the MAIN HERO BANNER.
- assets/brian-flatley.jpg: place Brian's professional headshot here for the separate About/valuation portrait section.

SETUP: GOOGLE SHEETS + APPS SCRIPT
1. Create a Google Spreadsheet for website leads.
2. Open Extensions > Apps Script.
3. Replace the editor contents with Code.gs and save.
4. In Apps Script, choose Deploy > New deployment > Web app.
5. Set "Execute as" to your account and access to "Anyone". Deploy and authorize.
6. Copy the Web app URL ending in /exec.
7. Open index.html and replace:
   PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with the deployed /exec URL.
8. Save index.html and upload the complete folder to your website host.
9. Upload a wide Arizona home/property photo to assets/hero-image.jpg (ideally 16:9 and 1600px wide or larger). This changes the large top hero banner shown in your screenshot. Keep Brian's portrait separately at assets/brian-flatley.jpg. If using WEBP, update the corresponding CSS paths in index.html.

IMPORTANT
- The mortgage calculator is an estimate only, not a loan quote or commitment to lend.
- The home valuation form is a request for a personalized review, not an automated appraisal.
- The form submits through a hidden iframe to Apps Script. This avoids browser CORS response-reading issues; the page displays a submission confirmation after sending, but it cannot independently verify that the Sheet append succeeded. Test with a sample lead and confirm it appears in the spreadsheet.
- Before publishing, verify the correct brokerage disclosures, contact details, privacy notice, licensing details, and any required fair housing / advertising language with Brian and his broker.
- The hero uses a remote Unsplash background image. Replace it with licensed brokerage photography if preferred.

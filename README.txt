ARIVE HOMES WEEKLY OWNER REPORT - GITHUB FILES

Upload these files/folders to the ROOT of a GitHub repository:

index.html
styles.css
app.js
data.js
assets/
  arive-logo.png

Then in GitHub:
1. Open the repository.
2. Settings -> Pages.
3. Under Build and deployment, choose "Deploy from a branch".
4. Branch: main, folder: /(root).
5. Save.

The dashboard data is currently stored in data.js.
The actual Arive logo is stored in assets/arive-logo.png.

Important source rules reflected in the dashboard:
- Construction Forecast and Dig Forecast are informational/read-only sources.
- Construction Forecast columns F, K-O, and T-V are excluded.
- AF one-off townhome projects are excluded from multifamily build-time averages.

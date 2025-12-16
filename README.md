# Youtube Playback Adjuster

A browser extension that overlays YouTube's video timer with adjusted time based on playback speed.
> **Note:** Occasionally, the extension may not display correctly because YouTube prevents overlays on the timer. If this happens, simply reload the extension and refresh the page - this usually resolves the issue.

## Build Instructions

1. Install dependencies:
```bash
npm install
```

2. Build the extension:
```bash
npm run build
```

3. Load in Firefox:
   - Open Firefox and navigate to `about:debugging`
   - Click "This Firefox"
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file from the project directory

4. Load in Microsoft Edge:
   - Open Edge and navigate to `edge://extensions/`
   - Enable "Developer mode" (toggle in the left sidebar)
   - Click "Load unpacked"
   - Select the project directory

## Usage

Once installed, visit any YouTube video and change the playback speed. The timer will automatically update to show the adjusted duration based on your playback speed.

## LICENSE 

This project is licensed under GNU General Public License v3.0

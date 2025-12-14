# YouTube Playback Timer Adjuster

A Firefox extension that overlays YouTube's video timer with adjusted time based on playback speed.

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

## Usage

Once installed, visit any YouTube video and change the playback speed. The timer will automatically update to show the adjusted duration based on your playback speed.

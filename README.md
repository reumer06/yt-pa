# Youtube Playback Adjuster

A browser extension that overlays YouTube’s video timer with time adjusted according to the current playback speed.

> **Note:** YouTube sometimes blocks timer overlays. If the adjusted timer does not appear, reload the extension and refresh the page. This is a YouTube limitation, not a bug.

---

## Build Instructions

### 1. Install dependencies
```bash
npm install
````

### 2. Build the extension

```bash
npm run build
```

---

## Installation

### Firefox
- Available on **[Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/yt-playback-adjuster/)**

**Manual loading (temporary):**

1. Open `about:debugging`
2. Click **This Firefox**
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file from the project directory

---

### Microsoft Edge

- Available on **[Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/yt-playback-adjuster/geimlclipbdbamkcoemaokmmkmobohoo)**

**Manual loading:**

1. Open `edge://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the project directory

---

## Usage

Install the extension and open any YouTube video.
Change the playback speed — the timer updates automatically to reflect the adjusted watch time.

---

## License

Licensed under the **GNU General Public License v3.0**

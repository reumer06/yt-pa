let video: HTMLVideoElement | null = null;
let rate: number = 1;
let isRemaining: boolean = false;

const pad = (n: number) => (n < 10 ? '0' + n : n.toString());

function formatTime(s: number): string {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
}

function update(): void {
  const curr = document.querySelector('.ytp-time-current');
  const dur = document.querySelector('.ytp-time-duration');
  if (!video || !curr || !dur) return;
  
  const c = video.currentTime / rate;
  const d = video.duration / rate;
  
  if (isNaN(c) || isNaN(d)) return;
  
  const newCurr = isRemaining ? '-' + formatTime(d - c) : formatTime(c);
  const newDur = formatTime(d);
  
  if (curr.textContent !== newCurr) curr.textContent = newCurr;
  if (dur.textContent !== newDur) dur.textContent = newDur;
}

function init(): void {
  const check = setInterval(() => {
    video = document.querySelector('video.html5-main-video');
    const display = document.querySelector('.ytp-time-display');
    const curr = document.querySelector('.ytp-time-current');
    const dur = document.querySelector('.ytp-time-duration');
    
    if (video && display && curr && dur) {
      clearInterval(check);
      
      video.addEventListener('ratechange', () => { rate = video!.playbackRate; update(); });
      
      display.addEventListener('click', () => {
        isRemaining = !isRemaining;
        setTimeout(update, 0);
      });
      
      const obs = new MutationObserver(update);
      obs.observe(curr, { childList: true, characterData: true, subtree: true });
      obs.observe(dur, { childList: true, characterData: true, subtree: true });
      
      rate = video.playbackRate;
      update();
    }
  }, 500);
}

init();


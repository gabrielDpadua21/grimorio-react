let ctx = null

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

// call from inside a real click handler — browsers only allow audio to start
// once a user gesture has created/resumed the AudioContext at least once
export function unlockAudio() {
  getCtx()
}

function tone(c, freq, start, duration, { type = 'sine', gain = 0.15 } = {}) {
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = type
  osc.frequency.value = freq
  g.gain.setValueAtTime(0, start)
  g.gain.linearRampToValueAtTime(gain, start + 0.02)
  g.gain.exponentialRampToValueAtTime(0.0001, start + duration)
  osc.connect(g)
  g.connect(c.destination)
  osc.start(start)
  osc.stop(start + duration + 0.05)
}

export function playSealChime() {
  const c = getCtx()
  const t = c.currentTime
  tone(c, 523.25, t, 0.35)
  tone(c, 659.25, t + 0.09, 0.35)
  tone(c, 783.99, t + 0.18, 0.5)
}

export function playCompleteChime() {
  const c = getCtx()
  const t = c.currentTime
  ;[523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => tone(c, freq, t + i * 0.11, 0.6, { gain: 0.12 }))
}

export function playRevealChime() {
  const c = getCtx()
  const t = c.currentTime
  tone(c, 880, t, 0.8, { gain: 0.1 })
  tone(c, 1108.73, t + 0.05, 0.9, { gain: 0.08 })
  tone(c, 1318.51, t + 0.12, 1.0, { gain: 0.07 })
}

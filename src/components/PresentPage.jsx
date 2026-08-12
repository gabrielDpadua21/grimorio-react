import { useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import Shell from './Shell.jsx'
import BackButton from './BackButton.jsx'
import photoSrc from '../assets/foto-web.jpg'
import { PRIZE } from '../data.js'
import { playRevealChime } from '../sound.js'

const HEART_PATH = 'M0.5,0.95 C0.5,0.95 0.05,0.6 0.05,0.35 C0.05,0.15 0.2,0.02 0.4,0.02 '
  + 'C0.47,0.02 0.5,0.08 0.5,0.15 C0.5,0.08 0.53,0.02 0.6,0.02 C0.8,0.02 0.95,0.15 0.95,0.35 '
  + 'C0.95,0.6 0.5,0.95 0.5,0.95 Z'

export default function PresentPage({ game }) {
  const played = useRef(false)
  const completed = !!game.state.completedAt

  useEffect(() => {
    if (!completed || played.current) return undefined
    played.current = true
    const t = setTimeout(() => playRevealChime(), 500)
    return () => clearTimeout(t)
  }, [completed])

  if (!completed) return <Navigate to="/" replace />

  return (
    <Shell eyebrow={PRIZE.eyebrow} footer={<BackButton label="Voltar à ficha" />}>
      <h1>{PRIZE.title}</h1>
      <div className="divider" />
      <div className="sketch-frame">
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
              <path d={HEART_PATH} />
            </clipPath>
          </defs>
        </svg>
        <div className="sketch-photo">
          <img src={photoSrc} alt="" className="sketch-base" />
          <img src={photoSrc} alt="" className="sketch-overlay" />
          <div className="sketch-sweep" aria-hidden="true" />
        </div>
        <svg className="sketch-heart-outline" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
          <path d={HEART_PATH} pathLength="1" />
        </svg>
      </div>
      <p className="present-caption">{PRIZE.caption}</p>
    </Shell>
  )
}

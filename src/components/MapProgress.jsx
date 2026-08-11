import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CHEST_ORDER } from '../data.js'

const POINTS = [
  { x: 60, y: 26 },
  { x: 200, y: 70 },
  { x: 60, y: 114 },
  { x: 200, y: 158 },
  { x: 60, y: 202 },
  { x: 200, y: 246 },
  { x: 60, y: 290 },
  { x: 200, y: 334 }
]

function segmentPath(a, b) {
  const midY = (a.y + b.y) / 2
  return `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`
}

// one path per gap between consecutive nodes, so each stretch of trail can light up independently
const SEGMENTS = POINTS.slice(1).map((b, i) => ({ d: segmentPath(POINTS[i], b), from: i, to: i + 1 }))

export default function MapProgress({ isUnlocked, justUnlockedIds = [], onSeen }) {
  useEffect(() => {
    if (justUnlockedIds.length === 0 || !onSeen) return undefined
    const t = setTimeout(() => {
      justUnlockedIds.forEach((id) => onSeen(id))
    }, 700)
    return () => clearTimeout(t)
  }, [justUnlockedIds, onSeen])

  return (
    <div className="map-progress">
      <svg viewBox="0 0 260 360" className="map-svg" role="img" aria-label="Mapa de progresso da crônica">
        {SEGMENTS.map((seg, i) => {
          const segUnlocked = isUnlocked(CHEST_ORDER[seg.from].id) && isUnlocked(CHEST_ORDER[seg.to].id)
          return (
            <g key={i}>
              <path d={seg.d} className="map-segment-bg" />
              <path d={seg.d} pathLength="1" className={`map-segment-fill ${segUnlocked ? 'revealed' : ''}`} />
            </g>
          )
        })}
        {CHEST_ORDER.map((entry, i) => {
          const pos = POINTS[i]
          const unlocked = isUnlocked(entry.id)
          const isFresh = justUnlockedIds.includes(entry.id)
          const node = (
            <g className={`map-node ${unlocked ? 'unlocked' : 'locked'} ${isFresh ? 'pop' : ''}`}>
              <circle cx={pos.x} cy={pos.y} r="13" className="map-node-glow" />
              <circle cx={pos.x} cy={pos.y} r="7" className="map-node-dot" />
              <text x={pos.x} y={pos.y - 15} textAnchor="middle" className="map-node-num">{i + 1}</text>
            </g>
          )
          return unlocked ? (
            <Link key={entry.id} to={`/${entry.id}`} className="map-node-link" aria-label={entry.label}>
              {node}
            </Link>
          ) : (
            <g key={entry.id}>{node}</g>
          )
        })}
      </svg>
    </div>
  )
}

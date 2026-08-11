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

function buildTrail(points) {
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1]
    const b = points[i]
    const midY = (a.y + b.y) / 2
    d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`
  }
  return d
}

const TRAIL_D = buildTrail(POINTS)

export default function MapProgress({ isUnlocked }) {
  return (
    <div className="map-progress">
      <svg viewBox="0 0 260 360" className="map-svg" role="img" aria-label="Mapa de progresso da crônica">
        <path d={TRAIL_D} className="map-trail" />
        {CHEST_ORDER.map((entry, i) => {
          const pos = POINTS[i]
          const unlocked = isUnlocked(entry.id)
          const node = (
            <g className={`map-node ${unlocked ? 'unlocked' : 'locked'}`}>
              {unlocked && <circle cx={pos.x} cy={pos.y} r="13" className="map-node-glow" />}
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

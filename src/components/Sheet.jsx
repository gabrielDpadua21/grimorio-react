import { Link } from 'react-router-dom'
import Shell from './Shell.jsx'
import MapProgress from './MapProgress.jsx'
import { ATTR_LABELS, ATTR_MAX, CHEST_ORDER, rankTitle } from '../data.js'

export default function Sheet({ game }) {
  const { state, isUnlocked } = game
  const complete = !!state.completedAt
  const total = Object.values(state.attrs).reduce((a, b) => a + b, 0)

  return (
    <Shell
      eyebrow="Ficha da Cronista"
      footer={<p className="sheet-footer">O grimório se abre sozinho a cada fragmento encontrado</p>}
    >
      <div className="sheet-name">{state.name}</div>
      <div className="rank">{complete ? <b>{rankTitle(state.attrs)}</b> : rankTitle(state.attrs)}</div>

      <div className="attrs">
        {Object.keys(ATTR_LABELS).map((k) => (
          <div className="attr-row" key={k}>
            <div className="attr-label">{ATTR_LABELS[k]}</div>
            <div className="attr-bar">
              <div className="attr-fill" style={{ width: `${Math.min(100, ((state.attrs[k] || 0) / ATTR_MAX) * 100)}%` }} />
            </div>
            <div className="attr-val">{state.attrs[k] || 0}/{ATTR_MAX}</div>
          </div>
        ))}
      </div>

      <div className="chest">
        <div className="chest-title">
          Baú de Histórias · {total > 0 ? CHEST_ORDER.filter((e) => isUnlocked(e.id)).length : 0}/{CHEST_ORDER.length}
        </div>
        <MapProgress isUnlocked={isUnlocked} />
        {CHEST_ORDER.map((e) => {
          const unlocked = isUnlocked(e.id)
          return unlocked ? (
            <Link className="chest-item" to={`/${e.id}`} key={e.id}>
              <span>{e.label}</span>
              <span className="arrow">→</span>
            </Link>
          ) : (
            <div className="chest-item locked" key={e.id}>
              <span>· · · · · · · ·</span>
            </div>
          )
        })}
      </div>
    </Shell>
  )
}

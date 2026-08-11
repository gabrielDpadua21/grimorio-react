import { useEffect, useRef } from 'react'
import Shell from './Shell.jsx'
import BackButton from './BackButton.jsx'
import { ATTR_LABELS } from '../data.js'

export default function StagePage({ id, data, game }) {
  const alreadyRef = useRef(game.isUnlocked(id))
  const justUnlocked = useRef(false)

  useEffect(() => {
    if (!alreadyRef.current) {
      justUnlocked.current = game.unlockAndGrant(id, data.attr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Shell eyebrow={data.sub} footer={<BackButton label="Voltar à ficha" />}>
      <h1>{data.title}</h1>
      <div className="divider" />
      <div className="story">
        {data.story.map((p, i) => <p key={i}>{p}</p>)}
        <p className="sig">{data.sig}</p>
      </div>
      {justUnlocked.current && (
        <div className="gain"><span className="dot" /> +1 {ATTR_LABELS[data.attr]}</div>
      )}
    </Shell>
  )
}

import { useEffect, useRef, useState } from 'react'
import Shell from './Shell.jsx'
import BackButton from './BackButton.jsx'
import { ATTR_LABELS, normalize } from '../data.js'

export default function QuestPage({ id, data, game }) {
  const alreadyRef = useRef(game.isUnlocked(id))
  const justUnlocked = useRef(false)
  const [answer, setAnswer] = useState('')
  const [tries, setTries] = useState(0)
  const [msg, setMsg] = useState(null) // { type: 'ok'|'err', text }
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    if (!alreadyRef.current) {
      justUnlocked.current = game.unlockAndGrant(id, data.attr)
    }
    if (data.final && !game.state.completedAt) {
      game.markCompleted()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const submit = () => {
    const val = normalize(answer)
    if (data.accept.some((a) => normalize(a) === val)) {
      setSolved(true)
      setMsg({ type: 'ok', text: `Certo. O próximo pedaço da crônica te espera em: ${data.nextLabel}.` })
    } else {
      const next = tries + 1
      setTries(next)
      setMsg({
        type: 'err',
        text: next >= 2 ? `Dica: ${data.hint}` : 'Não é esse o nome que a crônica reconhece. Tente de novo.'
      })
    }
  }

  if (data.final) {
    return (
      <Shell eyebrow={data.sub} footer={<BackButton label="Ver ficha completa" />}>
        <h1>{data.title}</h1>
        <div className="divider" />
        <div className="story">
          {data.story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {data.sacredLine && (
          <p className="sacred-line">
            <span className="sacred-sigil" aria-hidden="true">⟡</span>
            {data.sacredLine}
            <span className="sacred-sigil" aria-hidden="true">⟡</span>
          </p>
        )}
        {justUnlocked.current && (
          <div className="gain"><span className="dot" /> +1 {ATTR_LABELS[data.attr]}</div>
        )}
        <div className="divider" />
        <div className="story">
          {data.closing.map((p, i) => <p key={i}><em>{p}</em></p>)}
        </div>
      </Shell>
    )
  }

  return (
    <Shell
      eyebrow={data.sub}
      footer={(
        <>
          <div className="footer-hint">responda com o nome do lugar</div>
          <BackButton />
        </>
      )}
    >
      <h1>{data.title}</h1>
      <div className="divider" />
      <div className="story">
        {data.story.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {justUnlocked.current && (
        <div className="gain"><span className="dot" /> +1 {ATTR_LABELS[data.attr]}</div>
      )}
      <input
        type="text"
        placeholder="Para onde a crônica te leva?"
        autoComplete="off"
        autoCapitalize="off"
        value={answer}
        disabled={solved}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !solved && submit()}
      />
      <button onClick={submit} disabled={solved}>Seguir o caminho</button>
      {msg && <div className={`msg ${msg.type === 'ok' ? 'ok' : 'err'}`}>{msg.text}</div>}
    </Shell>
  )
}

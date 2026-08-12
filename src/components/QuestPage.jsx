import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Shell from './Shell.jsx'
import BackButton from './BackButton.jsx'
import { ATTR_LABELS, normalize } from '../data.js'
import { unlockAudio, playSealChime } from '../sound.js'

export default function QuestPage({ id, data, game }) {
  const navigate = useNavigate()
  const alreadyRef = useRef(game.isUnlocked(id))
  const justUnlocked = useRef(false)
  const [answer, setAnswer] = useState(() => (game.isSolved(id) ? data.nextLabel : ''))
  const [tries, setTries] = useState(0)
  const [msg, setMsg] = useState(null) // { type: 'ok'|'err', text }
  const [solved, setSolved] = useState(() => game.isSolved(id))
  const [shake, setShake] = useState(false)
  // true only for the submit that just solved it in this visit — separates the one-time
  // celebration from the plain "already solved" state you see when revisiting later
  const [justSolved, setJustSolved] = useState(false)

  useEffect(() => {
    if (!alreadyRef.current) {
      justUnlocked.current = game.unlockAndGrant(id, data.attr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const seal = () => {
    if (solved) return
    unlockAudio()
    playSealChime()
    setSolved(true)
    setJustSolved(true)
    game.markSolved(id)
    game.markCompleted()
    setTimeout(() => {
      navigate('/', { state: { justCompleted: true }, replace: true })
    }, 1800)
  }

  const submit = () => {
    const val = normalize(answer)
    if (data.accept.some((a) => normalize(a) === val)) {
      setSolved(true)
      setJustSolved(true)
      game.markSolved(id)
      setMsg({ type: 'ok', text: `Certo. O próximo pedaço da crônica te espera em: ${data.nextLabel}.` })
    } else {
      const next = tries + 1
      setTries(next)
      setMsg({
        type: 'err',
        text: next >= 2 ? `Dica: ${data.hint}` : 'Não é esse o nome que a crônica reconhece. Tente de novo.'
      })
      setShake(false)
      requestAnimationFrame(() => setShake(true))
      setTimeout(() => setShake(false), 450)
    }
  }

  if (data.final) {
    return (
      <Shell
        eyebrow={data.sub}
        cardClassName={justSolved ? 'card-success' : ''}
        footer={
          solved ? (
            <BackButton label="Ver ficha completa" />
          ) : (
            <div className="back-locked">
              <span aria-hidden="true">🔒</span> Sele a crônica pra voltar ao grimório
            </div>
          )
        }
      >
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
        <div className="button-wrap">
          <button onClick={seal} disabled={solved} className={`${solved ? 'solved' : ''} ${justSolved ? 'solved-pop' : ''}`}>
            {solved ? '✓ Crônica selada' : 'Selar a crônica'}
          </button>
          {justSolved && (
            <span className="spark-burst" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="spark" style={{ '--i': i }} />
              ))}
            </span>
          )}
        </div>
        {justSolved && (
          <div className="solved-stamp" aria-hidden="true">
            <span className="solved-stamp-check">✓</span>
          </div>
        )}
      </Shell>
    )
  }

  return (
    <Shell
      eyebrow={data.sub}
      cardClassName={justSolved ? 'card-success' : ''}
      footer={
        solved ? (
          <BackButton />
        ) : (
          <div className="back-locked">
            <span aria-hidden="true">🔒</span> Decifre a pista para voltar ao grimório
          </div>
        )
      }
    >
      <h1>{data.title}</h1>
      <div className="divider" />
      <div className="story">
        {data.story.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {justUnlocked.current && (
        <div className="gain"><span className="dot" /> +1 {ATTR_LABELS[data.attr]}</div>
      )}
      <div className="answer-label">{solved ? 'Resposta confirmada' : 'Responda com o nome do lugar'}</div>
      <input
        type="text"
        placeholder="Para onde a crônica te leva?"
        autoComplete="off"
        autoCapitalize="off"
        value={answer}
        disabled={solved}
        className={shake ? 'shake' : ''}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !solved && submit()}
      />
      <div className="button-wrap">
        <button onClick={submit} disabled={solved} className={`${solved ? 'solved' : ''} ${justSolved ? 'solved-pop' : ''}`}>
          {solved ? '✓ Caminho encontrado' : 'Seguir o caminho'}
        </button>
        {justSolved && (
          <span className="spark-burst" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="spark" style={{ '--i': i }} />
            ))}
          </span>
        )}
      </div>
      {msg && (
        <div key={`${msg.type}-${tries}`} className={`msg ${msg.type === 'ok' ? 'ok' : 'err'}`}>
          {msg.text}
        </div>
      )}
      {justSolved && (
        <div className="solved-stamp" aria-hidden="true">
          <span className="solved-stamp-check">✓</span>
        </div>
      )}
    </Shell>
  )
}

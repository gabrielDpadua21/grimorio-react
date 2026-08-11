import { useState } from 'react'
import Shell from './Shell.jsx'

export default function NameGate({ onSubmit }) {
  const [value, setValue] = useState('')

  const go = () => {
    const v = value.trim()
    if (!v) return
    onSubmit(v)
  }

  return (
    <Shell eyebrow="Antes de começar">
      <h1>Como a crônica deve te chamar?</h1>
      <div className="divider" />
      <div className="name-setup">
        <input
          type="text"
          placeholder="Seu nome"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && go()}
        />
        <button onClick={go}>Abrir a crônica</button>
      </div>
    </Shell>
  )
}

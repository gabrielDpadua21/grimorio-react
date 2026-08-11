import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const ROUTES = [
  ['segunda', 'Segunda · caneca'],
  ['terca', 'Terça · livro'],
  ['quarta', 'Quarta · presente'],
  ['sexta', 'Sexta · abertura (deixar junto do baú)'],
  ['area-servico', 'Área de serviço'],
  ['arranhador', 'Arranhador dos gatos'],
  ['escritorio', 'Escritório'],
  ['churrasqueira', 'Churrasqueira']
]

export default function Admin() {
  const [baseUrl, setBaseUrl] = useState(window.location.origin + window.location.pathname)

  return (
    <div className="admin-wrap">
      <h1>/admin — gerar QR codes (só pra você)</h1>
      <label>URL base onde este app está publicado</label>
      <input
        type="text"
        value={baseUrl}
        onChange={(e) => setBaseUrl(e.target.value)}
      />
      <div className="qr-grid">
        {ROUTES.map(([id, label]) => {
          const url = baseUrl.replace(/#.*$/, '') + '#/' + id
          return (
            <div className="qr-card" key={id}>
              <QRCodeCanvas value={url} size={220} level="M" includeMargin />
              <div className="lbl">{label}</div>
              <div className="url">{url}</div>
            </div>
          )
        })}
      </div>
      <button className="no-print" onClick={() => window.print()}>Imprimir</button>
    </div>
  )
}

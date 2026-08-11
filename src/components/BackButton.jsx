import { Link } from 'react-router-dom'

export default function BackButton({ label = 'Voltar ao grimório', to = '/' }) {
  return (
    <Link to={to} className="back-button">
      <span className="back-button-arrow" aria-hidden="true">◂</span>
      {label}
    </Link>
  )
}

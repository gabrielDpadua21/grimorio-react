export default function Shell({ eyebrow, children, footer, cardClassName }) {
  return (
    <div className="stage">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <div className={`card${cardClassName ? ` ${cardClassName}` : ''}`}>
        <div className="flicker" />
        {children}
      </div>
      {footer && (
        typeof footer === 'string'
          ? <div className="footer-note">{footer}</div>
          : <div className="footer-area">{footer}</div>
      )}
    </div>
  )
}

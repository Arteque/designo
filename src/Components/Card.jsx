const Card = ({className, headerChilds, bodyChilds, footerChilds}) => {
  return (
    <div className={`card ${className}`}>
        <div className="card__header">
            {headerChilds}
        </div>
        <div className="card__body">
            {bodyChilds}
        </div>
        <div className="card__footer">
            {footerChilds}
        </div>
    </div>
  )
}

export default Card
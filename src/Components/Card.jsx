const Card = ({headerChilds, bodyChilds, footerChilds}) => {
  return (
    <div className="card">
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
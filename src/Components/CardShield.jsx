import { Link } from "react-router-dom"

const ST = {
    textAlign:'center'
}

const CardShield = ({cardTitle, url, linkText, className,cardtitle}) => {
  return (
    <div className={`card-shield rounded ${className}`}
        style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',
    minHeight:'250px', backgroundColor:'#999',
    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
    marginBlock:'2em'
    }}
    datatitle={cardtitle}
    >
        <h2 className="text-light-100 uppercase">{cardTitle}</h2>
        <Link to={url}
        className="btn -inline" style={{textAlign: ST.textAlign}}
        >
            <span>{linkText}</span>
            <img src="./shared/desktop/icon-right-arrow.svg" alt="Arrow Right" />
        </Link>
    </div>
  )
}

export default CardShield
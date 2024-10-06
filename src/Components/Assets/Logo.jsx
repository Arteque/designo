import { Link } from "react-router-dom"
const Logo = ({header, className}) => {

    

      return (
        <div className={`logo ${className}`} style={{
            width:'60%',
            maxWidth:'202px',
            transform:'translateY(2px)'
        }}>
            
            <Link to="/" >
            {
                header ? (
                    <img className="logo__image--dark" src="./shared/desktop/logo-dark.png" alt="Design Logo" />
                ) : (
                    <img className="logo__image--light" src="./shared/desktop/logo-light.png" alt="Design Logo" />
                )
            }
            </Link>
            
        </div>
      ) 
}


export default Logo

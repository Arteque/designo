const Logo = ({header, className}) => {

    

      return (
        <div className={`${className}`} style={{
            width:'60%',
            maxWidth:'202px',
            transform:'translateY(2px)'
        }}>
            
            {
                header ? (
                    <img className="logo__image--dark" src="./shared/desktop/logo-dark.png" alt="Design Logo" />
                ) : (
                    <img className="logo__image--light" src="./shared/desktop/logo-light.png" alt="Design Logo" />
                )
            }
            
        </div>
      ) 
}


export default Logo

const Logo = ({header}) => {

    

      return (
        <div className="logo" style={{
            // maxWidth:'202px'
            maxWidth:'60%'
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

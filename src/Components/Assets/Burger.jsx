const Burger = ({open, btnState, className}) => {

    const buttonStyle =  {
        border:'none',
    }

  return (
    <button onClick={(e) => open(e)} style={buttonStyle} className={className}>
        {
            btnState?(
                <img src="./shared/mobile/icon-close.svg" alt="Hamburger" />
            ):(
                <img src="./shared/mobile/icon-hamburger.svg" alt="Hamburger" />
            )
        }    
    </button>
  )
}

export default Burger

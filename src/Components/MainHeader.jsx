import Burger from "./Assets/Burger"
import Logo from "./Assets/Logo"
import { useState } from "react"
import MainNav from "./MainNav"
const MainHeader = () => {

const [menuState, setMenuState] = useState(false)


const handleMenuState = (e) => {
    e.preventDefault()
    setMenuState(prev => !prev)
    
    document.body.dataset.menu = menuState ? '' : 'open'
}

  return (
    <header className="main-header container flex -between -items-center padding">
            <Logo header={true} className="main-header__logo"/>
            <Burger open={handleMenuState} btnState={menuState} className="main-header__burger"/>
            <MainNav />
    </header>
  )
}

export default MainHeader

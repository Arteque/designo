import Burger from "./Assets/Burger"
import Logo from "./Assets/Logo"
import { useEffect, useState } from "react"
import MainNav from "./MainNav"
import { useLocation } from "react-router-dom"
const MainHeader = () => {

const [menuState, setMenuState] = useState(false)

const location = useLocation()

const handleMenuState = (e) => {
    e.preventDefault()
    setMenuState(prev => !prev)
    document.body.dataset.menu = menuState ? '' : 'open'
}

//Close The Menu after changing the route
useEffect(() => {
    setMenuState(false)
    document.body.removeAttribute("data-menu")
},[location.pathname])

  return (
    <header className="main-header container flex -between -items-center padding">
            <Logo header={true} className="main-header__logo"/>
            <Burger open={handleMenuState} btnState={menuState} className="main-header__burger"/>
            <MainNav />
    </header>
  )
}

export default MainHeader

import { Link } from "react-router-dom"
const MainNav = () => {

    return (
    <nav className="main-header__nav">
        <ul>
            <li>
                <Link to="aboutus">Our Compagny</Link>
            </li>
            <li>
                <Link to="locations">Locations</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav

import { Link } from "react-router-dom"
const MainNav = () => {

    return (
    <nav className="main-header__nav">
        <ul>
            <li>
                <Link to="aboutus" className="btn">Our Compagny</Link>
            </li>
            <li>
                <Link to="locations" className="btn">Locations</Link>
            </li>
            <li>
                <Link to="contact" className="btn">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav

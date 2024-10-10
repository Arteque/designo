import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const MainNav = () => {

const location = useLocation()
const locationname = location.pathname.replace(/[/]/g,"")

    return (
    <nav className="main-header__nav">
        <ul>
            <li>
                <Link to="aboutus" className={`btn ${locationname == 'aboutus' ? 'current' : ''}`}>Our Compagny</Link>
            </li>
            <li>
                <Link to="locations" className={`btn ${locationname == 'locations' ? 'current' : ''}`}>Locations</Link>
            </li>
            <li>
                <Link to="contact" className={`btn ${locationname == 'contact' ? 'current' : ''}`}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav

import { useLocation } from "react-router-dom"
const HeroSection = ({className, id, children}) => {

    const location = useLocation()

  return (
    <section className={`hero ${className} ${location.pathname === '/' ? 'startpage' : 'subpage'}`} id={`${id}`}>
        {children}
    </section>
  )
}

export default HeroSection

import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import HeroSection from "../Components/HeroSection"

const AppDesign = () => {
    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <>
         <HeroSection className="page bg-call-100" id="webdesign">
            <Container>
                <div className="content">
                    <h2>App Design</h2>
                    <p>
                    We build websites that serve as powerful marketing tools and bring memorable brand experiences.
                    </p>
                </div>
            </Container>
        </HeroSection>
        <section className="projects" id="projects">
            <Container>
                
            </Container>
        </section>
        <section className="services" id="services">
            <Container>
                <DeisgnTypes />
            </Container>
        </section>
   </>
)
}

export default AppDesign

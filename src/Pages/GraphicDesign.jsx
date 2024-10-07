import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"

const GraphicDesign = () => {
    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <section className="services" id="services">
      <Container>
          <DeisgnTypes />
      </Container>
    </section>
    
)
}

export default GraphicDesign

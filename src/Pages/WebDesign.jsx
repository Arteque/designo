import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import Card from "../Components/Card"
import HeroSection from "../Components/HeroSection"
import CallCard from "../Components/CallCard"

const WebDesign = () => {

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <>
      <HeroSection className="bg-call-100" id="pagehero">
         <Container>
              <div className="content">
                  <h2 className="heading__md">Web Design</h2>
                  <p>
                    We build websites that serve as powerful marketing tools and bring memorable brand experiences.
                  </p>
              </div>
         </Container>
      </HeroSection>
      <section className="projects" id="projects">
        <Container>
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-express.jpg" alt="Express" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Express</h2>
              }
              footerChilds={
                <p>
                  A multi-carrier shipping website for ecommerce businesses
                </p>
              
              }
            />
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-transfer.jpg" alt="Transfer" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Transfer</h2>
              }
              footerChilds={
                <p>
                  Site for low-cost money transfers and sending money within seconds
                </p>
              
              }
            />
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-photon.jpg" alt="Photon" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Photon</h2>
              }
              footerChilds={
                <p>
                 A state-of-the-art music player with high-resolution audio and DSP effects
                </p>
              
              }
            />
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-builder.jpg" alt="Builder" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Builder</h2>
              }
              footerChilds={
                <p>
                  Connects users with local contractors based on their location
                </p>
              
              }
            />
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-blogr.jpg" alt="Bloger" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Bloger</h2>
              }
              footerChilds={
                <p>
                  Blogr is a platform for creating an online blog or publication
                </p>
              
              }
            />
          <Card
              headerChilds={
                <img src="./web-design/desktop/image-camp.jpg" alt="Camp" />
              }
              bodyChilds={
                <h2 className="heading__lg uppercase text-call-100">Camp</h2>
              }
              footerChilds={
                <p>
                  Get expert training in coding, data, design, and digital marketing
                </p>
              
              }
            />
        </Container>
      </section>
      <section className="services" id="services">
        <Container>
            <DeisgnTypes />
        </Container>
      </section>
      <CallCard />
    </>
  )
}

export default WebDesign
import Button from "../Components/Assets/Button"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import CallCard from "../Components/CallCard"
import Card from "../Components/Card"
import CardShield from "../Components/CardShield"
import HeroSection from "../Components/HeroSection"
import { Link } from "react-router-dom"

const Start = () => {
  return (
    <>
      <HeroSection className="start bg-call-100" id="hero">
         <Container>
              <div className="content">
                  <h2 className="heading__lg">Award-winning custom designs and digital branding solutions</h2>
                  <p className="text__body">With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.</p>
                  <Button className="-full padding -inline -block rounded">Learn more</Button>
              </div>
              <div className="media">
                <img src="./home/desktop/image-hero-phone.png" alt="Image Hero Phone" />
              </div>
              
         </Container>
      </HeroSection>
      <section className="services" id="services">
        <Container>
          <DeisgnTypes />
        </Container>
      </section>
      <section className="skills" id="skills">
        <Container>

            <Card className="small-image"
                headerChilds={
                  <img src="./home/desktop/illustration-passionate.svg" alt="Passionate" />
                }
                bodyChilds={
                  <h2 className="heading__lg uppercase">PASSIONATE</h2>
                }
                footerChilds={
                  <p className="text__body">
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                  </p>
                
                }
              />
            <Card className="small-image"
                headerChilds={
                  <img src="./home/desktop/illustration-resourceful.svg" alt="Resourceful" />
                }
                bodyChilds={
                  <h2 className="heading__lg uppercase">Resourceful</h2>
                }
                footerChilds={
                  <p className="text__body">
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                  </p>
                
                }
              />
            <Card className="small-image"
                headerChilds={
                  <img src="./home/desktop/illustration-friendly.svg" alt="Friendly" />
                }
                bodyChilds={
                  <h2 className="heading__lg uppercase">Friendly</h2>
                }
                footerChilds={
                  <p className="text__body">
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                  </p>
                
                }
              />

        </Container>
      </section>
      <CallCard />
    </>
  )
}

export default Start

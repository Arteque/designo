import Button from "../Components/Assets/Button"
import Container from "../Components/Assets/Container"
import HeroSection from "../Components/HeroSection"

const Start = () => {
  return (
    <>
      <HeroSection className="hero" id="hero">
         <Container>
              <div className="content">
                  <h2 className="heading__md">Award-winning custom designs and digital branding solutions</h2>
                  <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.</p>
                  <Button className="-full padding -inline -block rounded">Learn more</Button>
              </div>
              <div className="media">
                <img src="./home/desktop/image-hero-phone.png" alt="Image Hero Phone" />
              </div>
              
         </Container>
      </HeroSection>
    </>
  )
}

export default Start

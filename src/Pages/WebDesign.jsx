import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import Card from "../Components/Card"
import HeroSection from "../Components/HeroSection"
import CallCard from "../Components/CallCard"

const WebDesign = () => {

  const data = [
    {
      id:1,
      imgSrc: './web-design/desktop/image-express.jpg',
      title: 'Express',
      text:'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      id:2,
      imgSrc: './web-design/desktop/image-transfer.jpg',
      title: 'Transfer',
      text:'Site for low-cost money transfers and sending money within seconds'
    },
    {
      id:3,
      imgSrc: './web-design/desktop/image-photon.jpg',
      title: 'Photon',
      text:'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
      id:4,
      imgSrc: './web-design/desktop/image-builder.jpg',
      title: 'Builder',
      text:'Connects users with local contractors based on their location'
    },
    {
      id:5,
      imgSrc: './web-design/desktop/image-blogr.jpg',
      title: 'Blogr',
      text:'Blogr is a platform for creating an online blog or publication'
    },
    {
      id:6,
      imgSrc: './web-design/desktop/image-camp.jpg',
      title: 'Camp',
      text:'Get expert training in coding, data, design, and digital marketing'
    },
  ]

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
          {
            data && data.map(item => (
                <Card className="rounded" key={item.id}
                headerChilds={
                  <img src={item.imgSrc} alt={item.title} />
                }
                bodyChilds={
                  <h2 className="heading__lg uppercase text-call-100">{item.title}</h2>
                }
                footerChilds={
                  <p className="text__body padding">
                    {item.text}
                  </p>
                
                }
              />
            ))
          }
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
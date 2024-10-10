import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import CallCard from "../Components/CallCard"
import HeroSection from "../Components/HeroSection"
import Card from "../Components/Card"

const GraphicDesign = () => {

  const data = [
    {
        id:1,
        imgSrc:"image-change.jpg",
        title:"Tim Brown",
        text:"A book cover designed for Tim Brown's new release, 'Change'"
    },
    {
        id:2,
        imgSrc:"image-boxed-water.jpg",
        title:"Boxed Water",
        text:"A simple packaging concept made for Boxed Water"
    },
    {
        id:3,
        imgSrc:"image-science.jpg",
        title:"Science",
        text:"A poster made in collaboration with the Federal Art Project"
    },
  ]

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <>
    <HeroSection className="hero bg-call-100" id="hero">
        <Container>
            <h2>Graphic Design</h2>
            <p>
            We deliver eye-catching branding materials that are tailored to meet your business objectives.
            </p>
        </Container>
    </HeroSection>
    <section className="projects" id="projects">
      <Container>
        {
            data && data.map(item => (
                <Card className="rounded" key={item.id}
                headerChilds={
                <img src={`./graphic-design/desktop/${item.imgSrc}`} alt={item.title} />
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

export default GraphicDesign

import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Container from "../Components/Assets/Container"
import DeisgnTypes from "../Components/Assets/DeisgnTypes"
import HeroSection from "../Components/HeroSection"
import Card from "../Components/Card"

const AppDesign = () => {

    const data = [
        {
            id:1,
            imgSrc:"image-airfilter.jpg",
            title:"Airfilter",
            text:"Solving the problem of poor indoor air quality by filtering the air"
        },
        {
            id:2,
            imgSrc:"image-eyecam.jpg",
            title:"Eyecam",
            text:"Product that lets you edit your favorite photos and videos at any time"
        },
        {
            id:3,
            imgSrc:"image-faceit.jpg",
            title:"Faceit",
            text:"Get to meet your favorite internet superstar with the faceit app"
        },
        {
            id:4,
            imgSrc:"image-todo.jpg",
            title:"Todo",
            text:"A todo app that features cloud sync with light and dark mode"
        },
        {
            id:5,
            imgSrc:"image-loopstudios.jpg",
            title:"loopstudios",
            text:"A VR experience app made for Loopstudios"
        }
    ]

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <>
         <HeroSection className="page bg-call-100" id="webdesign">
            <Container>
                <div className="content">
                    <h2 className="heading__md">App Design</h2>
                    <p className="text__body">
                    We build websites that serve as powerful marketing tools and bring memorable brand experiences.
                    </p>
                </div>
            </Container>
        </HeroSection>
        <section className="projects" id="projects">
            <Container>
                {
                    data && data.map(item => (
                        <Card className="rounded bg-call-300" key={item.id}
                        headerChilds={
                        <img src={`./app-design/desktop/${item.imgSrc}`} alt={item.title} />
                        }
                        bodyChilds={
                        <h2 className="heading__lg uppercase text-call-100">{item.title}</h2>
                        }
                        footerChilds={
                        <p className="padding">
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
   </>
)
}

export default AppDesign

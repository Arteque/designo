import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"
import { useLocation } from "react-router-dom"
import CallCard from "../Components/CallCard"
import LocationsCards from "../Components/LocationsCards"


const Mail = () => {

    const location = useLocation()

    const data =location.search.split("?")[1].split("&")

    const name = data[0].split("=")[1].replace(/%2520/g," ")
    const mail = data[1].split("=")[1]
    const phone = data[2].split("=")[1]

    console.log(name)
    // const name = location.search.name

    return (
    <>

        <HeroSection className="page bg-call-100" id="webdesign">
            <Container>
                <div className="content">
                    <h2 className="heading__md">Dear {name}</h2>
                    <p className="text__body"  style={{textAlign:"center", maxWidth:"70%"}}>
                    Thank you for your message. <br /> Our service team will reach out to you as soon as possible. <br /> Here is a recap of the provided coordinates
                    </p>
                    <p className="text__body">
                            Your E-Mail: {mail} <br />
                            Your phone: {phone}
                    </p>
                </div>
            </Container>
        </HeroSection>
        <section className="ourlocations" id="ourlocations">
            <Container className="locations-cards-container">
            <LocationsCards />         
            </Container>
        </section>
        <CallCard />
        
    </>
  )
}

export default Mail
import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"
import CallCard from "../Components/CallCard"
const Locations = () => {


  const data = [
    {
      id:"1",
      title:"Designo Central Office",
      map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2000252186203!2d-79.39711908774096!3d43.64400657098209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sde!4v1728285226816!5m2!1sen!2sde",
      address:{
        nr: "3886",
        street:" Wellington Street",
        city:"Toronto, Ontario M9C 3J5",
        land:"Canada",
      },
      tel:"+1 253-863-8967",
      mail:"contact@designo.co"
    },
    {
      id:"2",
      title:"Designo AU Office",
      map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.757055257846!2d149.785615511744!3d-30.329427474676127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sde!4v1728286703738!5m2!1sen!2sde",
      address:{
        nr: "19",
        street:"Balonne Street",
        city:"New South Wales 2443",
        land:"Australia",
      },
      tel:"(02) 6720 9092",
      mail:"contact@designo.au"
    },
    {
      id:"3",
      title:"Designo UK Office",
      map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9884.2169726059!2d-3.8803322482551197!3d51.73204320829804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5867a4c5658f%3A0xf837c949fc975d7b!2sRhyd-y-fro%2C%20Pontardawe%2C%20Swansea%2C%20UK!5e0!3m2!1sen!2sde!4v1728286926092!5m2!1sen!2sde",
      address:{
        nr: "13",
        street:"Colorado Way",
        city:"Rhyd-y-fro SA8 9GA",
        land:"United Kingdom",
      },
      tel:"078 3115 1400",
      mail:"contact@designo.uk"
    }
  ]

  return (
    <>
      <HeroSection className="locations" id="locations">
        {
          data && data.map(item => (
            <div className="block-media" key={item.id}>
            <Container>
              <div className="media">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2000252186203!2d-79.39711908774096!3d43.64400657098209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sde!4v1728285226816!5m2!1sen!2sde" style={{border:"0"}} 
                    allowFullScreen="" 
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
              </div>
           
                <div className="content text-dark-100">
                    <h2 className="text-call-100 heading__lg">{item.address.land}</h2>
                    <address>
                      <h3><strong>
                        {item.title}
                      </strong></h3>
                      {item.address.nr} {item.address.street}<br />
                      {item.address.city}
                    </address>
                    <div className="contact padding -block">
                    <strong>Contact</strong> <br />
                      P : {item.tel} <br />
                      M : {item.mail}
                    </div>
                </div>
            </Container>
         </div>
          ))
        }
     
      </HeroSection>
      <CallCard />
    </>
  )
}

export default Locations

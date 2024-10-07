import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"
import CallCard from "../Components/CallCard"
const Locations = () => {
  return (
    <>
      <HeroSection className="locations" id="locations">
        <div className="block-media">
           <div className="media">
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2000252186203!2d-79.39711908774096!3d43.64400657098209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sde!4v1728285226816!5m2!1sen!2sde" style={{border:"0"}} 
                 allowFullScreen="" 
                 referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
           </div>
           <Container>
               <div className="content text-dark-100">
                   <h2 className="text-call-100 heading__lg">Canada</h2>
                   <address>
                     <h3><strong>
                       Designo Central Office
                     </strong></h3>
                     3886 Wellington Street <br />
                     Toronto, Ontario M9C 3J5
                   </address>
                   <div className="contact padding -block">
                   <strong>Contact</strong> <br />
                     P : +1 253-863-8967 <br />
                     M : contact@designo.co
                   </div>
               </div>
           </Container>
        </div>
        <div className="block-media">
           <div className="media">
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.757055257846!2d149.785615511744!3d-30.329427474676127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sde!4v1728286703738!5m2!1sen!2sde" style={{border:"0"}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
           </div>
           <Container>
               <div className="content text-dark-100">
                   <h2 className="text-call-100 heading__lg">Australia</h2>
                   <address>
                    <h3><strong>
                         Designo AU Office
                     </strong> </h3>
                     19 Balonne Street <br />
                     New South Wales 2443
                   </address>
                   <div className="contact">
                   <strong>Contact</strong> <br />
                     P : (02) 6720 9092<br />
                     M : contact@designo.au
                   </div>
               </div>
           </Container>
        </div>

        <div className="block-media">
           <div className="media">
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9884.2169726059!2d-3.8803322482551197!3d51.73204320829804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5867a4c5658f%3A0xf837c949fc975d7b!2sRhyd-y-fro%2C%20Pontardawe%2C%20Swansea%2C%20UK!5e0!3m2!1sen!2sde!4v1728286926092!5m2!1sen!2sde" style={{border:"0"}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
           </div>
           <Container>
               <div className="content text-dark-100">
                   <h2 className="text-call-100">United Kingdom</h2>
                   <address>
                     <h3><strong>
                       Designo UK Office
                     </strong></h3>
                     13  Colorado Way<br />
                     Rhyd-y-fro SA8 9GA
                   </address>
                   <div className="contact">
                   <strong>Contact</strong> <br />
                     P : 078 3115 1400<br />
                     M : contact@designo.uk
                   </div>
               </div>
           </Container>
        </div>
     
      </HeroSection>
      <CallCard />
    </>
  )
}

export default Locations

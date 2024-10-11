import Container from "../Components/Assets/Container"
import HeroSection from "../Components/HeroSection"
import LocationsCards from "../Components/LocationsCards"
import { useEffect, useState } from "react"
const Contact = () => {


  
  const [error, setError] = useState(false)
  const [mailData, setMailData] = useState("")
  const [mailDataExist, setMailDataExist] = useState(false)

  const handleInputChange = (e) => {
    if(e.target.value.length <= 0){
      e.target.nextElementSibling.firstElementChild.innerText = "Can't be empty"
      e.target.nextElementSibling.style = "opacity:1"
    }
    if(e.target.value.length <= 2){
      e.target.nextElementSibling.firstElementChild.innerText = "Text too short"
      e.target.nextElementSibling.style = "opacity:1"
    }
    if(e.target.value.length >= 3) {
       e.target.nextElementSibling.firstElementChild.innerText = ""
      e.target.nextElementSibling.style = "opacity:0"
    }
    
  }

 

  const handleSubmit = (e) => {
    e.preventDefault()
    const dname = e.target[0].value
    const dmail = e.target[1].value
    const dphone = e.target[2].value

    if(dname || dmail || dphone){
      setError(true)
      console.log("Spam")
    }else{
      setError(false)
      console.log("Authorised")
    }

    if(!error){
      //Sendform
      const name = e.target[3].value
      const mail = e.target[4].value
      const phone = e.target[5].value
      const message = e.target[6].value
      setMailData("")
      setMailData(
        {
          name:name,
          mail:mail,
          phone:phone,
          message:message
        }
      )
    
    }
  }

useEffect(() => {
  mailData ? setMailDataExist(true) : setMailDataExist(false)
},[mailData])

  return (
    <>
    <HeroSection className="contact bg-call-100" id="contact">
        <Container className="form-container">
            <div className="content">
                <h2 className="heading__lg">Contact Us</h2>
                <p className="body__text">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <div className="form">
               {
                error ? (
                  <div>
                     <h2 class="heading__lg">Access Denied</h2>
                      <p class="text__body">
                          For security reasons, your IP address has been blocked. If you believe this is an error, please contact our support team at 
                          <a href="mailto:support@example.com" style={{color:'#721c24', fontWeight:'bold'}}>support@example.com</a>.
                      </p>
                  </div>
                ):(
                

                  
                    mailDataExist ? (
                      <>
                      
                            <h2 className="heading__md">Dear {mailData.name}</h2>
                            <p className="text__body"  style={{textAlign:"center", maxWidth:"70%"}}>
                            Thank you for your message. <br /> 
                            Our service team will reach out to you as soon as possible. <br /> 
                            Here is a recap of the provided coordinates
                            </p>
                            <p className="text__body">
                                    Your E-Mail: {mailData.mail} <br />
                                    Your phone: {mailData.phone}
                            </p>

                      </>
                    ): (
                      <form onSubmit={handleSubmit}>
                    <div className="header-data" style={{display:'none'}}>
                      <label htmlFor="name-d">
                          <input 
                          className="padding" 
                          type="text" 
                          name="name-d" 
                          id="name-d" 
                          placeholder="Name"
                          onChange={handleInputChange} 
                          />
                      </label>
                      <label htmlFor="mail-d">
                          <input 
                          className="padding" 
                          type="text" 
                          name="mail-d" 
                          id="name-d" 
                          placeholder="Email"
                          onChange={handleInputChange} 
                          />
                      </label>
                      <label htmlFor="phone-d">
                          <input 
                          className="padding" 
                          type="text" 
                          name="phone-d" 
                          id="phone-d"
                          placeholder="Phone"
                          onChange={handleInputChange}  
                          />
                      </label>
                  </div>
                  <div className="data">
                      <label htmlFor="name">
                          <input className="padding" 
                          type="text"
                          pattern="[a-zA-Z\s]+"
                          name="name" 
                          id="name" 
                          placeholder="Name" 
                          required
                          onChange={handleInputChange}
                          title="Only a-z or A-Z and white space are authorised"
                          />
                          <span className="input__info">
                              <span>Can’t be empty</span>
                              <img src="./contact/desktop/icon-error.svg" alt="Infos" />
                          </span>
                      </label>
                      <label htmlFor="mail">
                          <input className="padding" 
                          type="email" 
                          name="mail" 
                          id="mail" 
                          placeholder="Email Address" 
                          required
                          onChange={handleInputChange} 
                          />
                          <span className="input__info">
                              <span>Can’t be empty</span>
                              <img src="./contact/desktop/icon-error.svg" alt="Infos" />
                          </span>
                      </label>
                      <label htmlFor="phone">
                          <input className="padding" 
                          type="text"
                          pattern="[0-9]+"
                          name="phone" 
                          id="phone" 
                          placeholder="Phone" 
                          onChange={handleInputChange}
                          title="Only number from 0 - 9 are allowed" 
                          required
                          />
                          <span className="input__info">
                              <span>Can’t be empty</span>
                              <img src="./contact/desktop/icon-error.svg" alt="Infos" />
                          </span>
                      </label>
                      <label htmlFor="message">
                          <textarea 
                          name="message" 
                          id="message" 
                          required placeholder="Your Message" 
                          className="padding"
                          onChange={handleInputChange} 
                          ></textarea>
                          <span className="input__info">
                              <span>Can’t be empty</span>
                              <img src="./contact/desktop/icon-error.svg" alt="Infos" />
                          </span>
                      </label>
                  </div>
                  <button type="submit" className="btn -full rounded padding -inline btn-form">
                      Submit
                  </button>
                </form>
                    )
                )
               }
            </div>
        </Container>
    </HeroSection>
    <section className="ourlocations" id="ourlocations">
        <Container className="locations-cards-container">
          <LocationsCards />         
        </Container>
    </section>
    </>
  )
}

export default Contact

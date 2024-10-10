import Container from "../Components/Assets/Container"
import HeroSection from "../Components/HeroSection"
import LocationsCards from "../Components/LocationsCards"
import { useState } from "react"
const Contact = () => {


  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const [specialError, setSpecialError] = useState('')


  const handleInputChange = (e) => {

    //check if the hidden input have no values
    if(e.target.id == "name-d" || e.target.id == "mail-d" || e.target.id == "phone-d"){
      setSpecialError(e.target.value)
    }

    specialError && (window.location.href = "/error")

    const value = e.target.value
    setInputValue(value)



    if(!value.trim()){
      setError("Can't be empty")
    }else{
      setError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!error){
      //Sendform
    }
  }

  return (
    <>
    <HeroSection className="contact bg-call-100" id="contact">
        <Container className="form-container">
            <div className="content">
                <h2 className="heading__lg">Contact Us</h2>
                <p className="body__text">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <div className="form">
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
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                            required
                            onChange={handleInputChange}
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
                            type="tel"
                            name="phone" 
                            id="phone" 
                            placeholder="Phone" 
                            onChange={handleInputChange} 
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

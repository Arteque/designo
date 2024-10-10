import Container from "../Components/Assets/Container"
import HeroSection from "../Components/HeroSection"
import Card from "../Components/Card"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
        <HeroSection className="contact bg-call-100" id="contact">
        <Container>
            <div className="content">
                <h2>Contact Us</h2>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <div className="media">
                <form action="" style={{paddingInline:'5em'}}>
                    <div className="header-data" style={{display:'none'}}>
                        <label htmlFor="name-d">
                            <input className="padding" type="text" name="name-d" id="name-d" placeholder="Name" required/>
                        </label>
                        <label htmlFor="mail-d">
                            <input className="padding" type="text" name="mail-d" id="name-d" placeholder="Email" required/>
                        </label>
                        <label htmlFor="phone-d">
                            <input className="padding" type="text" name="mail-d" id="phone-d" placeholder="Phone" required/>
                        </label>
                    </div>
                    <div className="data">
                        <label htmlFor="name">
                            <input className="padding" type="text" name="name" id="name" placeholder="Name" required/>
                            <span className="input__info">
                                    infos
                                {/* <img src="./shared/desktop/bg-pattern-call-to-action.svg" alt="Infos" /> */}
                            </span>
                        </label>
                        <label htmlFor="mail">
                            <input className="padding" type="email" name="mail" id="mail" placeholder="Email Address" required/>
                        </label>
                        <label htmlFor="phone">
                            <input className="padding" type="text" name="phone" id="phone" placeholder="Phone" />
                        </label>
                        <label htmlFor="message">
                            <textarea name="message" id="message" required placeholder="Your Message" className="padding"></textarea>
                        </label>
                    </div>
                    <button type="submit" className="btn -full rounded padding -inline" 
                    style={{
                        marginBlockStart:'2rem', 
                        marginInlineStart:'auto', 
                        display:'block',
                        // marginInlineEnd:'2em'
                        }}>
                        Submit
                    </button>
                </form>
            </div>
        </Container>
    </HeroSection>
    <section className="ourlocations" id="ourlocations">
    <Container>
      <Card 
        headerChilds={
          <img src="./shared/desktop/illustration-canada.svg" alt="Austria" />
        }
        bodyChilds={
          <h2 className="heading__lg uppercase">Canada</h2>
        }
        footerChilds={
          <Link className="btn -call rounded padding -inline margin-block-end" to="locations">
            See Location
          </Link>
        }
      />
      <Card 
        headerChilds={
          <img src="./shared/desktop/illustration-australia.svg" alt="Austria" />
        }
        bodyChilds={
          <h2 className="heading__lg uppercase">Australia</h2>
        }
        footerChilds={
          <Link className="btn -call rounded padding -inline margin-block-end" to="/locations">
            See Location
          </Link>
        }
      />
      <Card 
        headerChilds={
          <img src="./shared/desktop/illustration-united-kingdom.svg" alt="Austria" />
        }
        bodyChilds={
          <h2 className="heading__lg uppercase">United Kingdom</h2>
        }
        footerChilds={
          <Link className="btn -call rounded padding -inline margin-block-end" to="/locations">
            See Location
          </Link>
        }
      />
    </Container>
</section>
    </>
  )
}

export default Contact

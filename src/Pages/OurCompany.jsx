import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"

const OurCompany = () => {
  return (
    <HeroSection className="aboutus nopaddingtop" id="aboutus">
        <div className="media">
           <picture>
                <source srcSet="./about/desktop/image-about-hero.jpg" media="( min-width: 1024px) "/>
                <source srcSet="./about/tablet/image-about-hero.jpg" media="( min-width: 768px) " />
                <img src="./about/mobile/image-about-hero.jpg" alt="Image About Hero"  />
           </picture>
        </div>
        <Container>
            <div className="content">
                <h2>About Us</h2>
                <p>
                Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
            </div>
        </Container>
    </HeroSection>
  )
}

export default OurCompany

import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"
import CallCard from "../Components/CallCard"
import LocationsCards from "../Components/LocationsCards"

const OurCompany = () => {

  

  return (
    <>
      <HeroSection className="aboutus nopaddingtop bg-call-100" id="aboutus">
        <div className="media">
           <picture>
                <source srcSet="./about/desktop/image-about-hero.jpg" media="( min-width: 1024px) "/>
                <source srcSet="./about/tablet/image-about-hero.jpg" media="( min-width: 768px) " />
                <img src="./about/mobile/image-about-hero.jpg" alt="Image About Hero"  />
           </picture>
        </div>
        <Container>
            <div className="content">
                <h2 className="heading__lg">About Us</h2>
                <p className="text__body">
                Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
            </div>
        </Container>
    </HeroSection>
    <section className="about-content" id="worldclasstalent">
        <div className="box-media">
            <Container className="rounded bg-call-300">
            <div className="media">
              <picture>
                <source media="(min-width: 968px)" srcSet="./about/desktop/image-world-class-talent.jpg" />
                <source media="(min-width: 768px)" srcSet="./about/tablet/image-world-class-talent.jpg" />
                <img src="./about/mobile/image-world-class-talent.jpg" alt="" />
              </picture>
            </div>
              <div className="content ">
                    <h2 className="text-call-100">
                      World-class talent
                    </h2>
                    <p>
                      We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                    </p>
                    <p className="padding">
                      Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </Container>
        </div>
    </section>
    <section className="ourlocations" id="ourlocations">
        <Container className="locations-cards-container">
          <LocationsCards />         
        </Container>
    </section>
    <section className="about-content margin-block-end">
    <div className="box-media ">
            <Container className="rounded bg-call-300">
              <div className="media">
                <picture>
                  <source media="(min-width: 968px)" srcSet="./about/desktop/image-real-deal.jpg" />
                  <source media="(min-width: 768px)" srcSet="./about/tablet/image-real-deal.jpg" />
                  <img src="./about/mobile/image-real-deal.jpg" alt="The real deal" />
                </picture>
              </div>
            
              <div className="content">
                    <h2 className="text-call-100">
                    The real deal
                    </h2>
                    <p>
                      As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                      Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success
                    </p>
                    <p className="padding">
                      We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </p>
                </div>
            </Container>
        </div>   
    </section>
    <CallCard />
    </>
  )
}

export default OurCompany

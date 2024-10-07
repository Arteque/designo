import HeroSection from "../Components/HeroSection"
import Container from "../Components/Assets/Container"
import Card from "../Components/Card"
import { Link } from "react-router-dom"
import CallCard from "../Components/CallCard"

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
                <h2>About Us</h2>
                <p>
                Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
            </div>
        </Container>
    </HeroSection>
    <section className="wordlclasstalent" id="worldclasstalent">
        <div className="box-media">
            <div className="media">
              <picture>
                <img src="./about/mobile/image-world-class-talent.jpg" alt="" />
              </picture>
            </div>
            <Container>
              <div className="content">
                    <h2 className="text-call-100">
                      World-class talent
                    </h2>
                    <p>
                      We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                    </p>
                    <p>
                      Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </Container>
        </div>
    </section>
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
    <section className="margin-block-end">
    <div className="box-media bg-call-300">
            <div className="media">
              <picture>
                <img src="./about/mobile/image-real-deal.jpg" alt="The real deal" />
              </picture>
            </div>
            <Container>
              <div className="content">
                    <h2 className="text-call-100">
                    The real deal
                    </h2>
                    <p>
                      As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                      Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success
                    </p>
                    <p>
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

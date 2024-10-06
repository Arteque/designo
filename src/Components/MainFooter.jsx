import Container from "./Assets/Container"
import Logo from "./Assets/Logo"
import MainNav from "./MainNav"
import Social from "./Social"

const MainFooter = () => {

  return (
    <footer className="main-footer" >
        <Container>
            <Logo header={false} />
            <MainNav  />
            <div className="address">
                <address>
                    <strong>Designo Central Office</strong> <br />
                    3886 Wellington Street <br />
                    Toronto, Ontario M9C 3J5
                </address>
            </div>
            <div className="contact">
                <ul className="">
                    <li>
                        <strong>
                            Contact Us (Central Office)
                        </strong>
                    </li>
                    <li>
                        P : +1 253-863-8967
                    </li>
                    <li>
                        M : contact@designo.co
                    </li>
                </ul>
            </div>
            <Social />
        </Container>
    </footer>
  )
}

export default MainFooter

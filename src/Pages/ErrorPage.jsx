import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter"
import Container from "../Components/Assets/Container"
import { useRouteError } from "react-router-dom"
const ErrorPage = () => {

  const error = useRouteError()
  console.log(error.statusText)
  return (
    <>
      <MainHeader />
      <main>
        <section className="bg-call-100 text-light-100 padding">
          <Container>
            <h2>{error.statusText} | {error.status}</h2>
            <p>{error.data}</p>
            <p></p>
          </Container>
        </section>
      </main>
      <MainFooter />
    </>
  )
}

export default ErrorPage

import { Outlet } from "react-router-dom"
import MainHeader from "../Components/MainHeader"

const Layout = () => {
  return (
    <>  
        <MainHeader />
        <main>
            <Outlet />
        </main>
        <footer>
            footer
        </footer>

    </>
  )
}

export default Layout

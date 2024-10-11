
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import { useEffect} from "react"
import MainFooter from "../Components/MainFooter"


const Layout = () => {

  const location = useLocation()
 

  useEffect(() => {
    document.body.dataset.location = location.pathname.replace(/[/#]/g, "").trim().toLocaleLowerCase() 
    
  },[location])

  return (
    <>  
        <MainHeader />
        <main>   
            <Outlet />
        </main>
        <MainFooter />
    </>
  )
}

export default Layout

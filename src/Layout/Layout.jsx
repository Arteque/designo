import { Outlet } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import { useEffect, useState } from "react"
import MainFooter from "../Components/MainFooter"
import LoadSpin from "../Components/Assets/LoadSpin"


const Layout = () => {

  const location = useLocation()
  const navigate = useNavigate()
  

  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    document.body.dataset.location = location.pathname.replace(/[/#]/g, "").trim().toLocaleLowerCase()
    document.onreadystatechange = () => {
      if(document.readyState == 'complete'){
        setLoader(false)
      }
    }
  },[location])

  return (
    <>  
        <MainHeader />
        <main>
        {
          loader ? (
            <LoadSpin />
          ):(
            <Outlet />
          )
        }
        </main>
        <MainFooter />

    </>
  )
}

export default Layout

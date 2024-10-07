import { useLocation } from "react-router-dom"
import { useEffect } from "react"
const WebDesign = () => {

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.replace(/[/]/g, ""))
    },[])

  return (
    <div>WebDesign</div>
  )
}

export default WebDesign
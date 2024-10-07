
import CardShield from "../CardShield"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
const DeisgnTypes = () => {

const location = useLocation()

const [pathName, setPathName] = useState(null)

useEffect(() => {
    setPathName(location.pathname.replace(/[/]/g,""))
    console.log("const: "+pathName, "path:"+location.pathname)
},[location.pathname])

    const types = [
        {
            id:"1",
            name:"Web Design",
            class:"web-design",
            path:"webdesign",
            pathtext:"View projects"
        },
        {
            id:"2",
            name:"App Design",
            class:"app-design",
            path:"appdesign",
            pathtext:"View projects"
        },
        {
            id:"3",
            name:"Graphic Design",
            class:"graphic-design",
            path:"graphicdesign",
            pathtext:"View projects"
        },
    ]

 return(
    types && types.map(item => {
        // item.path !== pathName && (
            <>
                <CardShield 
                className={item.class}
                cardTitle={item.name}
                url={item.path}
                linkText={item.pathtext}
                />
            </> 
        // )
     })
 )
}

export default DeisgnTypes
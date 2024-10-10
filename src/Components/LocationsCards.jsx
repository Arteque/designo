import Card from "./Card"
import { Link } from "react-router-dom"
const LocationsCards = () => {

    const data = [
        {
          id:1,
          imgSrc:"./shared/desktop/illustration-canada.svg",
          title:"Canada",
          linkText: "See Location",
          url:"/locations#Canada"
        },
        {
          id:2,
          imgSrc:"./shared/desktop/illustration-australia.svg",
          title:"Australia",
          linkText: "See Location",
          url:"/locations#australia"
        },
        {
          id:3,
          imgSrc:"./shared/desktop/illustration-united-kingdom.svg",
          title:"United Kingdom",
          linkText: "See Location",
          url:"/locations#unitedkingdom"
        }
    ]

  return (
    <>
        {
            data && data.map(item => (
              <Card key={item.id} className="locations-card-media padding"
                headerChilds={
                  <img src={item.imgSrc} alt={item.title} />
                }
                bodyChilds={
                  <h2 className="heading__lg uppercase">{item.title}</h2>
                }
                footerChilds={
                  <Link className="btn -call rounded padding -inline margin-block-end" to={item.url}>
                    {item.linkText}
                  </Link>
                }
              />
            ))
          }
    </>
  )
}

export default LocationsCards
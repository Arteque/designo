import { Link } from "react-router-dom"

const Social = () => {

    const socials =  [
        {
            id:"1",
            name: 'Facebook',
            url:'#',
            iconUrl:'icon-facebook.svg'
        },
        {
            id:"2",
            name: 'Youtube',
            url:'#',
            iconUrl:'icon-youtube.svg'
        },
        {
            id:"3",
            name: 'Twitter X',
            url:'#',
            iconUrl:'icon-twitter.svg'
        },
        {
            id:"4",
            name: 'Pinterest',
            url:'#',
            iconUrl:'icon-pinterest.svg'
        },
        {
            id:"5",
            name: 'Instagram',
            url:'#',
            iconUrl:'icon-instagram.svg'
        }
    ]

  return (
      <ul className="social flex">
    {
            socials && socials.map(item => (
                <li key={item.id}>
                    <Link to={item.url} title={`Follow us on ${item.name}`}>
                        <img style={{maxWidth:'24px'}}src={`./shared/desktop/${item.iconUrl}`} alt={` ${item.name}`} />
                    </Link>
                </li>
            ))
    }
    </ul>
  )
}

export default Social

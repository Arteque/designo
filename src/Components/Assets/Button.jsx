import { Link } from "react-router-dom"
const Button = ({url, children, className, props}) => {
  return ( 
    <Link to={url} className={`btn ${className}`} {...props} >
        {children}
    </Link>
  )
}

export default Button

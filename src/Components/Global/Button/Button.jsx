import { Link } from "react-router-dom"

const Button = ({url, children, props}) => {
  return (
    <Link to={url} {...props}>
      {children}
    </Link>
  )  
}

export default Button

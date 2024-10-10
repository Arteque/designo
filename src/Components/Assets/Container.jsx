const Container = ({children, style, className}) => {
  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  )
}



export default Container

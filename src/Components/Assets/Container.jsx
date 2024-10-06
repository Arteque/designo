const Container = ({children}) => {
  return (
    <div className={`container ${children}`}>
      {children}
    </div>
  )
}

export default Container

import Loader from "react-js-loader"

const LoadSpin = () => {
  return (
    <div container="loader" 
        style={{
            position:"fixed",
            inset:"0",
            zIndex:"1000",
            background:"var(--light-100)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
    >
        <Loader type="bubble-loop" bgColor={"var(--call-100)"} color={"var(--call-200)"} title={"Loading"} size={50} />
    </div>
  )
}

export default LoadSpin
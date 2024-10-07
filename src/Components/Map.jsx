
const Map = ({mapUrl}) => {
  return (
    <>
       <iframe src={mapUrl} width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Map
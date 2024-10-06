const HeroSection = ({className, id, children}) => {
  return (
    <section className={`${className}`} id={`${id}`}>
        {children}
    </section>
  )
}

export default HeroSection

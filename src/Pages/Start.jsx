import Button from "../Components/Assets/Button"
import Logo from "../Components/Assets/Logo"

const Start = () => {
  return (
    <div style={{width:"500px"}}>


        <Logo header={true} />

        <h1 className="heading__lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, recusandae!
        </h1>
        <h2 className="heading__md">
            Lorem ipsum dolor sit amet.
        </h2>
        <h3 className="heading__sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, esse.
        </h3>
      <p className="text__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur ad fugit eos. Perspiciatis, laborum praesentium! Eius quae totam reprehenderit.
      </p>
      <Button className="-call -rounded padding" url="#"> 
        Learn more
      </Button>
      <Button className="-full -rounded padding" url="#"> 
        Learn more
      </Button>
      <Button className="-inline -rounded padding" url="#"> 
        Learn more
      </Button>
      <Button className="-inline-dark -rounded padding" url="#"> 
        Learn more
      </Button>
      <label htmlFor="">
      <input type="text" name="" id="" className="padding" placeholder="Data"/>
      <span className="input__info">
        Can't be empty 
        <img src="./contact/desktop/icon-error.svg" style={{width:"20px"}}alt="Error Icon" />
      </span>
      </label>
    </div>
  )
}

export default Start

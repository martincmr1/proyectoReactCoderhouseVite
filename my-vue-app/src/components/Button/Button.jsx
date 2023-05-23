
import { useState } from "react"



const Boton = (props) => {
  
 const [colorBtn, setColorBtn] =useState(props.color) 
  
  const styleBtn = {
    backgroundColor:colorBtn,
  }
  function handleClick() {
   setColorBtn("green")
    props.onClick()

  }
    return (
    <button className={props.className} onClick={handleClick} style={styleBtn} >{props.children}</button>
  )
}

export default Boton
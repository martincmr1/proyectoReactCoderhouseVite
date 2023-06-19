import { useState } from "react"
import "./Button.css"


const Boton = (props) => {
const [colorBtn, setColorBtn] =useState(props.color) 
const styleBtn = {
    backgroundColor:colorBtn,
    padding:"10px"
    
   
}
  
function handleClick() {
 /*  setColorBtn("gray")*/
    props.onClick()
}
    return (
        
      <button className={props.className} onClick={handleClick} style={styleBtn} >{props.children}</button>
      
  )

}

export default Boton
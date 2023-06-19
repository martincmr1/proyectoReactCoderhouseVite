import React from 'react'
import { LineWobble } from '@uiball/loaders'
import "./loader.css"

function Loader() {
  return (
    <div className='loader' ><LineWobble 
    size={80}
    lineWeight={5}
    speed={1.75} 
    color="black" 
   />
   </div>
  )
}

export default Loader








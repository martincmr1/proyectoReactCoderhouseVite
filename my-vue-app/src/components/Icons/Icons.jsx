import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Icons = ({icon}) => {
  return (
   <span style={{fontSize:"30px", color:"blue"}}><FontAwesomeIcon icon={icon}/></span>

    
  )
}

export default Icons
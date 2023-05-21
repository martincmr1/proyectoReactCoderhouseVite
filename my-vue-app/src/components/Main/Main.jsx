import React from 'react'
import NavBarPrincipal from '../navBar/navBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Icons from '../Icons/Icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import BasicExample from '../Item/Item'

import * as bootstrap from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <NavBarPrincipal/>
      <BasicExample/>
      <Icons icon={faCartShopping}/>
      <Boton/>
     
    </div>
  )
}

export default Main
import React from 'react'
import Boton from '../Button/Button'
import "./ItemCount.css"
import { useState } from 'react'
import FlexComponent from '../Flex/FlexComponent'

const ItemCount = ({stock}) => {
const [count,setCount]=useState(1)

function handleAdd() {
    if (count < stock)
    setCount(count+1)
}
    
function handleSust() {
    if (count > 1) 
    setCount(count-1)    
}
let disableResta = count === 1
  return (
 <>
  <div className='masMenosItem'>
    <Boton className="btn btn-danger" disabled={disableResta} onClick={handleSust}>-</Boton>
      <p>{count}</p>
      <FlexComponent>
    <Boton className="btn btn-success" onClick={handleAdd}>+</Boton>
    </FlexComponent>
  </div>
  <div>
    <Boton/>
  </div>
  </>
  )
}

export default ItemCount
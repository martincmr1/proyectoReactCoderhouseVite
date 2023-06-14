import React from 'react'
import Boton from '../Button/Button'
import "./ItemCount.css"
import { useState } from 'react'
import FlexComponent from '../Flex/FlexComponent'

const ItemCount = ({stock, onAddToCart}) => {
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
    <Boton className="btn btn-secondary" disabled={disableResta} onClick={handleSust}>-</Boton>
      <p>{count}</p>
      <FlexComponent>
    <Boton className="btn btn-secondary" onClick={handleAdd}>+</Boton>
    </FlexComponent>
  </div>
  <div className='btnAddCart'>
    <Boton onClick={() => {onAddToCart(count)}} className="btn btn-primary ">Agregar al carrito</Boton>
  </div>
  
  </>
  )
}

export default ItemCount
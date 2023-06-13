import React, { useContext, useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../context/cartContext'
import Boton from '../Button/Button'
import { Button } from 'bootstrap'






function getItemData(id) {
return new Promise((resolve) => {
    setTimeout(() => {
    const requestedItem = mobilePhones.find ((item) => item.id === parseInt(id))
    resolve(requestedItem)
    },1000)
})
}

function ItemDetailContainer() {
const [product, setProduct]=useState({})
const {cart,addItem,removeItem}=useContext(cartContext)

const {id} =useParams()

useEffect (() => {
    getItemData(id).then((respuesta) => {
    setProduct(respuesta)
        })
},[id])

function onAddToCart (count) {

  addItem(product,count)
/*alert(`Agregaste ${count} - ${product.title} al carrito`) */


}

  return (
 
    <div className='ItemDetailContainer card position-absolute top-100 start-50 translate-middle' style={{ width: '18rem', alignContent: 'center' }}>
  <h1>{product.title}</h1>
  <img src={product.img} alt={product.title} />
  <h2>$ {product.price}</h2>
  <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
  <Boton onClick={()=> removeItem(product.id)}> eliminar</Boton>
</div>

  
  )
    









}

export default ItemDetailContainer




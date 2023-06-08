import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'

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
const {id} =useParams()

useEffect (() => {
    getItemData(id).then((respuesta) => {
    setProduct(respuesta)
        })
},[id])
  return (
 
    <div className='ItemDetailContainer card position-absolute top-100 start-50 translate-middle' style={{ width: '18rem', alignContent: 'center' }}>
  <h1>{product.title}</h1>
  <img src={product.img} alt={product.title} />
  <h2>$ {product.price}</h2>
  <ItemCount stock={product.stock} />
</div>

  
  )
    









}

export default ItemDetailContainer




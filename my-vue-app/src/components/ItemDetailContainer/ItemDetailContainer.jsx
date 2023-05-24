import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"

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
   <div className='ItemDetailContainer'><h1>{product.title}</h1>
    <img src={product.img}></img>
    <h2>$ {product.price}</h2>
    </div>
  )
}

export default ItemDetailContainer




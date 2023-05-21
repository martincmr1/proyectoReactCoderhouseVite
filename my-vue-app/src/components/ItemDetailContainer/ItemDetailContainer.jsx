import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function getItemData() {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(mobilePhones[0])
    },2000)
})
}

function ItemDetailContainer() {

const [product, setProduct]=useState({})

useEffect (() => {

        getItemData().then((respuesta) => {
            setProduct(respuesta)
        })
      } , [] )





  return (
   <div><h1>Titulo: {product.title}</h1>
    <img src={product.img}></img>
  <h4>price: $ {product.price}</h4></div>

  )
}

export default ItemDetailContainer
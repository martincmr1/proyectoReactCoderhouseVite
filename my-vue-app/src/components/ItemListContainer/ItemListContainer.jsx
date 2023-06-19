import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import Itemlist from '../ItemList/Itemlist';
import "./ItemlistContainer.css"
import FlexComponent from '../Flex/FlexComponent';
import { useParams } from 'react-router-dom';

function getData(){
  return new Promise ((resolve) => {
    setTimeout( () => {resolve(mobilePhones);
    },3000);
  })
}

function ItemListContainer() {
  let [products,setProducts] =useState([])
  const {categoryid} = useParams()
  useEffect(() => {
  getData().then((respuesta) => {
    if(categoryid) {
    const filterProducts = respuesta.filter ((item) => item.category === categoryid)
  setProducts(filterProducts)
} else {
  setProducts(respuesta)
}   
  })
},[categoryid])
   return (
    <div className='itemListContainer'> 
      <FlexComponent>
       <Itemlist products={products}/>
       </FlexComponent>  
    </div>
  )
}

export default ItemListContainer
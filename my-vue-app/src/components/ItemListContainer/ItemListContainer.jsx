import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import Itemlist from '../ItemList/Itemlist';
import "./ItemlistContainer.css"
import FlexComponent from '../Flex/FlexComponent';
function getData(){
  return new Promise ((resolve) => {
    setTimeout( () => {resolve(mobilePhones);
    },2000);
  })
}


function ItemListContainer() {
  let [products,setProducts] =useState([])

  useEffect(() => {
   getData().then((respuesta) => {
    setProducts(respuesta)
  })
},[])
   
  

  return (
    <div> 
      <FlexComponent>
       <Itemlist products={products}/>
       </FlexComponent>  

    </div>
  )
}

export default ItemListContainer
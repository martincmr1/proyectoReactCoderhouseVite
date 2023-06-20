import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import Itemlist from '../ItemList/Itemlist';
import "./ItemlistContainer.css"
import FlexComponent from '../Flex/FlexComponent';
import { useParams } from 'react-router-dom';

function getData(){
  return new Promise ((resolve) => {
    setTimeout( () => {resolve(mobilePhones);
    },2000);
  })
}

function ItemListContainer() {
  let [isLoading,setIsloading] = useState (true)
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
  .finally (() => {setIsloading(false);
  })
},[categoryid])
   return (
    <div className='itemListContainer'> 
      <FlexComponent>
       <Itemlist isLoading={isLoading} products={products}/>
       </FlexComponent>  
    </div>
  )
}

export default ItemListContainer
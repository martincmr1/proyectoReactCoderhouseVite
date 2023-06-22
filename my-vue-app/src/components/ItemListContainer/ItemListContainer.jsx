import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import Itemlist from '../ItemList/Itemlist';
import "./ItemlistContainer.css"
import FlexComponent from '../Flex/FlexComponent';
import { useParams } from 'react-router-dom';
import { getCategoryData, getData } from '../../_services/firebase';


function ItemListContainer() {
  let [isLoading,setIsloading] = useState (true)
  let [products,setProducts] =useState([])
  const {categoryid} = useParams()
  
const fetchData =categoryid === undefined? getData : getCategoryData


  useEffect(() => {
  fetchData(categoryid)
  .then(respuesta => setProducts(respuesta))
    
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
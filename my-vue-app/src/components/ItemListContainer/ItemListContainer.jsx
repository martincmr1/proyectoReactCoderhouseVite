import React, { useEffect, useState } from 'react'
import Itemlist from '../ItemList/Itemlist';
import "./ItemlistContainer.css"
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
    <div className='itemlistcontainer list'> 
      
       <Itemlist isLoading={isLoading} products={products}/>
       
    </div>
  )
}

export default ItemListContainer
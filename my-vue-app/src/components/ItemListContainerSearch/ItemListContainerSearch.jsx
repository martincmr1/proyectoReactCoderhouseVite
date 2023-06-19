import React, { useEffect, useState } from 'react'
import mobilePhones from '../data/mobiles'
import Itemlist from '../ItemList/Itemlist';

function getData() {
  return new Promise((resolve) => {
    setTimeout (
      () => {
      resolve(mobilePhones);
    },
    5000);
    });
  }
   
  

function withSearch(OrigComponent){
function WrappedComponent() {
  const [searchword, setSearchword] = useState("")

function handleChange(evt){
  const valor = evt.target.value
  setSearchword(valor)
}
  
function filterList(products) {
    if (searchword === "") {
    return products
    }else {
      return products.filter ((item) => {
        let textTitle = item.title.toLowerCase()
        let word = searchword.toLocaleLowerCase()
        return textTitle.includes(word)
  })
  }
}
    return (
      <>
        <input onChange={handleChange}
        placeholder="Buscar productos"></input>
        <OrigComponent filterList={filterList}/>
      </>
    )
  }
  return WrappedComponent
}

function ItemListContainerSearch({filterList}) {
  let [products,setProducts] =useState([])
   useEffect(() => {
   getData().then((respuesta) => {
   setProducts(respuesta)})
},[])
  return (
   
    <Itemlist products={filterList(products)}/>

 )
}

const WrappedItemListContainerSearch = withSearch(ItemListContainerSearch)
export default WrappedItemListContainerSearch
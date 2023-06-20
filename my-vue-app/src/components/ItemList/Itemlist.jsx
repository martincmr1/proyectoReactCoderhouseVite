import React from 'react'
import Item from '../Item/Item'
import FlexComponent from '../Flex/FlexComponent'
import Loader from '../Loader/Loader'

function Itemlist ({products,isLoading}) {
  if (isLoading) return <h1><Loader/></h1>
  if (products.length === 0) return <h2>Producto no encontrado</h2>
  return (
    <>
    <div> 
     <FlexComponent>
      {products.map((itemInArray) => (
      <Item key={itemInArray.id} {...itemInArray} />
      ))}
      </FlexComponent>
    </div>
    </>
  )}





export default Itemlist


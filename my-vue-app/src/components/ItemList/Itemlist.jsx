import React from 'react'
import Item from '../Item/Item'
import FlexComponent from '../Flex/FlexComponent'
import Loader from '../Loader/Loader'

function Itemlist ({products}) {
  if (products.length === 0) return <h1><Loader/></h1>
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


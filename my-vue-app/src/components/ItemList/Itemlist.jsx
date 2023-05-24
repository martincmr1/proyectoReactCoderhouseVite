import React from 'react'
import Item from '../Item/Item'
import FlexComponent from '../Flex/FlexComponent'

function Itemlist ({products}) {
  return (
    <div> 
     <FlexComponent>
      {products.map((itemInArray) => (
      <Item key={itemInArray.id} {...itemInArray} />
      ))}
      </FlexComponent>
    </div>
  )
}

export default Itemlist


import { createContext, useState } from "react";

export const filterListContext = createContext ()

export function ContextProvider({children}){
    const [cart, setCart] =useState([])


function addItem(product,count) {
    const newCart = [...cart]
newCart.push({...product,count})
setCart(newCart)
}

function countItems() {
    let total = 0
    cart.forEach ((item) => {
        total += item.count
    })
    return total
}
function removeItem (idDelete) {
    setCart (cart.filter(item =>item.id !== idDelete))
}


    return(
        <cartContext.Provider value={{cart,setCart,addItem,countItems,removeItem}}>
            {children}
        </cartContext.Provider>

    )
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
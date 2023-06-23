import { createContext, useState } from "react";

export const cartContext = createContext ({cart:[]})

export function CartContextProvider({children}){
    const [cart, setCart] =useState([])


function addItem(product,count) {
    const newCart = [...cart]
if (isInCart(product.id)){
let index = cart.findIndex((cartItem) => cartItem.id === product.id)
newCart[index].count += count

setCart(newCart)
    
}

else {
newCart.push({...product,count})
setCart(newCart)
}
}

function isInCart(id) {
    return cart.some((item) => item.id === id)
}
function countTotalPrice() {
    let totalPrice = 0;
    cart.
   
  forEach((item) => {
      totalPrice += item.
     
  price * item.count;
    });
    return totalPrice;
  }


function clear() {
setCart([])

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
<cartContext.Provider value={{cart,setCart,addItem,countItems,removeItem,isInCart,countTotalPrice,clear}}>
{children}
</cartContext.Provider>
)
}



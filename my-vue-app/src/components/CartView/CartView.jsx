import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { createOrder } from "../../_services/firebase";
import { useNavigate } from "react-router-dom";



function CartView() {
  const { cart, removeItem,countTotalPrice,clear } = useContext(cartContext);
  const navigateTo = useNavigate()
async function handleConfirm(){
  const order ={

  items:cart,
  buyer:{
    name:"Martin",
    phone:666334,
    email:"martin@hotmail.com"
          },
  date:new Date(),
  price:countTotalPrice()

  }

 const id = await createOrder(order)
 clear()
 navigateTo(`/order-confirmation/${id}`)
 
}

  if (cart.length === 0) {
    return (
        <>
 <h2>Tu carrito está vacio</h2>
 <Link to="/" >Seguir comprando</Link>
 </>
    )
    
    
    
  } else {
    return (
      <div>
        <h2>Tu carrito de compras</h2>
        {cart.map((item) => (
          <ul key={item.id}>
            <li>
              Producto: {item.title}
              <br />
              Cantidad: {item.count}
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                X
              </button>
              <br />
              Total: $ {item.count * item.price}
            </li>
          </ul>
        ))}
        <button onClick={handleConfirm}>Crear orden de compra</button>
      </div>
     
    );
  }
}

export default CartView;

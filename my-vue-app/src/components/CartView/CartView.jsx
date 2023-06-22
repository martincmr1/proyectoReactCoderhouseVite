import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {  createOrderWithStockUpdate } from "../../_services/firebase";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



function CartView() {
  const { cart, removeItem,countTotalPrice,clear } = useContext(cartContext);
  const navigateTo = useNavigate()
async function handleConfirm(userData){
  const order = {
    items: cart,
    buyer: userData,
    date: new Date(),
    price: countTotalPrice(),
  };

  try {
    const id = await createOrderWithStockUpdate(order);
    console.log("respuesta", id);
    clear();

    navigateTo(`/order-confirmation/${id}`);
    /* 
    1. alert: SweetAlert/toastify -> muestren el id
    2. redirección: React Router -> /confirmation
    3. rendering condicional -> modificando un state
  */
  } catch (error) {
    alert(error);
  }
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
              Total: $ {(item.count * item.price).toFixed(2)}
            </li>
          </ul>
        ))}
         <CheckoutForm onConfirm={handleConfirm} />
      </div>
     
    );
  }
}

export default CartView;

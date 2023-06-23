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
  } catch (error) {
    Swal.fire({      
icon: 'error',       
title: 'Error',       
text: error,       
confirmButtonText: 'Aceptar',
});
  }
}

  if (cart.length === 0) {
    return (
        <>
 <h2>Tu carrito está vacio</h2>
 <button className="btn btn-primary" >
 <Link to="/" ><span style={{color:"white"}}>Seguir comprando</span></Link></button>
 </>
    )
    
    
    
  } else {
    return (
      <div className="card-body justify-content-center">
      <h2 className="card-title">Tu carrito de compras</h2>
      {cart.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">Producto: {item.title}</h5>
            <p className="card-text">Cantidad: {item.count}</p>
            <p className="card-text">Total: $ {(item.count * item.price).toFixed(2)}</p>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div>
      <CheckoutForm onConfirm={handleConfirm} />
      </div>
    </div>
    

     
    );
  }
}

export default CartView;

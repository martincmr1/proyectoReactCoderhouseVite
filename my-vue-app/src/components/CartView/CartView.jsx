import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartView() {
  const { cart, removeItem } = useContext(cartContext);

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
      </div>
    );
  }
}

export default CartView;

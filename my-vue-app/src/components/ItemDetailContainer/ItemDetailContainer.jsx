import React, { useContext, useEffect, useState } from 'react';
import mobilePhones from '../data/mobiles';
import { useParams, Link } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/cartContext';
import Boton from '../Button/Button';
import Loader from '../Loader/Loader';

function getItemData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedItem = mobilePhones.find((item) => item.id === parseInt(id));
    
    if (requestedItem)
    
      resolve(requestedItem);
      else reject(new Error("Producto no encontrado"))
    }, 2000);
  });
}
function ItemDetailContainer() {
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState(null); // {} truthy => evalua a true
  const [countInCart, setCountInCart] = useState(0);

  // 2. Usamos/consumimos el Context
  const { addItem, removeItem } = useContext(cartContext);

  function onAddToCart(count) {
    addItem(product, count);
    setCountInCart(count);
    /* sweet-alert / toastify */
    console.log(`Agregaste ${count} - ${product.title} al carrito`);
  }

  const id = useParams().id;

  useEffect(() => {
    getItemData(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => {
        setErrors(error.message);
      });
  }, [id]);

  if (errors)
    return (
      <div style={{  marginTop: "100px" }}>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );
  if (product) {
    return (
      <div className='ItemDetailContainer card position-absolute top-100 start-50 translate-middle' style={{ width: '18rem', alignContent: 'center' }}>
        <h1 className='productTextTitle'>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <h2 className='productTextPrice'>$ {product.price}</h2>

        {countInCart === 0 ? (
          <div className='itemCount'>
            <ItemCount className='itemCount' onAddToCart={onAddToCart} stock={product.stock} />
          </div>
        ) : (
          <Boton className='btn btn-primary'>
          <Link to='/cart'>Ir al carrito</Link></Boton>
        )}

        <div>
          <Boton className='btn btn-danger' onClick={() => removeItem(product.id)}>
            Eliminar
          </Boton>
        </div>
      </div>
    );
  }

  return <Loader/>
}

export default ItemDetailContainer;

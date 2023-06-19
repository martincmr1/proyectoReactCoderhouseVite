import React, { useContext, useEffect, useState } from 'react';
import mobilePhones from '../data/mobiles';
import { useParams, Link } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/cartContext';
import Boton from '../Button/Button';
import Loader from '../Loader/Loader';

function getItemData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedItem = mobilePhones.find((item) => item.id === parseInt(id));
      resolve(requestedItem);
    }, 6000);
  });
}

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [countInCart, setCountInCart] = useState(0);
  const { cart, addItem, removeItem } = useContext(cartContext);

  const { id } = useParams();

  useEffect(() => {
    getItemData(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  function onAddToCart(count) {
    addItem(product, count);
    setCountInCart(count);
  }

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

  return <h1><Loader/></h1>;
}

export default ItemDetailContainer;

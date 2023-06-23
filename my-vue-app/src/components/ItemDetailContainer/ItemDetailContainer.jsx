import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/cartContext';
import Boton from '../Button/Button';
import Loader from '../Loader/Loader';
import { getItemData } from '../../_services/firebase';
import FlexComponent from '../Flex/FlexComponent';

function ItemDetailContainer() {
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState(null);
  const [countInCart, setCountInCart] = useState(0);

  const { addItem, removeItem } = useContext(cartContext);

  function onAddToCart(count) {
    addItem(product, count);
    setCountInCart(count);
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
      <div style={{ marginTop: '100px' }}>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

  if (product) {
    return (
      <div className='card position-absolute top-100 start-50 translate-middle' style={{ width: '18rem', alignContent: 'center'}}>
        <h1 className='productTextTitle'>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <h2 className='productTextPrice'>$ {product.price}</h2>

        {product.stock === 0 ? (
          <small>Producto sin stock</small>
        ) : (
          <>
            <div className='itemCount'>
              {countInCart === 0 ? (
                <ItemCount className='itemCount' onAddToCart={onAddToCart} stock={product.stock} />
              ) : (
                <Boton className='btn btn-primary'>
                  <Link to='/cart'><span className='cartbutton'>Ir al carrito</span></Link>
                </Boton>
              )}
            </div>

            {product.stock > 0 && (
              <div>
                <FlexComponent>
                <Boton className='btn btn-danger' onClick={() => removeItem(product.id)}>
                  Eliminar
                </Boton>
                </FlexComponent>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return <Loader />;
}

export default ItemDetailContainer;

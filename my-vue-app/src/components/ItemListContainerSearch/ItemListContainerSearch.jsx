import React, { useEffect, useState } from 'react';
import mobilePhones from '../data/mobiles';
import Itemlist from '../ItemList/Itemlist';

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 2000);
  });
}

function withSearch(OrigComponent) {
  function WrappedComponent() {
    const [searchword, setSearchword] = useState('');

    function handleChange(evt) {
      const valor = evt.target.value;
      setSearchword(valor);
    }

    function filterList(products) {
      if (searchword === '') {
        return products;
      } else {
        return products.filter((item) => {
          let textTitle = item.title.toLowerCase();
          let word = searchword.toLowerCase();
          return textTitle.includes(word);
        });
      }
    }

    return (
      <>
        <input onChange={handleChange} placeholder="Buscar productos" />
        <OrigComponent filterList={filterList} />
      </>
    );
  }
  return WrappedComponent;
}

function ItemListContainerSearch({ filterList }) {
  let [isLoading, setIsloading] = useState(true);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getData()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return <Itemlist isLoading={isLoading} products={filterList(products)} />;
}

const WrappedItemListContainerSearch = withSearch(ItemListContainerSearch);
export default WrappedItemListContainerSearch;

import React, { useEffect, useState } from 'react';
import Itemlist from '../ItemList/Itemlist';
import { getData } from '../../_services/firebase';
import './ItemListContainerSearch.css'


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
      <div className='search-container'>
        <input onChange={handleChange} placeholder="Buscar productos" />
        <OrigComponent filterList={filterList} />
        </div>
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

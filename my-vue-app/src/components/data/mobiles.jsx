const mobilePhones = [
    {
        "id": 1,
        "title": "Elaion Auro D1 020",
        "category": "Lubricantes",
        "stock": 0,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/Elaion_AURO_HYBRID_D1020.jpg",
        "price": 24232
      }, {
        "id": 2,
        "title": "Elaion Auro D1 530",
        "category": "Lubricantes",
        "stock": 9,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/Elaion_AURO_HYBRID_D1530.jpg",
        "price": 22356
      }, {
        "id": 3,
        "title": "Elaion F10 20w 50",
        "category": "Lubricantes",
        "stock": 6,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/Elaion_F50.jpg",
        "price": 8138
      }, {
        "id": 4,
        "title": "Elaion F30 10w 40",
        "category": "Lubricantes",
        "stock": 7,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/Elaion_F30.jpg",
        "price": 13184
      }, {
        "id": 5,
        "title": "Kriox Organico Fucsia",
        "category": "Complementarios",
        "stock": 9,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/kriox-organico-1L.jpg",
        "price": 2137
      }, {
        "id": 6,
        "title": "Liq Frenos DOT3",
        "category": "Complementarios",
        "stock": 9,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/liquido-frenos-hidraulico3-1L.jpg",
        "price": 2385
      }, {
        "id": 7,
        "title": "Lavaparabrisas x 1lt",
        "category": "Complementarios",
        "stock": 5,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/lavaparabrisas-1L.jpg",
        "price": 980
      }, {
        "id": 8,
        "title": "Lavaautos",
        "category": "Complementarios",
        "stock": 1,
        "img": "https://www.ypf.com/productosyservicios/PublishingImages/imagen-detalle-producto/lavaautos-500ml.jpg",
        "price": 1356
      }, {
        "id": 9,
        "title": "Mann W 712/75",
        "category": "Filtros",
        "stock": 2,
        "img": "https://catalog.mann-filter.com/file/Product/ProductImages/Premium/spin/W_712.75/data/spinpict/001.jpg",
        "price": 1561
      }, {
        "id": 10,
        "title": "Mann C 29 108",
        "category": "Filtros",
        "stock": 2,
        "img": "https://catalog.mann-filter.com/file/Product/ProductImages/Standard/jpgdim/C_29_108.jpg",
        "price": 1560
      }, {
        "id": 11,
        "title": "Mann WK 939/2",
        "category": "Filtros",
        "stock": 1,
        "img": "https://catalog.mann-filter.com/file/Product/ProductImages/Premium/spin/WK_939.2_z/data/spinpict/022.jpg",
        "price": 5200
      }, {
        "id": 12,
        "title": "Mann Wk 730/1",
        "category": "Filtros",
        "stock": 9,
        "img": "https://catalog.mann-filter.com/file/Product/ProductImages/Premium/spin/WK_730.1/data/spinpict/001.jpg",
        "price": 3850
      }, 
  ];
  
const mobileTitles = mobilePhones.map ((celus) => {
    return celus.title
})
const mobileCategory = mobilePhones.map ((categorias) => {
    return categorias.category
})

export default mobilePhones;
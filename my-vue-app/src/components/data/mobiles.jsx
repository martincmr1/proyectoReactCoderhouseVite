const mobilePhones = [
    {
        "id": 1,
        "title": "6000",
        "category": "Pontiac",
        "stock": 8,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_841882-MLA40042113005_122019-F.webp",
        "price": 442
      }, {
        "id": 2,
        "title": "Allante",
        "category": "Cadillac",
        "stock": 9,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_677433-MLA52387208151_112022-F.webp",
        "price": 304
      }, {
        "id": 3,
        "title": "Ram 3500",
        "category": "Dodge",
        "stock": 6,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_892024-MLA48170453895_112021-F.webp",
        "price": 462
      }, {
        "id": 4,
        "title": "Pathfinder",
        "category": "Nissan",
        "stock": 7,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_806124-MLA52331297780_112022-F.webp",
        "price": 432
      }, {
        "id": 5,
        "title": "Sierra",
        "category": "GMC",
        "stock": 9,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_654116-MLA52331576307_112022-F.webp",
        "price": 246
      }, {
        "id": 6,
        "title": "Tahoe",
        "category": "Chevrolet",
        "stock": 9,
        "img": "http://dummyimage.com/178x100.png/ff4444/ffffff",
        "price": 500
      }, {
        "id": 7,
        "title": "Malibu",
        "category": "Chevrolet",
        "stock": 5,
        "img": "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        "price": 455
      }, {
        "id": 8,
        "title": "Talon",
        "category": "Eagle",
        "stock": 1,
        "img": "http://dummyimage.com/187x100.png/dddddd/000000",
        "price": 332
      }, {
        "id": 9,
        "title": "DTS",
        "category": "Cadillac",
        "stock": 2,
        "img": "http://dummyimage.com/159x100.png/dddddd/000000",
        "price": 331
      }, {
        "id": 10,
        "title": "911",
        "category": "Porsche",
        "stock": 2,
        "img": "http://dummyimage.com/160x100.png/5fa2dd/ffffff",
        "price": 232
      }, {
        "id": 11,
        "title": "Z4",
        "category": "BMW",
        "stock": 1,
        "img": "http://dummyimage.com/214x100.png/cc0000/ffffff",
        "price": 307
      }, {
        "id": 12,
        "title": "Tundra",
        "category": "Toyota",
        "stock": 9,
        "img": "http://dummyimage.com/124x100.png/ff4444/ffffff",
        "price": 463
      }, {
        "id": 13,
        "title": "Concorde",
        "category": "Chrysler",
        "stock": 5,
        "img": "http://dummyimage.com/109x100.png/ff4444/ffffff",
        "price": 403
      }, {
        "id": 14,
        "title": "Mazda3",
        "category": "Mazda",
        "stock": 1,
        "img": "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
        "price": 322
      }, {
        "id": 15,
        "title": "Scirocco",
        "category": "Volkswagen",
        "stock": 4,
        "img": "http://dummyimage.com/180x100.png/cc0000/ffffff",
        "price": 475
      }, {
        "id": 16,
        "title": "Sierra 3500",
        "category": "GMC",
        "stock": 10,
        "img": "http://dummyimage.com/141x100.png/ff4444/ffffff",
        "price": 283
      }, {
        "id": 17,
        "title": "2500",
        "category": "Ram",
        "stock": 9,
        "img": "http://dummyimage.com/232x100.png/dddddd/000000",
        "price": 212
      }, {
        "id": 18,
        "title": "S2000",
        "category": "Honda",
        "stock": 9,
        "img": "http://dummyimage.com/123x100.png/ff4444/ffffff",
        "price": 480
      }, {
        "id": 19,
        "title": "S4",
        "category": "Audi",
        "stock": 3,
        "img": "http://dummyimage.com/147x100.png/dddddd/000000",
        "price": 440
      }, {
        "id": 20,
        "title": "Avalon",
        "category": "Toyota",
        "stock": 10,
        "img": "http://dummyimage.com/126x100.png/cc0000/ffffff",
        "price": 482
      }
  ];
  
const mobileTitles = mobilePhones.map ((celus) => {
    return celus.title
})
console.log(mobileTitles)

const mobileCategory = mobilePhones.map ((categorias) => {
    return categorias.category
})
console.log(mobileCategory)

  export default mobilePhones;
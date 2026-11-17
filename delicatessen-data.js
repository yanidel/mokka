"use strict";
/* Merengo non-alfajor retail catalog, reviewed 2026-11-17 against official listings.
   Prices are MERENGO'S PUBLIC RETAIL REFERENCE, not Mokka's approved selling prices.
   Publication is NOT evidence of available stock at Mokka.
   Photos are loaded from Merengo's public CDN for prototype preview; commercial use requires permission.
*/
(function(){
  const categories=[
    {id:"bocaditos",name:"Bocaditos",description:"Conos de dulce de leche bañados en chocolate, también en versiones especiales."},
    {id:"chocolates",name:"Bañados en chocolate",description:"Pequeñas especialidades para los amantes del chocolate."},
    {id:"confituras",name:"Confituras",description:"Clásicos crocantes y golosinas frutales para regalar o compartir."},
    {id:"dulces",name:"Dulce de leche",description:"El dulce de leche tradicional de Merengo para disfrutar en casa."}
  ];
  const products=[
  {
    "id": "boc-regular",
    "name": "Bocaditos de dulce de leche",
    "category": "bocaditos",
    "categoryName": "Bocaditos",
    "pack": "Display x16 · 45 g por unidad",
    "price": 36900,
    "source": "https://alfajoresmerengo.com/productos/bocaditos-dulce-de-leche-x-18-u/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/whatsapp-image-2024-05-30-at-11-31-40-0c902c81a1dfabefce17170817731099-480-0.webp",
    "description": "Base de galletita de chocolate, copete de dulce de leche y cobertura de chocolate.",
    "tags": [
      "Dulce de leche",
      "Chocolate"
    ],
    "status": "listed"
  },
  {
    "id": "boc-sintacc",
    "name": "Bocaditos de dulce de leche sin TACC",
    "category": "bocaditos",
    "categoryName": "Bocaditos",
    "pack": "Display x16",
    "price": 36900,
    "source": "https://alfajoresmerengo.com/productos/bocaditos-dulce-de-leche-sin-tacc-x-18-u/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/1101-b895e18522a7a9c10e16035898406084-480-0.png",
    "description": "Bocaditos de dulce de leche cubiertos de chocolate, elaborados en planta separada para productos sin TACC.",
    "tags": [
      "Sin TACC",
      "Dulce de leche"
    ],
    "status": "listed"
  },
  {
    "id": "boc-dieteticos",
    "name": "Bocaditos dietéticos sin azúcar agregada",
    "category": "bocaditos",
    "categoryName": "Bocaditos",
    "pack": "Display x16",
    "price": 36900,
    "source": "https://alfajoresmerengo.com/productos/bocaditos-dieteticos-sin-azucar-x-16-u/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/display-boc-diet-toma-11-b60977e8a9b63a4a4216526742309939-480-0.webp",
    "description": "Base de chocolate, dulce de leche sin azúcar y baño de chocolate dietético. Según el fabricante, cuenta con certificación LAPDI.",
    "tags": [
      "Sin azúcar agregada",
      "Chocolate"
    ],
    "status": "verify"
  },
  {
    "id": "boc-pack2",
    "name": "Pack de 2 displays de bocaditos dietéticos",
    "category": "bocaditos",
    "categoryName": "Bocaditos",
    "pack": "2 displays x16 · 32 bocaditos",
    "price": 73800,
    "source": "https://alfajoresmerengo.com/productos/pack-x-2-bocaditos-dieteticos-sin-azucar-x-16-u/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/pack-2-display-boc-diet-x-161-83dbe59e5dec2ba9df16544474882577-480-0.webp",
    "description": "Dos displays de 16 bocaditos dietéticos cada uno, publicados como pack promocional por Merengo.",
    "tags": [
      "Pack x2",
      "Sin azúcar agregada"
    ],
    "status": "listed"
  },
  {
    "id": "mani-choco",
    "name": "Maní bañado con chocolate",
    "category": "chocolates",
    "categoryName": "Bañados en chocolate",
    "pack": "Estuche x100 g",
    "price": 5000,
    "source": "https://alfajoresmerengo.com/productos/mani-banado-con-chocolate-x-100-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/1141-1643e30af4c9a6ba7716058996639481-480-0.webp",
    "description": "Maní entero recubierto con chocolate; presentación de 100 gramos en estuche.",
    "tags": [
      "Chocolate",
      "Maní"
    ],
    "status": "listed"
  },
  {
    "id": "merenguitos-choco",
    "name": "Merenguitos al chocolate",
    "category": "chocolates",
    "categoryName": "Bañados en chocolate",
    "pack": "Estuche x100 g",
    "price": 7000,
    "source": "https://alfajoresmerengo.com/productos/merenguitos-al-chocolate-x-100-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/merenguitos-al-chocolate1-686aeaf6a6e9c87c7c16058999750297-480-0.webp",
    "description": "Mini merenguitos bañados con cobertura de chocolate con leche.",
    "tags": [
      "Chocolate",
      "Merengue"
    ],
    "status": "listed"
  },
  {
    "id": "almendras-choco",
    "name": "Almendras bañadas con chocolate",
    "category": "chocolates",
    "categoryName": "Bañados en chocolate",
    "pack": "Estuche x100 g",
    "price": 8500,
    "source": "https://alfajoresmerengo.com/productos/almendras-banadas-con-chocolate-x-100-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/almendras1-ef53415efd95b2194216061778173452-480-0.webp",
    "description": "Almendras enteras recubiertas de chocolate, en estuche de 100 gramos.",
    "tags": [
      "Chocolate",
      "Almendras"
    ],
    "status": "listed"
  },
  {
    "id": "pasas-choco",
    "name": "Pasas de uva al chocolate",
    "category": "chocolates",
    "categoryName": "Bañados en chocolate",
    "pack": "Estuche x100 g",
    "price": 6000,
    "source": "https://alfajoresmerengo.com/productos/pasas-de-uva-al-chocolate-x-100-grs1/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/sin-titulo-11-c982ddb33cc325341f16061784443597-480-0.webp",
    "description": "Pasas de uva recubiertas con chocolate con leche. Estuche de 100 gramos.",
    "tags": [
      "Chocolate",
      "Pasas de uva"
    ],
    "status": "listed"
  },
  {
    "id": "garrapinada",
    "name": "Garrapiñada de maní",
    "category": "confituras",
    "categoryName": "Confituras",
    "pack": "Estuche x100 g",
    "price": 3500,
    "source": "https://alfajoresmerengo.com/productos/garrapinada-de-mani-x-100-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/garrapinadas1-576524dc68e49a682516061778436583-480-0.webp",
    "description": "Maní entero cubierto con azúcar acaramelada, presentación de 100 gramos.",
    "tags": [
      "Crocante",
      "Maní"
    ],
    "status": "listed"
  },
  {
    "id": "bombones-fruta",
    "name": "Bombones de fruta",
    "category": "confituras",
    "categoryName": "Confituras",
    "pack": "Estuche x100 g",
    "price": 6000,
    "source": "https://alfajoresmerengo.com/productos/bombones-de-fruta-x-100-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/bombones-de-fruta1-738e450f2d9d01c4bf16387499074384-480-0.webp",
    "description": "Bombones de fruta con surtido de sabores, en estuche de 100 gramos.",
    "tags": [
      "Frutales",
      "Surtidos"
    ],
    "status": "listed"
  },
  {
    "id": "ddl-familiar",
    "name": "Dulce de leche familiar",
    "category": "dulces",
    "categoryName": "Dulce de leche",
    "pack": "Frasco x400 g",
    "price": 8500,
    "source": "https://alfajoresmerengo.com/productos/dulce-de-leche-familiar-x-400-grs/",
    "image": "https://acdn-us.mitiendanube.com/stores/001/390/554/products/ddl1-e5c87e53f57be9bb3716059003157247-480-0.png",
    "description": "Dulce de leche familiar Merengo, el mismo sabor utilizado en sus tradicionales alfajores.",
    "tags": [
      "Dulce de leche",
      "Frasco"
    ],
    "status": "listed"
  }
];
  window.MOKKA_DELICATESSEN={brand:"Merengo",updated:"2026-11-17",priceKind:"retail_reference",categories,products};
})();

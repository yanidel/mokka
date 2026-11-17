"use strict";
/* MOKKA standalone catalog for preview pages.
 * Values marked reference are market listing snapshots, NOT Mokka selling prices.
 * Values marked estimate are editorial/mock commercial proposals, NOT verified offers.
 * The definitive prices and stock of a Tiendanube product MUST be read from its
 * native product object, never from this dataset. Updated 2026-11-17.
 */
(function(){
const brandPhotos={
 "Merengo":"https://acdn-us.mitiendanube.com/stores/001/390/554/products/121-bcd2af953701cf7c6916035891072508-480-0.png",
 "Arocense":"https://elsantafesino.com/wp-content/uploads/ALFAJOR-AROCENSE-1.jpg",
 "Las Dos Rosas":"https://acdn-us.mitiendanube.com/stores/006/727/377/products/diseno-sin-titulo-53-15e15ef16d153cd4ef17627929345099-480-0.webp",
 "Isla del Sabor":"https://acdn.mitiendanube.com/stores/001/147/879/products/9-cd84f162d2a1f80b1b17072577643518-640-0.png",
 "Saboreé":"assets/brands/saboree/alfajores.avif",
 "La Quinta":"https://www.alfajor-argentino.com.ar/116/alfajor-la-quinta-chocolate-blanco.jpg",
 "El Cordobés":"https://www.alfajoreslaquinta.com/wp-content/uploads/pera.jpg",
 "Zafarrancho":"assets/brands/zafarrancho/alfajor.avif",
 "Catamarqueños":"https://cdn.tasteatlas.com/images/products/53d347e7f9244415a2e5afdc189068c3.jpg?mw=670",
 "Tucumanos":"https://alfajoresdeltucuman.com.ar/img/productos/pack-chocolate.webp"
};
const sources={
 merengo:"https://alfajoresmerengo.com/productos/",
 arocense:"https://elsantafesino.com/arocena-ya-esta-lista-para-su-2-fiesta-del-alfajor-arocense-100-santafesino/",
 dosrosas:"https://listado.mercadolibre.com.ar/alfajores-las-dos-rosas",
 isla:"https://www.royalonline.com.ar/productos/la-isla-del-sabor-alf-santafesino-x12-400g/",
 saboree:"https://www.alfajor-argentino.com.ar/p-473_alfajor_sabore",
 quinta:"https://www.alfajoreslaquinta.com/tienda/",
 cordobes:"https://www.alfajoreslaquinta.com/nuestras-marcas/el-cordobes/",
 zaf:"https://miradaargentina.com.ar/contenido/724/esto-es-un-zafarrancho-muy-serio",
 catamarca:"https://www.tasteatlas.com/el-rodeo-alfajor-de-cayote",
 tucuman:"https://alfajoresdeltucuman.com.ar/productos"
};
const products=[
 {id:"mer-box12",brand:"Merengo",name:"Caja de 12 alfajores Merengo",desc:"Presentación por 12 unidades. La composición exacta de la caja y el stock deben confirmarse antes de ofrecer la compra.",textura:[],relleno:[],cobertura:[],source:sources.merengo,region:"Santa Fe",price:28000,priceUnit:"Caja x12",priceStatus:"Precio de venta definido"},
 {id:"mer-s",brand:"Merengo",name:"Santafesino tradicional",desc:"Capas de masa fina y dulce de leche con cobertura blanca de merengue.",textura:["capas"],relleno:["ddl"],cobertura:["merengue"],source:sources.merengo,region:"Santa Fe"},
 {id:"mer-c",brand:"Merengo",name:"Alfajor de chocolate",desc:"Variedad de chocolate de la línea Merengo.",textura:[],relleno:["ddl"],cobertura:["chocolate"],source:sources.merengo,region:"Santa Fe"},
 {id:"aro-r",brand:"Arocense",name:"Especial nuez y ron",desc:"Alfajor artesanal glaseado con nueces; la foto corresponde a la variedad con ron.",textura:[],relleno:[],cobertura:["glaseado"],source:sources.arocense,region:"Arocena, Santa Fe"},
 {id:"dos-s",brand:"Las Dos Rosas",name:"Santafesino de tres tapas",desc:"Tres capas con dulce de leche y baño blanco; producto tradicional de Coronda.",textura:["capas"],relleno:["ddl"],cobertura:["glaseado"],source:"https://acdn-us.mitiendanube.com/stores/006/727/377/products/diseno-sin-titulo-53-15e15ef16d153cd4ef17627929345099-480-0.webp",region:"Coronda, Santa Fe"},
 {id:"isl-s",brand:"Isla del Sabor",name:"Santafesino tradicional",desc:"Alfajor santafesino de Isla del Sabor. Fabricante confirmado para Mokka; la variedad exacta y disponibilidad siguen pendientes de validar.",textura:["capas"],relleno:["ddl"],cobertura:["glaseado"],source:sources.isla,region:"Santa Fe"},
 {id:"sab-m",brand:"Saboreé",name:"Alfajor de maicena",desc:"Variedad de maicena de la línea artesanal rosarina.",textura:["maicena","suave"],relleno:["ddl"],cobertura:[],source:sources.saboree,region:"Rosario, Santa Fe"},
 {id:"sab-me",brand:"Saboreé",name:"Membrillo con merengue",desc:"Variedad con membrillo y merengue, publicada en catálogos de la marca.",textura:[],relleno:["membrillo"],cobertura:["merengue"],source:sources.saboree,region:"Rosario, Santa Fe"},
 {id:"sab-ch",brand:"Saboreé",name:"Chocolate negro",desc:"Versión de chocolate negro de la línea Saboreé.",textura:[],relleno:[],cobertura:["chocolate"],source:sources.saboree,region:"Rosario, Santa Fe"},
 {id:"qui-tr",brand:"La Quinta",name:"Regional de dulce de leche",desc:"Tapas suaves con dulce de leche cremoso y baño de almíbar.",textura:["suave"],relleno:["ddl"],cobertura:["glaseado"],source:"https://www.alfajoreslaquinta.com/producto/dulce-de-leche-x12/",region:"Córdoba"},
 {id:"qui-fr",brand:"La Quinta",name:"Regional de pera o membrillo",desc:"Variedades frutales cordobesas con baño de almíbar.",textura:["suave"],relleno:["membrillo"],cobertura:["glaseado"],source:"https://www.alfajoreslaquinta.com/producto/dulce-de-leche-y-fruta-x12/",region:"Córdoba"},
 {id:"qui-p",brand:"La Quinta",name:"Selección de autor · Pistacho",desc:"Alfajor gourmet de pistacho bañado en chocolate.",textura:[],relleno:["pistacho"],cobertura:["chocolate"],source:"https://www.alfajoreslaquinta.com/todos-los-productos-2/",region:"Córdoba"},
 {id:"cor-p",brand:"El Cordobés",name:"Alfajor de pera",desc:"Relleno regional de pera con baño de almíbar.",textura:[],relleno:["membrillo"],cobertura:["glaseado"],source:sources.cordobes,region:"Córdoba"},
 {id:"cor-m",brand:"El Cordobés",name:"Alfajor de membrillo",desc:"Relleno de membrillo con baño de almíbar.",textura:[],relleno:["membrillo"],cobertura:["glaseado"],source:sources.cordobes,region:"Córdoba"},
 {id:"cor-d",brand:"El Cordobés",name:"Alfajor de dulce de leche",desc:"Variedad clásica de dulce de leche de la familia de La Quinta.",textura:[],relleno:["ddl"],cobertura:["glaseado"],source:sources.cordobes,region:"Córdoba"},
 {id:"zaf-n",brand:"Zafarrancho",name:"Chocolate con dulce de leche",desc:"Baño de chocolate y relleno de dulce de leche.",textura:[],relleno:["ddl"],cobertura:["chocolate"],source:sources.zaf,region:"Argentina"},
 {id:"zaf-b",brand:"Zafarrancho",name:"Chocolate blanco con dulce de leche",desc:"Variedad bañada en chocolate blanco y rellena de dulce de leche.",textura:[],relleno:["ddl"],cobertura:["blanco"],source:sources.zaf,region:"Argentina"},
 {id:"cat-c",brand:"Catamarqueños",name:"Ejemplo regional: cayote · El Rodeo",desc:"Referencia de la región: alfajor de cayote de El Rodeo. No confirma que Mokka venda este fabricante.",textura:[],relleno:["cayote"],cobertura:[],source:sources.catamarca,region:"Catamarca",caution:"Referencia regional, proveedor por confirmar"},
 {id:"tuc-ch",brand:"Tucumanos",name:"Ejemplo regional: chocolate · Del Tucumán",desc:"Referencia del fabricante Alfajores del Tucumán: dulce de leche bañado en chocolate.",textura:[],relleno:["ddl"],cobertura:["chocolate"],source:sources.tucuman,region:"Tucumán",caution:"Referencia regional, proveedor por confirmar"},
 {id:"tuc-me",brand:"Tucumanos",name:"Ejemplo regional: merengue · Del Tucumán",desc:"Referencia del fabricante Alfajores del Tucumán: dulce de leche con merengue italiano.",textura:[],relleno:["ddl"],cobertura:["merengue"],source:sources.tucuman,region:"Tucumán",caution:"Referencia regional, proveedor por confirmar"},
 {id:"tuc-mem",brand:"Tucumanos",name:"Ejemplo regional: membrillo · Del Tucumán",desc:"Referencia del fabricante Alfajores del Tucumán: membrillo con merengue italiano.",textura:[],relleno:["membrillo"],cobertura:["merengue"],source:sources.tucuman,region:"Tucumán",caution:"Referencia regional, proveedor por confirmar"}
];

 const pricing={
  "mer-box12": {
    "price": 28000,
    "pack": "Caja x12",
    "units": 12,
    "priceKind": "defined",
    "priceSource": "https://alfajoresmerengo.com/productos/",
    "priceSourceLabel": "Precio definido por Mokka",
    "marketBenchmark": 27000
  },
  "mer-s": {
    "price": 27000,
    "pack": "Caja x12",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://alfajoresmerengo.com/productos/",
    "priceSourceLabel": "Tienda oficial Merengo"
  },
  "mer-c": {
    "price": 14000,
    "pack": "Caja x6",
    "units": 6,
    "priceKind": "reference",
    "priceSource": "https://alfajoresmerengo.com/productos/",
    "priceSourceLabel": "Tienda oficial Merengo"
  },
  "aro-r": {
    "price": 20000,
    "pack": "Caja x6 (propuesta)",
    "units": 6,
    "priceKind": "estimate",
    "priceSource": "https://elsantafesino.com/arocena-ya-esta-lista-para-su-2-fiesta-del-alfajor-arocense-100-santafesino/",
    "priceSourceLabel": "Referencia del productor sin precio verificable"
  },
  "dos-s": {
    "price": 19000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://listado.mercadolibre.com.ar/alfajores-santafesinos-las-dos-rosas",
    "priceSourceLabel": "Publicaciones de producto, precio no verificable"
  },
  "isl-s": {
    "price": 12850,
    "pack": "Caja x12",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://www.miflor.com.ar/alfajores/alfajor-santafesino-isla-del-sabor-12un",
    "priceSourceLabel": "Mi Flor Friendly · precio publicado sin descuento"
  },
  "sab-m": {
    "price": 15000,
    "pack": "Caja x6",
    "units": 6,
    "priceKind": "reference",
    "priceSource": "https://saboree.online/productos",
    "priceSourceLabel": "Sitio Saboreé (valor histórico; confirmar vigencia)"
  },
  "sab-me": {
    "price": 15000,
    "pack": "Caja x6",
    "units": 6,
    "priceKind": "reference",
    "priceSource": "https://saboree.online/productos",
    "priceSourceLabel": "Sitio Saboreé (valor histórico; confirmar vigencia)"
  },
  "sab-ch": {
    "price": 15000,
    "pack": "Caja x6",
    "units": 6,
    "priceKind": "reference",
    "priceSource": "https://saboree.online/productos",
    "priceSourceLabel": "Sitio Saboreé (valor histórico; confirmar vigencia)"
  },
  "qui-tr": {
    "price": 23000,
    "pack": "Caja x12",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://www.alfajoreslaquinta.com/tienda/",
    "priceSourceLabel": "Tienda oficial La Quinta"
  },
  "qui-fr": {
    "price": 21000,
    "pack": "Caja x12",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://www.alfajoreslaquinta.com/tienda/",
    "priceSourceLabel": "Tienda oficial La Quinta (regionales con fruta)"
  },
  "qui-p": {
    "price": 18000,
    "pack": "Caja x4",
    "units": 4,
    "priceKind": "reference",
    "priceSource": "https://www.alfajoreslaquinta.com/tienda/",
    "priceSourceLabel": "Tienda oficial La Quinta · selección de autor"
  },
  "cor-p": {
    "price": 22000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://www.alfajoreslaquinta.com/nuestras-marcas/el-cordobes/",
    "priceSourceLabel": "Marca/variedad confirmada, precio no publicado"
  },
  "cor-m": {
    "price": 22000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://www.alfajoreslaquinta.com/nuestras-marcas/el-cordobes/",
    "priceSourceLabel": "Marca/variedad confirmada, precio no publicado"
  },
  "cor-d": {
    "price": 22000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://www.alfajoreslaquinta.com/nuestras-marcas/el-cordobes/",
    "priceSourceLabel": "Marca/variedad confirmada, precio no publicado"
  },
  "zaf-n": {
    "price": 21000,
    "pack": "Estuche x12",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://www.zafarrancho.ar/alfajores/",
    "priceSourceLabel": "Tienda oficial Zafarrancho · Negro x12"
  },
  "zaf-b": {
    "price": 13000,
    "pack": "Estuche x6",
    "units": 6,
    "priceKind": "reference",
    "priceSource": "https://www.zafarrancho.ar/alfajores/",
    "priceSourceLabel": "Tienda oficial Zafarrancho · Blanco x6"
  },
  "cat-c": {
    "price": 25000,
    "pack": "Caja x12 de El Rodeo (ejemplo)",
    "units": 12,
    "priceKind": "reference",
    "priceSource": "https://alfajoreselrodeo.com.ar/rodeo/productos/",
    "priceSourceLabel": "El Rodeo · marca ilustrativa, fabricante Mokka no confirmado"
  },
  "tuc-ch": {
    "price": 24000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://alfajoresdeltucuman.com.ar/productos",
    "priceSourceLabel": "Fabricante de referencia; no es el proveedor confirmado"
  },
  "tuc-me": {
    "price": 24000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://alfajoresdeltucuman.com.ar/productos",
    "priceSourceLabel": "Fabricante de referencia; no es el proveedor confirmado"
  },
  "tuc-mem": {
    "price": 24000,
    "pack": "Caja x12 (propuesta)",
    "units": 12,
    "priceKind": "estimate",
    "priceSource": "https://alfajoresdeltucuman.com.ar/productos",
    "priceSourceLabel": "Fabricante de referencia; no es el proveedor confirmado"
  }
};
 products.forEach(p=>{
   const spec=pricing[p.id];
   if(!spec)throw Error("Missing pricing metadata for "+p.id);
   Object.assign(p,spec);
 });
 window.MOKKA_CATALOG={brandPhotos,sources,products,updated:"2026-11-17"};
})();

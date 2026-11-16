"use strict";
/* MOKKA — catálogo investigado (test). No afirmar SKUs, stock, precios ni disponibilidad. 
   Cada registro es una VARIEDAD documentada o un ejemplo regional etiquetado. */
const brandPhotos={
 "Merengo":"https://acdn-us.mitiendanube.com/stores/001/390/554/products/121-bcd2af953701cf7c6916035891072508-480-0.png",
 "Arocense":"https://elsantafesino.com/wp-content/uploads/ALFAJOR-AROCENSE-1.jpg",
 "Las Dos Rosas":"https://acdn-us.mitiendanube.com/stores/006/727/377/products/diseno-sin-titulo-53-15e15ef16d153cd4ef17627929345099-480-0.webp",
 "La Isla":"https://acdn.mitiendanube.com/stores/001/147/879/products/9-cd84f162d2a1f80b1b17072577643518-640-0.png",
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
 {id:"mer-s",brand:"Merengo",name:"Santafesino tradicional",desc:"Capas de masa fina y dulce de leche con cobertura blanca de merengue.",textura:["capas"],relleno:["ddl"],cobertura:["merengue"],source:sources.merengo,region:"Santa Fe"},
 {id:"mer-c",brand:"Merengo",name:"Alfajor de chocolate",desc:"Variedad de chocolate de la línea Merengo.",textura:[],relleno:["ddl"],cobertura:["chocolate"],source:sources.merengo,region:"Santa Fe"},
 {id:"aro-r",brand:"Arocense",name:"Especial nuez y ron",desc:"Alfajor artesanal glaseado con nueces; la foto corresponde a la variedad con ron.",textura:[],relleno:[],cobertura:["glaseado"],source:sources.arocense,region:"Arocena, Santa Fe"},
 {id:"dos-s",brand:"Las Dos Rosas",name:"Santafesino de tres tapas",desc:"Tres capas con dulce de leche y baño blanco; producto tradicional de Coronda.",textura:["capas"],relleno:["ddl"],cobertura:["glaseado"],source:"https://acdn-us.mitiendanube.com/stores/006/727/377/products/diseno-sin-titulo-53-15e15ef16d153cd4ef17627929345099-480-0.webp",region:"Coronda, Santa Fe"},
 {id:"isl-s",brand:"La Isla",name:"Santafesino — La Isla del Sabor",desc:"Ejemplo documentado de alfajor santafesino; confirmar que esta sea la misma marca del proveedor.",textura:["capas"],relleno:["ddl"],cobertura:["glaseado"],source:sources.isla,region:"Santa Fe",caution:"Marca por confirmar"},
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
/* "membrillo" es una etiqueta de búsqueda para rellenos frutales, incluida pera. */
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const prefs={textura:new Set(),relleno:new Set(),cobertura:new Set()};
let brandFilter="";
let searchFilter="";
let saved=[];
try{const cache=JSON.parse(localStorage.getItem("mokkaResearchSelectionV1")||"[]");if(Array.isArray(cache))saved=cache.filter(id=>products.some(p=>p.id===id));}catch(e){saved=[];}
let toastTimer;
function notify(message){const node=$("#toast");node.textContent=message;node.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove("show"),2500);}
function cleanText(s){return String(s||"").toLocaleLowerCase("es-AR").normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function persist(){try{localStorage.setItem("mokkaResearchSelectionV1",JSON.stringify(saved))}catch(e){}renderCart();}
function renderCart(){
  const cart=$("#cart-items");if(!cart)return;
  $("#cart-count").textContent=saved.length;$("#cart-count").hidden=saved.length===0;
  cart.innerHTML=saved.length?saved.map(id=>{const p=products.find(p=>p.id===id);return p?'<div class="cart-line"><div><strong>'+p.brand+' — '+p.name+'</strong><small>Favorito del catálogo de prueba · sin precio</small><button type="button" data-remove="'+id+'">Quitar</button></div></div>':""}).join(""):'<div class="empty-products">Todavía no guardaste variedades. Elegí las que más te tienten.</div>';
  $("#cart-total").textContent=String(saved.length);
  $$("[data-remove]").forEach(btn=>btn.addEventListener("click",()=>{saved=saved.filter(id=>id!==btn.dataset.remove);persist();renderProducts();}));
}
function addToCart(id){const p=products.find(p=>p.id===id);if(!p)return;if(saved.includes(id)){saved=saved.filter(x=>x!==id);notify("Quitado de tus favoritos");}else{saved.push(id);notify("Agregado a tus favoritos ♡");}persist();renderProducts();}
function matches(p){
  if(brandFilter&&p.brand!==brandFilter)return false;
  if(searchFilter&&!cleanText([p.brand,p.name,p.desc,p.region,...p.textura,...p.relleno,...p.cobertura].join(" ")).includes(cleanText(searchFilter)))return false;
  return Object.entries(prefs).every(([group,selected])=>!selected.size||[...selected].some(option=>p[group].includes(option)));
}
function rank(p){return Object.entries(prefs).reduce((n,[group,s])=>n+[...s].filter(a=>p[group].includes(a)).length,0)}
function renderProducts(){
  const matchesList=products.filter(matches).sort((a,b)=>rank(b)-rank(a));
  const grid=$("#products-grid");
  grid.innerHTML=matchesList.length?matchesList.map(p=>{
    const tags=[...p.textura,...p.relleno,...p.cobertura].map(t=>({"capas":"Capas finas","suave":"Suave","maicena":"Maicena","ddl":"Dulce de leche","membrillo":"Frutal / membrillo","cayote":"Cayote","pistacho":"Pistacho","chocolate":"Chocolate","blanco":"Chocolate blanco","merengue":"Merengue","glaseado":"Glaseado / almíbar"}[t]||t)).filter((v,i,a)=>a.indexOf(v)===i);
    return '<article class="product-card"><div class="product-photo"><img src="'+brandPhotos[p.brand]+'" loading="lazy" alt="Imagen de referencia para '+p.brand+'" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'photo-unavailable\')"><span class="product-tag">Foto de referencia</span></div>'+
      '<div class="product-body"><span class="product-brand">'+p.brand+' · '+p.region+'</span><h3 class="product-title">'+p.name+'</h3><p class="product-desc">'+p.desc+'</p>'+
      '<div class="trait-list">'+tags.map(t=>'<span>'+t+'</span>').join("")+'</div>'+
      (p.caution?'<p class="catalog-caution">'+p.caution+'</p>':"")+
      '<div class="product-bottom"><a class="source-link" href="'+p.source+'" rel="noopener noreferrer" target="_blank">Ver fuente ↗</a><button type="button" class="add-cart" data-add="'+p.id+'">'+(saved.includes(p.id)?"♥ Guardado":"♡ Guardar")+'</button></div>'+
      '</div></article>';
  }).join(""):'<div class="empty-products"><h3>No encontramos una coincidencia exacta</h3><p>Probá con menos filtros o una combinación diferente.</p><button type="button" class="btn btn-navy" id="empty-reset">Ver todas las variedades →</button></div>';
  $$("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.add)));
  if($("#empty-reset"))$("#empty-reset").addEventListener("click",resetFilters);
  const count=Object.values(prefs).reduce((n,s)=>n+s.size,0);
  const filters=[brandFilter?"Marca: "+brandFilter:"",count?count+" preferencias":"",searchFilter?"Búsqueda: "+searchFilter:""].filter(Boolean);
  const chip=$("#active-filter");chip.hidden=!filters.length;chip.textContent=filters.join(" · ");
  $("#catalog-subtitle").textContent=matchesList.length+" variedades documentadas"+(filters.length?" que coinciden con tu elección":" para explorar")+". Sin precios ni stock confirmados.";
  $$(".brand-card").forEach(btn=>btn.classList.toggle("selected",btn.dataset.brand===brandFilter));
}
function scrollCatalog(){document.getElementById("alfajores").scrollIntoView({behavior:"smooth",block:"start"});}
function resetFilters(){
  brandFilter="";searchFilter="";Object.values(prefs).forEach(s=>s.clear());
  $$(".preference").forEach(btn=>btn.setAttribute("aria-pressed","false"));
  $("#site-search").value="";renderProducts();
}
$$(".brand-card").forEach(btn=>btn.addEventListener("click",()=>{brandFilter=brandFilter===btn.dataset.brand?"":btn.dataset.brand;renderProducts();scrollCatalog();}));
$$(".preference").forEach(btn=>btn.addEventListener("click",()=>{
 const group=btn.dataset.group,val=btn.dataset.preference,set=prefs[group];if(!set)return;
 if(set.has(val))set.delete(val);else set.add(val);
 btn.setAttribute("aria-pressed",String(set.has(val)));
}));
$("#see-matches").addEventListener("click",()=>{brandFilter="";renderProducts();scrollCatalog();if(!Object.values(prefs).some(s=>s.size))notify("Elegí una opción o explorá todas las variedades.");});
$("#clear-preferences").addEventListener("click",()=>{Object.values(prefs).forEach(s=>s.clear());$$(".preference").forEach(b=>b.setAttribute("aria-pressed","false"));renderProducts();});
$("#reset-filters").addEventListener("click",resetFilters);
$("#all-brands").addEventListener("click",resetFilters);
function showSearch(open){$("#search-box").hidden=!open;if(open)$("#site-search").focus();}
$("#search-toggle").addEventListener("click",()=>showSearch($("#search-box").hidden));
$("#search-close").addEventListener("click",()=>showSearch(false));
$("#site-search").addEventListener("input",e=>{searchFilter=e.target.value.trim();renderProducts();});
$("#site-search").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();scrollCatalog();}});
$("#menu-toggle").addEventListener("click",()=>{$("#mobile-nav").hidden=!$("#mobile-nav").hidden;});
$$("#mobile-nav a").forEach(a=>a.addEventListener("click",()=>{$("#mobile-nav").hidden=true;}));
function showCart(open){$("#cart-drawer").classList.toggle("open",open);$("#cart-drawer").setAttribute("aria-hidden",String(!open));$("#cart-backdrop").hidden=!open;document.body.style.overflow=open?"hidden":"";}
$$(".cart-toggle").forEach(b=>b.addEventListener("click",()=>showCart(true)));
$("#cart-close").addEventListener("click",()=>showCart(false));
$("#cart-backdrop").addEventListener("click",()=>showCart(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){showCart(false);showSearch(false);$("#mobile-nav").hidden=true;}});
$("#demo-checkout").textContent="Cerrar mi selección";
$("#demo-checkout").addEventListener("click",()=>showCart(false));
$("#newsletter").addEventListener("submit",e=>{e.preventDefault();$("#news-status").textContent="Formulario ilustrativo: no se guardan ni envían datos.";e.target.reset();});
renderProducts();renderCart();

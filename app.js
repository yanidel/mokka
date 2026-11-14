"use strict";

// CATÁLOGO DE DEMOSTRACIÓN. Reemplazar por productos, precios, fotos y atributos reales de Tiendanube.
const IMG_A="https://images.unsplash.com/photo-1648821994613-6fdbad6657ba?auto=format&fit=crop&w=950&q=85";
const IMG_B="https://images.unsplash.com/photo-1690988109082-893ae8bfff4c?auto=format&fit=crop&w=950&q=85";
const IMG_C="https://images.unsplash.com/photo-1757522744922-1708afba3917?auto=format&fit=crop&w=950&q=85";
const IMG_ZAF="assets/brands/zafarrancho/alfajor.avif";
const IMG_SANTA="assets/brands/santafesino/alfajor.avif";
const IMG_SABO="assets/brands/saboree/alfajores.avif";
const products=[
  {id:"m1",brand:"Merengo",name:"Clásico de chocolate",description:"Chocolate y dulce de leche, una combinación irresistible.",price:5900,img:IMG_A,position:"50% 45%",tags:["chocolate","relleno","esponjoso"],sticker:"Un clásico"},
  {id:"z1",brand:"Zafarrancho",name:"Tentación de dulce de leche",description:"Para los fanáticos del relleno generoso.",price:6400,img:IMG_ZAF,position:"50% 50%",tags:["relleno","chocolate"],sticker:"Mucho relleno"},
  {id:"q1",brand:"La Quinta",name:"Suave y esponjoso",description:"Un bocado tierno para acompañar el café.",price:5300,img:IMG_C,position:"50% 50%",tags:["esponjoso","especial"],sticker:"Bien suave"},
  {id:"e1",brand:"Entre Dos",name:"Chocolate intenso",description:"Para quienes disfrutan cada capa de chocolate.",price:6900,img:IMG_A,position:"70% 45%",tags:["chocolate","especial"],sticker:"Chocolatoso"},
  {id:"h1",brand:"Havanna",name:"Dulce de leche clásico",description:"El sabor tradicional de los alfajores argentinos.",price:6500,img:IMG_B,position:"65% 50%",tags:["relleno","esponjoso"],sticker:"Favorito"},
  {id:"m2",brand:"Merengo",name:"Bocado con merengue",description:"Textura delicada y un toque dulce diferente.",price:6200,img:IMG_C,position:"25% 60%",tags:["merengue","especial","esponjoso"],sticker:"Con merengue"},
  {id:"z2",brand:"Zafarrancho",name:"Extra chocolate",description:"Intenso, tentador y lleno de sabor.",price:6700,img:IMG_ZAF,position:"25% 60%",tags:["chocolate","relleno"],sticker:"Extra chocolate"},
  {id:"q2",brand:"La Quinta",name:"Especial de la casa",description:"Un giro original para probar algo distinto.",price:6300,img:IMG_C,position:"75% 55%",tags:["especial","merengue"],sticker:"Para descubrir"},
  {id:"s1",brand:"Saborée",name:"Surtido de alfajores",description:"Tres estilos irresistibles en una misma selección.",price:6300,img:IMG_SABO,position:"50% 50%",tags:["relleno","especial","esponjoso"],sticker:"Para descubrir"},
  {id:"sf1",brand:"Santafesino",name:"Alfajor glaseado santafesino",description:"Capas delicadas con relleno de dulce de leche y baño blanco.",price:5300,img:IMG_SANTA,position:"50% 50%",tags:["relleno","especial"],sticker:"Regional"}
];
const price=n=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(n);
const prefs=new Set();
let brandFilter="";
let searchFilter="";
let cart={};
try{const saved=JSON.parse(localStorage.getItem("mokkaCartDemo")||"{}");if(saved&&typeof saved==="object"&&!Array.isArray(saved))cart=saved;}catch(e){cart={};}
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
let toastTimer;
function notify(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2700);}
function findProduct(id){return products.find(p=>p.id===id);}
function safeCart(){return Object.entries(cart).filter(([id,qty])=>findProduct(id)&&Number.isInteger(qty)&&qty>0&&qty<=99);}
function saveCart(){localStorage.setItem("mokkaCartDemo",JSON.stringify(cart));renderCart();}
function renderCart(){
  const lines=safeCart();const count=lines.reduce((n,[,q])=>n+q,0);
  $("#cart-count").textContent=count;$("#cart-count").hidden=count===0;
  $("#cart-items").innerHTML=lines.length?lines.map(([id,qty])=>{
    const p=findProduct(id);
    return '<div class="cart-line"><div><strong>'+p.brand+' — '+p.name+'</strong><small>'+qty+' × '+price(p.price)+' (demo)</small><button type="button" data-remove="'+id+'">Quitar del carrito</button></div><strong>'+price(p.price*qty)+'</strong></div>';
  }).join(""):'<div class="empty-products">Tu carrito todavía está vacío.<br>¡Hay muchos alfajores para descubrir! ♡</div>';
  const total=lines.reduce((n,[id,qty])=>n+findProduct(id).price*qty,0);
  $("#cart-total").textContent=price(total);
  $$("[data-remove]").forEach(b=>b.addEventListener("click",()=>{delete cart[b.dataset.remove];saveCart();}));
}
function addToCart(id){if(!findProduct(id))return;cart[id]=Math.min(99,(cart[id]||0)+1);saveCart();notify("¡Agregado al carrito de prueba! ♥");}
function matches(p){if(brandFilter&&p.brand!==brandFilter)return false;if(searchFilter&&!(p.brand+" "+p.name+" "+p.description+" "+p.tags.join(" ")).toLocaleLowerCase("es-AR").includes(searchFilter))return false;if(prefs.size&&![...prefs].some(tag=>p.tags.includes(tag)))return false;return true;}
function rank(p){return [...prefs].reduce((n,tag)=>n+(p.tags.includes(tag)?1:0),0);}
function renderProducts(){
  const selected=products.filter(matches).sort((a,b)=>rank(b)-rank(a));
  $("#products-grid").innerHTML=selected.length?selected.map(p=>
  '<article class="product-card">'+
    '<div class="product-photo"><img loading="lazy" src="'+p.img+'" alt="Fotografía ilustrativa de alfajores" style="object-position:'+p.position+'"><span class="product-tag">'+p.sticker+'</span></div>'+
    '<div class="product-body"><span class="product-brand">'+p.brand+'</span><h3 class="product-title">'+p.name+'</h3><p class="product-desc">'+p.description+'</p><div class="product-bottom"><strong>'+price(p.price)+'</strong><button type="button" class="add-cart" data-add="'+p.id+'">+ Agregar</button></div></div>'+
  '</article>').join(""):'<div class="empty-products"><h3>No encontramos una coincidencia exacta ♡</h3><p>Probá con otra marca o cambiá tus preferencias.</p><button type="button" class="btn btn-navy" id="empty-reset">Ver todos los alfajores →</button></div>';
  $$("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.add)));
  if($("#empty-reset"))$("#empty-reset").addEventListener("click",resetFilters);
  const filters=[brandFilter?"Marca: "+brandFilter:"",prefs.size?("Preferencias: "+prefs.size):"",searchFilter?'Búsqueda: "'+searchFilter+'"':""].filter(Boolean);
  const chip=$("#active-filter");chip.hidden=!filters.length;chip.textContent=filters.join(" · ");
  $("#catalog-subtitle").textContent=filters.length?selected.length+" producto(s) de ejemplo que coinciden con tu elección.":"Una selección de productos de ejemplo para conocer el estilo de Mokka.";
  $$(".brand-card").forEach(btn=>btn.classList.toggle("selected",btn.dataset.brand===brandFilter));
}
function scrollCatalog(){document.getElementById("alfajores").scrollIntoView({behavior:"smooth",block:"start"});}
function resetFilters(){brandFilter="";searchFilter="";prefs.clear();$$(".preference").forEach(b=>b.setAttribute("aria-pressed","false"));$("#site-search").value="";renderProducts();}
$$(".brand-card").forEach(btn=>btn.addEventListener("click",()=>{brandFilter=brandFilter===btn.dataset.brand?"":btn.dataset.brand;renderProducts();scrollCatalog();}));
$$(".preference").forEach(btn=>btn.addEventListener("click",()=>{const v=btn.dataset.preference;if(prefs.has(v))prefs.delete(v);else prefs.add(v);btn.setAttribute("aria-pressed",String(prefs.has(v)));}));
$("#see-matches").addEventListener("click",()=>{brandFilter="";renderProducts();scrollCatalog();if(!prefs.size)notify("Elegí una opción para encontrar tu favorito.");});
$("#clear-preferences").addEventListener("click",()=>{prefs.clear();$$(".preference").forEach(btn=>btn.setAttribute("aria-pressed","false"));renderProducts();});
$("#reset-filters").addEventListener("click",resetFilters);
$("#all-brands").addEventListener("click",resetFilters);
function showSearch(open){$("#search-box").hidden=!open;if(open)$("#site-search").focus();}
$("#search-toggle").addEventListener("click",()=>showSearch($("#search-box").hidden));
$("#search-close").addEventListener("click",()=>{showSearch(false);});
$("#site-search").addEventListener("input",e=>{searchFilter=e.target.value.trim().toLocaleLowerCase("es-AR");renderProducts();});
$("#site-search").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();scrollCatalog();}});
$("#menu-toggle").addEventListener("click",()=>{$("#mobile-nav").hidden=!$("#mobile-nav").hidden;});
$$("#mobile-nav a").forEach(a=>a.addEventListener("click",()=>{$("#mobile-nav").hidden=true;}));
function showCart(open){$("#cart-drawer").classList.toggle("open",open);$("#cart-drawer").setAttribute("aria-hidden",String(!open));$("#cart-backdrop").hidden=!open;document.body.style.overflow=open?"hidden":"";}
$$(".cart-toggle").forEach(b=>b.addEventListener("click",()=>showCart(true)));
$("#cart-close").addEventListener("click",()=>showCart(false));
$("#cart-backdrop").addEventListener("click",()=>showCart(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){showCart(false);showSearch(false);$("#mobile-nav").hidden=true;}});
$("#demo-checkout").addEventListener("click",()=>notify("Esta es una tienda de prueba. No se aceptan pedidos todavía."));
$("#newsletter").addEventListener("submit",e=>{e.preventDefault();$("#news-status").textContent="¡Gracias! Este formulario es ilustrativo y no guarda ni envía tu email.";e.target.reset();});
renderProducts();renderCart();

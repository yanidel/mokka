"use strict";
/* MOKKA — catálogo investigado (test). No afirmar SKUs, stock, precios ni disponibilidad. 
   Cada registro es una VARIEDAD documentada o un ejemplo regional etiquetado. */
const {brandPhotos,sources,products}=window.MOKKA_CATALOG;
/* "membrillo" es una etiqueta de búsqueda para rellenos frutales, incluida pera. */
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const prefs={textura:new Set(),relleno:new Set(),cobertura:new Set()};
let brandFilter="";
let searchFilter="";
const requestedBrand=new URLSearchParams(window.location.search).get("marca");
if(requestedBrand&&products.some(p=>p.brand===requestedBrand))brandFilter=requestedBrand;
function syncBrandURL(){
  const url=new URL(window.location.href);
  if(brandFilter)url.searchParams.set("marca",brandFilter);
  else url.searchParams.delete("marca");
  window.history.replaceState(null,"",url.pathname+url.search+url.hash);
}
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
    const details="producto.html?id="+encodeURIComponent(p.id);
    const kind=p.priceKind==="defined"?"Precio Mokka definido":p.priceKind==="reference"?"Referencia online":"Precio estimado";
    return '<article class="product-card"><a class="product-photo" href="'+details+'" aria-label="Ver detalle de '+p.name+'"><img src="'+brandPhotos[p.brand]+'" loading="lazy" alt="Imagen de referencia para '+p.brand+'" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'photo-unavailable\')"><span class="product-tag">Foto de referencia</span></a>'+
      '<div class="product-body"><span class="product-brand">'+p.brand+' · '+p.region+'</span><h3 class="product-title"><a href="'+details+'">'+p.name+'</a></h3><p class="product-desc">'+p.desc+'</p>'+
      '<div class="trait-list">'+tags.map(t=>'<span>'+t+'</span>').join("")+'</div>'+
      (p.caution?'<p class="catalog-caution">'+p.caution+'</p>':"")+
      '<div class="product-known-price"><strong>'+new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(p.price)+'</strong><span>'+p.pack+'</span></div>'+
      '<div class="price-status price-status--'+p.priceKind+'">'+kind+'</div>'+
      '<div class="product-bottom"><a class="product-detail-link" href="'+details+'">Ver detalle ↗</a><button type="button" class="add-cart" data-add="'+p.id+'">'+(saved.includes(p.id)?"♥ Guardado":"♡ Guardar")+'</button></div>'+
      '</div></article>';
  }).join(""):'<div class="empty-products"><h3>No encontramos una coincidencia exacta</h3><p>Probá con menos filtros o una combinación diferente.</p><button type="button" class="btn btn-navy" id="empty-reset">Ver todas las variedades →</button></div>';
  $$("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.add)));
  if($("#empty-reset"))$("#empty-reset").addEventListener("click",resetFilters);
  const count=Object.values(prefs).reduce((n,s)=>n+s.size,0);
  const filters=[brandFilter?"Marca: "+brandFilter:"",count?count+" preferencias":"",searchFilter?"Búsqueda: "+searchFilter:""].filter(Boolean);
  const chip=$("#active-filter");chip.hidden=!filters.length;chip.textContent=filters.join(" · ");
  $("#catalog-subtitle").textContent=matchesList.length+" presentaciones"+(filters.length?" que coinciden con tu elección":" para descubrir")+". Precios comparativos de referencia o estimados; el stock de Mokka sigue pendiente de confirmación.";
  $$(".brand-card").forEach(btn=>btn.classList.toggle("selected",btn.dataset.brand===brandFilter));
}
function scrollCatalog(){document.getElementById("alfajores").scrollIntoView({behavior:"smooth",block:"start"});}
function resetFilters(){
  brandFilter="";syncBrandURL();searchFilter="";Object.values(prefs).forEach(s=>s.clear());
  $$(".preference").forEach(btn=>btn.setAttribute("aria-pressed","false"));
  $("#site-search").value="";renderProducts();
}
$$(".brand-card").forEach(btn=>btn.addEventListener("click",()=>{brandFilter=brandFilter===btn.dataset.brand?"":btn.dataset.brand;syncBrandURL();renderProducts();scrollCatalog();}));
$$(".preference").forEach(btn=>btn.addEventListener("click",()=>{
 const group=btn.dataset.group,val=btn.dataset.preference,set=prefs[group];if(!set)return;
 if(set.has(val))set.delete(val);else set.add(val);
 btn.setAttribute("aria-pressed",String(set.has(val)));
}));
$("#see-matches").addEventListener("click",()=>{brandFilter="";syncBrandURL();renderProducts();scrollCatalog();if(!Object.values(prefs).some(s=>s.size))notify("Elegí una opción o explorá todas las variedades.");});
$("#clear-preferences").addEventListener("click",()=>{Object.values(prefs).forEach(s=>s.clear());$$(".preference").forEach(b=>b.setAttribute("aria-pressed","false"));renderProducts();});
$("#reset-filters").addEventListener("click",resetFilters);
$("#all-brands").addEventListener("click",resetFilters);
function showSearch(open){$("#search-box").hidden=!open;if(open)$("#site-search").focus();}
$("#search-toggle").addEventListener("click",()=>showSearch($("#search-box").hidden));
$("#search-close").addEventListener("click",()=>showSearch(false));
$("#site-search").addEventListener("input",e=>{searchFilter=e.target.value.trim();renderProducts();});
$("#site-search").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();scrollCatalog();}});
function showCart(open){$("#cart-drawer").classList.toggle("open",open);$("#cart-drawer").setAttribute("aria-hidden",String(!open));$("#cart-backdrop").hidden=!open;document.body.style.overflow=open?"hidden":"";}
$$(".cart-toggle").forEach(b=>b.addEventListener("click",()=>showCart(true)));
$("#cart-close").addEventListener("click",()=>showCart(false));
$("#cart-backdrop").addEventListener("click",()=>showCart(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){showCart(false);showSearch(false);}});
$("#demo-checkout").textContent="Cerrar mi selección";
$("#demo-checkout").addEventListener("click",()=>showCart(false));
$("#newsletter").addEventListener("submit",e=>{e.preventDefault();$("#news-status").textContent="Formulario ilustrativo: no se guardan ni envían datos.";e.target.reset();});
renderProducts();renderCart();

"use strict";
/* Mokka Delicatessen — Merengo non-alfajor catalogue preview.
   Public Merengo retail prices are references, not Mokka's selling prices. */
(function(){
  const data=window.MOKKA_DELICATESSEN;
  const $=q=>document.querySelector(q);
  if(!data||!$("#deli-product-grid"))return;
  const {products,categories}=data;
  const params=new URLSearchParams(window.location.search);
  const categoryIDs=new Set(categories.map(c=>c.id));
  let category=categoryIDs.has(params.get("categoria"))?params.get("categoria"):"all";
  let query="";
  const money=value=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(value);
  const safe=t=>String(t??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const grid=$("#deli-product-grid");
  function render(){
    const selected=categories.find(c=>c.id===category);
    const search=query.toLocaleLowerCase("es-AR").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    const list=products.filter(p=>(category==="all"||p.category===category)&&[p.name,p.pack,p.categoryName,...p.tags].join(" ").toLocaleLowerCase("es-AR").normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(search));
    $("#deli-filter-title").textContent=selected?.name||"Todos los productos";
    $("#deli-filter-description").textContent=selected?.description||"Once productos Merengo de cuatro categorías, sin alfajores.";
    $("#deli-result-count").textContent=list.length+" "+(list.length===1?"producto":"productos");
    document.querySelectorAll(".deli-category-pill").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.category===category)));
    grid.innerHTML=list.length?list.map(p=>{
      const detail="delicatessen-producto.html?id="+encodeURIComponent(p.id);
      return '<article class="deli-product-card">'+
        '<a class="deli-product-image" href="'+detail+'" aria-label="Ver '+safe(p.name)+'">'+
          '<img src="'+safe(p.image)+'" alt="Producto Merengo: '+safe(p.name)+'" loading="lazy" decoding="async">'+
          '<span class="deli-product-image-label">Merengo</span></a>'+
        '<div class="deli-product-card-body">'+
          '<div class="deli-product-eyebrow">MERENGO · '+safe(p.categoryName)+'</div>'+
          '<h4><a href="'+detail+'">'+safe(p.name)+'</a></h4>'+
          '<p class="deli-product-pack">'+safe(p.pack)+'</p>'+
          '<p class="deli-product-description">'+safe(p.description)+'</p>'+
          '<div class="deli-product-tags">'+p.tags.map(t=>'<span>'+safe(t)+'</span>').join("")+'</div>'+
          '<div class="deli-product-price">'+money(p.price)+'<small>Precio online Merengo · referencia</small></div>'+
          '<a class="deli-product-details-link" href="'+detail+'">Ver producto <span aria-hidden="true">↗</span></a>'+
        '</div></article>';
    }).join(""):'<div class="deli-empty"><h4>No hay coincidencias.</h4><p>Probá con otra categoría o ingrediente.</p><button type="button" id="deli-clear-search">Mostrar todos</button></div>';
    grid.querySelectorAll(".deli-product-image img").forEach(img=>img.addEventListener("error",()=>{img.hidden=true;img.parentElement.classList.add("photo-unavailable")},{once:true}));
    const clear=$("#deli-clear-search");
    if(clear)clear.addEventListener("click",()=>{category="all";query="";$("#deli-product-search").value="";render()});
  }
  document.querySelectorAll(".deli-category-pill").forEach(button=>button.addEventListener("click",()=>{
    category=button.dataset.category;
    const url=new URL(location.href);
    if(category==="all")url.searchParams.delete("categoria");else url.searchParams.set("categoria",category);
    history.replaceState(null,"",url.pathname+url.search+url.hash);
    render();
  }));
  $("#deli-product-search").addEventListener("input",e=>{query=e.target.value.trim();render()});
  render();
})();

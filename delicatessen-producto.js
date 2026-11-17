"use strict";
/* Delicatessen product details: Merengo food and Zafarrancho accessories.
   Prices displayed are manufacturer retail references; Mokka has no checkout here. */
(function(){
  const merengo=window.MOKKA_DELICATESSEN?.products||[];
  const zafarrancho=window.MOKKA_ZAFARRANCHO_EXTRAS?.products||[];
  const all=[...merengo,...zafarrancho];
  const $=s=>document.querySelector(s);
  const p=all.find(x=>x.id===new URLSearchParams(location.search).get("id"));
  const money=n=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(n);
  const safe=t=>String(t??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  if(!p){$("#deli-detail-not-found").hidden=false;return;}
  const brand=p.brand||"Merengo";
  $("#deli-detail-content").hidden=false;
  $("#deli-detail-crumb").textContent=p.name;
  $("#deli-detail-brand").textContent=brand.toLocaleUpperCase("es-AR");
  $("#deli-detail-category").textContent=p.categoryName;
  $("#deli-detail-name").textContent=p.name;
  $("#deli-detail-pack").textContent=p.pack;
  $("#deli-detail-text").textContent=p.description;
  $("#deli-detail-price").textContent=money(p.price);
  $("#deli-detail-source").href=p.source;
  $("#deli-detail-source").textContent="Ver fotos y precio oficial en "+brand+" ↗";
  $("#deli-detail-pricing-note").textContent="Precio minorista publicado por "+brand+" · referencia, no precio de Mokka.";
  $("#deli-detail-tags").innerHTML=p.tags.map(t=>'<span>'+safe(t)+'</span>').join("");
  document.title=p.name+" | "+brand+" · Mokka";
  document.querySelector('meta[name="description"]').content=(p.name+". "+p.description+" "+p.pack).slice(0,155);
  const img=$("#deli-detail-image"),fallback=$("#deli-detail-photo-placeholder");
  function noPhoto(){
    img.hidden=true;
    fallback.hidden=false;
    $("#deli-detail-emoji").textContent=p.photoIcon||"📦";
    $("#deli-detail-photo-note").textContent="Ver imágenes auténticas en el enlace a "+brand+".";
  }
  if(p.image){
    img.src=p.image;
    img.alt=p.name+" — fotografía de "+brand;
    img.addEventListener("error",noPhoto,{once:true});
  }else noPhoto();
  const related=all.filter(a=>a.id!==p.id&&(a.brand||"Merengo")===brand)
    .sort((a,b)=>Number(b.category===p.category)-Number(a.category===p.category)).slice(0,4);
  $("#deli-related-title").textContent="Más de "+brand+".";
  $("#deli-related-grid").innerHTML=related.map(q=>{
    const href="delicatessen-producto.html?id="+encodeURIComponent(q.id);
    const photo=q.image?'<img src="'+safe(q.image)+'" loading="lazy" alt="'+safe(q.name)+'">':'<span class="deli-merch-related-icon" aria-hidden="true">'+safe(q.photoIcon||"📦")+'</span>';
    return '<a href="'+href+'" class="deli-related-item">'+
      '<span class="deli-related-image">'+photo+'</span>'+
      '<span class="deli-related-info"><small>'+safe(brand.toLocaleUpperCase("es-AR"))+' · '+safe(q.categoryName)+'</small>'+
      '<strong>'+safe(q.name)+'</strong><span>'+safe(q.pack)+'</span>'+
      '<b>'+money(q.price)+'</b><em>Ver detalle ↗</em></span></a>';
  }).join("");
  document.querySelectorAll(".deli-related-image img").forEach(image=>image.addEventListener("error",()=>{image.hidden=true;image.parentElement.classList.add("photo-unavailable")},{once:true}));
})();

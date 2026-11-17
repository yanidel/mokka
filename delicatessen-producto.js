"use strict";
/* Merengo Delicatessen product detail preview. No Mokka stock, selling prices or checkout. */
(function(){
  const data=window.MOKKA_DELICATESSEN;
  const $=s=>document.querySelector(s);
  const p=data?.products.find(x=>x.id===new URLSearchParams(location.search).get("id"));
  const money=v=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(v);
  const safe=t=>String(t??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  if(!p){$("#deli-detail-not-found").hidden=false;return;}
  $("#deli-detail-content").hidden=false;
  $("#deli-detail-crumb").textContent=p.name;
  $("#deli-detail-category").textContent=p.categoryName;
  $("#deli-detail-name").textContent=p.name;
  $("#deli-detail-pack").textContent=p.pack;
  $("#deli-detail-text").textContent=p.description;
  $("#deli-detail-price").textContent=money(p.price);
  $("#deli-detail-source").href=p.source;
  $("#deli-detail-tags").innerHTML=p.tags.map(t=>'<span>'+safe(t)+'</span>').join("");
  document.title=p.name+" | Merengo · Mokka";
  document.querySelector('meta[name="description"]').content=(p.name+". "+p.description+" "+p.pack).slice(0,155);
  const img=$("#deli-detail-image");img.src=p.image;img.alt=p.name+" — presentación del fabricante Merengo";
  img.addEventListener("error",()=>{img.hidden=true;img.parentElement.classList.add("photo-unavailable")},{once:true});
  const related=data.products.filter(a=>a.id!==p.id).sort((a,b)=>Number(b.category===p.category)-Number(a.category===p.category)).slice(0,4);
  $("#deli-related-grid").innerHTML=related.map(q=>{
    const href="delicatessen-producto.html?id="+encodeURIComponent(q.id);
    return '<a href="'+href+'" class="deli-related-item">'+
      '<span class="deli-related-image"><img src="'+safe(q.image)+'" loading="lazy" alt="'+safe(q.name)+'"></span>'+
      '<span class="deli-related-info"><small>MERENGO · '+safe(q.categoryName)+'</small>'+
      '<strong>'+safe(q.name)+'</strong><span>'+safe(q.pack)+'</span>'+
      '<b>'+money(q.price)+'</b><em>Ver detalle ↗</em></span></a>';
  }).join("");
  document.querySelectorAll(".deli-related-image img").forEach(image=>image.addEventListener("error",()=>{image.hidden=true;image.parentElement.classList.add("photo-unavailable")},{once:true}));
})();

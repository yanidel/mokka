"use strict";
/* Mokka's standalone editorial PDP preview. Native checkout belongs to Tiendanube. */
(function(){
  const db=window.MOKKA_CATALOG;
  const $=sel=>document.querySelector(sel);
  const all=db?.products||[];
  const id=new URLSearchParams(window.location.search).get("id");
  const p=all.find(product=>product.id===id);
  const money=n=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(n);
  const statusCopy={
    defined:"Precio definido por Mokka",
    reference:"Precio publicado por otra tienda",
    estimate:"Precio estimado para Mokka · no verificado"
  };
  const descriptions={
    defined:"Precio definido previamente para el proyecto Mokka. IVA incluido en la caja Merengo x12. El stock y la oferta de Tiendanube siguen pendientes.",
    reference:"Referencia pública de otro vendedor o fabricante. No implica que Mokka ofrezca este precio ni que el paquete esté en stock.",
    estimate:"Precio y tamaño del paquete propuestos para el prototipo. No existe cotización comercial confirmada para este artículo."
  };
  function elementText(selector,value){const node=$(selector);if(node)node.textContent=value}
  const content=$("#detail-content"),notFound=$("#detail-not-found");
  if(!p){notFound.hidden=false;return}
  content.hidden=false;
  const fullName=p.brand+" · "+p.name;
  document.title=fullName+" | Mokka";
  const description=p.desc+" Presentación: "+p.pack+". Precio "+(p.priceKind==="estimate"?"estimado":p.priceKind==="reference"?"de referencia":"definido para el prototipo")+".";
  document.querySelector('meta[name="description"]').content=description.slice(0,155);
  elementText("#detail-breadcrumb-name",p.name);
  elementText("#detail-origin",p.brand+" · "+p.region);
  elementText("#detail-title",p.name);
  elementText("#detail-summary",p.desc);
  elementText("#detail-price",money(p.price));
  elementText("#detail-pack",p.pack);
  const status=$("#detail-price-class");
  status.textContent=statusCopy[p.priceKind];
  status.className="detail-price-class detail-price-class--"+p.priceKind;
  elementText("#detail-price-warning",descriptions[p.priceKind]+(p.caution?" "+p.caution:""));
  const ref=$("#detail-source");
  if(p.priceSource){ref.href=p.priceSource;ref.textContent=p.priceKind==="defined"?"Comparar con la tienda oficial ↗":"Fuente de referencia: "+p.priceSourceLabel+" ↗";}
  else{ref.hidden=true}
  const image=$("#detail-image");
  image.src=db.brandPhotos[p.brand];
  image.alt="Fotografía ilustrativa de "+p.brand+". No necesariamente muestra "+p.name;
  image.addEventListener("error",()=>{
    image.hidden=true;image.parentElement.classList.add("photo-unavailable");
  },{once:true});
  // Exactly the same vocabulary and data groups as the "Tu alfajor ideal" finder.
  const attributeGroups=[
    {key:"textura",label:"1. La textura",values:{suave:["☁️","Suave"],capas:["🥮","Capas finas"],maicena:["🍪","Maicena"]}},
    {key:"relleno",label:"2. El relleno",values:{ddl:["🍯","Dulce de leche"],membrillo:["🍐","Membrillo o fruta"],cayote:["🌿","Cayote"],pistacho:["🌰","Pistacho"]}},
    {key:"cobertura",label:"3. La cobertura",values:{chocolate:["🍫","Chocolate"],blanco:["🤍","Chocolate blanco"],merengue:["🥚","Merengue"],glaseado:["✨","Glaseado / almíbar"]}}
  ];
  const attributesContainer=$("#detail-traits");
  attributeGroups.forEach(group=>{
    const section=document.createElement("section");
    section.className="detail-attribute-group";
    const heading=document.createElement("h3");
    heading.textContent=group.label;
    section.append(heading);
    const values=document.createElement("div");
    values.className="detail-attribute-values";
    const known=[...new Set(Array.isArray(p[group.key])?p[group.key]:[])].filter(key=>group.values[key]);
    if(known.length){
      for(const key of known){
        const tag=document.createElement("span");
        tag.className="detail-attribute-tag";
        const emoji=document.createElement("span");
        emoji.className="detail-attribute-emoji";
        emoji.setAttribute("aria-hidden","true");
        emoji.textContent=group.values[key][0];
        tag.append(emoji,document.createTextNode(group.values[key][1]));
        values.append(tag);
      }
    }else{
      const unknown=document.createElement("span");
      unknown.className="detail-attribute-missing";
      unknown.textContent="Por confirmar";
      values.append(unknown);
    }
    section.append(values);
    attributesContainer.append(section);
  });
  const qty=$("#detail-quantity"),total=$("#detail-total");
  function updateQty(next){
    let q=Number(next);
    if(!Number.isFinite(q))q=1;
    q=Math.max(1,Math.min(99,Math.round(q)));
    qty.value=q;total.textContent=money(p.price*q);
  }
  $("#detail-minus").addEventListener("click",()=>updateQty(+qty.value-1));
  $("#detail-plus").addEventListener("click",()=>updateQty(+qty.value+1));
  qty.addEventListener("input",()=>updateQty(qty.value));
  updateQty(1);
  let favorites=[];
  try{
    const raw=JSON.parse(localStorage.getItem("mokkaResearchSelectionV1")||"[]");
    if(Array.isArray(raw))favorites=raw.filter(x=>all.some(p=>p.id===x));
  }catch(_error){favorites=[]}
  const save=$("#detail-save"),feedback=$("#detail-feedback");
  const labelSave=()=>save.textContent=favorites.includes(id)?"♥ Guardado en favoritos":"♡ Guardar entre favoritos";
  labelSave();
  save.addEventListener("click",()=>{
    if(favorites.includes(id))favorites=favorites.filter(x=>x!==id);else favorites.push(id);
    try{localStorage.setItem("mokkaResearchSelectionV1",JSON.stringify(favorites));feedback.textContent="Preferencias guardadas solo en este navegador."}
    catch(_error){feedback.textContent="El navegador no permitió guardar esta selección."}
    labelSave();
  });
  // No per-SKU Tiendanube URL exists yet. Link to a verified store catalog only.
  const storeURL=typeof MOKKA_TIENDANUBE_CATALOG_URL==="string"?MOKKA_TIENDANUBE_CATALOG_URL.trim():"";
  if(storeURL){
    try{
      const url=new URL(storeURL);
      if(url.protocol==="https:"){
        const source=new URL(window.location.href);
        ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gbraid","wbraid","fbclid"].forEach(k=>{
          if(source.searchParams.has(k)&&!url.searchParams.has(k))url.searchParams.set(k,source.searchParams.get(k));
        });
        const link=$("#detail-shop");link.hidden=false;link.href=url.href;$("#detail-buy-unavailable").hidden=true;
        link.firstChild.textContent="Explorar en Tiendanube ";
        $("#detail-shop-status").textContent="Los precios mostrados son del prototipo. El valor de compra y stock definitivos serán los de Tiendanube.";
      }
    }catch(_error){/* Keep demo-only state */}
  }
  const candidates=[...all].filter(other=>other.id!==id).sort((a,b)=>{
    const score=a=>(a.brand===p.brand?2:0)+(
      [...p.relleno,...p.cobertura].some(t=>[...a.relleno,...a.cobertura].includes(t))?1:0);
    return score(b)-score(a);
  }).slice(0,4);
  $("#detail-related").innerHTML=candidates.map(other=>{
    const href="producto.html?id="+encodeURIComponent(other.id);
    return '<a class="detail-related-card" href="'+href+'"><div class="detail-related-photo"><img loading="lazy" src="'+db.brandPhotos[other.brand]+'" alt="Referencia '+other.brand+'"></div><div class="detail-related-copy"><small>'+other.brand+'</small><strong>'+other.name+'</strong><span>'+money(other.price)+' · '+other.pack+'</span></div></a>';
  }).join("");
})();

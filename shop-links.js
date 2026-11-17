"use strict";
/* Mokka -> Tiendanube storefront bridge.
 * Set MOKKA_TIENDANUBE_CATALOG_URL to Mokka's actual store/catalog URL once live.
 * Empty = leave the existing non-checkout demo catalog destination in place.
 * DO NOT use the Tiendanube URL of another business.
 */
const MOKKA_TIENDANUBE_CATALOG_URL = "";

(function(){
  const current = new URL(window.location.href);
  let store = null;
  if(MOKKA_TIENDANUBE_CATALOG_URL.trim()){
    try{
      const candidate=new URL(MOKKA_TIENDANUBE_CATALOG_URL.trim());
      if(candidate.protocol==="https:")store=candidate;
    }catch(_error){store=null}
  }
  document.querySelectorAll("a[data-shop-link]").forEach(link=>{
    if(!store)return;
    const destination=new URL(store.href);
    // Preserve campaign attribution when crossing domains into Tiendanube.
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gbraid","wbraid","fbclid"].forEach(key=>{
      if(current.searchParams.has(key)&&!destination.searchParams.has(key)){
        destination.searchParams.set(key,current.searchParams.get(key));
      }
    });
    link.href=destination.href;
    link.dataset.shopConnected="true";
  });
})();

"use strict";
/* Mokka website lead instrumentation.
 * One dataLayer event per click; no phone numbers, WhatsApp message text,
 * addresses, or other personal information is sent in event parameters.
 * Requires a Mokka-owned Google Tag Manager/GA4 tag to send data externally.
 * Do not reuse analytics IDs from another business.
 */
(function(){
  const EVENT="mokka_whatsapp_click";
  function pageSection(){
    const body=document.body;
    if(body.classList.contains("rosario-page"))return "rosario";
    if(body.classList.contains("delicatessen-page"))return "delicatessen";
    if(body.classList.contains("gifts-page"))return "regalos";
    return "alfajores_y_dulces";
  }
  function placement(link){
    if(link.dataset.waPlacement)return link.dataset.waPlacement;
    if(link.classList.contains("whatsapp-float"))return "floating_button";
    if(link.closest(".rosario-hero"))return "rosario_hero";
    if(link.closest(".rosario-cta"))return "rosario_cta";
    if(link.closest(".rosario-faq"))return "rosario_pickup";
    if(link.closest(".editorial-hero"))return "hero";
    return "content";
  }
  function isWhatsapp(link){
    try{
      const host=new URL(link.href,document.baseURI).hostname.toLowerCase();
      return host==="wa.me"||host==="www.wa.me"||host==="api.whatsapp.com"||host==="web.whatsapp.com";
    }catch(_error){return false}
  }
  document.addEventListener("click",function(event){
    const target=event.target;
    if(!target||typeof target.closest!=="function")return;
    const link=target.closest("a[href]");
    if(!link||!isWhatsapp(link))return;
    const parameters={
      button_location:placement(link),
      page_section:pageSection(),
      delivery_zone:link.dataset.deliveryZone||"not_selected"
    };
    window.dataLayer=window.dataLayer||[];
    // Google Tag Manager Custom Event trigger: mokka_whatsapp_click
    window.dataLayer.push({event:EVENT,...parameters});
    // If this site uses a direct GA4 Google tag instead of GTM, send the
    // same logical event through gtag. Do not install both GA4 methods.
    const hasGtm=window.google_tag_manager&&
      Object.keys(window.google_tag_manager).some(key=>key.indexOf("GTM-")===0);
    if(typeof window.gtag==="function"&&!hasGtm){
      window.gtag("event","whatsapp_click",parameters);
    }
  },true);
})();

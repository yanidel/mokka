"use strict";
// Interaction for Mokka's informational pages. No data is transmitted.
const menuButton=document.getElementById("menu-toggle");
const mobileNav=document.getElementById("mobile-nav");
function setMenu(open){
  if(!menuButton||!mobileNav)return;
  mobileNav.hidden=!open;
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
}
if(menuButton&&mobileNav){
  menuButton.addEventListener("click",()=>setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
}
const inquiryForm=document.getElementById("gift-inquiry-form");
if(inquiryForm){
  const type=document.getElementById("gift-type");
  const quantity=document.getElementById("gift-quantity");
  const occasion=document.getElementById("gift-occasion");
  const status=document.getElementById("gift-form-status");
  const optionBySection={"regalos":"Regalo personal","cestas":"Cesta gourmet","instituciones":"Empresa o institución"};
  document.querySelectorAll(".offering-link").forEach(a=>a.addEventListener("click",()=>{
    const value=optionBySection[a.closest(".offering-card")?.id];
    if(value)type.value=value;
  }));
  inquiryForm.addEventListener("submit",async e=>{
    e.preventDefault();
    if(!inquiryForm.reportValidity())return;
    const qty=Number(quantity.value);
    if(!Number.isInteger(qty)||qty<1||qty>100000){
      status.textContent="Ingresá una cantidad válida.";return;
    }
    const copy=["Consulta para Mokka","Tipo: "+type.value,"Cantidad aproximada: "+qty,
      "Ocasión o idea: "+(occasion.value.trim()||"A definir")].join("\n");
    let copied=false;
    try{
      if(navigator.clipboard&&window.isSecureContext){
        await navigator.clipboard.writeText(copy);copied=true;
      }
    }catch(_error){copied=false;}
    if(!copied){
      const temp=document.createElement("textarea");
      temp.value=copy;temp.style.position="fixed";temp.style.left="-10000px";
      document.body.append(temp);temp.select();
      try{copied=document.execCommand("copy")}catch(_error){copied=false}
      temp.remove();
    }
    if(copied){
      status.textContent="Consulta copiada. Este sitio no la envió ni guardó.";
    }else{
      status.textContent="No se pudo copiar automáticamente. Seleccioná y copiá el texto mostrado debajo.";
      let output=document.getElementById("gift-copy-output");
      if(!output){
        output=document.createElement("textarea");
        output.id="gift-copy-output";output.readOnly=true;output.rows=5;
        output.setAttribute("aria-label","Texto de consulta para copiar");
        inquiryForm.append(output);
      }
      output.value=copy;output.focus();output.select();
    }
  });
}

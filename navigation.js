"use strict";
/* Mokka shared, accessible primary navigation.
   Desktop: hover/focus or chevron click. Mobile: accordion under hamburger.
   Each category name remains a direct link to its landing page. */
(function(){
 const mobileNav=document.getElementById("mobile-nav");
 const hamburger=document.getElementById("menu-toggle");
 const desktopGroups=Array.from(document.querySelectorAll(".mokka-primary-nav [data-nav-group]"));
 const mobileGroups=Array.from(document.querySelectorAll(".mokka-mobile-nav .mobile-nav-group"));
 const desktopMedia=window.matchMedia("(min-width: 851px)");
 function setDesktop(group,open){
   const panel=group.querySelector(".nav-dropdown"),button=group.querySelector(".nav-chevron");
   panel.hidden=!open;
   button.setAttribute("aria-expanded",String(open));
   group.classList.toggle("is-open",open);
 }
 function closeDesktop(except){
   desktopGroups.forEach(group=>{if(group!==except)setDesktop(group,false)});
 }
 desktopGroups.forEach(group=>{
   const btn=group.querySelector(".nav-chevron");
   function open(){
     if(!desktopMedia.matches)return;
     closeDesktop(group);setDesktop(group,true);
   }
   group.addEventListener("pointerenter",event=>{if(event.pointerType==="mouse")open()});
   group.addEventListener("pointerleave",event=>{if(event.pointerType==="mouse")setDesktop(group,false)});
   group.addEventListener("focusin",open);
   group.addEventListener("focusout",event=>{
     if(!group.contains(event.relatedTarget))setDesktop(group,false);
   });
   btn.addEventListener("click",event=>{
     if(!desktopMedia.matches)return;
     const alreadyOpen=!group.querySelector(".nav-dropdown").hidden;
     closeDesktop(group);
     // A mouse hover has already opened the submenu. Do not close it on the click.
     setDesktop(group,event.detail>0?true:!alreadyOpen);
   });
 });
 function setMobileGroup(group,open){
   const btn=group.querySelector(".mobile-nav-chevron"),panel=group.querySelector(".mobile-nav-dropdown");
   panel.hidden=!open;
   btn.setAttribute("aria-expanded",String(open));
   group.classList.toggle("is-open",open);
 }
 function closeMobileGroups(except){
   mobileGroups.forEach(group=>{if(group!==except)setMobileGroup(group,false)});
 }
 mobileGroups.forEach(group=>{
   group.querySelector(".mobile-nav-chevron").addEventListener("click",()=>{
     const open=group.querySelector(".mobile-nav-dropdown").hidden;
     closeMobileGroups(group);
     setMobileGroup(group,open);
   });
 });
 function setMobileMenu(open){
   if(!hamburger||!mobileNav)return;
   mobileNav.hidden=!open;
   hamburger.setAttribute("aria-expanded",String(open));
   hamburger.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
   if(!open)closeMobileGroups();
 }
 if(hamburger&&mobileNav){
   hamburger.addEventListener("click",()=>setMobileMenu(mobileNav.hidden));
   mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMobileMenu(false)));
 }
 document.addEventListener("click",event=>{
   if(!event.target.closest(".mokka-primary-nav"))closeDesktop();
   if(!event.target.closest("#mobile-nav")&&!event.target.closest("#menu-toggle")&&!mobileNav?.hidden)setMobileMenu(false);
 });
 document.addEventListener("keydown",event=>{
   if(event.key==="Escape"){
     closeDesktop();
     setMobileMenu(false);
     if(document.activeElement?.closest(".nav-dropdown")){
       document.activeElement.closest(".nav-group")?.querySelector(".nav-chevron")?.focus();
     }
   }
 });
 window.addEventListener("resize",()=>{
   if(desktopMedia.matches)setMobileMenu(false);
   else closeDesktop();
 });
})();

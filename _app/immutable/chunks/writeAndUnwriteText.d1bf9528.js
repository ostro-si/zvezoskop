import{w as n,t as s}from"./writeEffect.926fb336.js";import{u as w}from"./unwriteEffect.2469016d.js";import{r as f}from"./animationSetup.043b927c.js";const y=async({currentNode:a,text:r},t)=>{await n({currentNode:a,text:r},t);const e=r.replaceAll("&","&amp;");a.innerHTML===e&&(t.dispatch("done","write"),await s(t.wordInterval),await w(a,t),t.dispatch("done","unwrite")),f(a,t.parentElement,i=>{a===i?i.classList.remove("typing"):i.classList.remove("finished-typing")})};export{y as w};

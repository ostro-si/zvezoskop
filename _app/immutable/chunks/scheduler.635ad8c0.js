function S(){}const ct=t=>t;function L(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function M(t){return t()}function lt(){return Object.create(null)}function W(t){t.forEach(M)}function B(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ut(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ft(t){return Object.keys(t).length===0}function D(t,...e){if(t==null){for(const i of e)i(void 0);return S}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t){let e;return D(t,n=>e=n)(),e}function dt(t,e,n){t.$$.on_destroy.push(D(e,n))}function ht(t,e,n,i){if(t){const s=O(t,e,n,i);return t[0](s)}}function O(t,e,n,i){return t[1]&&i?L(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function pt(t,e,n,i,s,c){if(s){const r=O(e,n,i,c);t.p(r,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function gt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function wt(t){const e={};for(const n in t)e[n]=!0;return e}function xt(t,e,n){return t.set(n),e}function kt(t){return t&&B(t.destroy)?t.destroy:S}function vt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let b=!1;function Et(){b=!0}function Nt(){b=!1}function R(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:R(1,s,H=>e[n[H]].claim_order,a))-1;i[o]=n[u]+1;const A=u+1;n[A]=o,s=Math.max(A,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function T(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=v("style");return e.textContent="/* empty */",U(I(t),e),e.sheet}function U(t,e){return T(t.head||t,e),e.sheet}function G(t,e){if(b){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){b&&!n?G(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function J(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function St(){return E(" ")}function Dt(){return E("")}function j(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Q=["width","height"];function V(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Q.indexOf(i)===-1?t[i]=e[i]:N(t,i,e[i])}function Ot(t,e){for(const n in e)N(t,n,e[n])}function X(t,e){Object.keys(e).forEach(n=>{Y(t,n,e[n])})}function Y(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:N(t,e,n)}function Tt(t){return/-/.test(t)?X:V}function zt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Pt(t){return t.dataset.svelteH}function qt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){Z(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function P(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return P(t,e,n,v)}function Lt(t,e,n){return P(t,e,n,K)}function $(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function Mt(t){return $(t," ")}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Bt(t,e){t.value=e??""}function Rt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function tt(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Ft(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=v("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=tt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=j(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=j(i.contentWindow,"resize",e),e()}),T(t,i),()=>{(s||c&&i.contentWindow)&&c(),J(i)}}function It(t,e,n){t.classList.toggle(e,!!n)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ut(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Gt(t,e){return new t(e)}let y;function g(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Jt(t){d().$$.on_mount.push(t)}function Kt(t){d().$$.after_update.push(t)}function Qt(t){d().$$.on_destroy.push(t)}function Vt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Xt(t,e){return d().$$.context.set(t,e),e}function Yt(t){return d().$$.context.get(t)}function Zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],C=[];let _=[];const x=[],q=Promise.resolve();let k=!1;function nt(){k||(k=!0,q.then(st))}function $t(){return nt(),q}function it(t){_.push(t)}function te(t){x.push(t)}const w=new Set;let f=0;function st(){if(f!==0)return;const t=y;do{try{for(;f<h.length;){const e=h[f];f++,g(e),rt(e.$$)}}catch(e){throw h.length=0,f=0,e}for(g(null),h.length=0,f=0;C.length;)C.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];w.has(n)||(w.add(n),n())}_.length=0}while(h.length);for(;x.length;)x.pop()();k=!1,w.clear(),g(t)}function rt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function ee(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Lt as $,xt as A,L as B,V as C,j as D,kt as E,B as F,W as G,gt as H,d as I,bt as J,te as K,Yt as L,S as M,G as N,Zt as O,Bt as P,wt as Q,Ct as R,it as S,ut as T,Ut as U,Pt as V,ot as W,g as X,st as Y,Ft as Z,K as _,St as a,ct as a0,zt as a1,It as a2,Tt as a3,Ot as a4,vt as a5,_t as a6,D as a7,I as a8,At as a9,et as aa,lt as ab,ft as ac,ee as ad,y as ae,M as af,h as ag,nt as ah,Et as ai,Nt as aj,Vt as ak,Kt as b,Mt as c,J as d,Dt as e,v as f,Ht as g,qt as h,jt as i,N as j,Rt as k,E as l,$ as m,Wt as n,Jt as o,C as p,Gt as q,ht as r,at as s,$t as t,pt as u,yt as v,mt as w,dt as x,Xt as y,Qt as z};

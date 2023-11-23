var at=Object.defineProperty;var ct=(t,e,n)=>e in t?at(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(ct(t,typeof e!="symbol"?e+"":e,n),n);import{w as b,r as S,l as O,z as H,B as Q,F,G as ft,H as ut,I as _t,J as dt,K as q,L as ht,M as mt,N as pt}from"./scheduler.1b4b2730.js";const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),I=U?t=>requestAnimationFrame(t):b;const v=new Set;function X(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&I(X)}function Y(t){let e;return v.size===0&&I(X),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let k=!1;function yt(){k=!0}function $t(){k=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&a.push(_)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const c=e[a].claim_order,_=(s>0&&e[n[s]].claim_order<=c?s+1:gt(1,s,m=>e[n[m]].claim_order,c))-1;i[a]=n[_]+1;const f=_+1;n[f]=a,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(l.push(e[a-1]);o>=a;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((a,c)=>a.claim_order-c.claim_order);for(let a=0,c=0;a<r.length;a++){for(;c<l.length&&r[a].claim_order>=l[c].claim_order;)c++;const _=c<l.length?l[c]:null;t.insertBefore(r[a],_)}}function Z(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=z("style");return e.textContent="/* empty */",vt(tt(t),e),e.sheet}function vt(t,e){return Z(t.head||t,e),e.sheet}function bt(t,e){if(k){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function Et(t,e,n){k&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Jt(){return G(" ")}function Kt(){return G("")}function J(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const At=["width","height"];function Tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&At.indexOf(i)===-1?t[i]=e[i]:W(t,i,e[i])}function Qt(t,e){for(const n in e)W(t,n,e[n])}function St(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:W(t,e,n)}function Ut(t){return/-/.test(t)?St:Tt}function Vt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Xt(t){return t.dataset.svelteH}function Lt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){nt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function st(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Yt(t,e,n){return st(t,e,n,z)}function Zt(t,e,n){return st(t,e,n,et)}function Mt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function te(t){return Mt(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function ee(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new R(e);nt(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new R(e);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new R(e,l)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function ie(t,e){t.value=e??""}function se(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let L;function Ht(){if(L===void 0){L=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{L=!0}}return L}function re(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=z("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ht();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=J(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=J(i.contentWindow,"resize",e),e()}),Z(t,i),()=>{(s||l&&i.contentWindow)&&l(),N(i)}}function le(t,e,n){t.classList.toggle(e,!!n)}function Dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function oe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Pt{constructor(e=!1){$(this,"is_svg",!1);$(this,"e");$(this,"n");$(this,"t");$(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=et(n.nodeName):this.e=z(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class R extends Pt{constructor(n=!1,i){super(n);$(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Et(this.t,this.n[i],n)}}function ae(t,e){return new t(e)}const D=new Map;let P=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:xt(e),rules:{}};return D.set(t,n),n}function j(t,e,n,i,s,l,r,o=0){const a=16.666/i;let c=`{
`;for(let h=0;h<=1;h+=a){const y=e+(n-e)*l(h);c+=h*100+`%{${r(y,1-y)}}
`}const _=c+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${o}`,m=tt(t),{stylesheet:p,rules:u}=D.get(m)||kt(m,t);u[f]||(u[f]=!0,p.insertRule(`@keyframes ${f} ${_}`,p.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${i}ms linear ${s}ms 1 both`,P+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||zt())}function zt(){I(()=>{P||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),D.clear())})}let A;function rt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function T(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function ce(){g={r:0,c:[],p:g}}function fe(){g.r||S(g.c),g=g.p}function Rt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt={duration:0};function _e(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,a=0;function c(){r&&B(t,r)}function _(){const{delay:m=0,duration:p=300,easing:u=Q,tick:d=b,css:h}=s||lt;h&&(r=j(t,0,1,p,m,u,h,a++)),d(0,1);const y=V()+m,E=y+p;o&&o.abort(),l=!0,H(()=>T(t,!0,"start")),o=Y(w=>{if(l){if(w>=E)return d(1,0),T(t,!0,"end"),c(),l=!1;if(w>=y){const x=u((w-y)/p);d(x,1-x)}}return l})}let f=!1;return{start(){f||(f=!0,B(t),O(s)?(s=s(i),rt().then(_)):_())},invalidate(){f=!1},end(){l&&(c(),l=!1)}}}function de(t,e,n,i){let l=e(t,n,{direction:"both"}),r=i?0:1,o=null,a=null,c=null,_;function f(){c&&B(t,c)}function m(u,d){const h=u.b-r;return d*=Math.abs(h),{a:r,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function p(u){const{delay:d=0,duration:h=300,easing:y=Q,tick:E=b,css:w}=l||lt,x={start:V()+d,b:u};u||(x.group=g,g.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),o||a?a=x:(w&&(f(),c=j(t,r,u,h,d,y,w)),u&&E(0,1),o=m(x,h),H(()=>T(t,u,"start")),Y(C=>{if(a&&C>a.start&&(o=m(a,h),a=null,T(t,o.b,"start"),w&&(f(),c=j(t,r,o.b,o.duration,0,y,l.css))),o){if(C>=o.end)E(r=o.b,1-r),T(t,o.b,"end"),a||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(C>=o.start){const ot=C-o.start;r=o.a+o.d*y(ot/o.duration),E(r,1-r)}}return!!(o||a)}))}return{run(u){O(l)?rt().then(()=>{l=l({direction:u?"in":"out"}),p(u)}):p(u)},end(){f(),o=a=null}}}function he(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function jt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),H(()=>{const l=t.$$.on_mount.map(ht).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):S(l),t.$$.on_mount=[]}),s.forEach(H)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(_t(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(mt.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,s,l,r=null,o=[-1]){const a=dt;q(t);const c=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,m,...p)=>{const u=p.length?p[0]:m;return c.ctx&&s(c.ctx[f],c.ctx[f]=u)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](u),_&&It(t,f)),m}):[],c.update(),_=!0,S(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){yt();const f=Lt(e.target);c.fragment&&c.fragment.l(f),f.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&Rt(t.$$.fragment),jt(t,e.target,e.anchor),$t(),ft()}q(a)}class $e{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){Bt(this,1),this.$destroy=b}$on(e,n){if(!O(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Gt);export{bt as A,ie as B,qt as C,_e as D,oe as E,Xt as F,le as G,et as H,Zt as I,de as J,Vt as K,re as L,R as M,ee as N,V as O,Y as P,Qt as Q,Ut as R,$e as S,Et as a,fe as b,te as c,Rt as d,Kt as e,N as f,z as g,Yt as h,ye as i,Lt as j,W as k,se as l,G as m,Mt as n,ne as o,ce as p,ae as q,me as r,Jt as s,ue as t,pe as u,jt as v,Bt as w,Tt as x,J as y,he as z};
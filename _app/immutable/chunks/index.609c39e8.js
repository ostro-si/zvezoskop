var D=Object.defineProperty;var T=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,z as b,A as j,l as A,B,C as E,D as O,E as H,F as N,G as I,H as L,I as P}from"./scheduler.bc7ce5a0.js";let $=!1;function z(){$=!0}function F(){$=!1}function G(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function M(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=l?s+1:G(1,s,d=>t[n[d]].claim_order,l))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const c=[],a=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);f>=r;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<c.length&&a[r].claim_order>=c[l].claim_order;)l++;const o=l<c.length?c[l]:null;e.insertBefore(a[r],o)}}function R(e,t){if($){for(M(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function le(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ae(){return x(" ")}function ce(){return x("")}function fe(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const W=["width","height"];function J(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?e[i]=t[i]:g(e,i,t[i])}function ue(e,t){for(const n in t)g(e,n,t[n])}function K(e,t){Object.keys(t).forEach(n=>{Q(e,n,t[n])})}function Q(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:g(e,t,n)}function oe(e){return/-/.test(e)?K:J}function _e(e){return e.dataset.svelteH}function X(e){return Array.from(e.childNodes)}function Y(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,s=!1){Y(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function C(e,t,n,i){return S(e,s=>s.nodeName===t,s=>{const c=[];for(let a=0;a<s.attributes.length;a++){const f=s.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>s.removeAttribute(a))},()=>i(t))}function de(e,t,n){return C(e,t,n,U)}function me(e,t,n){return C(e,t,n,V)}function Z(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function he(e){return Z(e," ")}function $e(e,t){t=""+t,e.data!==t&&(e.data=t)}function pe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ye(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(s)):c===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function xe(e,t){return new e(t)}const m=new Set;let _;function ge(){_={r:0,c:[],p:_}}function we(){_.r||h(_.c),_=_.p}function k(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function be(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ee(e){e&&e.c()}function Ne(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),E(()=>{const c=e.$$.on_mount.map(I).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),s.forEach(E)}function te(e,t){const n=e.$$;n.fragment!==null&&(O(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(L.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,i,s,c,a=null,f=[-1]){const r=H;N(e);const l=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...w)=>{const v=w.length?w[0]:d;return l.ctx&&s(l.ctx[u],l.ctx[u]=v)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](v),o&&ne(e,u)),d}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){z();const u=X(t.target);l.fragment&&l.fragment.l(u),u.forEach(q)}else l.fragment&&l.fragment.c();t.intro&&k(e.$$.fragment),ee(e,t.target,t.anchor),F(),j()}N(r)}class Se{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){te(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);export{oe as A,J as B,fe as C,R as D,be as E,ye as F,_e as G,Se as S,le as a,we as b,he as c,k as d,ce as e,q as f,U as g,de as h,Ae as i,X as j,g as k,pe as l,x as m,Z as n,$e as o,ge as p,xe as q,Ee as r,ae as s,ve as t,Ne as u,ee as v,te as w,V as x,me as y,ue as z};

import{i as Ee,p as Le,d as Ve}from"../chunks/icon-network.956f53d7.js";import{n as Fe,k as N,x as Z,E as De,t as A,F as X,y as Me,G as re,m as Pe}from"../chunks/LocalizedLink.a5da0092.js";import{s as C,p as Te,f as I,a as P,g as E,h as V,d as m,c as T,j as y,T as Ne,i as $,N as L,K as Se,M as U,x as G,l as x,m as ee,W,k as K,D as qe,n as te,e as M,V as Be,S as je,a3 as ze,R as we}from"../chunks/scheduler.e81bebc8.js";import{S as le,i as ie,f as Ye,b as B,d as j,m as z,g as S,t as g,c as q,a as p,e as Y}from"../chunks/index.66277aa9.js";import{b as He,P as Ie}from"../chunks/Scrolly.88b86aec.js";import{l as ne,t as Oe}from"../chunks/translations.8fbb84d2.js";import"../chunks/paths.7b7f4e54.js";import{m as Ae,a as Ge,P as Ce,T as Re,b as Ke}from"../chunks/Timeline.d8ace2ca.js";function Ue(f,e,l){f=+f,e=+e,l=(s=arguments.length)<2?(e=f,f=0,1):s<3?1:+l;for(var t=-1,s=Math.max(0,Math.ceil((e-f)/l))|0,i=new Array(s);++t<s;)i[t]=f+t*l;return i}async function We({params:f}){const{id:e}=f,l=Ee[e],t=l.map(({person_id:n})=>Fe.find(r=>r.id===n)),s=Le.find(({id:n})=>e===n),i=l[0],a=i.institution_si,o=i.institution_en;return{affiliations:l,associatedPeople:t,partyData:s,title_si:a,title_en:o}}const gt=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"}));function ae(f,e,l){const t=f.slice();return t[16]=e[l],t}function fe(f,e,l){const t=f.slice();return t[19]=e[l],t[21]=l,t}function ce(f,e,l){const t=f.slice();return t[19]=e[l],t}function ue(f,e){let l,t="",s;return{key:f,first:null,c(){l=I("div"),l.innerHTML=t,this.h()},l(i){l=E(i,"DIV",{class:!0,"data-svelte-h":!0}),Be(l)!=="svelte-1740ud7"&&(l.innerHTML=t),this.h()},h(){y(l,"class","step svelte-1fi8ud3"),je(()=>e[12].call(l)),W(l,"active",e[19]===e[0]),this.first=l},m(i,a){$(i,l,a),s=ze(l,e[12].bind(l))},p(i,a){e=i,a&9&&W(l,"active",e[19]===e[0])},d(i){i&&m(l),s()}}}function Je(f){let e=[],l=new Map,t,s=N(f[3]);const i=a=>a[19];for(let a=0;a<s.length;a+=1){let o=ce(f,s,a),n=i(o);l.set(n,e[a]=ue(n,o))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=M()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=M()},m(a,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(a,o);$(a,t,o)},p(a,o){o&13&&(s=N(a[3]),e=Z(e,o,i,1,a,s,l,t.parentNode,De,ue,t,ce))},d(a){a&&m(t);for(let o=0;o<e.length;o+=1)e[o].d(a)}}}function _e(f,e){let l,t=e[19]+"",s,i,a,o;function n(){return e[14](e[21])}return{key:f,first:null,c(){l=I("div"),s=x(t),i=P(),this.h()},l(r){l=E(r,"DIV",{class:!0});var c=V(l);s=ee(c,t),i=T(c),c.forEach(m),this.h()},h(){y(l,"class","year svelte-1fi8ud3"),W(l,"selected",+e[19]===e[0]),K(l,"top",`${(e[19]-e[0])*10}vh`),K(l,"opacity",1-Math.abs(e[0]-e[19])*.2),this.first=l},m(r,c){$(r,l,c),L(l,s),L(l,i),a||(o=qe(l,"click",n),a=!0)},p(r,c){e=r,c&8&&t!==(t=e[19]+"")&&te(s,t),c&9&&W(l,"selected",+e[19]===e[0]),c&9&&K(l,"top",`${(e[19]-e[0])*10}vh`),c&9&&K(l,"opacity",1-Math.abs(e[0]-e[19])*.2)},d(r){r&&m(l),a=!1,o()}}}function Qe(f){let e,l=f[5]("None")+"",t;return{c(){e=I("div"),t=x(l),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=V(e);t=ee(i,l),i.forEach(m),this.h()},h(){y(e,"class","placeholder svelte-1fi8ud3")},m(s,i){$(s,e,i),L(e,t)},p(s,i){i&32&&l!==(l=s[5]("None")+"")&&te(t,l)},i:U,o:U,d(s){s&&m(e)}}}function Xe(f){let e=[],l=new Map,t,s,i=N(X(f[4],"person_id"));const a=o=>o[16].person_id;for(let o=0;o<i.length;o+=1){let n=ae(f,i,o),r=a(n);l.set(r,e[o]=me(r,n))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=M()},l(o){for(let n=0;n<e.length;n+=1)e[n].l(o);t=M()},m(o,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(o,n);$(o,t,n),s=!0},p(o,n){n&144&&(i=N(X(o[4],"person_id")),S(),e=Z(e,n,a,1,o,i,l,t.parentNode,Me,me,t,ae),q())},i(o){if(!s){for(let n=0;n<i.length;n+=1)p(e[n]);s=!0}},o(o){for(let n=0;n<e.length;n+=1)g(e[n]);s=!1},d(o){o&&m(t);for(let n=0;n<e.length;n+=1)e[n].d(o)}}}function me(f,e){let l,t,s,i;return t=new Ie({props:{clickable:!0,position:e[16].curr_position,subheading:e[7](e[16]),id:e[16].person_id,name:e[16].person_name,image_link:e[16].image_link,size:"medium",coloredText:!0}}),{key:f,first:null,c(){l=I("div"),B(t.$$.fragment),s=P(),this.h()},l(a){l=E(a,"DIV",{class:!0});var o=V(l);j(t.$$.fragment,o),s=T(o),o.forEach(m),this.h()},h(){y(l,"class","person_label svelte-1fi8ud3"),this.first=l},m(a,o){$(a,l,o),z(t,l,null),L(l,s),i=!0},p(a,o){e=a;const n={};o&16&&(n.position=e[16].curr_position),o&16&&(n.subheading=e[7](e[16])),o&16&&(n.id=e[16].person_id),o&16&&(n.name=e[16].person_name),o&16&&(n.image_link=e[16].image_link),t.$set(n)},i(a){i||(p(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){a&&m(l),Y(t)}}}function pe(f){let e,l,t,s;const i=[Xe,Qe],a=[];function o(n,r){return n[4]?0:1}return l=o(f),t=a[l]=i[l](f),{c(){e=I("div"),t.c(),this.h()},l(n){e=E(n,"DIV",{class:!0});var r=V(e);t.l(r),r.forEach(m),this.h()},h(){y(e,"class","item")},m(n,r){$(n,e,r),a[l].m(e,null),s=!0},p(n,r){let c=l;l=o(n),l===c?a[l].p(n,r):(S(),g(a[c],1,1,()=>{a[c]=null}),q(),t=a[l],t?t.p(n,r):(t=a[l]=i[l](n),t.c()),p(t,1),t.m(e,null))},i(n){s||(p(t),s=!0)},o(n){g(t),s=!1},d(n){n&&m(e),a[l].d()}}}function Ze(f){let e,l,t,s,i,a,o,n,r,c=[],D=new Map,_,h,d=f[0],F;function H(u){f[13](u)}let R={$$slots:{default:[Je]},$$scope:{ctx:f}};f[1]!==void 0&&(R.value=f[1]),l=new He({props:R}),Te.push(()=>Ye(l,"value",H));let O=N(f[3]);const k=u=>u[19];for(let u=0;u<O.length;u+=1){let b=fe(f,O,u),w=k(b);D.set(w,c[u]=_e(w,b))}let v=pe(f);return{c(){e=I("div"),B(l.$$.fragment),s=P(),i=I("img"),o=P(),n=I("div"),r=I("div");for(let u=0;u<c.length;u+=1)c[u].c();_=P(),h=I("div"),v.c(),this.h()},l(u){e=E(u,"DIV",{class:!0});var b=V(e);j(l.$$.fragment,b),b.forEach(m),s=T(u),i=E(u,"IMG",{class:!0,src:!0,alt:!0}),o=T(u),n=E(u,"DIV",{class:!0});var w=V(n);r=E(w,"DIV",{class:!0});var oe=V(r);for(let J=0;J<c.length;J+=1)c[J].l(oe);oe.forEach(m),_=T(w),h=E(w,"DIV",{class:!0});var se=V(h);v.l(se),se.forEach(m),w.forEach(m),this.h()},h(){y(e,"class","scroll-tracker svelte-1fi8ud3"),y(i,"class","icon svelte-1fi8ud3"),Ne(i.src,a=Ve)||y(i,"src",a),y(i,"alt","down"),y(r,"class","left-scroll svelte-1fi8ud3"),y(h,"class","right-scroll svelte-1fi8ud3"),y(n,"class","container svelte-1fi8ud3")},m(u,b){$(u,e,b),z(l,e,null),$(u,s,b),$(u,i,b),$(u,o,b),$(u,n,b),L(n,r);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(r,null);L(n,_),L(n,h),v.m(h,null),F=!0},p(u,[b]){const w={};b&16777229&&(w.$$scope={dirty:b,ctx:u}),!t&&b&2&&(t=!0,w.value=u[1],Se(()=>t=!1)),l.$set(w),b&73&&(O=N(u[3]),c=Z(c,b,k,1,u,O,D,r,De,_e,null,fe)),b&1&&C(d,d=u[0])?(S(),g(v,1,1,U),q(),v=pe(u),v.c(),p(v,1),v.m(h,null)):v.p(u,b)},i(u){F||(p(l.$$.fragment,u),p(v),F=!0)},o(u){g(l.$$.fragment,u),g(v),F=!1},d(u){u&&(m(e),m(s),m(i),m(o),m(n)),Y(l);for(let b=0;b<c.length;b+=1)c[b].d();v.d(u)}}}function xe(f,e,l){let t,s,i;G(f,ne,k=>l(15,s=k)),G(f,Oe,k=>l(5,i=k));let{items:a}=e,o={},n,r,c,D,_,h=[];const d=k=>{window.scrollTo({top:_*k,behavior:"smooth"})},F=k=>{const v=A(k,"position",s),u=A(k,"institution_department",s);return u!=null&&u.length?`${v}, ${u}`:v};console.log("in timeline mobile");function H(){_=this.clientHeight,l(2,_)}function R(k){D=k,l(1,D)}const O=k=>d(k);return f.$$set=k=>{"items"in k&&l(8,a=k.items)},f.$$.update=()=>{f.$$.dirty&3840&&(a.forEach(k=>{for(let v=+k.start_year;v<=+k.end_year;v++)v in o?o[+v].push(k):l(9,o[+v]=[k],o)}),l(10,r=+Ae(Object.keys(o))),l(11,c=+Ge(Object.keys(o))),l(11,c=Math.min(new Date().getFullYear(),c)),l(3,h=Ue(r,c))),f.$$.dirty&1026&&l(0,n=r+D),f.$$.dirty&513&&l(4,t=o[n])},[n,D,_,h,t,i,d,F,a,o,r,c,H,R,O]}class et extends le{constructor(e){super(),ie(this,e,xe,Ze,C,{items:8})}}function he(f,e,l){const t=f.slice();return t[5]=e[l].type,t[6]=e[l].items,t}function de(f,e,l){const t=f.slice();t[10]=e[l].person_id;const s=t[0].find(function(...a){return f[4](t[10],...a)});return t[11]=s,t}function Q(f){const e=f.slice(),l=e[2]!=="si"&&e[6][0].affiliation_type_en?e[6][0].affiliation_type_en:e[5];return e[9]=l,e}function ge(f){let e,l,t=f[9]+"",s,i,a,o,n,r=N(f[6]),c=[];for(let _=0;_<r.length;_+=1)c[_]=ke(de(f,r,_));const D=_=>g(c[_],1,1,()=>{c[_]=null});return{c(){e=I("div"),l=I("div"),s=x(t),i=P(),a=I("div");for(let _=0;_<c.length;_+=1)c[_].c();o=P(),this.h()},l(_){e=E(_,"DIV",{class:!0});var h=V(e);l=E(h,"DIV",{class:!0});var d=V(l);s=ee(d,t),d.forEach(m),i=T(h),a=E(h,"DIV",{class:!0});var F=V(a);for(let H=0;H<c.length;H+=1)c[H].l(F);F.forEach(m),o=T(h),h.forEach(m),this.h()},h(){y(l,"class","left svelte-19yq8gm"),y(a,"class","right svelte-19yq8gm"),y(e,"class","container svelte-19yq8gm")},m(_,h){$(_,e,h),L(e,l),L(l,s),L(e,i),L(e,a);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(a,null);L(e,o),n=!0},p(_,h){if((!n||h&6)&&t!==(t=_[9]+"")&&te(s,t),h&3){r=N(_[6]);let d;for(d=0;d<r.length;d+=1){const F=de(_,r,d);c[d]?(c[d].p(F,h),p(c[d],1)):(c[d]=ke(F),c[d].c(),p(c[d],1),c[d].m(a,null))}for(S(),d=r.length;d<c.length;d+=1)D(d);q()}},i(_){if(!n){for(let h=0;h<r.length;h+=1)p(c[h]);n=!0}},o(_){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)g(c[h]);n=!1},d(_){_&&m(e),we(c,_)}}}function ke(f){let e,l;return e=new Ie({props:{id:f[10],image_link:f[11].image_link,imagePlaceholder:re(f[11].person_name),position:f[11].position,size:"small",clickable:!0}}),{c(){B(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const i={};s&2&&(i.id=t[10]),s&3&&(i.image_link=t[11].image_link),s&3&&(i.imagePlaceholder=re(t[11].person_name)),s&3&&(i.position=t[11].position),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function be(f){let e,l,t=!!f[5]&&ge(Q(f));return{c(){t&&t.c(),e=M()},l(s){t&&t.l(s),e=M()},m(s,i){t&&t.m(s,i),$(s,e,i),l=!0},p(s,i){s[5]?t?(t.p(Q(s),i),i&2&&p(t,1)):(t=ge(Q(s)),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(S(),g(t,1,1,()=>{t=null}),q())},i(s){l||(p(t),l=!0)},o(s){g(t),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function tt(f){let e,l,t,s=N(f[1]),i=[];for(let o=0;o<s.length;o+=1)i[o]=be(he(f,s,o));const a=o=>g(i[o],1,1,()=>{i[o]=null});return{c(){e=I("div"),l=I("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var n=V(e);l=E(n,"DIV",{class:!0});var r=V(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(m),n.forEach(m),this.h()},h(){y(l,"class","outer-container svelte-19yq8gm"),y(e,"class","institution-breakdown mobile-hide svelte-19yq8gm")},m(o,n){$(o,e,n),L(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);t=!0},p(o,[n]){if(n&7){s=N(o[1]);let r;for(r=0;r<s.length;r+=1){const c=he(o,s,r);i[r]?(i[r].p(c,n),p(i[r],1)):(i[r]=be(c),i[r].c(),p(i[r],1),i[r].m(l,null))}for(S(),r=s.length;r<i.length;r+=1)a(r);q()}},i(o){if(!t){for(let n=0;n<s.length;n+=1)p(i[n]);t=!0}},o(o){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)g(i[n]);t=!1},d(o){o&&m(e),we(i,o)}}}function lt(f,e,l){let t,s;G(f,ne,n=>l(2,s=n));let{affiliations:i}=e,{peopleLookup:a}=e;const o=(n,{id:r})=>r===n;return f.$$set=n=>{"affiliations"in n&&l(3,i=n.affiliations),"peopleLookup"in n&&l(0,a=n.peopleLookup)},f.$$.update=()=>{f.$$.dirty&8&&l(1,t=Object.entries(i).map(([n,r])=>({type:n,items:X(r,"person_id")})).sort((n,r)=>n.items.length>r.items.length?-1:1))},[a,t,s,i,o]}class it extends le{constructor(e){super(),ie(this,e,lt,tt,C,{affiliations:3,peopleLookup:0})}}function ve(f){let e,l,t,s;return e=new it({props:{affiliations:f[0].partyData.affiliations,peopleLookup:f[0].associatedPeople}}),t=new Re({}),{c(){B(e.$$.fragment),l=P(),B(t.$$.fragment)},l(i){j(e.$$.fragment,i),l=T(i),j(t.$$.fragment,i)},m(i,a){z(e,i,a),$(i,l,a),z(t,i,a),s=!0},p(i,a){const o={};a&1&&(o.affiliations=i[0].partyData.affiliations),a&1&&(o.peopleLookup=i[0].associatedPeople),e.$set(o)},i(i){s||(p(e.$$.fragment,i),p(t.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),s=!1},d(i){i&&m(l),Y(e,i),Y(t,i)}}}function $e(f){let e,l,t,s;const i=[ot,nt],a=[];function o(n,r){return n[3]==="mobile"?0:1}return e=o(f),l=a[e]=i[e](f),{c(){l.c(),t=M()},l(n){l.l(n),t=M()},m(n,r){a[e].m(n,r),$(n,t,r),s=!0},p(n,r){let c=e;e=o(n),e===c?a[e].p(n,r):(S(),g(a[c],1,1,()=>{a[c]=null}),q(),l=a[e],l?l.p(n,r):(l=a[e]=i[e](n),l.c()),p(l,1),l.m(t.parentNode,t))},i(n){s||(p(l),s=!0)},o(n){g(l),s=!1},d(n){n&&m(t),a[e].d(n)}}}function nt(f){let e,l;return e=new Ke({props:{items:f[0].affiliations,rowGroupingVar:"person_name",getItemLink:rt,getItemLabel:f[4]}}),{c(){B(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),s&1&&(i.getItemLabel=t[4]),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function ot(f){let e,l;return e=new et({props:{items:f[0].affiliations}}),{c(){B(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function ye(f){var n;let e,l,t,s,i;e=new Ce({props:{title:A((n=f[0].affiliations)==null?void 0:n[0],"institution",f[1]),notes:f[2],background:f[3]==="mobile"||f[0].partyData?"#E6E6EB":"#FFF",border:f[3]==="mobile"||f[0].partyData?"#FFF":"#6E7382",hideLegend:!!f[0].partyData}});let a=f[0].partyData&&ve(f),o=f[3]&&$e(f);return{c(){B(e.$$.fragment),l=P(),a&&a.c(),t=P(),o&&o.c(),s=M()},l(r){j(e.$$.fragment,r),l=T(r),a&&a.l(r),t=T(r),o&&o.l(r),s=M()},m(r,c){z(e,r,c),$(r,l,c),a&&a.m(r,c),$(r,t,c),o&&o.m(r,c),$(r,s,c),i=!0},p(r,c){var _;const D={};c&3&&(D.title=A((_=r[0].affiliations)==null?void 0:_[0],"institution",r[1])),c&4&&(D.notes=r[2]),c&9&&(D.background=r[3]==="mobile"||r[0].partyData?"#E6E6EB":"#FFF"),c&9&&(D.border=r[3]==="mobile"||r[0].partyData?"#FFF":"#6E7382"),c&1&&(D.hideLegend=!!r[0].partyData),e.$set(D),r[0].partyData?a?(a.p(r,c),c&1&&p(a,1)):(a=ve(r),a.c(),p(a,1),a.m(t.parentNode,t)):a&&(S(),g(a,1,1,()=>{a=null}),q()),r[3]?o?(o.p(r,c),c&8&&p(o,1)):(o=$e(r),o.c(),p(o,1),o.m(s.parentNode,s)):o&&(S(),g(o,1,1,()=>{o=null}),q())},i(r){i||(p(e.$$.fragment,r),p(a),p(o),i=!0)},o(r){g(e.$$.fragment,r),g(a),g(o),i=!1},d(r){r&&(m(l),m(t),m(s)),Y(e,r),a&&a.d(r),o&&o.d(r)}}}function st(f){let e=f[0].route,l,t,s=ye(f);return{c(){s.c(),l=M()},l(i){s.l(i),l=M()},m(i,a){s.m(i,a),$(i,l,a),t=!0},p(i,[a]){a&1&&C(e,e=i[0].route)?(S(),g(s,1,1,U),q(),s=ye(i),s.c(),p(s,1),s.m(l.parentNode,l)):s.p(i,a)},i(i){t||(p(s),t=!0)},o(i){g(s),t=!1},d(i){i&&m(l),s.d(i)}}}const rt=({person_id:f})=>`/people/${f}`;function at(f,e,l){let t,s;G(f,ne,n=>l(1,t=n)),G(f,Pe,n=>l(3,s=n));let{data:i}=e,a;const o=({person_id:n})=>i.associatedPeople.find(({id:c})=>c===n);return f.$$set=n=>{"data"in n&&l(0,i=n.data)},f.$$.update=()=>{if(f.$$.dirty&3){const n=i.affiliations.map(r=>A(r,"notes_institution",t)).filter(r=>(r==null?void 0:r.length)>0);l(2,a=[...new Set(n)])}},[i,t,a,s,o]}class kt extends le{constructor(e){super(),ie(this,e,at,st,C,{data:0})}}export{kt as component,gt as universal};

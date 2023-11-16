import{s as Ce,q as x,e as B,i as v,d as h,H as $,I as Ee,L as ee,y as Ie,z as Te,B as M,J as ve,p as ye,r as Be,f as ue,a as Se,g as de,h as fe,c as ke,j as ce,u as ze,v as De,w as Re}from"./scheduler.ee120e2c.js";import{S as Ne,i as Fe,b as ae,d as Me,m as te,g as je,t as j,e as ne,c as Ue,a as U}from"./index.4929d3ca.js";import{_ as Pe,c as ie,M as Ve,R,e as N,g as oe,i as C,f as Xe,S as se,h as le}from"./LocalizedLink.17a2872c.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var y={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},m={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He=function(t){Pe(a,t);function a(o){var s=t.call(this,ie(ie({},a.defaultAdapter),o))||this;return s.hasToggledAriaLabel=!1,s}return Object.defineProperty(a,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){var o=this.adapter.getAttr(m.DATA_ARIA_LABEL_ON),s=this.adapter.getAttr(m.DATA_ARIA_LABEL_OFF);if(o&&s){if(this.adapter.getAttr(m.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(m.ARIA_PRESSED,String(this.isOn()))},a.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},a.prototype.isOn=function(){return this.adapter.hasClass(y.ICON_BUTTON_ON)},a.prototype.toggle=function(o){if(o===void 0&&(o=!this.isOn()),o?this.adapter.addClass(y.ICON_BUTTON_ON):this.adapter.removeClass(y.ICON_BUTTON_ON),this.hasToggledAriaLabel){var s=o?this.adapter.getAttr(m.DATA_ARIA_LABEL_ON):this.adapter.getAttr(m.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(m.ARIA_LABEL,s||"")}else this.adapter.setAttr(m.ARIA_PRESSED,""+o)},a}(Ve);function re(t){let a;return{c(){a=ue("div"),this.h()},l(o){a=de(o,"DIV",{class:!0}),fe(a).forEach(h),this.h()},h(){ce(a,"class","mdc-icon-button__touch")},m(o,s){v(o,a,s)},d(o){o&&h(a)}}}function qe(t){let a,o,s,d;const u=t[33].default,l=Be(u,t,t[37],null);let e=t[8]&&re();return{c(){a=ue("div"),o=Se(),l&&l.c(),e&&e.c(),s=B(),this.h()},l(i){a=de(i,"DIV",{class:!0}),fe(a).forEach(h),o=ke(i),l&&l.l(i),e&&e.l(i),s=B(),this.h()},h(){ce(a,"class","mdc-icon-button__ripple")},m(i,r){v(i,a,r),v(i,o,r),l&&l.m(i,r),e&&e.m(i,r),v(i,s,r),d=!0},p(i,r){l&&l.p&&(!d||r[1]&64)&&ze(l,u,i,i[37],d?Re(u,i[37],r,null):De(i[37]),null),i[8]?e||(e=re(),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i(i){d||(U(l,i),d=!0)},o(i){j(l,i),d=!1},d(i){i&&(h(a),h(o),h(s)),l&&l.d(i),e&&e.d(i)}}}function Ye(t){let a,o,s;const d=[{tag:t[14]},{use:[[R,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[29].disabled,addClass:t[26],removeClass:t[27],addStyle:t[28]}],t[22],...t[1]]},{class:N({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[23](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","smui-icon-button--size-mini":t[10]==="mini","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[24]==="card:action","mdc-card__action--icon":t[24]==="card:action","mdc-top-app-bar__navigation-icon":t[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[24]==="top-app-bar:action","mdc-snackbar__dismiss":t[24]==="snackbar:actions","mdc-data-table__pagination-button":t[24]==="data-table:pagination","mdc-data-table__sort-icon-button":t[24]==="data-table:sortable-header-cell","mdc-dialog__close":(t[24]==="dialog:header"||t[24]==="dialog:sheet")&&t[12]==="close",...t[18]})},{style:Object.entries(t[19]).map(F).concat([t[3]]).join(" ")},{"aria-pressed":t[23](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[25]},{href:t[11]},t[21],t[20],t[29]];var u=t[13];function l(e,i){let r={$$slots:{default:[qe]},$$scope:{ctx:e}};if(i!==void 0&&i[0]&1073504255)r=oe(d,[i[0]&16384&&{tag:e[14]},i[0]&1010827314&&{use:[[R,{ripple:e[4],unbounded:!0,color:e[5],disabled:!!e[29].disabled,addClass:e[26],removeClass:e[27],addStyle:e[28]}],e[22],...e[1]]},i[0]&25433861&&{class:N({[e[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!e[23](e[0])&&e[0],"mdc-icon-button--touch":e[8],"mdc-icon-button--display-flex":e[9],"smui-icon-button--size-button":e[10]==="button","smui-icon-button--size-mini":e[10]==="mini","mdc-icon-button--reduced-size":e[10]==="mini"||e[10]==="button","mdc-card__action":e[24]==="card:action","mdc-card__action--icon":e[24]==="card:action","mdc-top-app-bar__navigation-icon":e[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":e[24]==="top-app-bar:action","mdc-snackbar__dismiss":e[24]==="snackbar:actions","mdc-data-table__pagination-button":e[24]==="data-table:pagination","mdc-data-table__sort-icon-button":e[24]==="data-table:sortable-header-cell","mdc-dialog__close":(e[24]==="dialog:header"||e[24]==="dialog:sheet")&&e[12]==="close",...e[18]})},i[0]&524296&&{style:Object.entries(e[19]).map(F).concat([e[3]]).join(" ")},i[0]&8388609&&{"aria-pressed":e[23](e[0])?null:e[0]?"true":"false"},i[0]&193&&{"aria-label":e[0]?e[6]:e[7]},i[0]&64&&{"data-aria-label-on":e[6]},i[0]&128&&{"data-aria-label-off":e[7]},i[0]&33554432&&{"aria-describedby":e[25]},i[0]&2048&&{href:e[11]},i[0]&2097152&&C(e[21]),i[0]&1048576&&C(e[20]),i[0]&536870912&&C(e[29])]);else for(let p=0;p<d.length;p+=1)r=M(r,d[p]);return{props:r}}return u&&(a=x(u,l(t)),t[34](a),a.$on("click",t[35]),a.$on("click",t[36])),{c(){a&&ae(a.$$.fragment),o=B()},l(e){a&&Me(a.$$.fragment,e),o=B()},m(e,i){a&&te(a,e,i),v(e,o,i),s=!0},p(e,i){if(i[0]&8192&&u!==(u=e[13])){if(a){je();const r=a;j(r.$$.fragment,1,0,()=>{ne(r,1)}),Ue()}u?(a=x(u,l(e,i)),e[34](a),a.$on("click",e[35]),a.$on("click",e[36]),ae(a.$$.fragment),U(a.$$.fragment,1),te(a,o.parentNode,o)):a=null}else if(u){const r=i[0]&1073504255?oe(d,[i[0]&16384&&{tag:e[14]},i[0]&1010827314&&{use:[[R,{ripple:e[4],unbounded:!0,color:e[5],disabled:!!e[29].disabled,addClass:e[26],removeClass:e[27],addStyle:e[28]}],e[22],...e[1]]},i[0]&25433861&&{class:N({[e[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!e[23](e[0])&&e[0],"mdc-icon-button--touch":e[8],"mdc-icon-button--display-flex":e[9],"smui-icon-button--size-button":e[10]==="button","smui-icon-button--size-mini":e[10]==="mini","mdc-icon-button--reduced-size":e[10]==="mini"||e[10]==="button","mdc-card__action":e[24]==="card:action","mdc-card__action--icon":e[24]==="card:action","mdc-top-app-bar__navigation-icon":e[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":e[24]==="top-app-bar:action","mdc-snackbar__dismiss":e[24]==="snackbar:actions","mdc-data-table__pagination-button":e[24]==="data-table:pagination","mdc-data-table__sort-icon-button":e[24]==="data-table:sortable-header-cell","mdc-dialog__close":(e[24]==="dialog:header"||e[24]==="dialog:sheet")&&e[12]==="close",...e[18]})},i[0]&524296&&{style:Object.entries(e[19]).map(F).concat([e[3]]).join(" ")},i[0]&8388609&&{"aria-pressed":e[23](e[0])?null:e[0]?"true":"false"},i[0]&193&&{"aria-label":e[0]?e[6]:e[7]},i[0]&64&&{"data-aria-label-on":e[6]},i[0]&128&&{"data-aria-label-off":e[7]},i[0]&33554432&&{"aria-describedby":e[25]},i[0]&2048&&{href:e[11]},i[0]&2097152&&C(e[21]),i[0]&1048576&&C(e[20]),i[0]&536870912&&C(e[29])]):{};i[0]&256|i[1]&64&&(r.$$scope={dirty:i,ctx:e}),a.$set(r)}},i(e){s||(a&&U(a.$$.fragment,e),s=!0)},o(e){a&&j(a.$$.fragment,e),s=!1},d(e){e&&h(o),t[34](null),a&&ne(a,e)}}}const F=([t,a])=>`${t}: ${a};`;function Ge(t,a,o){let s;const d=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","getElement"];let u=$(a,d),{$$slots:l={},$$scope:e}=a;const i=Xe(Ee());let r=()=>{};function p(n){return n===r}let{use:P=[]}=a,{class:V=""}=a,{style:X=""}=a,{ripple:H=!0}=a,{color:q=void 0}=a,{toggle:A=!1}=a,{pressed:O=r}=a,{ariaLabelOn:Y=void 0}=a,{ariaLabelOff:G=void 0}=a,{touch:J=!1}=a,{displayFlex:K=!0}=a,{size:Q="normal"}=a,{href:S=void 0}=a,{action:E=void 0}=a,I,f,c={},L={},g={},T=ee("SMUI:icon-button:context"),be=ee("SMUI:icon-button:aria-describedby"),{component:k=se}=a,{tag:W=k===se?S==null?"button":"a":void 0}=a,z=u.disabled;Ie("SMUI:icon:context","icon-button");let D=null;Te(()=>{f&&f.destroy()});function me(n){return n in c?c[n]:_().classList.contains(n)}function Z(n){c[n]||o(18,c[n]=!0,c)}function w(n){(!(n in c)||c[n])&&o(18,c[n]=!1,c)}function ge(n,b){L[n]!=b&&(b===""||b==null?(delete L[n],o(19,L)):o(19,L[n]=b,L))}function _e(n){var b;return n in g?(b=g[n])!==null&&b!==void 0?b:null:_().getAttribute(n)}function he(n,b){g[n]!==b&&o(20,g[n]=b,g)}function pe(n){o(0,O=n.isOn)}function _(){return I.getElement()}function Ae(n){ye[n?"unshift":"push"](()=>{I=n,o(16,I)})}const Oe=()=>f&&f.handleClick(),Le=()=>T==="top-app-bar:navigation"&&le(_(),"SMUITopAppBarIconButton:nav");return t.$$set=n=>{a=M(M({},a),ve(n)),o(29,u=$(a,d)),"use"in n&&o(1,P=n.use),"class"in n&&o(2,V=n.class),"style"in n&&o(3,X=n.style),"ripple"in n&&o(4,H=n.ripple),"color"in n&&o(5,q=n.color),"toggle"in n&&o(30,A=n.toggle),"pressed"in n&&o(0,O=n.pressed),"ariaLabelOn"in n&&o(6,Y=n.ariaLabelOn),"ariaLabelOff"in n&&o(7,G=n.ariaLabelOff),"touch"in n&&o(8,J=n.touch),"displayFlex"in n&&o(9,K=n.displayFlex),"size"in n&&o(10,Q=n.size),"href"in n&&o(11,S=n.href),"action"in n&&o(12,E=n.action),"component"in n&&o(13,k=n.component),"tag"in n&&o(14,W=n.tag),"$$scope"in n&&o(37,e=n.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4096&&o(21,s=(()=>{if(T==="data-table:pagination")switch(E){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return T==="dialog:header"||T==="dialog:sheet"?{"data-mdc-dialog-action":E}:{action:E}})()),z!==u.disabled){const n=_();"blur"in n&&n.blur(),o(31,z=u.disabled)}t.$$.dirty[0]&1073938432|t.$$.dirty[1]&2&&I&&_()&&A!==D&&(A&&!f?(o(17,f=new He({addClass:Z,hasClass:me,notifyChange:n=>{pe(n),le(_(),"SMUIIconButtonToggle:change",n,void 0,!0)},removeClass:w,getAttr:_e,setAttr:he})),f.init()):!A&&f&&(f.destroy(),o(17,f=void 0),o(18,c={}),o(20,g={})),o(32,D=A)),t.$$.dirty[0]&131073&&f&&!p(O)&&f.isOn()!==O&&f.toggle(O)},[O,P,V,X,H,q,Y,G,J,K,Q,S,E,k,W,_,I,f,c,L,g,s,i,p,T,be,Z,w,ge,u,A,z,D,l,Ae,Oe,Le,e]}class We extends Ne{constructor(a){super(),Fe(this,a,Ge,Ye,Ce,{use:1,class:2,style:3,ripple:4,color:5,toggle:30,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,tag:14,getElement:15},null,[-1,-1])}get getElement(){return this.$$.ctx[15]}}function Ze(t){let a,o;function s(l){o=t.getAttribute("title"),t.removeAttribute("title");const e=l.pageX>500;a=document.createElement("div"),a.innerHTML=o,a.style=`
			border: 1px solid #ddd;
			box-shadow: 1px 1px 1px #ddd;
			background: white;
			border-radius: 4px;
			padding: 4px;
			position: absolute;
   max-width: 300px;
   font-size: 11px;
			top: ${l.pageX+5}px;
			left: ${l.pageY}px;
			transform: translateX(${e?-150:0}px);
			width: ${e?"150px":"auto"};
   z-index: 1000;
		`,document.body.appendChild(a)}function d(l){a.style.left=`${l.pageX+5}px`,a.style.top=`${l.pageY+5}px`}function u(){document.body.removeChild(a),t.setAttribute("title",o)}return t.addEventListener("mouseover",s),t.addEventListener("mouseleave",u),t.addEventListener("mousemove",d),{destroy(){t.removeEventListener("mouseover",s),t.removeEventListener("mouseleave",u),t.removeEventListener("mousemove",d)}}}export{We as I,Ze as t};
import{S as ue,i as de,s as fe,l as I,r as P,a as S,m as z,n as U,u as q,h as v,c as B,p,G as ae,b as M,H as y,a0 as Z,I as O,a1 as ie,t as L,d as he,f as R,Z as me,K as Q,o as pe,g as _e,M as ve,w as re,x as ne,y as oe,E as F,B as ce,J as G,q as N}from"../chunks/index-3ca681f6.js";import{R as ge}from"../chunks/Rolling-b95190fc.js";import{I as be}from"../chunks/InfiniteScroll-789ab387.js";import{p as W,u as ke}from"../chunks/Popup-ab4b0a99.js";import"../chunks/index-ada3a1c3.js";function X(r,e,a){const t=r.slice();return t[15]=e[a],t}function Y(r,e,a){const t=r.slice();return t[18]=e[a],t}function x(r,e,a){const t=r.slice();return t[18]=e[a],t}function we(r){let e,a,t;return a=new ge({props:{style:"transform: scale(.2);"}}),{c(){e=I("div"),re(a.$$.fragment),this.h()},l(i){e=z(i,"DIV",{class:!0});var f=U(e);ne(a.$$.fragment,f),f.forEach(v),this.h()},h(){p(e,"class","loading svelte-1m23zr9")},m(i,f){M(i,e,f),oe(a,e,null),t=!0},p:F,i(i){t||(R(a.$$.fragment,i),t=!0)},o(i){L(a.$$.fragment,i),t=!1},d(i){i&&v(e),ce(a)}}}function ye(r){let e,a,t,i,f,h=r[4],d=[];for(let l=0;l<h.length;l+=1)d[l]=ee(x(r,h,l));let g=r[1],u=[];for(let l=0;l<g.length;l+=1)u[l]=se(X(r,g,l));let n=null;return g.length||(n=te()),i=new be({}),i.$on("loadMore",r[13]),{c(){e=I("div");for(let l=0;l<d.length;l+=1)d[l].c();a=S();for(let l=0;l<u.length;l+=1)u[l].c();n&&n.c(),t=S(),re(i.$$.fragment),this.h()},l(l){e=z(l,"DIV",{class:!0});var o=U(e);for(let s=0;s<d.length;s+=1)d[s].l(o);o.forEach(v),a=B(l);for(let s=0;s<u.length;s+=1)u[s].l(l);n&&n.l(l),t=B(l),ne(i.$$.fragment,l),this.h()},h(){p(e,"class","ticket columns-template svelte-1m23zr9")},m(l,o){M(l,e,o);for(let s=0;s<d.length;s+=1)d[s].m(e,null);M(l,a,o);for(let s=0;s<u.length;s+=1)u[s].m(l,o);n&&n.m(l,o),M(l,t,o),oe(i,l,o),f=!0},p(l,o){if(o&16){h=l[4];let s;for(s=0;s<h.length;s+=1){const m=x(l,h,s);d[s]?d[s].p(m,o):(d[s]=ee(m),d[s].c(),d[s].m(e,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=h.length}if(o&30){g=l[1];let s;for(s=0;s<g.length;s+=1){const m=X(l,g,s);u[s]?u[s].p(m,o):(u[s]=se(m),u[s].c(),u[s].m(t.parentNode,t))}for(;s<u.length;s+=1)u[s].d(1);u.length=g.length,!g.length&&n?n.p(l,o):g.length?n&&(n.d(1),n=null):(n=te(),n.c(),n.m(t.parentNode,t))}},i(l){f||(R(i.$$.fragment,l),f=!0)},o(l){L(i.$$.fragment,l),f=!1},d(l){l&&v(e),G(d,l),l&&v(a),G(u,l),n&&n.d(l),l&&v(t),ce(i,l)}}}function ee(r){let e,a=r[18].label+"",t;return{c(){e=I("div"),t=P(a),this.h()},l(i){e=z(i,"DIV",{class:!0,style:!0});var f=U(e);t=q(f,a),f.forEach(v),this.h()},h(){p(e,"class","column "+r[18].id+" svelte-1m23zr9"),N(e,"width",r[18].width+"%"),N(e,"min-width",r[18].minwidth+"px")},m(i,f){M(i,e,f),y(e,t)},p:F,d(i){i&&v(e)}}}function te(r){let e,a;return{c(){e=I("div"),a=P("Keine blockierten User gefunden"),this.h()},l(t){e=z(t,"DIV",{class:!0});var i=U(e);a=q(i,"Keine blockierten User gefunden"),i.forEach(v),this.h()},h(){p(e,"class","loading svelte-1m23zr9")},m(t,i){M(t,e,i),y(e,a)},p:F,d(t){t&&v(e)}}}function le(r){let e,a=r[18].get(r[15],r[2])+"";return{c(){e=I("div"),this.h()},l(t){e=z(t,"DIV",{class:!0,style:!0});var i=U(e);i.forEach(v),this.h()},h(){p(e,"class","column "+r[18].id+" svelte-1m23zr9"),N(e,"width",r[18].width+"%"),N(e,"min-width",r[18].minwidth+"px")},m(t,i){M(t,e,i),e.innerHTML=a},p(t,i){i&6&&a!==(a=t[18].get(t[15],t[2])+"")&&(e.innerHTML=a)},d(t){t&&v(e)}}}function se(r){let e,a,t,i,f,h,d,g,u=r[4],n=[];for(let o=0;o<u.length;o+=1)n[o]=le(Y(r,u,o));function l(){return r[12](r[15])}return{c(){e=I("button");for(let o=0;o<n.length;o+=1)n[o].c();a=S(),t=I("div"),i=I("button"),f=I("img"),this.h()},l(o){e=z(o,"BUTTON",{class:!0});var s=U(e);for(let b=0;b<n.length;b+=1)n[b].l(s);a=B(s),t=z(s,"DIV",{class:!0,style:!0});var m=U(t);i=z(m,"BUTTON",{class:!0});var $=U(i);f=z($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(v),m.forEach(v),s.forEach(v),this.h()},h(){ae(f.src,h="/assets/icons/x.svg")||p(f,"src",h),p(f,"alt","unblock"),p(f,"class","svelte-1m23zr9"),p(i,"class","svelte-1m23zr9"),p(t,"class","column last svelte-1m23zr9"),N(t,"margin-left","auto"),N(t,"min-width","30px"),p(e,"class","ticket svelte-1m23zr9")},m(o,s){M(o,e,s);for(let m=0;m<n.length;m+=1)n[m].m(e,null);y(e,a),y(e,t),y(t,i),y(i,f),d||(g=O(i,"click",ie(l)),d=!0)},p(o,s){if(r=o,s&22){u=r[4];let m;for(m=0;m<u.length;m+=1){const $=Y(r,u,m);n[m]?n[m].p($,s):(n[m]=le($),n[m].c(),n[m].m(e,a))}for(;m<n.length;m+=1)n[m].d(1);n.length=u.length}},d(o){o&&v(e),G(n,o),d=!1,g()}}}function Ie(r){let e,a,t,i,f,h,d,g,u,n,l,o,s,m,$,b,E,c,k,_;const H=[ye,we],T=[];function K(w,D){return w[1]?0:1}return b=K(r),E=T[b]=H[b](r),{c(){e=I("div"),a=I("div"),t=I("span"),i=P("Blockierte User"),f=S(),h=I("form"),d=I("input"),u=S(),n=I("button"),l=I("img"),m=S(),$=I("div"),E.c(),this.h()},l(w){e=z(w,"DIV",{class:!0});var D=U(e);a=z(D,"DIV",{class:!0});var V=U(a);t=z(V,"SPAN",{class:!0});var A=U(t);i=q(A,"Blockierte User"),A.forEach(v),f=B(V),h=z(V,"FORM",{class:!0});var j=U(h);d=z(j,"INPUT",{type:!0,placeholder:!0,class:!0}),u=B(j),n=z(j,"BUTTON",{type:!0,class:!0});var C=U(n);l=z(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(v),j.forEach(v),V.forEach(v),m=B(D),$=z(D,"DIV",{class:!0});var J=U($);E.l(J),J.forEach(v),D.forEach(v),this.h()},h(){p(t,"class","svelte-1m23zr9"),p(d,"type","text"),p(d,"placeholder","User ID"),d.disabled=g=!r[1],p(d,"class","svelte-1m23zr9"),ae(l.src,o="/assets/icons/search-thin.svg")||p(l,"src",o),p(l,"alt","search"),p(l,"class","svelte-1m23zr9"),p(n,"type","submit"),p(n,"class","svelte-1m23zr9"),p(h,"class",s="search "+(r[1]?"":"disabled")+" svelte-1m23zr9"),p(a,"class","header svelte-1m23zr9"),p($,"class","tickets svelte-1m23zr9"),p(e,"class","container svelte-1m23zr9")},m(w,D){M(w,e,D),y(e,a),y(a,t),y(t,i),y(a,f),y(a,h),y(h,d),Z(d,r[0]),y(h,u),y(h,n),y(n,l),y(e,m),y(e,$),T[b].m($,null),c=!0,k||(_=[O(d,"input",r[10]),O(h,"submit",ie(r[11]))],k=!0)},p(w,[D]){(!c||D&2&&g!==(g=!w[1]))&&(d.disabled=g),D&1&&d.value!==w[0]&&Z(d,w[0]),(!c||D&2&&s!==(s="search "+(w[1]?"":"disabled")+" svelte-1m23zr9"))&&p(h,"class",s);let V=b;b=K(w),b===V?T[b].p(w,D):(_e(),L(T[V],1,1,()=>{T[V]=null}),he(),E=T[b],E?E.p(w,D):(E=T[b]=H[b](w),E.c()),R(E,1),E.m($,null))},i(w){c||(R(E),c=!0)},o(w){L(E),c=!1},d(w){w&&v(e),T[b].d(),k=!1,me(_)}}}function ze(r,e,a){let t,i;Q(r,ke,c=>a(9,t=c)),Q(r,W,c=>a(3,i=c));let f,h=new Map,d=[{id:"user",label:"User",get:c=>{var k,_;return h.get(c.id)?`
    <div style="display: flex; align-items: center; column-gap: 8px;">
     <img src="${(k=h.get(c.id))==null?void 0:k.avatarURL}" alt="avatar" style="width: 32px; border-radius: 50%;" />
     <div style="display: flex; flex-direction: column; font-size: .9em;">
      <span>${(_=h.get(c.id))==null?void 0:_.tag}</span>
      <span style="font-size: .9em; opacity: 80%;">${c.id}</span>
     </div>
    </div>
   `:c.id},width:20,minwidth:170},{id:"reason",label:"Grund",get:c=>c.reason,width:40,minwidth:100},{id:"author",label:"Verantwortlich",get:c=>{var k,_;return h.get(c.authorId)?`
    <div style="display: flex; align-items: center; column-gap: 8px;">
     <img src="${(k=h.get(c.authorId))==null?void 0:k.avatarURL}" alt="avatar" style="width: 32px; border-radius: 50%;" />
     <div style="display: flex; flex-direction: column; font-size: .9em;">
      <span>${(_=h.get(c.authorId))==null?void 0:_.tag}</span>
      <span style="font-size: .9em; opacity: 80%;">${c.authorId}</span>
     </div>
    </div>
   `:c.authorId},width:10,minwidth:250},{id:"date",label:"Datum",get:c=>new Date(parseInt(c.blockedTimestamp)).toLocaleString(),width:10,minwidth:130}];pe(async()=>{let c=await fetch("/api/v1/blocked");c.status===200&&a(1,f=await c.json()),g()});async function g(){let c=[...new Set(f.map(_=>[_.id,_.authorId]).flat())],k=await fetch(`/api/v1/users?${c.map(_=>`userId=${_}`).join("&")}`);if(k.status===200){for(let _ of await k.json())h.set(_.id,{..._,tag:`${_.username}#${_.discriminator}`,avatarURL:_.avatar?`https://cdn.discordapp.com/avatars/${_.id}/${_.avatar}.png`:"https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"});a(2,h=Object.assign(h))}}let u="",n=!0;async function l(){a(1,f=[]);let c=u?`userId=${u}`:"",k=await fetch(`/api/v1/blocked${c?`?${c} `:""}`);k.status===200&&a(1,f=await k.json())}async function o(){start=limit,limit+=50;let c=u?`userId=${u}`:"",k=await fetch(`/api/v1/blocked?start=${start}&limit=${limit}${c?`&${c} `:""}`);if(k.status===200){let _=await k.json();a(1,f=[...f,..._])}g()}let s=t;function m(){u=this.value,a(0,u)}const $=()=>l(),b=c=>ve(W,i={key:"unblock",value:{userId:c.id}},i),E=()=>o();return r.$$.update=()=>{r.$$.dirty&129&&u&&n&&a(7,n=!1),r.$$.dirty&129&&!u&&!n&&(a(7,n=!0),l()),r.$$.dirty&768&&t!==s&&(a(8,s=t),l())},[u,f,h,i,d,l,o,n,s,t,m,$,b,E]}class Te extends ue{constructor(e){super(),de(this,e,ze,Ie,fe,{})}}export{Te as default};

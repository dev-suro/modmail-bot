import{S as B,i as N,s as R,N as O,l as b,m as g,n as y,h as f,p as _,O as w,b as d,I as S,P as T,Q as C,R as P,f as m,t as p,a2 as Q,r as $,u as k,a as D,w as j,L as U,c as E,x as H,H as h,y as I,B as M,a5 as V,e as L,g as z,d as A,E as x}from"../chunks/index-dd217174.js";import{R as F}from"../chunks/Rolling-e0564e32.js";function G(n){let e;return{c(){e=$("Button")},l(t){e=k(t,"Button")},m(t,s){d(t,e,s)},d(t){t&&f(e)}}}function J(n){let e,t,s,r,u;const o=n[4].default,c=O(o,n,n[3],null),l=c||G();return{c(){e=b("button"),l&&l.c(),this.h()},l(a){e=g(a,"BUTTON",{class:!0,style:!0});var i=y(e);l&&l.l(i),i.forEach(f),this.h()},h(){_(e,"class",t=w(n[1]?"disabled":"not-disabled")+" svelte-tkjn45"),_(e,"style",n[0])},m(a,i){d(a,e,i),l&&l.m(e,null),s=!0,r||(u=S(e,"click",n[5]),r=!0)},p(a,[i]){c&&c.p&&(!s||i&8)&&T(c,o,a,a[3],s?P(o,a[3],i,null):C(a[3]),null),(!s||i&2&&t!==(t=w(a[1]?"disabled":"not-disabled")+" svelte-tkjn45"))&&_(e,"class",t),(!s||i&1)&&_(e,"style",a[0])},i(a){s||(m(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&f(e),l&&l.d(a),r=!1,u()}}}function K(n,e,t){let{$$slots:s={},$$scope:r}=e,{style:u="",disabled:o=!1}=e,c=Q();const l=()=>o?null:c("click");return n.$$set=a=>{"style"in a&&t(0,u=a.style),"disabled"in a&&t(1,o=a.disabled),"$$scope"in a&&t(3,r=a.$$scope)},[u,o,c,r,s,l]}class W extends B{constructor(e){super(),N(this,e,K,J,R,{style:0,disabled:1})}}const{document:q}=V;function X(n){let e;return{c(){e=$("Login with Discord")},l(t){e=k(t,"Login with Discord")},m(t,s){d(t,e,s)},i:x,o:x,d(t){t&&f(e)}}}function Y(n){let e,t;return e=new F({props:{style:"transform: scale(.1);"}}),{c(){j(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){I(e,s,r),t=!0},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Z(n){let e,t,s,r;const u=[Y,X],o=[];function c(l,a){return l[0]?0:1}return e=c(n),t=o[e]=u[e](n),{c(){t.c(),s=L()},l(l){t.l(l),s=L()},m(l,a){o[e].m(l,a),d(l,s,a),r=!0},p(l,a){let i=e;e=c(l),e!==i&&(z(),p(o[i],1,1,()=>{o[i]=null}),A(),t=o[e],t||(t=o[e]=u[e](l),t.c()),m(t,1),t.m(s.parentNode,s))},i(l){r||(m(t),r=!0)},o(l){p(t),r=!1},d(l){o[e].d(l),l&&f(s)}}}function ee(n){let e,t,s,r,u,o,c;return o=new W({props:{style:"border-radius: 100px; padding: 0; width: calc(100% - 10px); max-width: 200px; height: 40px",disabled:n[0],$$slots:{default:[Z]},$$scope:{ctx:n}}}),o.$on("click",n[1]),{c(){e=D(),t=b("div"),s=b("h1"),r=$("mexify modmail"),u=D(),j(o.$$.fragment),this.h()},l(l){U('[data-svelte="svelte-1mx93t6"]',q.head).forEach(f),e=E(l),t=g(l,"DIV",{class:!0});var i=y(t);s=g(i,"H1",{class:!0});var v=y(s);r=k(v,"mexify modmail"),v.forEach(f),u=E(i),H(o.$$.fragment,i),i.forEach(f),this.h()},h(){q.title="Mexify Modmail | Login",_(s,"class","svelte-b5o5q1"),_(t,"class","container svelte-b5o5q1")},m(l,a){d(l,e,a),d(l,t,a),h(t,s),h(s,r),h(t,u),I(o,t,null),c=!0},p(l,[a]){const i={};a&1&&(i.disabled=l[0]),a&5&&(i.$$scope={dirty:a,ctx:l}),o.$set(i)},i(l){c||(m(o.$$.fragment,l),c=!0)},o(l){p(o.$$.fragment,l),c=!1},d(l){l&&f(e),l&&f(t),M(o)}}}async function ae({session:n}){return n!=null&&n.userData?{status:307,redirect:"/"}:{status:200}}function te(n,e,t){let s=!1;return[s,()=>{t(0,s=!0),document.location.href="/api/v1/login"}]}class ne extends B{constructor(e){super(),N(this,e,te,ee,R,{})}}export{ne as default,ae as load};
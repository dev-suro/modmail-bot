import{S as Z,i as z,s as A,e as g,t as T,k as F,c as k,a as y,h as N,d as m,m as G,b as S,g as P,H as c,I as H,j as K,n as Q,o as I,p as W,q as J,Z as X,E as L,w as Y,x as $,y as ee,B as te}from"./index-0eb8b19d.js";import{R as se}from"./Rolling-20a2b11f.js";function ae(l){let e;return{c(){e=T("Ja")},l(t){e=N(t,"Ja")},m(t,s){P(t,e,s)},i:L,o:L,d(t){t&&m(e)}}}function ne(l){let e,t;return e=new se({props:{scaleFactor:"0.12"}}),{c(){Y(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,a){ee(e,s,a),t=!0},i(s){t||(J(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){te(e,s)}}}function le(l){var M;let e,t,s,a,u=((M=l[0])==null?void 0:M.name)+"",b,w,r,d,f,o,i,O,h,x,E,B,R;const q=[ne,ae],v=[];function C(n,_){return n[2]?0:1}return o=C(l),i=v[o]=q[o](l),{c(){e=g("div"),t=g("p"),s=T("M\xF6chtest du das Snippet "),a=g("strong"),b=T(u),w=T(" wirklich l\xF6schen?"),r=F(),d=g("div"),f=g("button"),i.c(),O=F(),h=g("button"),x=T("Nein"),this.h()},l(n){e=k(n,"DIV",{class:!0});var _=y(e);t=k(_,"P",{class:!0});var p=y(t);s=N(p,"M\xF6chtest du das Snippet "),a=k(p,"STRONG",{});var j=y(a);b=N(j,u),j.forEach(m),w=N(p," wirklich l\xF6schen?"),p.forEach(m),r=G(_),d=k(_,"DIV",{class:!0});var D=y(d);f=k(D,"BUTTON",{class:!0});var U=y(f);i.l(U),U.forEach(m),O=G(D),h=k(D,"BUTTON",{class:!0});var V=y(h);x=N(V,"Nein"),V.forEach(m),D.forEach(m),_.forEach(m),this.h()},h(){S(t,"class","svelte-1irujdw"),S(f,"class","ja svelte-1irujdw"),S(h,"class","nein svelte-1irujdw"),S(d,"class","buttons svelte-1irujdw"),S(e,"class","wrapper svelte-1irujdw")},m(n,_){P(n,e,_),c(e,t),c(t,s),c(t,a),c(a,b),c(t,w),c(e,r),c(e,d),c(d,f),v[o].m(f,null),c(d,O),c(d,h),c(h,x),E=!0,B||(R=[H(f,"click",l[3]),H(h,"click",l[4])],B=!0)},p(n,[_]){var j;(!E||_&1)&&u!==(u=((j=n[0])==null?void 0:j.name)+"")&&K(b,u);let p=o;o=C(n),o!==p&&(Q(),I(v[p],1,1,()=>{v[p]=null}),W(),i=v[o],i||(i=v[o]=q[o](n),i.c()),J(i,1),i.m(f,null))},i(n){E||(J(i),E=!0)},o(n){I(i),E=!1},d(n){n&&m(e),v[o].d(),B=!1,X(R)}}}function re(l,e,t){let{value:s,close:a}=e,u=!1;const b=async()=>{t(2,u=!0);let r=await fetch("/api/v1/snippets",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s.name})});r.status===204?a(!0):console.error(await r.json()),t(2,u=!1)},w=()=>a();return l.$$set=r=>{"value"in r&&t(0,s=r.value),"close"in r&&t(1,a=r.close)},l.$$.update=()=>{l.$$.dirty&3&&(s!=null&&s.name||a())},[s,a,u,b,w]}class ce extends Z{constructor(e){super(),z(this,e,re,le,A,{value:0,close:1})}}export{ce as default};
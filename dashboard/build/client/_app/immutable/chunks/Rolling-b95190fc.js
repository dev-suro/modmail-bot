import{S as y,i as m,s as g,l as o,m as f,n as u,h as i,p as c,q as _,b as E,H as d,E as h}from"./index-3ca681f6.js";function F(r){let s,l,a,n;return{c(){s=o("div"),l=o("div"),a=o("div"),this.h()},l(t){s=f(t,"DIV",{class:!0,style:!0});var e=u(s);l=f(e,"DIV",{class:!0,style:!0});var v=u(l);a=f(v,"DIV",{class:!0}),u(a).forEach(i),v.forEach(i),e.forEach(i),this.h()},h(){c(a,"class","svelte-1852m2u"),c(l,"class","spinner-rolling-2 svelte-1852m2u"),_(l,"--clr",r[0]),c(s,"class","spinner-rolling svelte-1852m2u"),c(s,"style",n="--scale-factor: "+r[2]+"; "+r[1])},m(t,e){E(t,s,e),d(s,l),d(l,a)},p(t,[e]){e&1&&_(l,"--clr",t[0]),e&6&&n!==(n="--scale-factor: "+t[2]+"; "+t[1])&&c(s,"style",n)},i:h,o:h,d(t){t&&i(s)}}}function D(r,s,l){let{color:a="#fff",style:n="",scaleFactor:t=1}=s;return r.$$set=e=>{"color"in e&&l(0,a=e.color),"style"in e&&l(1,n=e.style),"scaleFactor"in e&&l(2,t=e.scaleFactor)},[a,n,t]}class R extends y{constructor(s){super(),m(this,s,D,F,g,{color:0,style:1,scaleFactor:2})}}export{R};

import h from"./DocumentDrivenEmpty.X_EtnGSh.js";import L from"./ContentRenderer.c5fW6gMR.js";import b from"./DocumentDrivenNotFound.ZC9ZuTwy.js";import{j as g,d as p,E as k,P as R,q as C,G as x,H as S,r as j,I as c,J as B,K as N,L as m,T,M as u,N as A,O as E,S as O,Q as w,R as D,l as H,U as $,b as f,c as q,g as y,w as _,V as v}from"./entry.R7cZiVU-.js";import{u as I}from"./head.93i0UMkd.js";import"./ContentRendererMarkdown.vue.8z02jLzV.js";import"./preview.NUOVx9UK.js";const M=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await c[t.name]().then(o=>o.default||o);return()=>m(e,t.layoutProps,n.slots)}}),V=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=g(),o=k(R),s=o===C()?x():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in c)&&t.fallback&&(a=u(t.fallback)),a}),l=j();n.expose({layoutRef:l});const d=e.deferHydration();return()=>{const a=r.value&&r.value in c,i=s.meta.layoutTransition??B;return N(T,a&&i,{default:()=>m(O,{suspensible:!0,onResolve:()=>{E(d)}},{default:()=>m(F,{layoutProps:A(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!i},n.slots)})}).default()}}}),F=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in c)?(s=(o=n.slots).default)==null?void 0:s.call(o):m(M,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},Y=p({__name:"document-driven",setup(t){const{contentHead:n}=H().public.content,{page:e,layout:o}=$();return e.value,n&&I(e),(s,r)=>{const l=h,d=L,a=b,i=V;return f(),q("div",G,[y(i,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(d,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[y(l,{value:P},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};

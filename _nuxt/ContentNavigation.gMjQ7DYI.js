import{u as f}from"./asyncData.coJffber.js";import{l as v,a0 as p,_ as g,d,a1 as l,H as h,m as _,U as y,Y as C,L as r,D as w}from"./entry.FVqs8A3D.js";import{q as P,w as m,e as $,s as N,j}from"./query.p2OQrp73.js";import{u as T}from"./preview.l9RvlubS.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.TiOIWgXH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.TiOIWgXH.js","./entry.FVqs8A3D.js","./entry.YWKr7ouG.css","./slugify.l1ODK-xJ.js","./query.p2OQrp73.js","./preview.l9RvlubS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
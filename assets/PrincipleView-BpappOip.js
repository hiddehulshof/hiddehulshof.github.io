import{d as w,r as d,w as _,a as b,o as k,b as P,c as s,e,t as n,F as g,f,u as G,g as r}from"./index-DDJ0hfF3.js";const S=w("wcag",()=>{const h=d(_),c=d(_[0]),i=d(_[0].guidelines[0]);function t(o){c.value=o}function a(o){i.value=o}return{wcag:h,currentPrinciple:c,currentGuideline:i,setCurrentPrinciple:t,setCurrentGuideline:a}}),B={class:"min-h-screen bg-lightGray text-darkGray"},C={class:"container mx-auto"},I={class:"text-2xl font-bold"},F={class:"grid grid-cols-1 gap-4"},R={class:"text-xl font-bold"},V={class:"grid grid-cols-1 gap-4 py-2"},D={class:"text-lg font-bold"},E={class:"grid grid-cols-1 gap-4 py-2"},L={class:"text-md font-bold"},N=b({__name:"PrincipleView",setup(h){const c=G(),i=S(),t=d(null),a=()=>{const o=c.params.ref_id,m=parseInt(o);t.value=i.wcag[m-1],i.setCurrentPrinciple(t.value)};return k(()=>{a()}),P(()=>c.params.ref_id,()=>{a()}),(o,m)=>{var v,x,y;return r(),s("div",B,[e("div",C,[e("h1",I,n((v=t.value)==null?void 0:v.ref_id)+" "+n((x=t.value)==null?void 0:x.principle),1),e("div",F,[(r(!0),s(g,null,f((y=t.value)==null?void 0:y.guidelines,u=>(r(),s("div",{key:u.ref_id,class:"py-4"},[e("h2",R,n(u.guideline),1),e("div",V,[(r(!0),s(g,null,f(u.successCriteria,l=>(r(),s("div",{key:l.ref_id},[e("h3",D,n(l.successCriterion),1),e("p",null,n(l.description),1),e("dl",E,[(r(!0),s(g,null,f(l.details,p=>(r(),s("dt",{key:p.title},[e("h4",L,n(p.title),1),e("p",null,n(p.description),1)]))),128))])]))),128))])]))),128))])])])}}});export{N as default};

import{r as d,h as C,g as w,c as G,e,i as v,t as o,j as me,k as B,l as R,m as V,n as h,F as Ce,p as $,q as Ve,s as $e,v as be,_ as Ge,x as Be}from"./index-DDJ0hfF3.js";const Te={class:"max-w-lg mx-auto bg-white text-black p-8 rounded-lg shadow-lg"},Re={class:"flex flex-col md:flex-row gap-4"},Ae={class:"flex flex-col gap-4 w-full"},De={class:"flex flex-col gap-4 w-full"},Ie={id:"#result",class:"bg-primary-600 text-white rounded-lg shadow-lg mt-8",style:{"background-image":"url('/soft-walpaper.webp')","background-size":"cover","background-position":"center"}},Se={class:"bg-white rounded-lg text-black"},Ne={class:"container px-2 mx-auto py-16"},Oe={class:"flex flex-wrap"},He={class:"w-full md:w-1/2 text-left"},We={class:"table-auto bg-white"},Fe={class:"border px-4 py-2"},je={class:"border px-4 py-2"},ze={class:"border px-4 py-2"},Ee={class:"border px-4 py-2"},Ue={class:"w-full flex flex-col md:w-1/2 p-4 text-left"},Ke={class:"rounded-lg shadow-lg p-4 bg-surface-100"},Pe={class:"flex flex-wrap"},Xe={class:"py-2 w-full md:w-1/2"},qe={class:"py-2 w-full md:w-1/2 text-left"},Me={class:"flex flex-wrap"},Je={class:"w-full md:w-1/2 md:pr-2 py-2"},Le={class:"w-full md:w-1/2 md:pr-2 py-2"},Qe={key:0,class:"w-full flex flex-col md:w-1/2 p-4 text-left"},Ye={class:"rounded-lg shadow-lg p-4 bg-surface-100"},Ze={class:"table-auto bg-white"},el={class:"border px-4 py-2"},ll={class:"border px-4 py-2"},tl={class:"border px-4 py-2"},ol={class:"border px-4 py-2"},sl={class:"py-2"},rl={class:"flex flex-wrap"},nl={class:"w-full md:w-1/2 md:pr-2 py-2"},al={class:"w-full md:w-1/2 md:pr-2 py-2"},dl={key:1,class:"w-full flex flex-col md:w-1/2 p-4 text-left"},ul={class:"rounded-lg shadow-lg p-4 bg-surface-100"},il={class:"table-auto bg-white"},gl={class:"border px-4 py-2"},cl={class:"border px-4 py-2"},pl={class:"border px-4 py-2"},vl={class:"border px-4 py-2"},fl={class:"py-2 text-left"},ml={class:"flex flex-wrap"},bl={class:"w-full md:w-1/2 md:pr-2 py-2"},xl={class:"w-full md:w-1/2 md:pr-2 py-2"},yl={__name:"CheckContrast",setup(xe){const u=d("000000"),t=d("ffffff"),ye=d("rgb(0,0,0)"),ke=d("rgb(255,255,255)"),T=d("0"),a=d({normal:"Niet gecontroleerd",large:"Niet gecontroleerd"}),i=d({normal:{bg:"#000000",fg:"#ffffff"},large:{bg:"#000000",fg:"#ffffff"}}),f=d("#000000"),m=d("#ffffff"),he=d(!1),we=()=>{f.value=u.value,m.value=t.value,f.value=f.value.startsWith("#")?f.value:`#${f.value}`,m.value=m.value.startsWith("#")?m.value:`#${m.value}`;const p=u.value,l=t.value,r=c(p),n=c(l),b=`rgb(${r.r}, ${r.g}, ${r.b})`,x=`rgb(${n.r}, ${n.g}, ${n.b})`,_=$(b),y=$(x),k=Ve(_,y);T.value=k,a.value={normal:k>=4.5?"Voldoende":"Onvoldoende",large:k>=3?"Voldoende":"Onvoldoende"},_e(),ye.value=r,ke.value=n,he.value=!0,$e(()=>{document.getElementById("#result").scrollIntoView()})},c=p=>{const l=p.startsWith("#")?p:`#${p}`,r=parseInt(l.substring(1,3),16),n=parseInt(l.substring(3,5),16),b=parseInt(l.substring(5,7),16);return{r,g:n,b}},g=d({normal:{bg:"#000000",fg:"#ffffff"},large:{bg:"#000000",fg:"#ffffff"}}),_e=()=>{const p=`rgb(${c(u.value).r}, ${c(u.value).g}, ${c(u.value).b})`,l=`rgb(${c(t.value).r}, ${c(t.value).g}, ${c(t.value).b})`,r=$(p),n=$(l),x=be(r,n,{normal:8,large:8});i.value=x;const y=be(r,n,{normal:5.5,large:4});g.value=y};return(p,l)=>{var _,y,k,A,D,I,S,N,O,H,W,F,j,z,E,U,K,P,X,q,M,J,L,Q,Y,Z,ee,le,te,oe,se,re,ne,ae,de,ue,ie,ge,ce,pe,ve,fe;const r=C("ColorPicker"),n=C("InputText"),b=C("Button"),x=C("Tag");return w(),G(Ce,null,[e("div",null,[l[8]||(l[8]=e("p",{class:"text-center max-w-xl mx-auto text-darkGray mb-8"}," Vul twee kleuren in om te testen of ze voldoen aan de toegankelijkheidsrichtlijnen. Onze tool controleert de contrastverhouding en geeft aanbevelingen. ",-1)),e("div",Te,[e("div",Re,[e("div",Ae,[l[4]||(l[4]=e("label",{for:"color2"},"Tekst kleur",-1)),l[5]||(l[5]=e("label",{for:"cp-hex2",class:"sr-only"},"Tekst kleur",-1)),v(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),inputId:"cp-hex2",maxlength:"6",format:"hex",class:"mb-4"},null,8,["modelValue"]),v(n,{id:"color2",modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=s=>t.value=s),maxlength:"6",type:"text",class:"p-2 border border-gray-300 rounded-lg shadow-lg",placeholder:"Kleur 2"},null,8,["modelValue"])]),e("div",De,[l[6]||(l[6]=e("label",{for:"color1"},"Achtergrond kleur",-1)),l[7]||(l[7]=e("label",{for:"cp-hex",class:"sr-only"},"Achtergrond kleur",-1)),v(r,{name:"color1",modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=s=>u.value=s),inputId:"cp-hex",format:"hex",class:"mb-4"},null,8,["modelValue"]),v(n,{id:"color1",modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=s=>u.value=s),type:"text",class:"p-2 border border-gray-300 rounded",placeholder:"Kleur 1"},null,8,["modelValue"])])]),v(b,{onClick:we,label:"Controleer contrast",class:"my-2"})])]),e("div",Ie,[e("div",Se,[e("div",Ne,[e("div",Oe,[e("div",He,[l[12]||(l[12]=e("h2",{class:"text-3xl font-bold mb-6 w-full"},"Resultaat",-1)),e("table",We,[l[11]||(l[11]=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"Contrast"),e("th",{class:"px-4 py-2"},"Normale tekst"),e("th",{class:"px-4 py-2"},"Grote tekst")])],-1)),e("tbody",null,[e("tr",null,[l[9]||(l[9]=e("td",{class:"border px-4 py-2"},"Ratio",-1)),e("td",Fe,o(T.value),1),e("td",je,o(T.value),1)]),e("tr",null,[l[10]||(l[10]=e("td",{class:"border px-4 py-2"},"WCAG 2.1AA",-1)),e("td",ze,o((_=a.value)==null?void 0:_.normal),1),e("td",Ee,o((y=a.value)==null?void 0:y.large),1)])])])]),e("div",Ue,[e("div",Ke,[l[17]||(l[17]=e("h3",{class:"text-2xl font-bold my-6"},"Voorbeeld huidig",-1)),e("div",Pe,[e("div",Xe,[l[13]||(l[13]=e("h3",null,"Kleine tekst",-1)),((k=a.value)==null?void 0:k.normal)==="Voldoende"||((A=a.value)==null?void 0:A.normal)==="Onvoldoende"?(w(),me(x,{key:0,severity:((D=a.value)==null?void 0:D.normal)==="Voldoende"?"success":"danger"},{default:B(()=>{var s;return[R(o(((s=a.value)==null?void 0:s.normal)==="Voldoende"?"Voldoende contrast":"Onvoldoende contrast"),1)]}),_:1},8,["severity"])):V("",!0)]),e("div",qe,[l[14]||(l[14]=e("h3",null,"Grote tekst",-1)),((I=a.value)==null?void 0:I.large)==="Voldoende"||((S=a.value)==null?void 0:S.large)==="Onvoldoende"?(w(),me(x,{key:0,severity:((N=a.value)==null?void 0:N.large)==="Voldoende"?"success":"danger"},{default:B(()=>{var s;return[R(o(((s=a.value)==null?void 0:s.large)==="Voldoende"?"Voldoende contrast":"Onvoldoende contrast"),1)]}),_:1},8,["severity"])):V("",!0)])]),e("div",Me,[e("div",Je,[e("div",{class:"py-12 px-4 h-full",style:h({backgroundColor:f.value,color:m.value})},l[15]||(l[15]=[e("p",null,"Dit is een voorbeeld van een tekst met een achtergrondkleur",-1)]),4)]),e("div",Le,[e("div",{class:"py-12 px-4",style:h({backgroundColor:f.value,color:m.value})},l[16]||(l[16]=[e("h3",{class:"text-2xl font-bold"}," Dit is een voorbeeld van een tekst met een achtergrondkleur ",-1)]),4)])])])]),(O=i.value)!=null&&O.normal?(w(),G("div",Qe,[e("div",Ye,[l[24]||(l[24]=e("h3",{class:"text-2xl font-bold my-6"},"Voorbeeld aan te raden kleuren",-1)),l[25]||(l[25]=e("p",null,"Contrast waarde minimaal 7 voor grote tekst en normale tekst.",-1)),e("table",Ze,[l[20]||(l[20]=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"Type"),e("th",{class:"px-4 py-2"},"Tekst"),e("th",{class:"px-4 py-2"},"Achtergrond")])],-1)),e("tbody",null,[e("tr",null,[l[18]||(l[18]=e("td",{class:"border px-4 py-2"},"Normale tekst",-1)),e("td",el,o((W=(H=i.value)==null?void 0:H.normal)==null?void 0:W.fg),1),e("td",ll,o((j=(F=i.value)==null?void 0:F.normal)==null?void 0:j.bg),1)]),e("tr",null,[l[19]||(l[19]=e("td",{class:"border px-4 py-2"},"Grote tekst",-1)),e("td",tl,o((E=(z=i.value)==null?void 0:z.large)==null?void 0:E.fg),1),e("td",ol,o((K=(U=i.value)==null?void 0:U.large)==null?void 0:K.bg),1)])])]),e("div",sl,[l[23]||(l[23]=e("h3",null,"Voorbeeld achtergrond met tekst",-1)),e("div",rl,[e("div",nl,[e("div",{class:"py-12 px-4 h-full",style:h({backgroundColor:(X=(P=i.value)==null?void 0:P.normal)==null?void 0:X.bg,color:(M=(q=i.value)==null?void 0:q.normal)==null?void 0:M.fg})},l[21]||(l[21]=[e("p",null,"Dit is een voorbeeld van een tekst met een achtergrondkleur",-1)]),4)]),e("div",al,[e("div",{class:"py-12 px-4",style:h({backgroundColor:(L=(J=i.value)==null?void 0:J.large)==null?void 0:L.bg,color:(Y=(Q=i.value)==null?void 0:Q.large)==null?void 0:Y.fg})},l[22]||(l[22]=[e("h3",{class:"text-2xl font-bold"}," Dit is een voorbeeld van een tekst met een achtergrondkleur ",-1)]),4)])])])])])):V("",!0),(Z=g.value)!=null&&Z.normal?(w(),G("div",dl,[e("div",ul,[l[30]||(l[30]=e("h3",{class:"text-2xl font-bold my-6"},"Minimaal volgens WCAG 2.1",-1)),l[31]||(l[31]=e("p",null,"Contrast waarde minimaal 3 voor grote tekst en 4.5 voor normale tekst.",-1)),e("table",il,[l[26]||(l[26]=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"Tekst"),e("th",{class:"px-4 py-2"},"Achtergrond")])],-1)),e("tbody",null,[e("tr",null,[e("td",gl,o((le=(ee=g.value)==null?void 0:ee.normal)==null?void 0:le.fg),1),e("td",cl,o((oe=(te=g.value)==null?void 0:te.normal)==null?void 0:oe.bg),1)]),e("tr",null,[e("td",pl,o((re=(se=g.value)==null?void 0:se.large)==null?void 0:re.fg),1),e("td",vl,o((ae=(ne=g.value)==null?void 0:ne.large)==null?void 0:ae.bg),1)])])]),e("div",fl,[l[29]||(l[29]=e("h3",null,"Voorbeeld achtergrond met tekst",-1)),e("div",ml,[e("div",bl,[e("div",{class:"py-12 px-4 h-full",style:h({backgroundColor:(ue=(de=g.value)==null?void 0:de.normal)==null?void 0:ue.bg,color:(ge=(ie=g.value)==null?void 0:ie.normal)==null?void 0:ge.fg})},l[27]||(l[27]=[e("p",null,"Dit is een voorbeeld van een tekst met een achtergrondkleur",-1)]),4)]),e("div",xl,[e("div",{class:"py-12 px-4",style:h({backgroundColor:(pe=(ce=g.value)==null?void 0:ce.large)==null?void 0:pe.bg,color:(fe=(ve=g.value)==null?void 0:ve.large)==null?void 0:fe.fg})},l[28]||(l[28]=[e("h3",{class:"text-2xl font-bold"}," Dit is een voorbeeld van een tekst met een achtergrondkleur ",-1)]),4)])])])])])):V("",!0)])])])])],64)}}},kl={class:"min-h-screen bg-lightGray text-darkGray"},wl={__name:"AdvancedCheckView",setup(xe){return(u,t)=>(w(),G("div",kl,[v(Ge,null,{extra:B(()=>[v(yl)]),default:B(()=>[t[0]||(t[0]=R(" Contrast Checker "))]),_:1}),t[1]||(t[1]=e("main",null,null,-1)),v(Be)]))}};export{wl as default};

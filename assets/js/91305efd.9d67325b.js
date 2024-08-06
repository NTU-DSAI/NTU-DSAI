"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[4992],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(6540),i=r(53),o=r(1754),a=r(5489),c=r(6654),s=r(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:a},a))}function m(e){let{item:t}=e;const r=(0,o._o)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,o.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},4254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(8168),i=(r(6540),r(5680)),o=r(3514),a=r(1754);const c={id:"module-review",title:"Module Review",description:"General Overview of Module Review",keywords:["module","review","curriculum","structure","course","ntu"]},s=void 0,l={unversionedId:"Module-Review/module-review",id:"Module-Review/module-review",title:"Module Review",description:"General Overview of Module Review",source:"@site/docs/Module-Review/index.md",sourceDirName:"Module-Review",slug:"/Module-Review/",permalink:"/docs/Module-Review/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/index.md",tags:[],version:"current",lastUpdatedBy:"Bhargav Singapuri",lastUpdatedAt:1722908755,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"module-review",title:"Module Review",description:"General Overview of Module Review",keywords:["module","review","curriculum","structure","course","ntu"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"CC0001 Inquiry and Communication",permalink:"/docs/Module-Review/Y1S1/cc0001-inquiry-and-communication"}},u={},d=[],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This section aims to help future students understand what they can expect from modules based on the experiences of their seniors."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The following list of modules is based on the latest ",(0,i.yg)("a",{parentName:"p",href:"https://www.ntu.edu.sg/scse/admissions/programmes/undergraduate-programmes/curriculum-structure#Content_C021_Col00"},"Curriculum Structure")," and we will attempt to update this as the curriculum evolves.")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"The views expressed herein are entirely of the various students that have undertaken the modules. We will attempt to be as neutral and objective as possible but your experience may vary.")),(0,i.yg)(o.A,{items:(0,a.$S)().items,mdxType:"DocCardList"}),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This list only goes up till Y4S1 as the second semester consists of only FYP (covered in Y4S1) and MPEs (covered in the MPE section).")))}f.isMDXComponent=!0}}]);
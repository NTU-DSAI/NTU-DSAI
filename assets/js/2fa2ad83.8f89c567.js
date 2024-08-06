"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[2474],{5680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>g});var a=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(o),h=n,g=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return o?a.createElement(g,i(i({ref:t},u),{},{components:o})):a.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9215:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(8168),n=(o(6540),o(5680));const r={id:"cz4125-developing-data-products",slug:"cz4125-developing-data-products",sidebar_position:10,title:"CZ4125 Developing Data Products",description:"Developing end-to-end data products",keywords:["development","data products","ntu","scse","course","module"]},i=void 0,s={unversionedId:"Module-Review/MPEs/SCSE/cz4125-developing-data-products",id:"Module-Review/MPEs/SCSE/cz4125-developing-data-products",title:"CZ4125 Developing Data Products",description:"Developing end-to-end data products",source:"@site/docs/Module-Review/MPEs/SCSE/CZ4125 Developing Data Products.md",sourceDirName:"Module-Review/MPEs/SCSE",slug:"/Module-Review/MPEs/SCSE/cz4125-developing-data-products",permalink:"/docs/Module-Review/MPEs/SCSE/cz4125-developing-data-products",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/MPEs/SCSE/CZ4125 Developing Data Products.md",tags:[],version:"current",lastUpdatedBy:"Bhargav Singapuri",lastUpdatedAt:1722908755,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:10,frontMatter:{id:"cz4125-developing-data-products",slug:"cz4125-developing-data-products",sidebar_position:10,title:"CZ4125 Developing Data Products",description:"Developing end-to-end data products",keywords:["development","data products","ntu","scse","course","module"]},sidebar:"tutorialSidebar",previous:{title:"CZ4124 Data Visualisation",permalink:"/docs/Module-Review/MPEs/SCSE/cz4124-data-visualisation"},next:{title:"SPMS MPEs",permalink:"/docs/Module-Review/MPEs/SPMS/"}},l={},d=[{value:"Course Summary",id:"course-summary",level:2},{value:"Workload and assessment",id:"workload-and-assessment",level:2},{value:"Things to take note of",id:"things-to-take-note-of",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"course-summary"},"Course Summary"),(0,n.yg)("p",null,"The course looks into the different components of developing an end-to-end data product, ranging from how data is managed to how the data product is deployed. If ",(0,n.yg)("a",{parentName:"p",href:"/docs/Module-Review/Y1S2/sc1015-introduction-to-data-science-and-ai"},"Intro to Data Science")," is a course designed to introduce data science to DSAI freshmen, this course SC4025 is designed to consolidate whatever that has been learnt over the 4 years of the DSAI curriculum."),(0,n.yg)("p",null,"The emphasis of the course is not on technical depth, but rather more on exposing students to how different topics that has been touched in the DSAI curriculum and different state-of-the-art tools can be brought together to build a useful data product. The topics covered in this course are:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"What is a data product?"),(0,n.yg)("li",{parentName:"ol"},"Data manipulation"),(0,n.yg)("li",{parentName:"ol"},"Data visualisation"),(0,n.yg)("li",{parentName:"ol"},"SQL and NoSQL databases"),(0,n.yg)("li",{parentName:"ol"},"Product design, validation and statistical testing"),(0,n.yg)("li",{parentName:"ol"},"Machine learning"),(0,n.yg)("li",{parentName:"ol"},"Natural language processing and topic modelling"),(0,n.yg)("li",{parentName:"ol"},"Graph and network analytics"),(0,n.yg)("li",{parentName:"ol"},"Front-ends, dashboards and web-based applications"),(0,n.yg)("li",{parentName:"ol"},"Big data infrastructure"),(0,n.yg)("li",{parentName:"ol"},"Data privacy and security")),(0,n.yg)("h2",{id:"workload-and-assessment"},"Workload and assessment"),(0,n.yg)("p",null,"The workload is one of the heaviest among all other SCSE courses. There is a wide range of topics and due to the speed of lectures, it may be difficult to follow if you have not taken the relevant course (e.g. have not taken ",(0,n.yg)("a",{parentName:"p",href:"/docs/Module-Review/MPEs/SCSE/cz4045-natural-language-processing"},"NLP")," for topic 7)."),(0,n.yg)("p",null,"Furthermore, the coursework is also quite intense. There are 2 individual assignments and 1 group project."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Assignment 1 is to collect information of SCSE faculty members through web scraping of DR-NTU, Google Scholar and DBLP."),(0,n.yg)("li",{parentName:"ul"},"Assignment 2 is to create a dashboard to display the individual profiles of SCSE faculty members, performing analytics to understand each of the members' research interests. You are also required to create a faculty profile of SCSE to display the research trends within SCSE and how the faculties work together with each other."),(0,n.yg)("li",{parentName:"ul"},"Group project is to create a data product of your own choice.")),(0,n.yg)("p",null,"The coursework is heavy especially for assignment 2 and group project because these are open-ended and you do not have to restrict yourself only to whatever that was taught in the course. As such, there may be some self-learning involved."),(0,n.yg)("h2",{id:"things-to-take-note-of"},"Things to take note of"),(0,n.yg)("p",null,"There are students who like this course a lot, but there are also students who dislike the course. The main reason for the dislike is due to the pace, heavy workload and the amount of self-learning involved. However, you may also like to think of this course as an introduction to what the work of a data scientist entails. In this course, not only will you learn about the course content, but you will also learn about how to dissect task requirements, how to self-learn effectively, how to manage time, how to work with people, how to go beyond what was taught, how to deal with ambiguity, how to manage projects, etc."),(0,n.yg)("p",null,"The instructor also encourages a lot of critical thinking with the ungraded assignments, and do attempt these as you will learn a lot from the experience."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"This course is recommended for students who wish to develop their skills on how to be a better data scientist (not just the hard skills, but also the soft skills). The course workload is heavy so do expect to spend some time on this course."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[9170],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>y});var s=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,s,a=function(e,t){if(null==e)return{};var i,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)i=r[s],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)i=r[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=s.createContext({}),m=function(e){var t=s.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=m(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=m(i),p=a,y=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return i?s.createElement(y,o(o({ref:t},d),{},{components:i})):s.createElement(y,o({ref:t},d))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[u]="string"==typeof e?e:a,o[1]=n;for(var m=2;m<r;m++)o[m]=i[m];return s.createElement.apply(null,o)}return s.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8359:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>m});var s=i(7462),a=(i(7294),i(3905));const r={id:"mh4500-time-series-analysis",slug:"mh4500-time-series-analysis",sidebar_position:3,title:"MH4500 Time Series Analysis",description:"Developing models for time series data",keywords:["time series","analysis","ntu","spms","course","module"]},o=void 0,n={unversionedId:"Module-Review/MPEs/SPMS/mh4500-time-series-analysis",id:"Module-Review/MPEs/SPMS/mh4500-time-series-analysis",title:"MH4500 Time Series Analysis",description:"Developing models for time series data",source:"@site/docs/Module-Review/MPEs/SPMS/MH4500 Time Series Analysis.md",sourceDirName:"Module-Review/MPEs/SPMS",slug:"/Module-Review/MPEs/SPMS/mh4500-time-series-analysis",permalink:"/docs/Module-Review/MPEs/SPMS/mh4500-time-series-analysis",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/MPEs/SPMS/MH4500 Time Series Analysis.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690185491,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:3,frontMatter:{id:"mh4500-time-series-analysis",slug:"mh4500-time-series-analysis",sidebar_position:3,title:"MH4500 Time Series Analysis",description:"Developing models for time series data",keywords:["time series","analysis","ntu","spms","course","module"]},sidebar:"tutorialSidebar",previous:{title:"MH3701 Basic Optimisation",permalink:"/docs/Module-Review/MPEs/SPMS/mh3701-basic-optimisation"},next:{title:"MH4501 Multivariate Analysis",permalink:"/docs/Module-Review/MPEs/SPMS/mh4501-multivariate-analysis"}},l={},m=[{value:"Course Summary",id:"course-summary",level:2},{value:"Workload and assessment",id:"workload-and-assessment",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:m},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"course-summary"},"Course Summary"),(0,a.kt)("p",null,"The course looks into what is a time series and techniques on how to deal with and model and time series data. This is a continuation of ",(0,a.kt)("a",{parentName:"p",href:"/docs/Module-Review/MPEs/SPMS/mh3510-regression-analysis"},"MH3510 Regression Analysis")," where we will deal with a more specific type of data which is time series data. The topics covered in this course are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Time series data and its typical components"),(0,a.kt)("li",{parentName:"ol"},"Stationarity and autocorrelation"),(0,a.kt)("li",{parentName:"ol"},"Trend and seasonality modelling"),(0,a.kt)("li",{parentName:"ol"},"AR, MA, ARMA, ARIMA and SARIMA models"),(0,a.kt)("li",{parentName:"ol"},"Invertibility"),(0,a.kt)("li",{parentName:"ol"},"Model selection, diagnostic checking and parameter estimation"),(0,a.kt)("li",{parentName:"ol"},"GARCH models ",(0,a.kt)("em",{parentName:"li"},"(non-examinable)"))),(0,a.kt)("h2",{id:"workload-and-assessment"},"Workload and assessment"),(0,a.kt)("p",null,"The workload is pretty light and the pace of the lessons is relatively slow. The assessments are 2 graded labs, 1 midterm exam and 1 final exam. The labs should not take too much time to complete as long as you follow what the instructor wants. For exams, you must do past year papers in order to do well for the actual exam."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There is always an ARMA ACVF calculation question for exams, which can be tricky so do familiarise yourself with this.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The course is not a difficult course, so do take this course if you want a light SPMS module. With sufficient practice, you should be able to do well. The course is taught by the same instructor of ",(0,a.kt)("a",{parentName:"p",href:"/docs/Module-Review/MPEs/SPMS/mh3510-regression-analysis"},"MH3510 Regression Analysis")," so do also take note of the teaching style before going for this course."))}c.isMDXComponent=!0}}]);
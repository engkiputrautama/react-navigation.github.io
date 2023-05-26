"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[25655],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,v=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(v,u(u({ref:t},c),{},{components:n})):r.createElement(v,u({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(83117),a=n(67294),o=n(86010),u=n(12466),i=n(16550),l=n(91980),s=n(67392),c=n(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function m(e){var t,n,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,f=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:f})})),b=m[0],h=m[1],y=v({queryString:l,groupId:s}),g=y[0],w=y[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=x[0],E=x[1],O=function(){var e=null!=g?g:k;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){O&&h(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),E(e)}),[w,E,f]),tabValues:f}}var b=n(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],f=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(f(t),l(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!=(o=c[u])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:d},u,{className:(0,o.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function x(e){var t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},4841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),u=(n(74866),n(85162),["components"]),i={id:"next-steps",title:"Next steps",sidebar_label:"Next steps"},l=void 0,s={unversionedId:"next-steps",id:"version-3.x/next-steps",title:"Next steps",description:"You are now familiar with how to create a stack navigator, configure it on your screen components, navigate between routes, and display full-screen modals. Stack navigator and its related APIs will be the most frequently used tools in your React Navigation toolbelt, but there are problems that they don't solve. For example, you can't build tab-based navigation using a stack navigator &mdash; for that, you need to use a TabNavigator.",source:"@site/versioned_docs/version-3.x/next-steps.md",sourceDirName:".",slug:"/next-steps",permalink:"/docs/3.x/next-steps",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/next-steps.md",tags:[],version:"3.x",frontMatter:{id:"next-steps",title:"Next steps",sidebar_label:"Next steps"},sidebar:"version-3.x-docs",previous:{title:"Opening a full-screen modal",permalink:"/docs/3.x/modal"},next:{title:"Glossary of terms",permalink:"/docs/3.x/glossary-of-terms"}},c={},f=[],d={toc:f},p="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You are now familiar with how to create a stack navigator, configure it on your screen components, navigate between routes, and display full-screen modals. Stack navigator and its related APIs will be the most frequently used tools in your React Navigation toolbelt, but there are problems that they don't solve. For example, you can't build tab-based navigation using a stack navigator ","\u2014"," for that, you need to use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/tab-based-navigation"},"TabNavigator"),"."),(0,o.kt)("p",null,'The rest of the documentation is organized around specific use cases, so you can jump between the sections under "Guides" as the need arises (but it also wouldn\'t hurt you to familiarize yourself with them pre-emptively!).'),(0,o.kt)("p",null,"While most users won't need to do this, if you are curious and want to learn more about how React Navigation works, it's recommended to work through the \"Build your own Navigator\" section."),(0,o.kt)("p",null,"Good luck!"))}v.isMDXComponent=!0}}]);
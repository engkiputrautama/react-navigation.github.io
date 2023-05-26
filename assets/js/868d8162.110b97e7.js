"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8200],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),p=a,h=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(83117),a=t(67294),o=t(86010),i=t(12466),s=t(16550),u=t(91980),c=t(67392),l=t(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:f(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function m(e){var n,t,r,o,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,c=e.groupId,f=d(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),g=m[0],v=m[1],b=h({queryString:u,groupId:c}),k=b[0],w=b[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,l.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=y[0],T=y[1],E=function(){var e=null!=k?k:N;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),T(e)}),[w,T,f]),tabValues:f}}var g=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,s=e.selectedValue,u=e.selectValue,c=e.tabValues,l=[],f=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==s&&(f(n),u(r))},p=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;t=null!=(o=l[i])?o:l[l.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return l.push(e)},onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function y(e){var n=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},38927:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),s={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},u=void 0,c={unversionedId:"function-after-focusing-screen",id:"version-7.x/function-after-focusing-screen",title:"Call a function when focused screen changes",description:"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-7.x/function-after-focusing-screen.md",sourceDirName:".",slug:"/function-after-focusing-screen",permalink:"/docs/7.x/function-after-focusing-screen",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/function-after-focusing-screen.md",tags:[],version:"7.x",frontMatter:{id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},sidebar:"version-7.x/docs",previous:{title:"Preventing going back",permalink:"/docs/7.x/preventing-going-back"},next:{title:"Access the navigation prop from any component",permalink:"/docs/7.x/connecting-navigation-prop"}},l={},f=[{value:"Triggering an action with a <code>&#39;focus&#39;</code> event listener",id:"triggering-an-action-with-a-focus-event-listener",level:2},{value:"Triggering an action with the <code>useFocusEffect</code> hook",id:"triggering-an-action-with-the-usefocuseffect-hook",level:2},{value:"Re-rendering screen with the <code>useIsFocused</code> hook",id:"re-rendering-screen-with-the-useisfocused-hook",level:2}],d={toc:f},p="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."),(0,o.kt)("p",null,"There are multiple approaches available to us:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Listening to the ",(0,o.kt)("inlineCode",{parentName:"li"},"'focus'")," event with an event listener."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"useFocusEffect")," hook provided by react-navigation."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"useIsFocused")," hook provided by react-navigation.")),(0,o.kt)("h2",{id:"triggering-an-action-with-a-focus-event-listener"},"Triggering an action with a ",(0,o.kt)("inlineCode",{parentName:"h2"},"'focus'")," event listener"),(0,o.kt)("p",null,"We can also listen to the ",(0,o.kt)("inlineCode",{parentName:"p"},"'focus'")," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."),(0,o.kt)("p",null,"With this approach, we will only be able to call an action when the screen focuses. This is useful for performing an action such as logging the screen view for analytics."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("samp",{id:"focus-event-listener"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\n\nfunction ProfileScreen({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // The screen is focused\n      // Call any action\n    });\n\n    // Return the function to unsubscribe from the event so it gets removed on unmount\n    return unsubscribe;\n  }, [navigation]);\n\n  return <View />;\n}\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-events"},"navigation events guide")," for more details on the event listener API."),(0,o.kt)("p",null,"In most cases, it's recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," hook instead of adding the listener manually. See below for details."),(0,o.kt)("h2",{id:"triggering-an-action-with-the-usefocuseffect-hook"},"Triggering an action with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useFocusEffect")," hook"),(0,o.kt)("p",null,"React Navigation provides a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hook")," that runs an effect when the screen comes into focus and cleans it up when it goes out of focus. This is useful for cases such as adding event listeners, for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."),(0,o.kt)("p",null,"This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."),(0,o.kt)("samp",{id:"simple-focus-effect"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, user => setUser(data));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/use-focus-effect/"},(0,o.kt)("inlineCode",{parentName:"a"},"useFocusEffect"))," documentation for more details."),(0,o.kt)("h2",{id:"re-rendering-screen-with-the-useisfocused-hook"},"Re-rendering screen with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useIsFocused")," hook"),(0,o.kt)("p",null,"React Navigation provides a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hook")," that returns a boolean indicating whether the screen is focused or not."),(0,o.kt)("p",null,"The hook will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when the screen is focused and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," when our component is no longer focused. This enables us to render something conditionally based on whether the user is on the screen or not."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useIsFocused")," hook will cause our component to re-render when we focus and unfocus a screen. Using this hook component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing. Hence we recommend to use this hook only if you need to trigger a re-render. For side-effects such as subscribing to events or fetching data, use the methods described above."),(0,o.kt)("samp",{id:"use-is-focused"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction Profile() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  const isFocused = useIsFocused();\n\n  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;\n}\n")),(0,o.kt)("p",null,"This example is also documented in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused")," API documentation"),"."))}h.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return r}),t.d(n,"rightToc",function(){return s}),t.d(n,"default",function(){return c});t(0);var o=t(133);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r={title:"Legacy APIs"},s=[],u={rightToc:s},l="wrapper";function c(e){var n=e.components,t=a(e,["components"]);return Object(o.b)(l,i({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you have some previous ComponentKit experience you probably encountered other animation-related APIs in CK such as ",Object(o.b)("inlineCode",{parentName:"p"},"animationsOnInitialMount")," or ",Object(o.b)("inlineCode",{parentName:"p"},"animationsOnFinalUnmount"),". Currently, we are slowly transitioning away from those APIs since they encourage creating more subclasses (which is bad for the binary size) and at the same time limit component reusability."),Object(o.b)("p",null,"Indeed, if you use one of those methods, your component will ",Object(o.b)("em",{parentName:"p"},"always"),' have the same initial or final animation regardless of context it\'s being used in. While this may be the behaviour you are looking for, usually there are better ways to achieve the same effect, such as described in the section "Initial / Final Animations" above. In general, you should turn to wrapping animated components in ',Object(o.b)("inlineCode",{parentName:"p"},"CKAnimationComponent")," first, before using ",Object(o.b)("inlineCode",{parentName:"p"},"animationsOnInitialMount")," or ",Object(o.b)("inlineCode",{parentName:"p"},"animationsOnFinalUnmount"),". If you actually need to have the same animations for the same component in multiple places, you should consider factoring wrapping this component in ",Object(o.b)("inlineCode",{parentName:"p"},"CKAnimationComponent")," to a separate function and using this function instead."),Object(o.b)("p",null,"Another API that is somewhat discouraged to use is providing the ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentAnimationHooks")," directly. There are some use cases that do require using that API, usually, integrations with other animation systems like POP or UIKit animations, and until fairly recently, final animation was one of such use cases too. Animation hooks should almost never be your first choice when animating your components, and we are working on reducing the number of cases when they are still needed by bringing the relevant functionality inside the framework."))}c.isMDXComponent=!0}}]);
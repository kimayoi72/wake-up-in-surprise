(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},27:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),i=t.n(r),l=(t(23),t(7)),c=t(8),s=t(11),u=t(10),d=t(12),m=t(41),p=t(38),f=t(42),h=t(43),v=t(17),w=t(14),g=t.n(w);function E(e){return e.error?o.a.createElement("div",null,"Error! ",o.a.createElement("button",{onClick:e.retry},"Retry")):e.timedOut?o.a.createElement("div",null,"Taking a long time... ",o.a.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?o.a.createElement("div",null,"Loading..."):null}function b(e){return g()(Object(v.a)({},e,{loading:E,delay:100,timeout:1e4}))}var k=b({loader:function(){return t.e(1).then(t.bind(null,39))}}),y=b({loader:function(){return t.e(2).then(t.bind(null,40))}}),A=b({loader:function(){return Promise.all([t.e(5),t.e(3)]).then(t.bind(null,44))}}),W=(t(27),function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,"Wake Up in Surprise")),o.a.createElement("nav",{className:"App-navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(p.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/upload/"},"Upload")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/alarm/"},"Alarm")))),o.a.createElement("main",{className:"App-main"},o.a.createElement(f.a,null,o.a.createElement(h.a,{path:"/",exact:!0,component:k}),o.a.createElement(h.a,{path:"/upload",component:A}),o.a.createElement(h.a,{path:"/alarm",component:y}),o.a.createElement(h.a,{component:k}))),o.a.createElement("footer",{className:"App-footer"},o.a.createElement("div",null,"This application is made with \ud83d\udc9c"),o.a.createElement("div",null,"Icon made from"," ",o.a.createElement("a",{href:"http://www.onlinewebfonts.com/icon"},"Icon Fonts")," is licensed by CC BY 3.0"))))}}]),n}(a.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),function(e){if("serviceWorker"in navigator){if(new URL("/wake-up-in-surprise",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/wake-up-in-surprise","/service-worker.js");j?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(n,e)})}}({onUpdate:function(e){return console.log("Registration update",e)},onSuccess:function(e){return console.log("Registration success",e)}})}},[[18,6,4]]]);
//# sourceMappingURL=main.d7a47bd2.chunk.js.map
(this.webpackJsonptaco=this.webpackJsonptaco||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l);a(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(2),i=a(1);var s=function(e){return c.a.createElement("div",{className:"tortilla flour",onClick:e.handleClickFlour},c.a.createElement("p",null,"Flour"),e.tacoIngredientStack)};var m=function(e){return c.a.createElement("div",{className:"tortilla corn",onClick:e.handleClickCorn},c.a.createElement("p",null,"Corn"),e.tacoIngredientStack)};var u=function(e){return c.a.createElement("div",{className:"ingChoice ".concat(e.handleIngChoice)},e.handleIngChoice)},d=["Chicken","Beef","al Pastor","Fish","Shrimp","Tofu","Black Beans","Pinto Beans","Lettuce","Tomatoes","Onions","Cheese","Crema","Guacamole","Red Salsa","Green Salsa"];var E=function(e){return c.a.createElement("div",{className:"ingredients"},c.a.createElement("ul",null,d.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("button",{className:t,onClick:e.handleClickIngred},t))}))))};var h=function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"submitter"},c.a.createElement("button",{onClick:e.handleSubmitOrder},c.a.createElement("strong",null,"\u2022 Order Taco \u2022"))))};var k=function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"submitter"},c.a.createElement("button",{onClick:e.handleResetOrder},c.a.createElement("strong",null,"\u2022 Order Another \u2022"))))};var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),d=Object(i.a)(r,2),v=d[0],f=d[1],p=Object(n.useState)(!0),b=Object(i.a)(p,2),C=b[0],g=b[1],N=Object(n.useState)([]),w=Object(i.a)(N,2),O=w[0],S=w[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"torts ".concat(v?"down":"up")},c.a.createElement("div",{className:"taco-title"},c.a.createElement("h1",null,"Taco Stack"),c.a.createElement("p",null,"A simple app for taco customization.")),c.a.createElement(s,{handleClickFlour:function(){l([c.a.createElement(s,{key:0})]),f(!1)}}),c.a.createElement(m,{handleClickCorn:function(){l([c.a.createElement(m,{key:1})]),f(!1)}})),c.a.createElement("div",{className:"tacoContainer"},!v&&c.a.createElement("button",{className:"removeB taco-back",onClick:function(){l([]),S([]),f(!0)}}),!v&&c.a.createElement("button",{className:"removeB taco-reset",onClick:function(){S([])}}),c.a.createElement("div",{className:"tacoIngredientContainer ".concat(v?"hide":"show")},c.a.createElement("ul",null,O.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return function(e){var t=Object(o.a)(O);t.splice(e,1),S(t)}(t)}},e)})))),a,c.a.createElement("div",{className:"ingreds-vis ".concat(v?"hide":"show")},!v&&c.a.createElement(E,{handleClickIngred:function(e){var t=O.length,a=e.target.className;t<9?S([].concat(Object(o.a)(O),[c.a.createElement(u,{handleIngChoice:a,key:t})])):alert("Your Taco is FULL!")}}),!v&&c.a.createElement(h,{handleSubmitOrder:function(){var e=[];O.length>0?(e.push(a[0].type.name),O.forEach((function(t){e.push(t.type.name)})),g(!1),window.scrollTo(0,0)):alert("Add some tasty ingredients.")}})),c.a.createElement("div",{className:"order-submitted ".concat(C?"hide":"show")},c.a.createElement("div",{className:"rims"},c.a.createElement("div",{className:"taco-rim"}),c.a.createElement("div",{className:"taco-rim-blue"})),c.a.createElement("h3",null,c.a.createElement("em",null,"What a delicious taco!")),c.a.createElement(k,{handleResetOrder:function(){l([]),S([]),f(!0),g(!0),window.scrollTo(0,0)}}))),c.a.createElement("div",{className:"monkik-icons"},c.a.createElement("p",null,"tacostack.app = react + gh-pages"),c.a.createElement("p",null,"icons by ",c.a.createElement("a",{href:"https://www.flaticon.com/authors/monkik",title:"monkik",target:"_blank",rel:"noopener noreferrer"},"monkik"))))},f=document.getElementById("root");r.a.render(c.a.createElement(v,null),f),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.0d1aeeaa.chunk.js.map
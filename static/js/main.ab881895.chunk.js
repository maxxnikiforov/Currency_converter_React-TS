(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),u=(c(11),c(3)),l=c.n(u),j=c(4),i=c(2),o="https://api.monobank.ua/bank/currency";function d(){return b.apply(this,arguments)}function b(){return(b=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(13);var h=c(0),O=function(e){var t=e.usdBuy,c=e.usdSell,n=e.eurBuy,r=e.eurSell;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"UAH exchange rates"}),Object(h.jsxs)("table",{className:"header__table",children:[Object(h.jsxs)("tr",{className:"header__table-row",children:[Object(h.jsx)("th",{children:"operation"}),Object(h.jsx)("th",{children:"USD"}),Object(h.jsx)("th",{children:"EUR"})]}),Object(h.jsxs)("tr",{className:"header__table-row",children:[Object(h.jsx)("td",{children:"BUY"}),Object(h.jsx)("td",{children:+t.toFixed(2)}),Object(h.jsx)("td",{children:+n.toFixed(2)})]}),Object(h.jsxs)("tr",{className:"header__table-row",children:[Object(h.jsx)("td",{children:"SELL"}),Object(h.jsx)("td",{children:+c.toFixed(2)}),Object(h.jsx)("td",{children:+r.toFixed(2)})]})]})]})},x=(c(15),function(e){var t=e.usdBuy,c=e.usdSell,r=e.eurBuy,a=e.eurSell,s=e.eurUsdBuy,u=e.eurUsdSell,l=Object(n.useState)("sell"),j=Object(i.a)(l,2),o=j[0],d=j[1],b=Object(n.useState)(0),O=Object(i.a)(b,2),x=O[0],p=O[1],v=Object(n.useState)("UAH"),S=Object(i.a)(v,2),m=S[0],f=S[1],U=Object(n.useState)("USD"),y=Object(i.a)(U,2),_=y[0],g=y[1],B=Object(n.useState)(0),N=Object(i.a)(B,2),w=N[0],A=N[1];return Object(h.jsxs)("div",{className:"converter",children:[Object(h.jsxs)("div",{className:"converter__operation",children:[Object(h.jsx)("h3",{children:"Your operation"}),Object(h.jsxs)("select",{name:"operation",value:o,onChange:function(e){d(e.target.value)},children:[Object(h.jsx)("option",{value:"sale",children:"sale"}),Object(h.jsx)("option",{value:"buy",children:"buy"})]})]}),Object(h.jsxs)("section",{className:"converter__inOutPut-container",children:[Object(h.jsxs)("div",{className:"converter__inPut-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Your Sum"}),Object(h.jsx)("input",{name:"input",type:"number",className:"converter__input",value:x.toString().replace(/^0+/,""),onChange:function(e){p(+e.target.value),"buy"===o&&("UAH"===m&&A("USD"===_?+(x/c).toFixed(2):x/a),"USD"===m&&A("UAH"===_?x*t:x/u),"EUR"===m&&A("UAH"===_?x*r:x*s))},placeholder:"write your amount"})]}),Object(h.jsxs)("div",{className:"converter__operation",children:[Object(h.jsx)("h4",{children:"Change from:"}),Object(h.jsxs)("select",{name:"operation",value:m,onChange:function(e){f(e.target.value)},children:[Object(h.jsx)("option",{value:"UAH",children:"UAH"}),Object(h.jsx)("option",{value:"USD",children:"USD"}),Object(h.jsx)("option",{value:"EUR",children:"EUR"})]})]})]}),Object(h.jsxs)("div",{className:"converter__OutPut-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Converted Sum"}),Object(h.jsx)("input",{name:"input",type:"number",className:"converter__input",value:w.toString().replace(/^0+/,""),onChange:function(e){return A(+e.target.value)},placeholder:"converted amount"})]}),Object(h.jsxs)("div",{className:"converter__operation",children:[Object(h.jsx)("h4",{children:"Change to:"}),Object(h.jsxs)("select",{name:"operation",value:_,onChange:function(e){g(e.target.value)},children:[Object(h.jsx)("option",{value:"UAH",children:"UAH"}),Object(h.jsx)("option",{value:"USD",children:"USD"}),Object(h.jsx)("option",{value:"EUR",children:"EUR"})]})]})]})]}),Object(h.jsx)("p",{children:t}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:r}),Object(h.jsx)("p",{children:a})]})}),p=(c(16),function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),u=s[0],o=s[1],b=Object(n.useState)(0),p=Object(i.a)(b,2),v=p[0],S=p[1],m=Object(n.useState)(0),f=Object(i.a)(m,2),U=f[0],y=f[1],_=Object(n.useState)(0),g=Object(i.a)(_,2),B=g[0],N=g[1],w=Object(n.useState)(0),A=Object(i.a)(w,2),E=A[0],H=A[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,n=t[1],a=t[0],(s=t[2])&&(N(+s.rateBuy),H(+s.rateSell)),n&&(S(+n.rateBuy),y(+n.rateSell)),a&&(r(+a.rateBuy),o(+a.rateSell)),console.log(t,c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(O,{usdBuy:c,usdSell:u,eurBuy:v,eurSell:U}),Object(h.jsx)(x,{usdBuy:c,usdSell:u,eurBuy:v,eurSell:U,eurUsdBuy:B,eurUsdSell:E})]})});s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ab881895.chunk.js.map
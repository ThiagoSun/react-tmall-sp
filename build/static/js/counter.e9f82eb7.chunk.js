(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(n,t,e){"use strict";e.r(t),e.d(t,"COUNTER_INCREMENT",function(){return u}),e.d(t,"COUNTER_DOUBLE_ASYNC",function(){return o}),e.d(t,"increment",function(){return i}),e.d(t,"doubleAsync",function(){return a}),e.d(t,"actions",function(){return l}),e.d(t,"default",function(){return f});var r,c=e(38),u="COUNTER_INCREMENT",o="COUNTER_DOUBLE_ASYNC";function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:u,payload:n}}var a=function(){return function(n,t){return new Promise(function(e){setTimeout(function(){n({type:o,payload:t().counter}),e()},200)})}},l={increment:i,doubleAsync:a},s=(r={},Object(c.a)(r,u,function(n,t){return n+t.payload}),Object(c.a)(r,o,function(n,t){return 2*n}),r),d=0;function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,e=s[t.type];return e?e(n,t):n}},168:function(n,t,e){n.exports={counterContainer:"Counter__counterContainer--1Rg-2"}},169:function(n,t,e){"use strict";e.r(t);var r=e(19),c=e(167),u=e(0),o=e.n(u),i=e(168),a=e.n(i),l=function(n){var t=n.counter,e=n.increment,r=n.doubleAsync;return o.a.createElement("div",{className:a.a.counterContainer},o.a.createElement("h2",null,"Counter: ",t),o.a.createElement("button",{className:"btn btn-primary",onClick:e},"Increment")," ",o.a.createElement("button",{className:"btn btn-secondary",onClick:r},"Double (Async)"))},s={increment:function(){return Object(c.increment)(1)},doubleAsync:c.doubleAsync};t.default=Object(r.c)(function(n){return{counter:n.counter}},s)(l)}}]);
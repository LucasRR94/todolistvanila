!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function d(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}for(var u=[],a=0;a<256;++a)u[a]=(a+256).toString(16).substr(1);var c=function(e,t){var n=t||0,o=u;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")};var i=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var u=0;u<16;++u)t[o+u]=r[u];return t||c(r)};const l=document.getElementById("contentTodo"),p=document.getElementById("deadLine"),s=document.getElementById("newtodo"),f=document.getElementById("answerList");s.addEventListener("click",e=>{e.preventDefault();const t=(n=l.value,o=p.value,r=i(),function(e,t,n){const o=document.createElement("div");o.className="container-todo-item";const r=document.createElement("p");r.appendChild(document.createTextNode("Content: "+e)),o.appendChild(r);const d=document.createElement("p");d.appendChild(document.createTextNode("Deadline: "+t)),o.appendChild(d);const u=document.createElement("button");return u.className="btn-del-todo",u.appendChild(document.createTextNode("X")),o.appendChild(u),o.id=n,o.childNodes[2].addEventListener("click",e=>{e.preventDefault(),console.log(n),document.getElementById(n).remove()}),o}(n,o,r));var n,o,r;f.appendChild(t)})}]);

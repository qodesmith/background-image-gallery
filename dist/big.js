!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.big=t():e.big=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o=n(1);e.exports=function(e){var t=e.photos,n=e.interval,r=e.fade;if(e.random&&(t=o(t)),!t.length)throw"Please provide an array of photos.";var a=t.map(function(e,t){var n=document.createElement("div"),o=t?"":" qs-on";return n.className="qs-photo".concat(o),n.style.cssText=["background-image: url('".concat(e.image,"');"),"transition: opacity ".concat(r/1e3,"s;")].join(""),document.body.append(n),n}),i=0,u=setInterval(function(){a[i].classList.remove("qs-on"),++i===a.length&&(i=0),a[i].classList.add("qs-on")},n);return{stop:function(){clearInterval(u)},clean:function(){clearInterval(u),a.forEach(function(e){return e.remove()})}}}},function(e,t){e.exports=function(e){if(!Array.isArray(e))throw"C'mon pal. You gotta feed this thing *arrays*!";const t=[];let n=e.slice();for(;n.length;){const e=Math.floor(Math.random()*n.length);t.push(n.splice(e,1)[0])}return t}}])});
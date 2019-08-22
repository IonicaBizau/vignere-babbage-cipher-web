"use strict";var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof2(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).m=e()}}(function(){return function i(f,u,l){function c(n,e){if(!u[n]){if(!f[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(a)return a(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[n]={exports:{}};f[n][0].call(r.exports,function(e){return c(f[n][1][e]||e)},r,r.exports,i,f,u,l)}return u[n].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(n,t,e){(function(e){"undefined"==typeof document&&(e.document={querySelector:function(){},addEventListener:function(){}},e.window={});var i=n("elly"),f=n("vignere-babbage-cipher");window.onload=function(){function e(){var e=o.value.trim();if(e){var n=i("[name='operation']:checked").value;t.textContent=f[n](r.value,e)}else t.textContent="Please provide a key."}var t=i("#result"),o=i("#key"),r=i("#text-input");r.addEventListener("input",e),o.addEventListener("input",e)},t.exports=function(){}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{elly:2,"vignere-babbage-cipher":5}],2:[function(e,n,t){var o=e("iterate-object"),r=e("sliced");function i(t,e){return"string"==typeof t?"<"===t.charAt(0)?(t=document.createElement(t.slice(1,-1)),o(e||{},function(e,n){switch(n){case"text":return void(t.textContent=e);case"html":return void(t.innerHTML=e)}t.setAttribute(n,e)}),t):(e=e||document).querySelector(t):t}i.$$=function(e,n){return"string"==typeof e?(n=n||document,r(n.querySelectorAll(e))):[e]},n.exports=i},{"iterate-object":3,sliced:4}],3:[function(e,n,t){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};n.exports=function(e,n){var t=0,o=[];if(Array.isArray(e))for(;t<e.length&&!1!==n(e[t],t,e);++t);else if("object"===(void 0===e?"undefined":r(e))&&null!==e)for(o=Object.keys(e);t<o.length&&!1!==n(e[o[t]],o[t],e);++t);}},{}],4:[function(e,n,t){n.exports=function(e,n,t){var o=[],r=e.length;if(0===r)return o;var i=n<0?Math.max(0,n+r):n||0;for(void 0!==t&&(r=t<0?t+r:t);r-- >i;)o[r-i]=e[r];return o}},{}],5:[function(e,n,t){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i={A:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",B:"BCDEFGHIJKLMNOPQRSTUVWXYZA",C:"CDEFGHIJKLMNOPQRSTUVWXYZAB",D:"DEFGHIJKLMNOPQRSTUVWXYZABC",E:"EFGHIJKLMNOPQRSTUVWXYZABCD",F:"FGHIJKLMNOPQRSTUVWXYZABCDE",G:"GHIJKLMNOPQRSTUVWXYZABCDEF",H:"HIJKLMNOPQRSTUVWXYZABCDEFG",I:"IJKLMNOPQRSTUVWXYZABCDEFGH",J:"JKLMNOPQRSTUVWXYZABCDEFGHI",K:"KLMNOPQRSTUVWXYZABCDEFGHIJ",L:"LMNOPQRSTUVWXYZABCDEFGHIJK",M:"MNOPQRSTUVWXYZABCDEFGHIJKL",N:"NOPQRSTUVWXYZABCDEFGHIJKLM",O:"OPQRSTUVWXYZABCDEFGHIJKLMN",P:"PQRSTUVWXYZABCDEFGHIJKLMNO",Q:"QRSTUVWXYZABCDEFGHIJKLMNOP",R:"RSTUVWXYZABCDEFGHIJKLMNOPQ",S:"STUVWXYZABCDEFGHIJKLMNOPQR",T:"TUVWXYZABCDEFGHIJKLMNOPQRS",U:"UVWXYZABCDEFGHIJKLMNOPQRST",V:"VWXYZABCDEFGHIJKLMNOPQRSTU",W:"WXYZABCDEFGHIJKLMNOPQRSTUV",X:"XYZABCDEFGHIJKLMNOPQRSTUVW",Y:"YZABCDEFGHIJKLMNOPQRSTUVWX",Z:"ZABCDEFGHIJKLMNOPQRSTUVWXY"},r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(f,null,[{key:"encrypt",value:function(e,t){e.length>t.length&&(t+=e.slice(0,e.length-t.length)),t=t.replace(new RegExp("[^"+i.A+"]","g"),"");var o=-1;return e.split("").map(function(e){var n=i[e];return n?n[i.A.indexOf(t[++o])]:e}).join("")}},{key:"decrypt",value:function(e,o){var r=0;return e.split("").map(function(e){var n=i[o[r]];if(!i[e])return e;var t=i.A[n.indexOf(e)];return o+=t,++r,t}).join("")}}]),f);function f(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f)}n.exports=r},{}]},{},[1])(1)});
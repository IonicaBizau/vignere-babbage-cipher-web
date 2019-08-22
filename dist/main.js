"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)};!function(e){"object"===("undefined"==typeof exports?"undefined":_typeof2(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).m=e()}(function(){return function i(f,u,c){function l(t,e){if(!u[t]){if(!f[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(y)return y(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[t]={exports:{}};f[t][0].call(r.exports,function(e){return l(f[t][1][e]||e)},r,r.exports,i,f,u,c)}return u[t].exports}for(var y="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,t,n){e("elly"),e("vignere-babbage-cipher"),t.exports=function(){}},{elly:2,"vignere-babbage-cipher":5}],2:[function(e,t,n){var o=e("iterate-object"),r=e("sliced");function i(n,e){return"string"==typeof n?"<"===n.charAt(0)?(n=document.createElement(n.slice(1,-1)),o(e||{},function(e,t){switch(t){case"text":return void(n.textContent=e);case"html":return void(n.innerHTML=e)}n.setAttribute(t,e)}),n):(e=e||document).querySelector(n):n}i.$$=function(e,t){return"string"==typeof e?(t=t||document,r(t.querySelectorAll(e))):[e]},t.exports=i},{"iterate-object":3,sliced:4}],3:[function(e,t,n){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};t.exports=function(e,t){var n=0,o=[];if(Array.isArray(e))for(;n<e.length&&!1!==t(e[n],n,e);++n);else if("object"===(void 0===e?"undefined":r(e))&&null!==e)for(o=Object.keys(e);n<o.length&&!1!==t(e[o[n]],o[n],e);++n);}},{}],4:[function(e,t,n){t.exports=function(e,t,n){var o=[],r=e.length;if(0===r)return o;var i=t<0?Math.max(0,t+r):t||0;for(void 0!==n&&(r=n<0?n+r:n);r-- >i;)o[r-i]=e[r];return o}},{}],5:[function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i={A:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",B:"BCDEFGHIJKLMNOPQRSTUVWXYZA",C:"CDEFGHIJKLMNOPQRSTUVWXYZAB",D:"DEFGHIJKLMNOPQRSTUVWXYZABC",E:"EFGHIJKLMNOPQRSTUVWXYZABCD",F:"FGHIJKLMNOPQRSTUVWXYZABCDE",G:"GHIJKLMNOPQRSTUVWXYZABCDEF",H:"HIJKLMNOPQRSTUVWXYZABCDEFG",I:"IJKLMNOPQRSTUVWXYZABCDEFGH",J:"JKLMNOPQRSTUVWXYZABCDEFGHI",K:"KLMNOPQRSTUVWXYZABCDEFGHIJ",L:"LMNOPQRSTUVWXYZABCDEFGHIJK",M:"MNOPQRSTUVWXYZABCDEFGHIJKL",N:"NOPQRSTUVWXYZABCDEFGHIJKLM",O:"OPQRSTUVWXYZABCDEFGHIJKLMN",P:"PQRSTUVWXYZABCDEFGHIJKLMNO",Q:"QRSTUVWXYZABCDEFGHIJKLMNOP",R:"RSTUVWXYZABCDEFGHIJKLMNOPQ",S:"STUVWXYZABCDEFGHIJKLMNOPQR",T:"TUVWXYZABCDEFGHIJKLMNOPQRS",U:"UVWXYZABCDEFGHIJKLMNOPQRST",V:"VWXYZABCDEFGHIJKLMNOPQRSTU",W:"WXYZABCDEFGHIJKLMNOPQRSTUV",X:"XYZABCDEFGHIJKLMNOPQRSTUVW",Y:"YZABCDEFGHIJKLMNOPQRSTUVWX",Z:"ZABCDEFGHIJKLMNOPQRSTUVWXY"},r=(o(f,[{key:"encrypt",value:function(e,n){e.length>n.length&&(n+=e.slice(0,e.length-n.length)),n=n.replace(new RegExp("[^"+i.A+"]","g"),"");var o=-1;return e.split("").map(function(e){var t=i[e];return t?t[i.A.indexOf(n[++o])]:e}).join("")}},{key:"decrypt",value:function(e,o){var r=0;return e.split("").map(function(e){var t=i[o[r]];if(!i[e])return e;var n=i.A[t.indexOf(e)];return o+=n,++r,n}).join("")}}]),f);function f(){!function(e){if(!(e instanceof f))throw new TypeError("Cannot call a class as a function")}(this)}t.exports=r},{}]},{},[1])(1)});
!function e(r,o,t){function n(i,f){if(!o[i]){if(!r[i]){var l="function"==typeof require&&require;if(!f&&l)return l(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=o[i]={exports:{}};r[i][0].call(s.exports,(function(e){return n(r[i][1][e]||e)}),s,s.exports,e,r,o,t)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)n(t[i]);return n}({1:[function(e,r,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=e("./home/greet");console.log(t.sayHello("2"))},{"./home/greet":2}],2:[function(e,r,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.sayHello=void 0,o.sayHello=function(e){return"Hello from "+e}},{}]},{},[1]);
//# sourceMappingURL=home.js.map

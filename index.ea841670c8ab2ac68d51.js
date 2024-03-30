/*! For license information please see index.ea841670c8ab2ac68d51.js.LICENSE.txt */
(()=>{"use strict";var t={527:(t,e,n)=>{n.d(e,{A:()=>u});var r=n(645),o=n.n(r),i=n(278),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]),a.push([t.id,"*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Press Start 2P', cursive;\n  direction: ltr;\n  font-size: 10px;\n  line-height: 1.382em;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #000;\n  font-weight: 500;\n  margin-block-start: 0.382em;\n  margin-block-end: 0.618em;\n  line-height: 1.382em;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\nh3 {\n  font-size: 1.17em;\n}\n\nh4 {\n  font-size: 1em;\n}\n\nh5 {\n  font-size: 0.83em;\n}\n\nh6 {\n  font-size: 0.67em;\n}\n\nbutton {\n  font-family: 'Press Start 2P', cursive;\n  padding: 10px;\n}\n\n.win-text {\n  display: flex;\n  justify-content: center;\n  gap: 150px;\n  margin-top: 50px;\n  font-size: 35px;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.battlefields {\n  display: flex;\n  justify-content: center;\n  gap: 150px;\n  margin-top: 50px;\n}\n\n.field {\n  height: fit-content;\n  width: fit-content;\n  background-color: #000;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 0.5px solid #000;\n}\n\n.cell {\n  height: 30px;\n  width: 30px;\n  border: 0.5px solid #000;\n}\n\n.sea {\n  background-color: rgb(255, 255, 255);\n}\n\n.ship {\n  background-color: rgb(110, 161, 244);\n}\n\n.sea-hit {\n  background-color: rgb(190, 190, 190);\n}\n\n.ship-hit {\n  background-color: rgb(255, 97, 97);\n}\n\n.rival-field .sea:hover {\n  background-color: #d3d3fe;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 5px;\n  margin-top: 35px;\n}\n\n.authors {\n  padding: 25px;\n}\n",""]);const u=a},278:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},645:t=>{t.exports=function(t){return t[1]}},292:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],u=0;u<t.length;u++){var c=t[u],l=r.base?c[0]+r.base:c[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var h=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var y=o(p,r);r.byIndex=u,e.splice(u,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var u=n(i[a]);e[u].references--}for(var c=r(t,o),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},383:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},88:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},884:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},893:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},997:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(292),e=n.n(t),r=n(893),o=n.n(r),i=n(383),a=n.n(i),u=n(884),c=n.n(u),l=n(88),s=n.n(l),f=n(997),h=n.n(f),p=n(527),y={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function m(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:String(e)}y.styleTagTransform=h(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=s(),e()(p.A,y),p.A&&p.A.locals&&p.A.locals;const g=m((function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sea";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.type=r,this.isHit=!1}));function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function x(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function j(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:String(e)}var E=new WeakSet;function k(t,e){for(var n=[],r=0;r<e;r++){for(var o=[],i=0;i<t;i++){var a=new g(i,r);o.push(a)}n.push(o)}return n}const A=x((function t(e,n){var r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,o=E),o.add(r),this.width=e,this.height=n,this.value=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,E,k).call(this,this.width,this.height)}));function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function T(t){var e=function(t,e){if("object"!=P(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:String(e)}const L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cells=e,this.isDead=!1}var e,n;return e=t,(n=[{key:"checkHealth",value:function(){this.cells.every((function(t){return t.isHit}))&&(this.isDead=!0)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return t[parseInt(Math.random()*t.length)]}function I(t,e){return Math.floor(Math.random()*(e-t+1))+t}function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function W(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function H(t){var e=function(t,e){if("object"!=M(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==M(e)?e:String(e)}function z(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function D(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var N=new WeakSet,G=new WeakSet,U=new WeakSet,B=new WeakSet,Y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,B),z(this,U),z(this,G),z(this,N),D(this,B,J).call(this)}var e,n;return e=t,n=[{key:"getUntouchedCells",value:function(){var t,e=[],n=W(this.map.value);try{for(n.s();!(t=n.n()).done;){var r,o=W(t.value);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.isHit||e.push(i)}}catch(t){o.e(t)}finally{o.f()}}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"isLost",value:function(){return this.ships.every((function(t){return t.isDead}))}},{key:"validShipPosition",value:function(t,e,n,r){var o=r?n:1,i=r?1:n;if(t+o>10||e+i>10)return!1;for(var a=t-1;a<t+1+o;a++)for(var u=e-1;u<e+1+i;u++)if(a>=0&&a<10&&u>=0&&u<10&&"sea"!=this.map.value[a][u].type)return!1;return!0}}],n&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t,e,n,r){for(var o=[],i=0;i<n;i++){var a=this.map.value[t][e];a.type="ship",o.push(a),r?t++:e++}return new L(o)}function R(){for(var t=0,e=[4,3,3,2,2,2,1,1,1,1];t<e.length;t++){var n=e[t],r=void 0,o=void 0,i=void 0;do{i=I(0,2),r=I(0,10),o=I(0,10)}while(!this.validShipPosition(r,o,n,i));var a=D(this,N,$).call(this,r,o,n,i);D(this,U,q).call(this,a),this.ships.push(a)}}function q(t){var e,n=W(t.cells);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.shipPointers.set(r,t)}}catch(t){n.e(t)}finally{n.f()}}function J(){this.map=new A(10,10),this.ships=[],this.shipPointers=new Map,D(this,G,R).call(this)}const K=Y;function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X(r.key),r)}}function X(t){var e=function(t,e){if("object"!=Q(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Q(e)?e:String(e)}function Z(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var tt=new WeakSet;function et(t,e,n,r){var o=this.config[e].events,i=function(){var e=o[a];t.addEventListener(a,(function(){return e(n,r)}))};for(var a in o)i()}const nt=function(){function t(e,n){var r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,o=tt),o.add(r),this.container=e,this.config=n}var e,n;return e=t,(n=[{key:"draw",value:function(t){var e=this;this.container.innerHTML="";for(var n=0;n<t.length;n++)for(var r=function(){var r=t[n][o],i=document.createElement("div");e.config[r].class.split(" ").forEach((function(t){i.classList.add(t)})),e.config[r].events&&Z(e,tt,et).call(e,i,r,n,o),e.container.appendChild(i)},o=0;o<t[n].length;o++)r()}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function rt(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const it=function(t,e,n){var r=t.map.value[e][n];if(r.isHit=!0,"sea"===r.type)return!1;var o=t.shipPointers.get(r),i=t.map.value;return o.checkHealth(),o.isDead?function(t,e){var n,r=[-1,0,1],o=rt(e.cells);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=rt(r);try{for(u.s();!(i=u.n()).done;){var c,l=i.value,s=rt(r);try{for(s.s();!(c=s.n()).done;){var f=c.value,h=a.y+l,p=a.x+f;0<=h&&0<=p&&h<10&&p<10&&"sea"===t[h][p].type&&(t[h][p].isHit=!0)}}catch(t){s.e(t)}finally{s.f()}}}catch(t){u.e(t)}finally{u.f()}}}catch(t){o.e(t)}finally{o.f()}}(i,o):function(t,e){for(var n=[1,-1],r=0,o=n;r<o.length;r++){var i,a=o[r],u=rt(n);try{for(u.s();!(i=u.n()).done;){var c=i.value,l=e.y+a,s=e.x+c;0<=l&&0<=s&&l<10&&s<10&&(t[l][s].isHit=!0)}}catch(t){u.e(t)}finally{u.f()}}}(i,r),!0};function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function ut(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=ct(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function ct(t,e){if(t){if("string"==typeof t)return lt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?lt(t,e):void 0}}function lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function st(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ft(r.key),r)}}function ft(t){var e=function(t,e){if("object"!=at(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=at(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==at(e)?e:String(e)}function ht(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function pt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var yt=new WeakSet,vt=new WeakSet,dt=new WeakSet,mt=new WeakSet,bt=new WeakSet,gt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ht(this,bt),ht(this,mt),ht(this,dt),ht(this,vt),ht(this,yt),this.opponent=e,this.shipForAttack=void 0}var e,n;return e=t,n=[{key:"getAttackCoordinate",value:function(){if(!this.shipForAttack||this.shipForAttack.isDead){var t=this.opponent.getUntouchedCells(),e=pt(this,bt,Et).call(this,this.opponent.ships);e>1&&(t=pt(this,dt,xt).call(this,t,e));var n=C(t);if("ship"===n.type){var r=this.opponent.shipPointers.get(n);r.cells.length>1?this.shipForAttack=r:this.shipForAttack=void 0}return[n.y,n.x]}var o=C(pt(this,vt,St).call(this,this.shipForAttack));return[o.y,o.x]}}],n&&st(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function wt(t,e){for(var n=[],r=t.y-1;r<=t.y+1;r++)for(var o=t.x-1;o<=t.x+1;o++)0<=r&&r<=9&&0<=o&&o<=9&&(e[r][o].isHit||n.push(e[r][o]));return n}function St(t){var e,n,r=[],o=ut(t.cells);try{for(o.s();!(e=o.n()).done;){var i=e.value;if(i.isHit){var a=pt(this,yt,wt).call(this,i,this.opponent.map.value);r.push.apply(r,function(t){if(Array.isArray(t))return lt(t)}(n=a)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||ct(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}}}catch(t){o.e(t)}finally{o.f()}return r}function xt(t,e){var n,r=[],o=-1,i=ut(t);try{for(i.s();!(n=i.n()).done;){var a=n.value,u=pt(this,mt,jt).call(this,a,e);u<o||(u>o&&(o=u,r=[]),r.push(a))}}catch(t){i.e(t)}finally{i.f()}return r}function jt(t,e){for(var n=0,r=0,o=[[-1,0],[1,0],[0,-1],[0,1]];r<o.length;r++)for(var i=(h=2,function(t){if(Array.isArray(t))return t}(f=o[r])||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(f,h)||ct(f,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1],c=t.y,l=t.x,s=1;s<e&&(l+=u,0<=(c+=a)&&c<=9&&0<=l&&l<=9)&&!this.opponent.map.value[c][l].isHit;s++)n+=1;var f,h;return n}function Et(t){var e,n=1,r=ut(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;!o.isDead&&o.cells.length>n&&(n=o.cells.length)}}catch(t){r.e(t)}finally{r.f()}return n}const kt=gt;var At="You won!",Pt="You lose!",Ot={sea:{0:0,1:1},ship:{0:2,1:3}},Tt={0:{class:"cell sea"},1:{class:"cell sea-hit"},2:{class:"cell ship"},3:{class:"cell ship-hit"}};function Lt(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ct(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function Ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function It(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],o=Lt(t);try{for(o.s();!(e=o.n()).done;){var i,a=e.value,u=[],c=Lt(a);try{for(c.s();!(i=c.n()).done;){var l=i.value,s=Ot[l.type][Number(l.isHit)];n&&2===s&&(s=0),u.push(s)}}catch(t){c.e(t)}finally{c.f()}r.push(u)}}catch(t){o.e(t)}finally{o.f()}return r}function Mt(t){return Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(t)}function Wt(){Wt=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new L(r||[]);return o(a,"_invoke",{value:A(t,n,u)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function m(){}function b(){}function g(){}var w={};l(w,a,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(C([])));x&&x!==n&&r.call(x,a)&&(w=x);var j=g.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==Mt(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,n,r){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=P(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?v:p,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(Mt(e)+" is not iterable")}return b.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},E(k.prototype),l(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),l(j,c,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),d}},e}function Ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _t(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function Ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Dt(r.key),r)}}function zt(t,e,n){return e&&Ht(t.prototype,e),n&&Ht(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Dt(t){var e=function(t,e){if("object"!=Mt(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=Mt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Mt(e)?e:String(e)}function Nt(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function Gt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var Ut=new WeakSet,Bt=new WeakSet,Yt=new WeakSet,$t=new WeakSet,Rt=new WeakSet,qt=new WeakSet,Jt=new WeakSet,Kt=new WeakSet,Qt=new WeakSet,Vt=new WeakSet;function Xt(){this.textElement.textContent="",this.endGame=!1,this.playerMove=!0,this.player=new K,this.opponent=new K,this.userConfig=structuredClone(Tt),this.rivalConfig=structuredClone(Tt),this.attackOpponentEvent=Gt(this,qt,re).bind(this),Gt(this,Jt,ie).call(this,this.rivalConfig,0,"click",this.attackOpponentEvent),this.playerDrawer=new nt(this.userField,this.userConfig),this.opponentDrawer=new nt(this.rivalField,this.rivalConfig),this.bot=new kt(this.player)}function Zt(){this.playerDrawer.draw(It(this.player.map.value)),this.opponentDrawer.draw(It(this.opponent.map.value,!0))}function te(){Gt(this,Ut,Xt).call(this),Gt(this,Bt,Zt).call(this)}function ee(t){this.textElement.classList.add("win-text"),this.textElement.textContent=t}function ne(){return this.player.isLost()||this.opponent.isLost()}function re(t,e){return oe.apply(this,arguments)}function oe(){var t;return t=Wt().mark((function t(e,n){var r,o,i,a=this;return Wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.endGame&&this.playerMove){t.next=2;break}return t.abrupt("return");case 2:if(it(this.opponent,e,n)){t.next=11;break}this.playerMove=!1,this.opponentDrawer.draw(It(this.opponent.map.value,!0),!1),r=!1,o=Wt().mark((function t(){var e,n,o,i,u;return Wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=I(200,1e3),t.next=3,new Promise((function(t){return setTimeout(t,e)}));case 3:n=a.bot.getAttackCoordinate(),l=2,o=function(t){if(Array.isArray(t))return t}(c=n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(c,l)||function(t,e){if(t){if("string"==typeof t)return Ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ft(t,e):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],u=o[1],r=it(a.player,i,u),a.playerDrawer.draw(It(a.player.map.value));case 6:case"end":return t.stop()}var c,l}),t)}));case 8:return t.delegateYield(o(),"t0",9);case 9:if(r&&!Gt(this,Rt,ne).call(this)){t.next=8;break}case 10:this.playerMove=!0;case 11:Gt(this,Rt,ne).call(this)&&(i=this.player.isLost()?Pt:At,Gt(this,$t,ee).call(this,i),this.endGame=!0),Gt(this,Bt,Zt).call(this);case 13:case"end":return t.stop()}}),t,this)})),oe=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){_t(i,r,o,a,u,"next",t)}function u(t){_t(i,r,o,a,u,"throw",t)}a(void 0)}))},oe.apply(this,arguments)}function ie(t,e,n,r){"events"in t[e]||(t[e].events={}),t[e].events[n]=r}function ae(){this.userField=document.getElementById("user-field"),this.rivalField=document.getElementById("rival-field"),this.textElement=document.getElementById("win-text"),this.restartButton=document.getElementById("restart")}function ue(){this.restartButton.addEventListener("click",Gt(this,Yt,te).bind(this))}new(zt((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Nt(this,Vt),Nt(this,Qt),Nt(this,Kt),Nt(this,Jt),Nt(this,qt),Nt(this,Rt),Nt(this,$t),Nt(this,Yt),Nt(this,Bt),Nt(this,Ut),Gt(this,Qt,ae).call(this),Gt(this,Vt,ue).call(this),Gt(this,Ut,Xt).call(this),Gt(this,Bt,Zt).call(this)})))})()})();
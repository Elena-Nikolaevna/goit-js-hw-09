function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function u(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfill promise ${e} in ${t}`):r(`❌Reject promise ${e} in ${t}`),promiseCounter=0}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=t.target.elements,r=n.amount.value,o=Number(n.delay.value),l=Number(n.step.value);let a=0,f=0;for(let t=0;t<r;t+=1)f+=1,a=o+l*t,u(f,a).then((t=>{e(i).Notify.success(t)})).catch((t=>{e(i).Notify.failure(t)}))}));
//# sourceMappingURL=03-promises.ace2b3f4.js.map

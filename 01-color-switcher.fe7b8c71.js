const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body};let o=0;function e(t){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.start.addEventListener("click",(()=>{console.log("start"),e(t.body),o=setInterval((()=>{e(t.body)}),1e3)})),t.stop.addEventListener("click",(()=>{console.log("stop"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.fe7b8c71.js.map

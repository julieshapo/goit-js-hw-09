const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}t.stopBtn.setAttribute("disabled",""),t.startBtn.addEventListener("click",(function(){if(t.body.style.backgroundColor=o(),t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.backgroundColor=o(),console.log("start")}),1e3),e)return})),t.stopBtn.addEventListener("click",(function(){console.log("stop"),clearInterval(e),t.stopBtn.setAttribute("disabled",""),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c719d5da.js.map

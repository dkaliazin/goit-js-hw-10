import"./assets/styles-db630686.js";import{f as c}from"./assets/vendor-4daf66c6.js";const l=document.getElementById("datetime-picker"),o=document.getElementById("datetime-button");document.getElementById("timer");let s=null;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(alert("Please choose a date in the future"),o.disabled=!0):(s=t,o.disabled=!1)}};c(l,d);o.addEventListener("click",()=>{s&&i(s)});function i(e){const t=setInterval(()=>{const n=e-new Date;if(n<=0){clearInterval(t),alert("Time's up!");return}console.log(u(n))},1e3)}function u(e){const t=Math.floor(e/864e5),a=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60)),r=Math.floor(e%(1e3*60)/1e3);return`${t}d ${a}h ${n}m ${r}s`}
//# sourceMappingURL=commonHelpers.js.map

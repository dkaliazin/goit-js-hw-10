import"./assets/styles-57e1e2e1.js";import{f as S,i}from"./assets/vendor-77e16229.js";const l=document.getElementById("datetime-picker"),o=document.querySelector("button[data-start]");o.disabled=!0;document.querySelector("timer");let c,d;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(c=n,o.disabled=!1)}};S(l,p);o.addEventListener("click",()=>{c&&(b(c),o.disabled=!0)});function b(t){clearInterval(d),d=setInterval(()=>{const s=t-new Date;if(s<=0){clearInterval(d),u(0,0,0,0),l.disabled=!1,o.disabled=!0,i.success({title:"Finished",message:"Countdown has ended!"});return}const e=w(s);u(e.days,e.hours,e.minutes,e.seconds)},1e3)}function w(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%36e5/6e4),y=Math.floor(t%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}const r={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};function a(t){return t.padStart(2,"0")}function u(t,n,s,e){r.days.textContent=a(t.toString()),r.hours.textContent=a(n.toString()),r.minutes.textContent=a(s.toString()),r.seconds.textContent=a(e.toString())}
//# sourceMappingURL=commonHelpers.js.map

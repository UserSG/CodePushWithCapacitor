(self.webpackChunkthin_javascript_layer=self.webpackChunkthin_javascript_layer||[]).push([[961],{961:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DeviceWeb:()=>o});var n=i(895);class o extends n.Uw{async getInfo(){if("undefined"==typeof navigator||!navigator.userAgent)throw this.unavailable("Device API not available in this browser");const e=navigator.userAgent,t=this.parseUa(e);return{model:t.model,platform:"web",operatingSystem:t.operatingSystem,osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,uuid:this.getUid(),webViewVersion:t.browserVersion}}async getBatteryInfo(){if("undefined"==typeof navigator||!navigator.getBattery)throw this.unavailable("Device API not available in this browser");let e={};try{e=await navigator.getBattery()}catch(e){}return{batteryLevel:e.level,isCharging:e.charging}}async getLanguageCode(){return{value:navigator.language}}parseUa(e){const t={},i=e.indexOf("(")+1;let n=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(n=e.indexOf(") Gecko"));const o=e.substring(i,n);if(-1!==e.indexOf("Android")){const e=o.replace("; wv","").split("; ").pop();e&&(t.model=e.split(" Build")[0]),t.osVersion=o.split("; ")[1]}else if(t.model=o.split("; ")[0],"undefined"!=typeof navigator&&navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=o;else{const e=o.split("; ").pop();if(e){const i=e.replace(" like Mac OS X","").split(" ");t.osVersion=i[i.length-1].replace(/_/g,".")}}/android/i.test(e)?t.operatingSystem="android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?t.operatingSystem="ios":/Win/.test(e)?t.operatingSystem="windows":/Mac/i.test(e)?t.operatingSystem="mac":t.operatingSystem="unknown";const s=!!window.InstallTrigger,r=!!window.ApplePaySession,a=!!window.chrome,l=/Edg/.test(e),d=/FxiOS/.test(e),g=/CriOS/.test(e),c=/EdgiOS/.test(e);if(r||a&&!l||d||g||c){let i;i=d?"FxiOS":g?"CriOS":c?"EdgiOS":r?"Version":"Chrome";const n=e.split(" ");for(const e of n)if(e.includes(i)){const i=e.split("/")[1];t.browserVersion=i}}else if(s||l){const i=e.split("").reverse().join("").split("/")[0].split("").reverse().join("");t.browserVersion=i}return t}getUid(){if("undefined"!=typeof window){let e=window.localStorage.getItem("_capuid");return e||(e=this.uuid4(),window.localStorage.setItem("_capuid",e),e)}return this.uuid4()}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}}}]);
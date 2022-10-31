// ==UserScript==
// @name         AutoLoginKS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动使用默认账号密码登录KS
// @author       Wuxs
// @match        http://*/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kubesphere.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("AutoLoginKS");
    window.addEventListener('load', ()=>{
        console.log('ready');
        if(location.port === "30880" && window.globals && window.globals.config.title == "KubeSphere"){
            var evt = document.createEvent('HTMLEvents')
            evt.initEvent('input', true, true);
            document.getElementById("username").setAttribute("value","admin");
            document.getElementById("username").dispatchEvent(evt);
            document.getElementById("password").setAttribute("value","P@88w0rd");
            document.getElementById("password").dispatchEvent(evt);
            setTimeout(function(){
                document.querySelector("#root > div > div > form > div.imWMl8_1QGHj_KomPh1Qt > button").click();
            },1000)
        }
    })


    // Your code here...
})();

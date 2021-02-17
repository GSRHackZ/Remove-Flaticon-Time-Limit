// ==UserScript==
// @name         Remove Flaticon Expiration
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Takes away time expiration from images.
// @author       GSRHackZ
// @match        https://www.flaticon.com/free-icon/*
// @grant        none
// @icon         https://www.flaticon.com/svg/1792/1792902.svg
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==

let finished=false;

setInterval(function(){
    let ogSrc=document.getElementsByClassName("main-icon-without-slide pd-lv4 icon-png-container")[0].children[0];
    if(ogSrc!==undefined){
        let newSrc=ogSrc.src.split("svg/vstatic/")[0]+ogSrc.src.split("svg/vstatic/")[1].split("?")[0];
        ogSrc.parentNode.addEventListener("click",function(){
            if(!finished){
                this.style="transition:.6s;opacity:0%;";
                ogSrc.src=newSrc;
                setTimeout(function(){
                    ogSrc.parentNode.style="transition:.6s;opacity:100%;";
                    finished=true;
                },1000)
            }
        })
    }
},500)


// ==UserScript==
// @name         CamWhores.tv Private Vids Bypasser
// @namespace    http://www.camwhores.tv/*
// @version      1.0
// @description  Open private videos in a new tab using the script by reddit user Bakolas
// @author       NIGHTZNERO
// @match        http://www.camwhores.tv/*
// @grant        none
// @require      https://greasyfork.org/scripts/31940-waitforkeyelements/code/waitForKeyElements.js?version=209282
// ==/UserScript==
 
var baseURL = "https://polar-springs-10127.herokuapp.com/process_get?inputBox=";
 
waitForKeyElements(".private", updatePrivateUrls);
 
function updatePrivateUrls(){
    $(".private").each(function(){
        var url = $(this).children('a').attr('href');
        if(url.includes(baseURL)){
           return true;
        }
        var urlEncode = encodeURIComponent($(this).children('a').attr('href'));
        $(this).children('a').attr("href",baseURL + url).attr('target','_blank');
    });
}

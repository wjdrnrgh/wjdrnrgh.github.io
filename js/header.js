(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var headerBtn=document.querySelector(".header_btn"),headerTxt=document.querySelector(".header_btn_txt"),headerIconFirst=document.getElementById("line_first"),headerIconSecond=document.getElementById("line_second"),headerMenu=document.querySelector(".header_menu_view"),headerAnchor=document.querySelectorAll(".menu_item"),handleBtnActive=function e(){headerTxt.innerText="CLOSE",headerIconFirst.style.transform="rotate(-45deg)",headerIconFirst.style.top="11px",headerIconSecond.style.transform="rotate(45deg)",headerIconSecond.style.bottom="10px",headerMenu.style.transform="translate3d(0, 0, 0)",headerMenu.style.visibility="visible",headerMenu.style.opacity="1",headerBtn.removeEventListener("click",e),headerBtn.addEventListener("click",handleBtnRemove)},handleBtnRemove=function e(){headerTxt.innerText="MENU",headerIconFirst.style.transform="",headerIconFirst.style.top="",headerIconSecond.style.transform="",headerIconSecond.style.bottom="",headerMenu.style.transform="",headerMenu.style.visibility="",headerMenu.style.opacity="",headerBtn.removeEventListener("click",e),headerBtn.addEventListener("click",handleBtnActive)},handleAnchor=function(e){e.preventDefault(),handleBtnRemove();var t=e.target.getAttribute("href");document.getElementById(t.replace("#","")).scrollIntoView({behavior:"smooth",inline:"nearest",block:"start"})};headerBtn.addEventListener("click",handleBtnActive),headerAnchor.forEach(function(e){e.addEventListener("click",handleAnchor)});

},{}]},{},[1]);
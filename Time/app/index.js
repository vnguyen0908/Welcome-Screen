/*
 * Entry point for the watch app
 */

console.log("App code started");

import document from "document";
 //for Tumber 1
let tumbler1 = document.getElementById("tumbler1");

tumbler1.addEventListener("select", function(evt) {
})

function getSelectedIndex1() {
  return tumbler1.value;
}

function getSelectedValue1() {
  return tumbler1.getElementById("item" + tumbler1.value).getElementById("content").text;
}
// For tumbler 2
let tumbler= document.getElementById("tumbler2");
tumbler.addEventListener("select", function(evt) {
})
function getSelectedIndex2() {
  return tumbler.value;
}

function getSelectedValue2() {
  return tumbler.getElementById("item" + tumbler.value).getElementById("content").text;
}
let btnTR = document.getElementById("btnTR");
btnTR.onactivate = function(evt) {
  console.log( "On average, work out:" + getSelectedValue1() +"hr" + getSelectedValue2() +"min");}


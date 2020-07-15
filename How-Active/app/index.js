/*
 * Entry point for the watch app
 */

console.log("App code started");
import document from "document";

let tumbler = document.getElementById("tumbler");


tumbler.addEventListener("select", function(evt) {
})

function getSelectedIndex() {
  return tumbler.value;
}

function getSelectedValue() {
  return tumbler.getElementById("item" + tumbler.value).getElementById("content").text;
}

let btnTR = document.getElementById("btnTR");
btnTR.onactivate = function(evt) {
  console.log( + getSelectedValue() +" Activities per week");}



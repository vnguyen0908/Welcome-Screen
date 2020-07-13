import document from "document";

let views;


export function init(_views) {
	views = _views;
	console.log("Welcome screen");
    onMount();}
  
function onMount(){ 
let btnTR = document.getElementById("btnTR");
btnTR.onactivate = function(evt) {
  console.log("User Info:");
  btnTR.addEventListener("click",clickHandler)
}
}
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-2");}

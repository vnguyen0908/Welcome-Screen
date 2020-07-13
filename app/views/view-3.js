
import document from "document";


let views;



export function init(_views) {
	views = _views;
	onMount();
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let rightButton = document.getElementById("rightButton");
	rightButton.onactivate = function (evt) {
		console.log("The Watch is on RIGHT Wrist");
		rightButton.addEventListener("click", clickHandler);
	}

	let leftButton = document.getElementById("leftButton");
	leftButton.onactivate = function (evt) {
		console.log("The Watch is on LEFT Wrist");
		leftButton.addEventListener("click", clickHandler);
	}

}

/**
 * Sample button click with navigation.
 */
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-1");
} 


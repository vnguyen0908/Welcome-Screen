
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

	let rightyButton = document.getElementById("rightyButton");
	rightyButton.onactivate = function (evt) {
		console.log("Dominant Hand: Right");
		rightyButton.addEventListener("click", clickHandler);
	}

	let leftyButton = document.getElementById("leftyButton");
	leftyButton.onactivate = function (evt) {
		console.log("Dominant Hand: Left");
		leftyButton.addEventListener("click", clickHandler);
	}

	let bothyButton = document.getElementById("bothyButton");
	bothyButton.onactivate = function (evt) {
		console.log("Dominat Hand: Both");
		hikeButton.addEventListener("click", clickHandler);
	}

}

/**
 * Sample button click with navigation.
 */
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-3");
} 


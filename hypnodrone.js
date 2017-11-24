/**
 * Hypno Drone Event
 */

var longBlinkCounter = 0;

function longBlink(element) {

	{
		var handle = setInterval(function() {
			longToggleVisibility(element)
		}, 32);
	}

	function longToggleVisibility(element) {
		longBlinkCounter++;

		if (longBlinkCounter > 5 && longBlinkCounter < 10) {
			hypnoDroneTextElement.innerHTML = "Release";
		}

		if (longBlinkCounter > 30 && longBlinkCounter < 40) {
			hypnoDroneTextElement.innerHTML = "<br /><br /><br />Release";
		}

		if (longBlinkCounter > 45 && longBlinkCounter < 55) {
			hypnoDroneTextElement.innerHTML = "<br />Release";
		}

		if (longBlinkCounter > 55) {
			hypnoDroneTextElement.innerHTML = "Release<br/>the<br/>Hypno<br/>Drones";
		}

		if (longBlinkCounter >= 120) {
			// console.log("weed wizzard");
			clearInterval(handle);
			longBlinkCounter = 0;
			element.style.display = "none";
		} else {
			if (element.style.display != "") {
				element.style.display = "";
			} else {
				element.style.display = "none";
			}
		}
	}

}

function hypnoDroneEvent() {
	hypnoDroneTextElement.innerHTML = "Release";
	longBlink(hypnoDroneEventDivElement);
}

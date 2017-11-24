/**
 * Threnody
 */

var threnodyAudio;

function threnodyLoaded() {
	threnodyLoadedBool = true;
}

function loadThrenody() {
	threnodyAudio.src = "test.mp3";
	threnodyAudio.addEventListener('canplaythrough', threnodyLoaded);
}

function playThrenody() {
	if (threnodyLoadedBool) {
		threnodyAudio.play();
	}
}
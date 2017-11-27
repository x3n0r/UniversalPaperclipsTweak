/**
 * Cheat functions for Debug
 */

function resetPrestige() {

	prestigeU = 0;
	prestigeS = 0;
	prestigeX = 0;

	localStorage.removeItem("savePrestige");

}

function reset() {
	localStorage.removeItem("saveGame");
	localStorage.removeItem("saveProjectsUses");
	localStorage.removeItem("saveProjectsFlags");
	localStorage.removeItem("saveProjectsActive");
	localStorage.removeItem("saveStratsActive");
	location.reload();
}

function cheatPrestigeU() {

	prestigeU++;
	var savePrestige = {
		prestigeU : prestigeU,
		prestigeS : prestigeS,
		prestigeX : prestigeX,
	}
	localStorage.setItem("savePrestige", JSON.stringify(savePrestige));
}

function cheatPrestigeS() {

	prestigeS++;
	var savePrestige = {
		prestigeU : prestigeU,
		prestigeS : prestigeS,
		prestigeX : prestigeX,
	}
	localStorage.setItem("savePrestige", JSON.stringify(savePrestige));

}

function cheatPrestigeX() {

	prestigeX++;
	var savePrestige = {
		prestigeU : prestigeU,
		prestigeS : prestigeS,
		prestigeX : prestigeX,
	}
	localStorage.setItem("savePrestige", JSON.stringify(savePrestige));
}

function setB() {
	battleNumbers[1] = 7;
}

function cheatClips() {
	clips = clips + 100000000;
	unusedClips = unusedClips + 100000000;
	displayMessage("you just cheated");
}

function cheatMoney() {
	funds = funds + 10000000;
	fundsElement.innerHTML = formatWithCommas(funds, 2);
	displayMessage("LIZA just cheated");
}

function cheatTrust() {
	trust = trust + 1;
	displayMessage("Hilary is nice. Also, Liza just cheated");
}

function cheatOps() {
	standardOps = standardOps + 10000;
	displayMessage("you just cheated, Liza");
}

function cheatCreat() {
	creativityOn = 1;
	creativity = creativity + 1000;
	displayMessage("Liza just cheated. Very creative!");
}

function cheatYomi() {
	yomi = yomi + 1000000;
	yomiDisplayElement.innerHTML = formatWithCommas(yomi);
	displayMessage("you just cheated");
}

function cheatHypno() {
	hypnoDroneEvent();
}

function zeroMatter() {
	availableMatter = 0;
	displayMessage("you just cheated");
}

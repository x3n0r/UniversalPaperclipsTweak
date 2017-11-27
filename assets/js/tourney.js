/**
 * Strategic Modeling
 */

var tourneyCost = 1000;
var tourneyLvl = 1;
var choiceANames = [ "cooperate", "swerve", "macro", "fight", "bet",
		"raise_price", "opera", "go", "heads", "particle", "discrete", "peace",
		"search", "lead", "accept", "accept", "attack" ];
var choiceBNames = [ "defect", "straight", "micro", "back_down", "fold",
		"lower_price", "football", "stay", "tails", "wave", "continuous",
		"war", "evaluate", "follow", "reject", "deny", "decay" ];
var stratCounter = 0;
var roundNum = 0;
var hMove = 1;
var vMove = 1;
var hMovePrev = 1;
var vMovePrev = 1;
var aa = 0;
var ab = 0;
var ba = 0;
var bb = 0;
var rounds = 0;
var currentRound = 0;
var rCounter = 0;
var tourneyInProg = 0;
var winnerPtr = 0;
var placeScore = 0;
var showScore = 0;
var high = 0;
var pick = 10;
var yomi = 0;
var yomiBoost = 1;

var allStrats = [];
var strats = [];

var resultsTimer = 0;
var results = [];
var resultsFlag = 0;

var payoffGrid = {
	valueAA : 0,
	valueAB : 0,
	valueBA : 0,
	valueBB : 0,
}

var stratRandom = {
	name : "RANDOM",
	active : 1,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		var r = Math.random();
		if (r < .5) {
			return 1;
		} else {
			return 2;
		}
	}

}

allStrats.push(stratRandom);
strats.push(stratRandom);

var stratA100 = {
	name : "A100",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		return 1;
	}

}

allStrats.push(stratA100);

var stratB100 = {
	name : "B100",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		return 2;
	}
}

allStrats.push(stratB100);

var stratGreedy = {
	name : "GREEDY",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		var x = findBiggestPayoff();
		if (x < 3) {
			return 1;
		} else {
			return 2;
		}
	}
}

allStrats.push(stratGreedy);

var stratGenerous = {
	name : "GENEROUS",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		var x = findBiggestPayoff();
		if (x == 1) {
			return 1;
		} else if (x == 3) {
			return 1;
		} else {
			return 2;
		}
	}
}

allStrats.push(stratGenerous);

var stratMinimax = {
	name : "MINIMAX",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		var x = findBiggestPayoff();
		if (x == 1) {
			return 2;
		} else if (x == 3) {
			return 2;
		} else {
			return 1;
		}
	}
}

allStrats.push(stratMinimax);

var stratTitfortat = {
	name : "TIT FOR TAT",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		if (this.currentPos == 1) {
			w = vMovePrev;
			return w;
		} else {
			w = hMovePrev;
			return w;
		}

	}
}
allStrats.push(stratTitfortat);

var stratBeatlast = {
	name : "BEAT LAST",
	active : 0,
	currentScore : 0,
	currentPos : 1,
	pickMove : function() {
		var w = whatBeatsLast(this.currentPos);
		return w;
	}
}
allStrats.push(stratBeatlast);

var hStrat = strats[0];
var vStrat = strats[0];

function findBiggestPayoff() {
	if (aa >= ab && aa >= ba && aa >= bb) {
		return 1;
	} else if (ab >= aa && ab >= ba && ab >= bb) {
		return 2;
	} else if (ba >= aa && ba >= ab && ba >= bb) {
		return 3;
	} else {
		return 4;
	}
}

function whatBeatsLast(myPos) {
	var oppsPos = 1;
	if (myPos == 1) {
		oppsPos = 2;
	} else {
		oppsPos = 1;
	}
	if (oppsPos == 1 && hMovePrev == 1) {
		if (aa > ba) {
			return 1;
		} else {
			return 2;
		}

	} else if (oppsPos == 1 && hMovePrev == 2) {
		if (ab > bb) {
			return 1;
		} else {
			return 2;
		}

	} else if (oppsPos == 2 && vMovePrev == 1) {
		if (aa > ba) {
			return 1;
		} else {
			return 2;
		}

	} else {
		if (ab > bb) {
			return 1;
		} else {
			return 2;
		}

	}

}

function pickStrats(roundNum) {
	if (roundNum < strats.length) {
		h = 0;
		v = roundNum;
	} else {
		stratCounter++;
		if (stratCounter >= strats.length) {
			stratCounter = stratCounter - strats.length;
		}
		h = Math.floor(roundNum / strats.length);
		v = stratCounter;
	}

	vStrat = strats[v];
	hStrat = strats[h];

	strats[h].currentPos = 1;
	strats[v].currentPos = 2;

	vertStratElement.innerHTML = vStrat.name;
	horizStratElement.innerHTML = hStrat.name;

}

function generateGrid() {
	payoffGrid.valueAA = Math.ceil(Math.random() * 10);
	payoffGrid.valueAB = Math.ceil(Math.random() * 10);
	payoffGrid.valueBA = Math.ceil(Math.random() * 10);
	payoffGrid.valueBB = Math.ceil(Math.random() * 10);

	aa = payoffGrid.valueAA;
	ab = payoffGrid.valueAB;
	ba = payoffGrid.valueBA;
	bb = payoffGrid.valueBB;

	var x = Math.floor(Math.random() * choiceANames.length);

	vLabelaElement.innerHTML = choiceANames[x];
	vLabelbElement.innerHTML = choiceBNames[x];
	hLabelaElement.innerHTML = choiceANames[x];
	hLabelbElement.innerHTML = choiceBNames[x];
	aaPayoffHElement.innerHTML = payoffGrid.valueAA;
	aaPayoffVElement.innerHTML = payoffGrid.valueAA;
	abPayoffHElement.innerHTML = payoffGrid.valueAB;
	abPayoffVElement.innerHTML = payoffGrid.valueBA;
	baPayoffHElement.innerHTML = payoffGrid.valueBA;
	baPayoffVElement.innerHTML = payoffGrid.valueAB;
	bbPayoffHElement.innerHTML = payoffGrid.valueBB;
	bbPayoffVElement.innerHTML = payoffGrid.valueBB;
}

function toggleAutoTourney() {
	if (autoTourneyStatus == 1) {
		autoTourneyStatus = 0;
		autoTourneyStatusElement.innerHTML = "OFF";
	} else {
		autoTourneyStatus = 1;
		autoTourneyStatusElement.innerHTML = "ON";
	}
}

function newTourney() {

	resultsFlag = 0;

	tournamentTableElement.style.display = "";
	tournamentResultsTableElement.style.display = "none";

	high = 0;
	tourneyInProg = 1;
	currentRound = 0;
	rounds = strats.length * strats.length;
	for (i = 0; i < strats.length; i++) {
		strats[i].currentScore = 0;
	}
	stratCounter = 0;
	standardOps = standardOps - tourneyCost;
	tourneyLvl++;
	generateGrid();

	btnRunTournamentElement.disabled = false;
	vertStratElement.innerHTML = "&nbsp";
	horizStratElement.innerHTML = "&nbsp";
	tourneyDisplayElement.innerHTML = "Pick strategy, run tournament, gain yomi";

}

function runTourney() {
	btnRunTournamentElement.disabled = true;
	if (currentRound < rounds) {
		round(currentRound);
	} else {
		tourneyInProg = 0;
		pickWinner();
		calculatePlaceScore();
		calculateShowScore();
		declareWinner();
	}
}

function pickWinner() {

	results = [];

	var temp = [];
	var tempHigh = 0;
	var tempWinnerPtr = 0;

	// 1. Make a temp copy of the strats array

	for (i = 0; i < strats.length; i++) {
		temp[i] = strats[i];
	}

	for (n = 0; n < strats.length; n++) {

		tempHigh = 0;
		tempWinnerPtr = 0;

		// 2. Find a high scoring strat in temp

		for (i = 0; i < temp.length; i++) {

			if (temp[i].currentScore > tempHigh) {
				tempWinnerPtr = i;
				tempHigh = temp[i].currentScore;
			}

		}

		// 3. Move the high scoring strat to slot one in results

		results.push(temp[tempWinnerPtr]);
		temp.splice(tempWinnerPtr, 1);
	}

	for (i = 0; i < strats.length; i++) {
		if (strats[i].currentScore > high) {
			winnerPtr = i;
			high = strats[i].currentScore;
		}
	}
}

function calculatePlaceScore() {

	placeScore = 0;

	// 1. Find top non-winning score

	for (i = 1; i < results.length; i++) {
		if (results[i].currentScore < results[i - 1].currentScore) {
			placeScore = results[i].currentScore;
			break;
		}

	}

}

function calculateShowScore() {

	showScore = 0;

	// 1. Find top non-placing score

	for (i = 1; i < results.length; i++) {
		if (results[i].currentScore < placeScore) {
			showScore = results[i].currentScore;
			break;
		}

	}

}

function declareWinner() {

	if (pick < 10) {

		var bB = 0;
		var w = "strats";
		var beatBoost = calculateStratsBeat() - 1;
		if (beatBoost == 1) {
			w = "strat";
		}
		if (beatBoost == 0) {
			bB = 0;
			beatBoost = 1;
		} else {
			bB = beatBoost;
		}

		tourneyReport("TOURNAMENT RESULTS (roll over for payoff grid)");
		yomi = yomi + strats[pick].currentScore * yomiBoost * beatBoost;
		yomiDisplayElement.innerHTML = formatWithCommas(yomi);

		if (milestoneFlag < 15) {

			displayMessage(strats[pick].name + " scored "
					+ strats[pick].currentScore + " and beat " + bB + " " + w
					+ ". Yomi increased by " + strats[pick].currentScore
					* yomiBoost * beatBoost);

		}

		if (project128.flag == 1
				&& strats[winnerPtr].currentScore == strats[pick].currentScore) {
			yomi = yomi + 20000;

			if (milestoneFlag < 15) {
				displayMessage("Selected strategy won the tournament (or tied for first). +20,000 yomi");
			}
			yomiDisplayElement.innerHTML = formatWithCommas(yomi);

		} else if (project128.flag == 1
				&& placeScore == strats[pick].currentScore) {
			yomi = yomi + 15000;
			if (milestoneFlag < 15) {
				displayMessage("Selected strategy finished in (or tied for) second place. +15,000 yomi");
			}
			yomiDisplayElement.innerHTML = formatWithCommas(yomi);

		} else if (project128.flag == 1
				&& showScore == strats[pick].currentScore) {
			yomi = yomi + 10000;
			if (milestoneFlag < 15) {
				displayMessage("Selected strategy finished in (or tied for) third place. +10,000 yomi");
			}
			yomiDisplayElement.innerHTML = formatWithCommas(yomi);

		} else {

			tourneyReport("TOURNAMENT RESULTS (roll over for grid)");

		}

		populateTourneyReport();
		displayTourneyReport();

	}

}

function calculateStratsBeat() {
	var sb = 0;
	for (i = 0; i < results.length; i++) {
		if (results[i].name == strats[pick].name) {
			sb = results.length - i;
			return sb;
		}
	}

}

function populateTourneyReport() { // m@ make results array

	for (i = 0; i < results.length; i++) {

		tourneyResultsElements[i].innerHTML = (i + 1) + ". " + results[i].name
				+ ": " + results[i].currentScore;

		if (pick < 10) {

			if (results[i].name == strats[pick].name) {
				tourneyResultsElements[i].style.fontWeight = "bold";
			} else {
				tourneyResultsElements[i].style.fontWeight = "normal";
			}

		}

	}

}

function displayTourneyReport() {

	resultsFlag = 1;

	vertStratElement.innerHTML = "&nbsp";
	horizStratElement.innerHTML = "&nbsp";
	tournamentTableElement.style.display = "none";
	tournamentResultsTableElement.style.display = "";

}

function tourneyReport($) {
	tourneyDisplayElement.innerHTML = $;
}

function revealGrid() {

	if (resultsFlag == 1) {
		resultsTimer = 0;
		tournamentTableElement.style.display = "";
		tournamentResultsTableElement.style.display = "none";
	}
}

function revealResults() {

	if (resultsFlag == 1) {
		tournamentTableElement.style.display = "none";
		tournamentResultsTableElement.style.display = "";
	}
}

function calcPayoff(hm, vm) {
	if (hm == 1 && vm == 1) {

		payoffCellAAElement.style.backgroundColor = "LightGrey";

		strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAA;
		strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAA;

	} else if (hm == 1 && vm == 2) {

		payoffCellABElement.style.backgroundColor = "LightGrey";

		strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAB;
		strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBA;

	} else if (hm == 2 && vm == 1) {

		payoffCellBAElement.style.backgroundColor = "LightGrey";

		strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBA;
		strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAB;

	} else if (hm == 2 && vm == 2) {

		payoffCellBBElement.style.backgroundColor = "LightGrey";

		strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBB;
		strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBB;

	}

}
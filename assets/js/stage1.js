/**
 * Stage 1 functions
 */

function clipClick(number) {

	if (dismantle >= 4) {
		finalClips++;
	}

	if (wire >= 1) {
		if (number > wire) {
			number = wire;
		}

		clips = clips + number;
		unsoldClips = unsoldClips + number;
		wire = wire - number;
		unusedClips = unusedClips + number;

		if (humanFlag == 0) {
			unusedClipsDisplayElement.innerHTML = spellf(unusedClips);
		}

		if (humanFlag == 0 && dismantle < 1) {
			transWireElement.innerHTML = spellf(wire);
			nanoWireElement.innerHTML = spellf(wire);
		}

		if (milestoneFlag < 15) {
			clipsElement.innerHTML = formatWithCommas(Math.ceil(clips), 0); // m@
			// todo
			// fixed
			// the
			// thing
			// that
			// you
			// fucked
			// up
			// where
			// you
			// made
			// the
			// tool
			// tip
			// of
			// crunched
			// not
			// be
			// in
			// spelled
			// numbers
		}
		wireElement.innerHTML = formatWithCommas(wire);
		unsoldClipsElement.innerHTML = formatWithCommas(unsoldClips, 0);
	}

	if (dismantle >= 4) {
		transWireElement.innerHTML = formatWithCommas(wire);
	}

}

// Wire --------------------------------------------------------
function adjustWirePrice() {

	wirePriceTimer++;

	if (wirePriceTimer > 250 && wireBasePrice > 15) {
		wireBasePrice = wireBasePrice - (wireBasePrice / 1000);
		wirePriceTimer = 0;
	}

	if (Math.random() < .015) {
		wirePriceCounter++;
		var wireAdjust = 6 * (Math.sin(wirePriceCounter));
		wireCost = Math.ceil(wireBasePrice + wireAdjust);
		wireCostElement.innerHTML = wireCost;
	}
}

function buyWire() {
	if (funds >= wireCost) {
		wirePriceTimer = 0;
		wire = wire + wireSupply;
		funds = funds - wireCost;
		wirePurchase = wirePurchase + 1;
		wireBasePrice = wireBasePrice + .05;
		wireElement.innerHTML = formatWithCommas(Math.floor(wire));
		fundsElement.innerHTML = formatWithCommas(funds, 2);
	}
}

var incomeThen;
var incomeNow;
var trueAvgRev;
var revTimer = 0;
var avgSales;
var incomeLastSecond;
var sum;

function calculateRev() {

	incomeThen = incomeNow;
	incomeNow = income;
	incomeLastSecond = Math.round((incomeNow - incomeThen) * 100) / 100;

	incomeTracker.push(incomeLastSecond);

	if (incomeTracker.length > 10) {
		incomeTracker.splice(0, 1);
	}

	sum = 0;

	for (i = 0; i < incomeTracker.length; i++) {
		sum = Math.round((sum + incomeTracker[i]) * 100) / 100;
		// console.log("sum = "+sum);
	}

	trueAvgRev = sum / incomeTracker.length;

	var chanceOfPurchase = demand / 100;
	if (chanceOfPurchase > 1) {
		chanceOfPurchase = 1;
	}
	if (unsoldClips < 1) {
		chanceOfPurchase = 0;
	}

	avgSales = chanceOfPurchase * (.7 * Math.pow(demand, 1.15)) * 10;
	avgRev = chanceOfPurchase * (.7 * Math.pow(demand, 1.15)) * margin * 10;

	if (demand > unsoldClips) {
		avgRev = trueAvgRev;
		avgSales = avgRev / margin;
	}

	avgSalesElement.innerHTML = formatWithCommas(Math.round(avgSales));

	avgRevElement.innerHTML = formatWithCommas(avgRev, 2);

}

function buyAds() {
	if (funds >= adCost) {
		marketingLvl = marketingLvl + 1;
		funds = funds - adCost;
		adCost = Math.floor(adCost * 2);
		adCostElement.innerHTML = formatWithCommas(adCost, 2);
		fundsElement.innerHTML = formatWithCommas(funds, 2);
		marketingLvlElement.innerHTML = marketingLvl;
	}
}

function makeClipper() {
	if (funds >= clippperCost) {
		clipmakerLevel = clipmakerLevel + 1;
		funds = funds - clipperCost;
		clipmakerLevel2Element.innerHTML = clipmakerLevel;
	}

	clipperCost = (Math.pow(1.1, clipmakerLevel) + 5);
	clipperCostElement.innerHTML = formatWithCommas(clipperCost, 2);

}

function makeMegaClipper() {
	if (funds >= megaClipperCost) {
		megaClipperLevel = megaClipperLevel + 1;
		funds = funds - megaClipperCost;
		megaClipperLevelElement.innerHTML = megaClipperLevel;
		fundsElement.innerHTML = formatWithCommas(funds, 2);
	}

	megaClipperCost = (Math.pow(1.07, megaClipperLevel) * 1000);
	megaClipperCostElement.innerHTML = formatWithCommas(megaClipperCost, 2);

}

function sellClips(clipsDemanded) {
	if (unsoldClips > 0) {
		if (clipsDemanded > unsoldClips) {
			transaction = (Math.floor((unsoldClips * margin) * 1000)) / 1000;
			funds = funds + transaction;
			income = income + transaction;
			clipsSold = clipsSold + unsoldClips;
			unsoldClips = 0;
		} else {
			transaction = (Math.floor((clipsDemanded * margin) * 1000)) / 1000;
			funds = (Math.floor((funds + transaction) * 100)) / 100;
			income = income + transaction;
			clipsSold = clipsSold + clipsDemanded;
			unsoldClips = unsoldClips - clipsDemanded;
		}
	}
}

function raisePrice() {
	margin = (Math.round((margin + .01) * 100)) / 100;
	demandElement.innerHTML = demand.toFixed(2);
	marginElement.innerHTML = margin.toFixed(2);
}

function lowerPrice() {
	if (margin >= .01) {
		margin = (Math.round((margin - .01) * 100)) / 100;
		demandElement.innerHTML = demand.toFixed(2);
		marginElement.innerHTML = margin.toFixed(2);
	}
}

// Complex WireBuyer
function showMe(box) {
	var chboxs = document.getElementById("complexWireBuyerDivElement").style.display;
	var vis = "none";
	if (chboxs == "none") {
		vis = "block";
		wireBuyerStatus = 1;
	}
	if (chboxs == "block") {
		vis = "none";
		wireBuyerStatus = 0;
	}
	document.getElementById(box).style.display = vis;
}

function setWireBuyer(bool) {
	wireBuyerStatus = bool;
	if ( bool == 1 ) {
		document.getElementById('wireBuyerStatus').checked = true;
		document.getElementById('complexWireBuyerDivElement').style.display = "block";
	} else {
		document.getElementById('wireBuyerStatus').checked = false;
		document.getElementById('complexWireBuyerDivElement').style.display = "none";
	}
}

function activatechk(intvalue) {
	if ( document.getElementById('amountvalue'+intvalue).value == "" || document.getElementById('pricevalue'+intvalue).value == "" ) {
		document.getElementById('chkactive'+intvalue).checked = false; 
	}
	setchkact(intvalue,document.getElementById('chkactive'+intvalue).checked);
}

function setchkact(intvalue,bool) {
	if ( intvalue == 1 ) {
		if ( bool ) {
			pricevalue1=document.getElementById('pricevalue'+intvalue).value;
			amountvalue1=document.getElementById('amountvalue'+intvalue).value;
			chkactive1=1;
		} else {
			chkactive1=0;
			pricevalue1=0;
			amountvalue1=0;
		}
	}
	if ( intvalue == 2 ) {
		if ( bool ) {
			pricevalue2=document.getElementById('pricevalue'+intvalue).value;
			amountvalue2=document.getElementById('amountvalue'+intvalue).value;
			chkactive2=1;
		} else {
			chkactive2=0;
			pricevalue2=0;
			amountvalue2=0;
		}
	}
}

function btndelete(intvalue) {
	document.getElementById('amountvalue'+intvalue).value = '';
	document.getElementById('pricevalue'+intvalue).value = '';
	document.getElementById('chkactive'+intvalue).checked = false; 
}

function maxLengthCheck(object) {
	   if (object.value.length > object.maxLength)
		      object.value = object.value.slice(0, object.maxLength)
}
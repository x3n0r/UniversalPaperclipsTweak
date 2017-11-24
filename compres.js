/**
 * Computational Resources
 */

// QCHIPS -----------------------------------------------------------
var qChips = [];
var qChipsElements = [];

var qChip0 = {
	waveSeed : .1,
	value : 0,
	active : 0,
}

qChips.push(qChip0);
qChipsElements.push(document.getElementById("qChip0"));

var qChip1 = {
	waveSeed : .2,
	value : 0,
	active : 0,
}

qChips.push(qChip1);
qChipsElements.push(document.getElementById("qChip1"));

var qChip2 = {
	waveSeed : .3,
	value : 0,
	active : 0,
}

qChips.push(qChip2);
qChipsElements.push(document.getElementById("qChip2"));

var qChip3 = {
	waveSeed : .4,
	value : 0,
	active : 0,
}

qChips.push(qChip3);
qChipsElements.push(document.getElementById("qChip3"));

var qChip4 = {
	waveSeed : .5,
	value : 0,
	active : 0,
}

qChips.push(qChip4);
qChipsElements.push(document.getElementById("qChip4"));

var qChip5 = {
	waveSeed : .6,
	value : 0,
	active : 0,
}

qChips.push(qChip5);
qChipsElements.push(document.getElementById("qChip5"));

var qChip6 = {
	waveSeed : .7,
	value : 0,
	active : 0,
}

qChips.push(qChip6);
qChipsElements.push(document.getElementById("qChip6"));

var qChip7 = {
	waveSeed : .8,
	value : 0,
	active : 0,
}

qChips.push(qChip7);
qChipsElements.push(document.getElementById("qChip7"));

var qChip8 = {
	waveSeed : .9,
	value : 0,
	active : 0,
}

qChips.push(qChip8);
qChipsElements.push(document.getElementById("qChip8"));

var qChip9 = {
	waveSeed : 1,
	value : 0,
	active : 0,
}

qChips.push(qChip9);
qChipsElements.push(document.getElementById("qChip9"));

function quantumCompute() {
	qClock = qClock + .01;
	for (var i = 0; i < qChips.length; i++) {
		qChips[i].value = Math.sin(qClock * qChips[i].waveSeed
				* qChips[i].active);
		qChipsElements[i].style.opacity = qChips[i].value;
	}
}

function qComp() {

	qFade = 1;

	var q = 0;

	if (qChips[0].active == 0) {
		qCompDisplayElement.innerHTML = "Need Photonic Chips";
	} else {
		for (var i = 0; i < qChips.length; i++) {
			q = q + qChips[i].value;
		}

		var qq = Math.ceil(q * 360);
		var buffer = (memory * 1000) - standardOps;
		var damper = (tempOps / 100) + 5;

		if (qq > buffer) {
			tempOps = tempOps + Math.ceil(qq / damper) - buffer;
			qq = buffer;
			opFade = .01;
			opFadeTimer = 0;
		}

		standardOps = standardOps + qq;
		qCompDisplayElement.innerHTML = "qOps: "
				+ formatWithCommas(Math.ceil(q * 360));
	}

}

function addProc() {
	processors = processors + 1;
	creativitySpeed = Math.log10(processors) * Math.pow(processors, 1.1)
			+ processors - 1;
	processorsElement.innerHTML = processors;
	if (creativityOn == 1) {
		displayMessage("Processor added, operations (or creativity) per sec increased")
	} else {
		displayMessage("Processor added, operations per sec increased")
	}

	if (humanFlag == 0) {
		swarmGifts = swarmGifts - 1;
	}

}

function addMem() {
	displayMessage("Memory added, max operations increased");
	memory = memory + 1;
	memoryElement.innerHTML = memory;
	if (humanFlag == 0) {
		swarmGifts = swarmGifts - 1;
	}
}

function calculateTrust() {
	if (clips > (nextTrust - 1)) {
		trust = trust + 1;
		displayMessage("Production target met: TRUST INCREASED, additional processor/memory capacity granted");
		var fibNext = fib1 + fib2;
		nextTrust = fibNext * 1000;
		fib1 = fib2;
		fib2 = fibNext;
	}
}

function calculateCreativity(number) {

	creativityCounter++;

	var creativityThreshold = 400;

	var s = prestigeS / 10;
	var ss = creativitySpeed + (creativitySpeed * s);

	var creativityCheck = creativityThreshold / ss;

	if (creativityCounter >= creativityCheck) {

		if (creativityCheck >= 1) {
			creativity = creativity + 1;
		}

		if (creativityCheck < 1) {

			creativity = (creativity + ss / creativityThreshold);

		}

		creativityCounter = 0;
	}

}

function calculateOperations() {

	if (tempOps > 0) {
		opFadeTimer++;
	}

	if (opFadeTimer > opFadeDelay && tempOps > 0) {
		opFade = opFade + Math.pow(3, 3.5) / 1000;
	}

	if (tempOps > 0) {
		tempOps = Math.round(tempOps - opFade);
	} else {
		tempOps = 0;
	}

	if (tempOps + standardOps < memory * 1000) {
		standardOps = standardOps + tempOps;
		tempOps = 0;
	}

	operations = Math.floor(standardOps + Math.floor(tempOps));

	if (operations < memory * 1000) {
		var opCycle = processors / 10;
		var opBuf = (memory * 1000) - operations;

		if (opCycle > opBuf) {
			opCycle = opBuf;
		}

		standardOps = standardOps + opCycle;

	}

	if (standardOps > memory * 1000) {
		standardOps = memory * 1000;
	}

}

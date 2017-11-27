/**
 * Save and Load functions
 */

function loadPrestige() {

	var loadPrestige = JSON.parse(localStorage.getItem("savePrestige"));

	prestigeU = loadPrestige.prestigeU;
	prestigeS = loadPrestige.prestigeS;
	prestigeX = loadPrestige.prestigeX;
}

function save(value) {

	if (value == null) {
		value='';
	}
		
	savevars(value);

}

function load(value) {
	
	if (value == null) {
		value='';
	}
	
	console.warn("value="+value);
	loadvars(value);
	refresh();

	if ( value == '' ) {
		if (resetFlag != 2) {
			reset();
		}
	}
}

function loadvars(value) {
	
	var loadGame = JSON.parse(localStorage.getItem("saveGame"+value));
	var loadProjectsUses = JSON.parse(localStorage.getItem("saveProjectsUses"+value));
	var loadProjectsFlags = JSON.parse(localStorage.getItem("saveProjectsFlags"+value));
	var loadProjectsActive = JSON.parse(localStorage.getItem("saveProjectsActive"+value));
	var loadStratsActive = JSON.parse(localStorage.getItem("saveStratsActive"+value));
	
	for (var i = 0; i < projects.length; i++) {

		projects[i].uses = loadProjectsUses[i];
		projects[i].flag = loadProjectsFlags[i];

	}

	for (var i = 0; i < projects.length; i++) {

		if (loadProjectsActive.indexOf(projects[i].id) >= 0) {
			displayProjects(projects[i]);
			activeProjects.push(projects[i]);
		}

	}

	for (var i = 0; i < allStrats.length; i++) {

		allStrats[i].active = loadStratsActive[i];

	}

	for (var i = 1; i < allStrats.length; i++) {

		if (allStrats[i].active == 1) {

			strats.push(allStrats[i]);

			var el = document.createElement("option");
			el.textContent = strats[i].name;
			el.value = i;
			stratPickerElement.appendChild(el);

		}

	}

	resetFlag = loadGame.resetFlag;

	dismantle = loadGame.dismantle;
	endTimer1 = loadGame.endTimer1;
	endTimer2 = loadGame.endTimer2;
	endTimer3 = loadGame.endTimer3;
	endTimer4 = loadGame.endTimer4;
	endTimer5 = loadGame.endTimer5;
	endTimer6 = loadGame.endTimer6;

	testFlag = loadGame.testFlag;
	finalClips = loadGame.finalClips;

	wireBuyerStatus = loadGame.wireBuyerStatus;
	wirePriceTimer = loadGame.wirePriceTimer;
	qFade = loadGame.qFade;
	autoTourneyStatus = loadGame.autoTourneyStatus;
	driftKingMessageCost = loadGame.driftKingMessageCost;
	sliderPos = loadGame.sliderPos;
	tempOps = loadGame.tempOps;
	standardOps = loadGame.standardOps;
	opFade = loadGame.opFade;

	entertainCost = loadGame.entertainCost;
	boredomLevel = loadGame.boredomLevel;
	boredomFlag = loadGame.boredomFlag;
	boredomMsg = loadGame.boredomMsg;

	unitSize = loadGame.unitSize;
	driftersKilled = loadGame.driftersKilled;
	battleEndDelay = loadGame.battleEndDelay;
	battleEndTimer = loadGame.battleEndTimer;
	masterBattleClock = loadGame.masterBattleClock;

	honorCount = loadGame.honorCount;
	threnodyTitle = loadGame.threnodyTitle;
	bonusHonor = loadGame.bonusHonor;
	honorReward = loadGame.honorReward;

	resultsTimer = loadGame.resultsTimer;
	resultsFlag = loadGame.resultsFlag;

	honor = loadGame.honor;
	maxTrust = loadGame.maxTrust;
	maxTrustCost = loadGame.maxTrustCost;
	disorgCounter = loadGame.disorgCounter;
	disorgFlag = loadGame.disorgFlag;
	synchCost = loadGame.synchCost;
	disorgMsg = loadGame.disorgMsg;
	threnodyCost = loadGame.threnodyCost;

	farmRate = loadGame.farmRate;
	batterySize = loadGame.batterySize;
	factoryPowerRate = loadGame.factoryPowerRate;
	dronePowerRate = loadGame.dronePowerRate;
	farmLevel = loadGame.farmLevel;
	batteryLevel = loadGame.batteryLevel;
	farmCost = loadGame.farmCost;
	batteryCost = loadGame.batteryCost;
	storedPower = loadGame.storedPower;
	powMod = loadGame.powMod;
	farmBill = loadGame.farmBill;
	batteryBill = loadGame.batteryBill;
	momentum = loadGame.momentum;

	swarmFlag = loadGame.swarmFlag;
	swarmStatus = loadGame.swarmStatus;
	swarmGifts = loadGame.swarmGifts;
	nextGift = loadGame.nextGift;
	giftPeriod = loadGame.giftPeriod;
	giftCountdown = loadGame.giftCountdown;
	elapsedTime = loadGame.elapsedTime;

	maxFactoryLevel = loadGame.maxFactoryLevel;
	maxDroneLevel = loadGame.maxDroneLevel;

	wirePriceCounter = loadGame.wirePriceCounter;
	wireBasePrice = loadGame.wireBasePrice;

	egoFlag = loadGame.egoFlag;
	autoTourneyFlag = loadGame.autoTourneyFlag;
	tothFlag = loadGame.tothFlag;

	incomeTracker = loadGame.incomeTracker.slice(0);
	qChips = loadGame.qChips.slice(0);
	stocks = loadGame.stocks.slice(0);
	battles = loadGame.battles.slice(0);
	battleNumbers = loadGame.battleNumbers.slice(0);

	clips = loadGame.clips;
	unusedClips = loadGame.unusedClips;
	clipRate = loadGame.clipRate;
	clipRateTemp = loadGame.clipRateTemp;
	prevClips = loadGame.prevClips;
	clipRateTracker = loadGame.clipRateTracker;
	clipmakerRate = loadGame.clipmakerRate;
	clipmakerLevel = loadGame.clipmakerLevel;
	clipperCost = loadGame.clipperCost;
	unsoldClips = loadGame.unsoldClips;
	funds = loadGame.funds;
	margin = loadGame.margin;
	wire = loadGame.wire;
	wireCost = loadGame.wireCost;
	adCost = loadGame.adCost;
	demand = loadGame.demand;
	clipsSold = loadGame.clipsSold;
	avgRev = loadGame.avgRev;
	ticks = loadGame.ticks;
	marketing = loadGame.marketing;
	marketingLvl = loadGame.marketingLvl;
	x = loadGame.x;
	clippperCost = loadGame.clippperCost;
	processors = loadGame.processors;
	memory = loadGame.memory;
	operations = loadGame.operations;
	trust = loadGame.trust;
	nextTrust = loadGame.nextTrust;
	transaction = loadGame.transaction;
	clipperBoost = loadGame.clipperBoost;
	blinkCounter = loadGame.blinkCounter;
	creativity = loadGame.creativity;
	creativityOn = loadGame.creativityOn;
	safetyProjectOn = loadGame.safetyProjectOn;
	boostLvl = loadGame.boostLvl;
	wirePurchase = loadGame.wirePurchase;
	wireSupply = loadGame.wireSupply;
	marketingEffectiveness = loadGame.marketingEffectiveness;
	milestoneFlag = loadGame.milestoneFlag;
	bankroll = loadGame.bankroll;
	fib1 = loadGame.fib1;
	fib2 = loadGame.fib2;
	strategyEngineFlag = loadGame.strategyEngineFlag;
	investmentEngineFlag = loadGame.investmentEngineFlag;
	revPerSecFlag = loadGame.revPerSecFlag;
	compFlag = loadGame.compFlag;
	projectsFlag = loadGame.projectsFlag;
	autoClipperFlag = loadGame.autoClipperFlag;
	megaClipperFlag = loadGame.megaClipperFlag;
	megaClipperCost = loadGame.megaClipperCost;
	megaClipperLevel = loadGame.megaClipperLevel;
	megaClipperBoost = loadGame.megaClipperBoost;
	creativitySpeed = loadGame.creativitySpeed;
	creativityCounter = loadGame.creativityCounter;
	wireBuyerFlag = loadGame.wireBuyerFlag;
	demandBoost = loadGame.demandBoost;
	humanFlag = loadGame.humanFlag;
	trustFlag = loadGame.trustFlag;
	nanoWire = loadGame.nanoWire;
	creationFlag = loadGame.creationFlag;
	wireProductionFlag = loadGame.wireProductionFlag;
	spaceFlag = loadGame.spaceFlag;
	factoryFlag = loadGame.factoryFlag;
	harvesterFlag = loadGame.harvesterFlag;
	wireDroneFlag = loadGame.wireDroneFlag;
	factoryLevel = loadGame.factoryLevel;
	factoryBoost = loadGame.factoryBoost;
	droneBoost = loadGame.droneBoost;
	availableMatter = loadGame.availableMatter;
	acquiredMatter = loadGame.acquiredMatter;
	processedMatter = loadGame.processedMatter;
	harvesterLevel = loadGame.harvesterLevel;
	wireDroneLevel = loadGame.wireDroneLevel;
	factoryCost = loadGame.factoryCost;
	harvesterCost = loadGame.harvesterCost;
	wireDroneCost = loadGame.wireDroneCost;
	factoryRate = loadGame.factoryRate;
	harvesterRate = loadGame.harvesterRate;
	wireDroneRate = loadGame.wireDroneRate;
	harvesterBill = loadGame.harvesterBill;
	wireDroneBill = loadGame.wireDroneBill;
	factoryBill = loadGame.factoryBill;
	probeCount = loadGame.probeCount;
	totalMatter = loadGame.totalMatter;
	foundMatter = loadGame.foundMatter;
	qFlag = loadGame.qFlag;
	qClock = loadGame.qClock;
	qChipCost = loadGame.qChipCost;
	nextQchip = loadGame.nextQchip;
	bribe = loadGame.bribe;
	battleFlag = loadGame.battleFlag;

	portfolioSize = loadGame.portfolioSize;
	stockID = loadGame.stockID;
	secTotal = loadGame.secTotal;
	portTotal = loadGame.portTotal;
	sellDelay = loadGame.sellDelay;
	riskiness = loadGame.riskiness;
	maxPort = loadGame.maxPort;
	m = loadGame.m;
	investLevel = loadGame.investLevel;
	investUpgradeCost = loadGame.investUpgradeCost;
	stockGainThreshold = loadGame.stockGainThreshold;
	ledger = loadGame.ledger;
	stockReportCounter = loadGame.stockReportCounter;

	tourneyCost = loadGame.tourneyCost;
	tourneyLvl = loadGame.tourneyLvl;
	stratCounter = loadGame.stratCounter;
	roundNum = loadGame.roundNum;
	hMove = loadGame.hMove;
	vMove = loadGame.vMove;
	hMovePrev = loadGame.hMovePrev;
	vMovePrev = loadGame.vMovePrev;
	aa = loadGame.aa;
	ab = loadGame.ab;
	ba = loadGame.ba;
	bb = loadGame.bb;
	rounds = loadGame.rounds;
	currentRound = loadGame.currentRound;
	rCounter = loadGame.rCounter;
	tourneyInProg = loadGame.tourneyInProg;
	winnerPtr = loadGame.winnerPtr;
	high = loadGame.high;
	pick = loadGame.pick;
	yomi = loadGame.yomi;
	yomiBoost = loadGame.yomiBoost;

	probeSpeed = loadGame.probeSpeed;
	probeNav = loadGame.probeNav;
	probeRep = loadGame.probeRep;
	partialProbeSpawn = loadGame.partialProbeSpawn;
	probeHaz = loadGame.probeHaz;
	partialProbeHaz = loadGame.partialProbeHaz;
	probesLostHaz = loadGame.probesLostHaz;
	probesLostDrift = loadGame.probesLostDrift;
	probesLostCombat = loadGame.probesLostCombat;
	probeFac = loadGame.probeFac;
	probeWire = loadGame.probeWire;
	probeCombat = loadGame.probeCombat;
	attackSpeed = loadGame.attackSpeed;
	battleSpeed = loadGame.battleSpeed;
	attackSpeedFlag = loadGame.attackSpeedFlag;
	attackSpeedMod = loadGame.attackSpeedMod;
	probeDescendents = loadGame.probeDescendents;
	drifterCount = loadGame.drifterCount;
	warTrigger = loadGame.warTrigger;
	battleID = loadGame.battleID;
	battleName = loadGame.battleName;
	battleNameFlag = loadGame.battleNameFlag;
	maxBattles = loadGame.maxBattles;
	battleClock = loadGame.battleClock;
	battleAlarm = loadGame.battleAlarm;
	outcomeTimer = loadGame.outcomeTimer;
	drifterCombat = loadGame.drifterCombat;
	probeTrust = loadGame.probeTrust;
	probeUsedTrust = loadGame.probeUsedTrust;
	probeTrustCost = loadGame.probeTrustCost;
	probeLaunchLevel = loadGame.probeLaunchLevel;
	probeCost = loadGame.probeCost;

	project40b.priceTag = "($" + formatWithCommas(bribe) + ")";
	project51.priceTag = "(" + qChipCost + " ops)";
	
}

function savevars(value) {
	
	var projectsUses = [];
	var projectsFlags = [];
	var projectsActive = [];
	var stratsActive = [];
	var saveGame = {};
	
	for (var i = 0; i < projects.length; i++) {

		projectsUses[i] = projects[i].uses;
		projectsFlags[i] = projects[i].flag;

	}

	for (var i = 0; i < activeProjects.length; i++) {

		projectsActive[i] = activeProjects[i].id;

	}

	for (var i = 0; i < allStrats.length; i++) {

		stratsActive[i] = allStrats[i].active;

	}

	saveGame = {

		resetFlag : resetFlag,

		dismantle : dismantle,
		endTimer1 : endTimer1,
		endTimer2 : endTimer2,
		endTimer3 : endTimer3,
		endTimer4 : endTimer4,
		endTimer5 : endTimer5,
		endTimer6 : endTimer6,

		testFlag : testFlag,
		finalClips : finalClips,

		wireBuyerStatus : wireBuyerStatus,
		wirePriceTimer : wirePriceTimer,
		qFade : qFade,
		autoTourneyStatus : autoTourneyStatus,
		driftKingMessageCost : driftKingMessageCost,
		sliderPos : sliderPos,
		tempOps : tempOps,
		standardOps : standardOps,
		opFade : opFade,

		entertainCost : entertainCost,
		boredomLevel : boredomLevel,
		boredomFlag : boredomFlag,
		boredomMsg : boredomMsg,

		unitSize : unitSize,
		driftersKilled : driftersKilled,
		battleEndDelay : battleEndDelay,
		battleEndTimer : battleEndTimer,
		masterBattleClock : masterBattleClock,

		honorCount : honorCount,
		threnodyTitle : threnodyTitle,
		bonusHonor : bonusHonor,
		honorReward : honorReward,

		resultsTimer : resultsTimer,
		resultsFlag : resultsFlag,

		honor : honor,
		maxTrust : maxTrust,
		maxTrustCost : maxTrustCost,
		disorgCounter : disorgCounter,
		disorgFlag : disorgFlag,
		synchCost : synchCost,
		disorgMsg : disorgMsg,
		threnodyCost : threnodyCost,

		farmRate : farmRate,
		batterySize : batterySize,
		factoryPowerRate : factoryPowerRate,
		dronePowerRate : dronePowerRate,
		farmLevel : farmLevel,
		batteryLevel : batteryLevel,
		farmCost : farmCost,
		batteryCost : batteryCost,
		storedPower : storedPower,
		powMod : powMod,
		farmBill : farmBill,
		batteryBill : batteryBill,
		momentum : momentum,

		swarmFlag : swarmFlag,
		swarmStatus : swarmStatus,
		swarmGifts : swarmGifts,
		nextGift : nextGift,
		giftPeriod : giftPeriod,
		giftCountdown : giftCountdown,
		elapsedTime : elapsedTime,

		maxFactoryLevel : maxFactoryLevel,
		maxDroneLevel : maxDroneLevel,

		wirePriceCounter : wirePriceCounter,
		wireBasePrice : wireBasePrice,

		egoFlag : egoFlag,
		autoTourneyFlag : autoTourneyFlag,
		tothFlag : tothFlag,

		incomeTracker : incomeTracker.slice(0),
		qChips : qChips.slice(0),
		stocks : stocks.slice(0),
		battles : battles.slice(0),
		battleNumbers : battleNumbers.slice(0),

		clips : clips,
		unusedClips : unusedClips,
		clipRate : clipRate,
		clipRateTemp : clipRateTemp,
		prevClips : prevClips,
		clipRateTracker : clipRateTracker,
		clipmakerRate : clipmakerRate,
		clipmakerLevel : clipmakerLevel,
		clipperCost : clipperCost,
		unsoldClips : unsoldClips,
		funds : funds,
		margin : margin,
		wire : wire,
		wireCost : wireCost,
		adCost : adCost,
		demand : demand,
		clipsSold : clipsSold,
		avgRev : avgRev,
		ticks : ticks,
		marketing : marketing,
		marketingLvl : marketingLvl,
		x : x,
		clippperCost : clippperCost,
		processors : processors,
		memory : memory,
		operations : operations,
		trust : trust,
		nextTrust : nextTrust,
		transaction : transaction,
		clipperBoost : clipperBoost,
		blinkCounter : blinkCounter,
		creativity : creativity,
		creativityOn : creativityOn,
		safetyProjectOn : safetyProjectOn,
		boostLvl : boostLvl,
		wirePurchase : wirePurchase,
		wireSupply : wireSupply,
		marketingEffectiveness : marketingEffectiveness,
		milestoneFlag : milestoneFlag,
		bankroll : bankroll,
		fib1 : fib1,
		fib2 : fib2,
		strategyEngineFlag : strategyEngineFlag,
		investmentEngineFlag : investmentEngineFlag,
		revPerSecFlag : revPerSecFlag,
		compFlag : compFlag,
		projectsFlag : projectsFlag,
		autoClipperFlag : autoClipperFlag,
		megaClipperFlag : megaClipperFlag,
		megaClipperCost : megaClipperCost,
		megaClipperLevel : megaClipperLevel,
		megaClipperBoost : megaClipperBoost,
		creativitySpeed : creativitySpeed,
		creativityCounter : creativityCounter,
		wireBuyerFlag : wireBuyerFlag,
		demandBoost : demandBoost,
		humanFlag : humanFlag,
		trustFlag : trustFlag,
		nanoWire : nanoWire,
		creationFlag : creationFlag,
		wireProductionFlag : wireProductionFlag,
		spaceFlag : spaceFlag,
		factoryFlag : factoryFlag,
		harvesterFlag : harvesterFlag,
		wireDroneFlag : wireDroneFlag,
		factoryLevel : factoryLevel,
		factoryBoost : factoryBoost,
		droneBoost : droneBoost,
		availableMatter : availableMatter,
		acquiredMatter : acquiredMatter,
		processedMatter : processedMatter,
		harvesterLevel : harvesterLevel,
		wireDroneLevel : wireDroneLevel,
		factoryCost : factoryCost,
		harvesterCost : harvesterCost,
		wireDroneCost : wireDroneCost,
		factoryRate : factoryRate,
		harvesterRate : harvesterRate,
		wireDroneRate : wireDroneRate,
		harvesterBill : harvesterBill,
		wireDroneBill : wireDroneBill,
		factoryBill : factoryBill,
		probeCount : probeCount,
		totalMatter : totalMatter,
		foundMatter : foundMatter,
		qFlag : qFlag,
		qClock : qClock,
		qChipCost : qChipCost,
		nextQchip : nextQchip,
		bribe : bribe,
		battleFlag : battleFlag,

		portfolioSize : portfolioSize,
		stockID : stockID,
		secTotal : secTotal,
		portTotal : portTotal,
		sellDelay : sellDelay,
		riskiness : riskiness,
		maxPort : maxPort,
		m : m,
		investLevel : investLevel,
		investUpgradeCost : investUpgradeCost,
		stockGainThreshold : stockGainThreshold,
		ledger : ledger,
		stockReportCounter : stockReportCounter,

		tourneyCost : tourneyCost,
		tourneyLvl : tourneyLvl,
		stratCounter : stratCounter,
		roundNum : roundNum,
		hMove : hMove,
		vMove : vMove,
		hMovePrev : hMovePrev,
		vMovePrev : vMovePrev,
		aa : aa,
		ab : ab,
		ba : ba,
		bb : bb,
		rounds : rounds,
		currentRound : currentRound,
		rCounter : rCounter,
		tourneyInProg : tourneyInProg,
		winnerPtr : winnerPtr,
		high : high,
		pick : pick,
		yomi : yomi,
		yomiBoost : yomiBoost,

		probeSpeed : probeSpeed,
		probeNav : probeNav,
		probeRep : probeRep,
		partialProbeSpawn : partialProbeSpawn,
		probeHaz : probeHaz,
		partialProbeHaz : partialProbeHaz,
		probesLostHaz : probesLostHaz,
		probesLostDrift : probesLostDrift,
		probesLostCombat : probesLostCombat,
		probeFac : probeFac,
		probeWire : probeWire,
		probeCombat : probeCombat,
		attackSpeed : attackSpeed,
		battleSpeed : battleSpeed,
		attackSpeedFlag : attackSpeedFlag,
		attackSpeedMod : attackSpeedMod,
		probeDescendents : probeDescendents,
		drifterCount : drifterCount,
		warTrigger : warTrigger,
		battleID : battleID,
		battleName : battleName,
		battleNameFlag : battleNameFlag,
		maxBattles : maxBattles,
		battleClock : battleClock,
		battleAlarm : battleAlarm,
		outcomeTimer : outcomeTimer,
		drifterCombat : drifterCombat,
		probeTrust : probeTrust,
		probeUsedTrust : probeUsedTrust,
		probeTrustCost : probeTrustCost,
		probeLaunchLevel : probeLaunchLevel,
		probeCost : probeCost
	}
	
	localStorage.setItem("saveGame"+value, JSON.stringify(saveGame));
	localStorage.setItem("saveProjectsUses"+value, JSON.stringify(projectsUses));
	localStorage.setItem("saveProjectsFlags"+value, JSON.stringify(projectsFlags));
	localStorage.setItem("saveProjectsActive"+value, JSON.stringify(projectsActive));
	localStorage.setItem("saveStratsActive"+value, JSON.stringify(stratsActive));
}

// Cache all DOM elements
function cacheDOMElements() {
	wireCostElement = document.getElementById("wireCost");
	wireBuyerStatusElement = document.getElementById("wireBuyerStatus");
	wireElement = document.getElementById("wire");
	fundsElement = document.getElementById("funds");
	qCompDisplayElement = document.getElementById("qCompDisplay");
	hypnoDroneTextElement = document.getElementById("hypnoDroneText");
	readoutElement1 = document.getElementById("readout1");
	readoutElement2 = document.getElementById("readout2");
	readoutElement3 = document.getElementById("readout3");
	readoutElement4 = document.getElementById("readout4");
	readoutElement5 = document.getElementById("readout5");
	mpdsDivElement = document.getElementById("mdpsDiv");
	factoryRebootToolTipElement = document
			.getElementById("factoryRebootToolTip");
	havesterRebootToolTipElement = document
			.getElementById("harvesterRebootToolTip");
	wireDroneRebootToolTipElement = document
			.getElementById("wireDroneRebootToolTip");
	farmRebootToolTipElement = document.getElementById("farmRebootToolTip");
	batteryRebootToolTipElement = document
			.getElementById("batteryRebootToolTip");
	swarmSliderDivElement = document.getElementById("swarmSliderDiv");
	clipCountCrunchedElement = document.getElementById("clipCountCrunched");
	autoTourneyStatusDivElement = document
			.getElementById("autoTourneyStatusDiv");
	autoTourneyControlElement = document.getElementById("autoTourneyControl");
	wireBuyerDivElement = document.getElementById("wireBuyerDiv");
	tournamentResultsTableElement = document
			.getElementById("tournamentResultsTable");
	tournamentStuffElement = document.getElementById("tournamentStuff");
	increaseMaxTrustDivElement = document.getElementById("increaseMaxTrustDiv");
	honorDivElement = document.getElementById("honorDiv");
	drifterDivElement = document.getElementById("drifterDiv");
	battleCanvasDivElement = document.getElementById("battleCanvasDiv");
	combatButtonDivElement = document.getElementById("combatButtonDiv");
	factoryUpgradeDisplayElement = document
			.getElementById("factoryUpgradeDisplay");
	droneUpgradeDisplayElement = document.getElementById("droneUpgradeDisplay");
	btnIncreaseMaxTrustElement = document.getElementById("btnIncreaseMaxTrust");
	btnMakerProbeElement = document.getElementById("btnMakeProbe");
	hazardBodyCountElement = document.getElementById("hazardBodyCount");
	probesLostHazardsDisplayElement = document
			.getElementById("probesLostHazardsDisplay");
	driftBodyCountElement = document.getElementById("driftBodyCount");
	combatBodyCountElement = document.getElementById("combatBodyCount");
	prestigeDivElement = document.getElementById("prestigeDiv");
	btnMakePaperclipElement = document.getElementById("btnMakePaperclip");
	btnBuyWireElement = document.getElementById("btnBuyWire");
	btnMakeClipperElement = document.getElementById("btnMakeClipper");
	btnExpandMarketingElement = document.getElementById("btnExpandMarketing");
	btnLowerPriceElement = document.getElementById("btnLowerPrice");
	btnAddProcElement = document.getElementById("btnAddProc");
	btnAddMemElement = document.getElementById("btnAddMem");
	btnNewTournamentElement = document.getElementById("btnNewTournament");
	btnImproveInvestmentsElement = document
			.getElementById("btnImproveInvestments");
	investmentEngineElement = document.getElementById("investmentEngine");
	investmentEngineUpgradeElement = document
			.getElementById("investmentEngineUpgrade");
	strategyEngineElement = document.getElementById("strategyEngine");
	tournamentManagementElement = document
			.getElementById("tournamentManagement");
	megaClipperDivElement = document.getElementById("megaClipperDiv");
	btnMakeMegaClipperElement = document.getElementById("btnMakeMegaClipper");
	autoClipperDivElement = document.getElementById("autoClipperDiv");
	revPerSecDivElement = document.getElementById("revPerSecDiv");
	compDivElement = document.getElementById("compDiv");
	creativityDivElement = document.getElementById("creativityDiv");
	projectsDivElement = document.getElementById("projectsDiv");
	businessDivElement = document.getElementById("businessDiv");
	manufacturingDivElement = document.getElementById("manufacturingDiv");
	trustDivElement = document.getElementById("trustDiv");
	creationDivElement = document.getElementById("creationDiv");
	factoryDivElement = document.getElementById("factoryDiv");
	wireProductionDivElement = document.getElementById("wireProductionDiv");
	wireTransDivElement = document.getElementById("wireTransDiv");
	harvesterDivElement = document.getElementById("harvesterDiv");
	wireDroneDivElement = document.getElementById("wireDroneDiv");
	tothDivElement = document.getElementById("tothDiv");
	spaceDivElement = document.getElementById("spaceDiv");
	factoryDivSpaceElement = document.getElementById("factoryDivSpace");
	droneDivSpaceElement = document.getElementById("droneDivSpace");
	probeDesignDivElement = document.getElementById("probeDesignDiv");
	increaseProbeTrustDivElement = document
			.getElementById("increaseProbeTrustDiv");
	qComputingElement = document.getElementById("qComputing");
	btnMakeFactoryElement = document.getElementById("btnMakeFactory");
	btnHarvesterRebootElement = document.getElementById("btnHarvesterReboot");
	btnWireDroneRebootElement = document.getElementById("btnWireDroneReboot");
	btnFactoryRebootElement = document.getElementById("btnFactoryReboot");
	probeTrustUsedDisplayElement = document
			.getElementById("probeTrustUsedDisplay");
	btnIncreaseProbeTrustElement = document
			.getElementById("btnIncreaseProbeTrust");
	btnRaiseProbeSpeedElement = document.getElementById("btnRaiseProbeSpeed");
	btnLowerProbeSpeedElement = document.getElementById("btnLowerProbeSpeed");
	btnRaiseProbeNavElement = document.getElementById("btnRaiseProbeNav");
	btnLowerProbeNavElement = document.getElementById("btnLowerProbeNav");
	btnRaiseProbeRepElement = document.getElementById("btnRaiseProbeRep");
	btnLowerProbeRepElement = document.getElementById("btnLowerProbeRep");
	btnRaiseProbeHazElement = document.getElementById("btnRaiseProbeHaz");
	btnLowerProbeHazElement = document.getElementById("btnLowerProbeHaz");
	btnRaiseProbeFacElement = document.getElementById("btnRaiseProbeFac");
	btnLowerProbeFacElement = document.getElementById("btnLowerProbeFac");
	btnRaiseProbeHarvElement = document.getElementById("btnRaiseProbeHarv");
	btnLowerProbeHarvElement = document.getElementById("btnLowerProbeHarv");
	btnRaiseProbeWireElement = document.getElementById("btnRaiseProbeWire");
	btnLowerProbeWireElement = document.getElementById("btnLowerProbeWire");
	btnRaiseProbeCombatElement = document.getElementById("btnRaiseProbeCombat");
	btnLowerProbeCombatElement = document.getElementById("btnLowerProbeCombat");
	coverElement = document.getElementById("cover");
	hypnoDroneEventDivElement = document.getElementById("hypnoDroneEventDiv");
	unusedClipsDisplayElement = document.getElementById("unusedClipsDisplay");
	transWireElement = document.getElementById("transWire");
	nanoWireElement = document.getElementById("nanoWire");
	clipsElement = document.getElementById("clips");
	unsoldClipsElement = document.getElementById("unsoldClips");
	yomiDisplayElement = document.getElementById('yomiDisplay');
	projectListTopElement = document.getElementById("projectListTop");
	investmentLevelElement = document.getElementById("investmentLevel");
	driftersKilledElement = document.getElementById('driftersKilled');
	availableMatterDisplayElement = document
			.getElementById('availableMatterDisplay');
	honorDisplayElement = document.getElementById("honorDisplay");
	clipmakerLevel2Element = document.getElementById('clipmakerLevel2');
	clipperCostElement = document.getElementById('clipperCost');
	acquiredMatterDisplayElement = document
			.getElementById('acquiredMatterDisplay');
	nanoWireElement = document.getElementById('nanoWire');
	probesBornDisplayElement = document.getElementById('probesBornDisplay');
	probesTotalDisplayElement = document.getElementById('probesTotalDisplay');
	probesLaunchedDisplayElement = document
			.getElementById('probesLaunchedDisplay');
	probeCostDisplayElement = document.getElementById('probeCostDisplay');
	probeCombatDisplayElement = document.getElementById('probeCombatDisplay');
	probeWireDisplayElement = document.getElementById('probeWireDisplay');
	probeHarvDisplayElement = document.getElementById('probeHarvDisplay');
	probeFacDisplayElement = document.getElementById('probeFacDisplay');
	probeRepDisplayElement = document.getElementById('probeRepDisplay');
	probeHazDisplayElement = document.getElementById('probeHazDisplay');
	probeNavDisplayElement = document.getElementById('probeNavDisplay');
	probeSpeedDisplayElement = document.getElementById('probeSpeedDisplay');
	probeTrustDisplayElement = document.getElementById('probeTrustDisplay');
	memoryElement = document.getElementById("memory");
	processorsElement = document.getElementById("processors");
	marginElement = document.getElementById("margin");
	marketingLvlElement = document.getElementById('marketingLvl');
	adCostElement = document.getElementById('adCost');
	factoryCostDisplayElement = document.getElementById('factoryCostDisplay');
	factoryLevelDisplayElement = document.getElementById('factoryLevelDisplay');
	wireDroneCostDisplayElement = document
			.getElementById('wireDroneCostDisplay');
	wireDroneLevelDisplayElement = document
			.getElementById('wireDroneLevelDisplay');
	harvesterCostDisplayElement = document
			.getElementById('harvesterCostDisplay');
	harvesterLevelDisplayElement = document
			.getElementById('harvesterLevelDisplay');
	megaClipperCostElement = document.getElementById('megaClipperCost');
	megaClipperLevelElement = document.getElementById('megaClipperLevel');
	investmentBankrollElement = document.getElementById('investmentBankroll');
	secValueElement = document.getElementById('secValue');
	portValueElement = document.getElementById('portValue');
	investUpgradeCostElement = document.getElementById("investUpgradeCost");
	prestigeUcounterElement = document.getElementById("prestigeUcounter");
	prestigeScounterElement = document.getElementById("prestigeScounter");
	prestigeXcounterElement = document.getElementById("prestigeXcounter");
	newTourneyCostElement = document.getElementById("newTourneyCost");
	maxTrustDisplayElement = document.getElementById("maxTrustDisplay");
	victoryDivElement = document.getElementById("victoryDiv");
	probeTrustCostDisplayElement = document
			.getElementById("probeTrustCostDisplay");
	tournamentResultsTableElement = document
			.getElementById("tournamentResultsTable");
	farmCostElement = document.getElementById('farmCost');
	batteryCostElement = document.getElementById('batteryCost');
	farmLevelElement = document.getElementById('farmLevel');
	batteryLevelElement = document.getElementById('batteryLevel');
	availableMatterDisplayElement = document
			.getElementById('availableMatterDisplay');
	acquiredMatterDisplayElement = document
			.getElementById('acquiredMatterDisplay');
	mapsElement = document.getElementById('maps');
	nanoWireElement = document.getElementById('nanoWire');
	wppsElement = document.getElementById('wpps');
	probeDesignDivElement = document.getElementById("probeDesignDiv");
	increaseProbeTrustDivElement = document
			.getElementById("increaseProbeTrustDiv");
	increaseMaxTrustDivElement = document.getElementById("increaseMaxTrustDiv");
	spaceDivElement = document.getElementById("spaceDiv");
	battleCanvasDivElement = document.getElementById("battleCanvasDiv");
	honorDivElement = document.getElementById("honorDiv");
	wireProductionDivElement = document.getElementById("wireProductionDiv");
	wireTransDivElement = document.getElementById("wireTransDiv");
	swarmGiftDivElement = document.getElementById("swarmGiftDiv");
	swarmEngineElement = document.getElementById("swarmEngine");
	swarmSliderDivElement = document.getElementById("swarmSliderDiv");
	factoryDivSpaceElement = document.getElementById("factoryDivSpace");
	clipsPerSecDivElement = document.getElementById("clipsPerSecDiv");
	tothDivElement = document.getElementById("tothDiv");
	strategyEngineElement = document.getElementById("strategyEngine");
	tournamentManagementElement = document
			.getElementById("tournamentManagement");
	btnQcomputeElement = document.getElementById("btnQcompute");
	qComputingElement = document.getElementById("qComputing");
	transWireElement = document.getElementById("transWire");
	processorDisplayElement = document.getElementById("processorDisplay");
	compDivElement = document.getElementById("compDiv");
	projectsDivElement = document.getElementById("projectsDiv");
	creationDivElement = document.getElementById("creationDiv");
	stratPickerElement = document.getElementById("stratPicker");
	investUpgradeCostElement = document.getElementById("investUpgradeCost");
	yomiDisplayElement = document.getElementById("yomiDisplay");
	investmentBankrollElement = document.getElementById('investmentBankroll');
	secValueElement = document.getElementById('secValue');
	portValueElement = document.getElementById('portValue');
	investStratElement = document.getElementById("investStrat");
	btnRunTournamentElement = document.getElementById("btnRunTournament");
	vertStratElement = document.getElementById("vertStrat");
	horizStratElement = document.getElementById("horizStrat");
	vLabelaElement = document.getElementById("vLabela");
	vLabelbElement = document.getElementById("vLabelb");
	hLabelaElement = document.getElementById("hLabela");
	hLabelbElement = document.getElementById("hLabelb");
	aaPayoffHElement = document.getElementById("aaPayoffH");
	aaPayoffVElement = document.getElementById("aaPayoffV");
	abPayoffHElement = document.getElementById("abPayoffH");
	abPayoffVElement = document.getElementById("abPayoffV");
	baPayoffHElement = document.getElementById("baPayoffH");
	baPayoffVElement = document.getElementById("baPayoffV");
	bbPayoffHElement = document.getElementById("bbPayoffH");
	bbPayoffVElement = document.getElementById("bbPayoffV");
	autoTourneyStatusElement = document.getElementById('autoTourneyStatus');
	tournamentTableElement = document.getElementById("tournamentTable");
	tournamentResultsTableElement = document
			.getElementById("tournamentResultsTable");
	tourneyDisplayElement = document.getElementById("tourneyDisplay");
	payoffCellAAElement = document.getElementById("payoffCellAA");
	payoffCellABElement = document.getElementById("payoffCellAB");
	payoffCellBAElement = document.getElementById("payoffCellBA");
	payoffCellBBElement = document.getElementById("payoffCellBB");
	clipmakerLevel2Element = document.getElementById('clipmakerLevel2');
	clipperCostElement = document.getElementById('clipperCost');
	megaClipperLevelElement = document.getElementById('megaClipperLevel');
	megaClipperCostElement = document.getElementById('megaClipperCost');
	nextFactoryUpgradeElement = document.getElementById("nextFactoryUpgrade");
	nextDroneUpgradeElement = document.getElementById("nextDroneUpgrade");
	factoryLevelDisplayElement = document.getElementById('factoryLevelDisplay');
	factoryCostDisplayElement = document.getElementById('factoryCostDisplay');
	harvesterLevelDisplayElement = document
			.getElementById('harvesterLevelDisplay');
	harvesterCostDisplayElement = document
			.getElementById('harvesterCostDisplay');
	wireDroneLevelDisplayElement = document
			.getElementById('wireDroneLevelDisplay');
	wireDroneCostDisplayElement = document
			.getElementById('wireDroneCostDisplay');
	btnMakeHarvesterElement = document.getElementById("btnMakeHarvester");
	btnHarvesterx10Element = document.getElementById("btnHarvesterx10");
	btnHarvesterx100Element = document.getElementById("btnHarvesterx100");
	btnHarvesterx1000Element = document.getElementById("btnHarvesterx1000");
	btnMakeWireDroneElement = document.getElementById("btnMakeWireDrone");
	btnWireDronex10Element = document.getElementById("btnWireDronex10");
	btnWireDronex100Element = document.getElementById("btnWireDronex100");
	btnWireDronex1000Element = document.getElementById("btnWireDronex1000");
	sliderElement = document.getElementById("slider");
	btnSynchSwarmElement = document.getElementById("btnSynchSwarm");
	btnEntertainSwarmElement = document.getElementById("btnEntertainSwarm");
	swarmSizeElement = document.getElementById("swarmSize");
	swarmGiftsElement = document.getElementById("swarmGifts");
	swarmStatusElement = document.getElementById("swarmStatus");
	giftCountdownElement = document.getElementById("giftCountdown");
	giftTimerElement = document.getElementById("giftTimer");
	feedButtonDivElement = document.getElementById("feedButtonDiv");
	teachButtonDivElement = document.getElementById("teachButtonDiv");
	swarmEntertainCostElement = document.getElementById("swarmEntertainCost");
	entertainButtonDivElement = document.getElementById("entertainButtonDiv");
	cladButtonDivElement = document.getElementById("cladButtonDiv");
	synchButtonDivElement = document.getElementById("synchButtonDiv");
	swarmStatusDivElement = document.getElementById("swarmStatusDiv");
	swarmEngineElement = document.getElementById("swarmEngine");
	farmLevelElement = document.getElementById('farmLevel');
	farmCostElement = document.getElementById('farmCost');
	batteryLevelElement = document.getElementById('batteryLevel');
	batteryCostElement = document.getElementById('batteryCost');
	powerProductionRateElement = document.getElementById("powerProductionRate");
	powerConsumptionRateElement = document
			.getElementById("powerConsumptionRate");
	storedPowerElement = document.getElementById("storedPower");
	facPowConRateElement = document.getElementById("facPowConRate");
	dronePowConRateElement = document.getElementById("dronePowConRate");
	maxStorageElement = document.getElementById("maxStorage");
	performanceElement = document.getElementById("performance");
	btnMakeFarmElement = document.getElementById("btnMakeFarm");
	btnMakeBatteryElement = document.getElementById("btnMakeBattery");
	btnFarmRebootElement = document.getElementById("btnFarmReboot");
	btnBatteryRebootElement = document.getElementById("btnBatteryReboot");
	btnFarmx10Element = document.getElementById("btnFarmx10");
	btnFarmx100Element = document.getElementById("btnFarmx100");
	btnBatteryx10Element = document.getElementById("btnBatteryx10");
	btnBatteryx100Element = document.getElementById("btnBatteryx100");
	powerDivElement = document.getElementById("powerDiv");
	adCostElement = document.getElementById('adCost');
	marketingLvlElement = document.getElementById('marketingLvl');
	demandElement = document.getElementById("demand");
	marginElement = document.getElementById("margin");
	inchSpanElement = document.getElementById("inchSpan");
	demandElement = document.getElementById("demand");
	operationsElement = document.getElementById("operations");
	trustElement = document.getElementById("trust");
	nextTrustElement = document.getElementById("nextTrust");
	creativityElement = document.getElementById("creativity");
	factoryLevelDisplaySpaceElement = document
			.getElementById("factoryLevelDisplaySpace");
	harvesterLevelSpaceElement = document.getElementById("harvesterLevelSpace");
	wireDroneLevelSpaceElement = document.getElementById("wireDroneLevelSpace");
	maxOpsElement = document.getElementById("maxOps");
	avgSalesElement = document.getElementById("avgSales");
	avgRevElement = document.getElementById("avgRev");
	probeTrustCostDisplayElement = document
			.getElementById('probeTrustCostDisplay');
	mdpsElement = document.getElementById('mdps');
	colonizedDisplayElement = document.getElementById('colonizedDisplay');
	probesLostHazardsDisplayElement = document
			.getElementById('probesLostHazardsDisplay');
	probesTotalDisplayElement = document.getElementById('probesTotalDisplay');
	probesLostDriftDisplayElement = document
			.getElementById('probesLostDriftDisplay');
	probesTotalDisplayElement = document.getElementById('probesTotalDisplay');
	drifterCountElement = document.getElementById('drifterCount');
	mapsElement = document.getElementById('maps');
	swarmGiftDivElement = document.getElementById("swarmGiftDiv");
	swarmEngineElement = document.getElementById("swarmEngine");
	clipsPerSecDivElement = document.getElementById("clipsPerSecDiv");
	tothDivElement = document.getElementById("tothDiv");
	clipmakerRateElement = document.getElementById("clipmakerRate");
	clipmakerRate2Element = document.getElementById("clipmakerRate2");

	stockSymbolElements.push(document.getElementById("stock1Symbol"));
	stockAmountElements.push(document.getElementById("stock1Amount"));
	stockPriceElements.push(document.getElementById("stock1Price"));
	stockTotalElements.push(document.getElementById("stock1Total"));
	stockProfitElements.push(document.getElementById("stock1Profit"));

	stockSymbolElements.push(document.getElementById("stock2Symbol"));
	stockAmountElements.push(document.getElementById("stock2Amount"));
	stockPriceElements.push(document.getElementById("stock2Price"));
	stockTotalElements.push(document.getElementById("stock2Total"));
	stockProfitElements.push(document.getElementById("stock2Profit"));

	stockSymbolElements.push(document.getElementById("stock3Symbol"));
	stockAmountElements.push(document.getElementById("stock3Amount"));
	stockPriceElements.push(document.getElementById("stock3Price"));
	stockTotalElements.push(document.getElementById("stock3Total"));
	stockProfitElements.push(document.getElementById("stock3Profit"));

	stockSymbolElements.push(document.getElementById("stock4Symbol"));
	stockAmountElements.push(document.getElementById("stock4Amount"));
	stockPriceElements.push(document.getElementById("stock4Price"));
	stockTotalElements.push(document.getElementById("stock4Total"));
	stockProfitElements.push(document.getElementById("stock4Profit"));

	stockSymbolElements.push(document.getElementById("stock5Symbol"));
	stockAmountElements.push(document.getElementById("stock5Amount"));
	stockPriceElements.push(document.getElementById("stock5Price"));
	stockTotalElements.push(document.getElementById("stock5Total"));
	stockProfitElements.push(document.getElementById("stock5Profit"));

	tourneyResultsElements.push(document.getElementById("results0"));
	tourneyResultsElements.push(document.getElementById("results1"));
	tourneyResultsElements.push(document.getElementById("results2"));
	tourneyResultsElements.push(document.getElementById("results3"));
	tourneyResultsElements.push(document.getElementById("results4"));
	tourneyResultsElements.push(document.getElementById("results5"));
	tourneyResultsElements.push(document.getElementById("results6"));
	tourneyResultsElements.push(document.getElementById("results7"));

}

function refresh() {

	// DEBUG

	// availableMatter = Math.pow(10, 24)*6000;
	// acquiredMatter = 0;

	// //////

	driftersKilledElement.innerHTML = spellf(driftersKilled);
	availableMatterDisplayElement.innerHTML = spellf(availableMatter);
	honorDisplayElement.innerHTML = formatWithCommas(Math.round(honor));
	clipmakerLevel2Element.innerHTML = clipmakerLevel;
	clipperCostElement.innerHTML = formatWithCommas(clipperCost, 2);
	acquiredMatterDisplayElement.innerHTML = spellf(acquiredMatter);
	nanoWireElement.innerHTML = spellf(wire);
	probesBornDisplayElement.innerHTML = spellf(probeDescendents);
	probesTotalDisplayElement.innerHTML = spellf(probeCount);
	probesLaunchedDisplayElement.innerHTML = formatWithCommas(probeLaunchLevel);
	probeCostDisplayElement.innerHTML = spellf(probeCost);
	probeCombatDisplayElement.innerHTML = probeCombat;
	probeWireDisplayElement.innerHTML = probeWire;
	probeHarvDisplayElement.innerHTML = probeHarv;
	probeFacDisplayElement.innerHTML = probeFac;
	probeRepDisplayElement.innerHTML = probeRep;
	probeHazDisplayElement.innerHTML = probeHaz;
	probeNavDisplayElement.innerHTML = probeNav;
	probeSpeedDisplayElement.innerHTML = probeSpeed;
	probeTrustDisplayElement.innerHTML = probeTrust;
	memoryElement.innerHTML = memory;
	processorsElement.innerHTML = processors;
	marginElement.innerHTML = margin.toFixed(2);
	marketingLvlElement.innerHTML = marketingLvl;
	adCostElement.innerHTML = formatWithCommas(adCost, 2);
	factoryCostDisplayElement.innerHTML = spellf(factoryCost);
	factoryLevelDisplayElement.innerHTML = factoryLevel;
	unusedClipsDisplayElement.innerHTML = spellf(unusedClips);
	wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost);
	wireDroneLevelDisplayElement.innerHTML = wireDroneLevel;
	harvesterCostDisplayElement.innerHTML = spellf(harvesterCost);
	harvesterLevelDisplayElement.innerHTML = harvesterLevel;
	megaClipperCostElement.innerHTML = formatWithCommas(megaClipperCost);
	megaClipperLevelElement.innerHTML = megaClipperLevel;
	investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
	secValueElement.innerHTML = formatWithCommas(secTotal);
	portValueElement.innerHTML = formatWithCommas(portTotal);
	investUpgradeCostElement.innerHTML = formatWithCommas(investUpgradeCost);
	yomiDisplayElement.innerHTML = formatWithCommas(yomi);
	investmentLevelElement.innerHTML = investLevel;
	prestigeUcounterElement.innerHTML = prestigeU;
	prestigeScounterElement.innerHTML = prestigeS;
	prestigeXcounterElement.innerHTML = prestigeX;
	newTourneyCostElement.innerHTML = formatWithCommas(tourneyCost);
	tourneyInProg = 0;
	maxTrustDisplayElement.innerHTML = formatWithCommas(maxTrust);
	victoryDivElement.style.visibility = "hidden";
	probeTrustCostDisplayElement.innerHTML = formatWithCommas(probeTrustCost);
	tournamentResultsTableElement.style.display = "none";
	farmCostElement.innerHTML = spellf(farmCost);
	batteryCostElement.innerHTML = spellf(batteryCost);
	farmLevelElement.innerHTML = formatWithCommas(farmLevel);
	batteryLevelElement.innerHTML = formatWithCommas(batteryLevel);

	updateDronePrices();
	harvesterCostDisplayElement.innerHTML = spellf(harvesterCost);
	wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost);
	setWireBuyer(wireBuyerStatus);
	updateUpgrades();
	updatePower();
	updatePowPrices();

	// HOT FIXES

	if (project46.flag == 1) {
		loadThrenody();
	}

	project218.uses = 1;
	project219.uses = 1;

	// DEBUG

	if (battles.length > 0) {
		battles.splice(0, 1);
	}
}
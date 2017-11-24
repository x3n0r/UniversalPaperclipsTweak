// MOBILE TAKEOVER SHIT ---------------------------------------------

var ctnButton = document.getElementById("mobile-end-button");
ctnButton.onclick = function() {
    document.getElementById("mobile").style.display = "none";
    document.getElementById("page").style.display = "block";
};


// Threnody ---------------------------------------------------------
function threnodyLoaded()
{
    threnodyLoadedBool = true; 
}

var threnodyAudio;

function loadThrenody() {
    threnodyAudio.src = "test.mp3";
    threnodyAudio.addEventListener('canplaythrough', threnodyLoaded);
}

function playThrenody(){
    if(threnodyLoadedBool)
    {
        threnodyAudio.play();
    }
}

var clipmakerRateElement;
var clipmakerRate2Element;
var availableMatterDisplayElement;
var acquiredMatterDisplayElement;
var mapsElement;
var nanoWireElement;
var wppsElement;
var probeDesignDivElement;
var increaseProbeTrustDivElement;
var increaseMaxTrustDivElement;
var spaceDivElement;
var battleCanvasDivElement;
var honorDivElement;
var wireProductionDivElement;
var wireTransDivElement;
var swarmGiftDivElement;
var swarmEngineElement;
var swarmSliderDivElement;
var factoryDivSpaceElement;
var clipsPerSecDivElement;
var tothDivElement;
var strategyEngineElement;
var tournamentManagementElement;
var btnQcomputeElement;
var qComputingElement;
var transWireElement;
var processorDisplayElement;
var compDivElement;
var projectsDivElement;
var creationDivElement;
var stratPickerElement;
var investUpgradeCostElement;
var yomiDisplayElement;
var investmentBankrollElement;
var fundsElement;
var secValueElement;
var portValueElement;
var investStratElement;
var btnRunTournamentElement;
var vertStratElement;
var horizStratElement;
var vLabelaElement;
var vLabelbElement;
var hLabelaElement;
var hLabelbElement;
var aaPayoffHElement;
var aaPayoffVElement;
var abPayoffHElement;
var abPayoffVElement;
var baPayoffHElement;
var baPayoffVElement;
var bbPayoffHElement;
var bbPayoffVElement;
var autoTourneyStatusElement;
var tournamentTableElement;
var tournamentResultsTableElement;
var tourneyDisplayElement;
var payoffCellAAElement;
var payoffCellABElement;
var payoffCellBAElement;
var payoffCellBBElement;
var clipmakerLevel2Element;
var clipperCostElement;
var megaClipperLevelElement;
var megaClipperCostElement;
var nextFactoryUpgradeElement;
var nextDroneUpgradeElement;
var factoryLevelDisplayElement;
var factoryCostDisplayElement;
var harvesterLevelDisplayElement;
var harvesterCostDisplayElement;
var wireDroneLevelDisplayElement;
var wireDroneCostDisplayElement;
var btnMakeHarvesterElement;
var btnHarvesterx10Element;
var btnHarvesterx100Element;
var btnHarvesterx1000Element;
var btnMakeWireDroneElement;
var btnWireDronex10Element;
var btnWireDronex100Element;
var btnWireDronex1000Element;
var sliderElement;
var btnSynchSwarmElement;
var btnEntertainSwarmElement;
var swarmSizeElement;
var swarmGiftsElement;
var swarmStatusElement;
var giftCountdownElement;
var giftTimerElement;
var feedButtonDivElement;
var teachButtonDivElement;
var swarmEntertainCostElement;
var entertainButtonDivElement;
var cladButtonDivElement;
var synchButtonDivElement;
var swarmStatusDivElement;
var swarmEngineElement;
var farmLevelElement;
var farmCostElement;
var batteryLevelElement;
var batteryCostElement;
var powerProductionRateElement;
var powerConsumptionRateElement;
var storedPowerElement;
var facPowConRateElement;
var dronePowConRateElement;
var maxStorageElement;
var performanceElement;
var btnMakeFarmElement;
var btnMakeBatteryElement;
var btnFarmRebootElement;
var btnBatteryRebootElement;
var btnFarmx10Element;
var btnFarmx100Element;
var btnBatteryx10Element;
var btnBatteryx100Element;
var powerDivElement;
var adCostElement;
var marketingLvlElement;
var demandElement;
var marginElement;
var inchSpanElement;
var demandElement;
var operationsElement;
var trustElement;
var nextTrustElement;
var creativityElement;
var factoryLevelDisplaySpaceElement;
var harvesterLevelSpaceElement;
var wireDroneLevelSpaceElement;
var maxOpsElement;
var avgSalesElement;
var avgRevElement;
var probeTrustCostDisplayElement;
var mdpsElement;
var colonizedDisplayElement;
var probesLostHazardsDisplayElement;
var probesTotalDisplayElement;
var probesLostDriftDisplayElement;
var probesTotalDisplayElement;
var drifterCountElement;
var mapsElement;
var swarmGiftDivElement;
var swarmEngineElement;
var clipsPerSecDivElement;
var tothDivElement;
var prestigeUcounterElement;
var prestigeScounterElement;
var prestigeXcounterElement;
var newTourneyCostElement;
var maxTrustDisplayElement;
var victoryDivElement;
var probeTrustCostDisplayElement;
var tournamentResultsTableElement;
var farmCostElement;
var batteryCostElement;
var farmLevelElement;
var batteryLevelElement;
var wireDroneCostDisplayElement;
var wireDroneLevelDisplayElement;
var harvesterCostDisplayElement;
var harvesterLevelDisplayElement;
var megaClipperCostElement;
var megaClipperLevelElement;
var investmentBankrollElement;
var secValueElement;
var portValueElement;
var investUpgradeCostElement;
var driftersKilledElement;
var availableMatterDisplayElement;
var honorDisplayElement;
var clipmakerLevel2Element;
var clipperCostElement;
var acquiredMatterDisplayElement;
var nanoWireElement;
var probesBornDisplayElement;
var probesTotalDisplayElement;
var probesLaunchedDisplayElement;
var probeCostDisplayElement;
var probeCombatDisplayElement;
var probeWireDisplayElement;
var probeHarvDisplayElement;
var probeFacDisplayElement;
var probeRepDisplayElement;
var probeHazDisplayElement;
var probeNavDisplayElement;
var probeSpeedDisplayElement;
var probeTrustDisplayElement;
var memoryElement;
var processorsElement;
var marginElement;
var marketingLvlElement;
var adCostElement;
var factoryCostDisplayElement;
var factoryLevelDisplayElement;
var yomiDisplayElement;
var projectListTopElement;
var investmentLevelElement;

var wireCostElement;
var wireBuyerStatusElement;
var wireElement;

var qCompDisplayElement;

var hypnoDroneTextElement;
var hypnoDroneEventDivElement;

var readoutElement1;
var readoutElement2;
var readoutElement3;
var readoutElement4;
var readoutElement5;

var mpdsDivElement;

var factoryRebootToolTipElement;
var havesterRebootToolTipElement;
var wireDroneRebootToolTipElement;
var farmRebootToolTipElement;
var batteryRebootToolTipElement;

var swarmSliderDivElement;
var clipCountCrunchedElement;
var autoTourneyStatusDivElement;
var autoTourneyControlElement;

var wireBuyerDivElement; 
var tournamentResultsTableElement;
var tournamentStuffElement;

var increaseMaxTrustDivElement;
var honorDivElement;
var drifterDivElement;
var battleCanvasDivElement;
var combatButtonDivElement;
var factoryUpgradeDisplayElement;
var droneUpgradeDisplayElement;
var btnIncreaseMaxTrustElement;
var btnMakerProbeElement;
var hazardBodyCountElement;
var probesLostHazardsDisplayElement;
var driftBodyCountElement;
var combatBodyCountElement;
var prestigeDivElement;
var btnMakePaperclipElement;
var btnBuyWireElement;
var btnMakeClipperElement;
var btnExpandMarketingElement;
var btnLowerPriceElement;
var btnAddProcElement;
var btnAddMemElement;
var btnNewTournamentElement;
var btnImproveInvestmentsElement;
var investmentEngineElement;
var investmentEngineUpgradeElement;
var strategyEngineElement;
var tournamentManagementElement;
var megaClipperDivElement;
var btnMakeMegaClipperElement;
var autoClipperDivElement;
var revPerSecDivElement;
var compDivElement;
var creativityDivElement;
var projectsDivElement;
var businessDivElement;
var manufacturingDivElement;
var trustDivElement;
var creationDivElement;
var factoryDivElement;
var wireProductionDivElement;
var wireTransDivElement;
var harvesterDivElement;
var wireDroneDivElement;
var tothDivElement;
var spaceDivElement;
var factoryDivSpaceElement;
var droneDivSpaceElement;
var probeDesignDivElement;
var increaseProbeTrustDivElement;
var qComputingElement;
var btnMakeFactoryElement;
var btnHarvesterRebootElement;
var btnWireDroneRebootElement;
var btnFactoryRebootElement;

var probeTrustUsedDisplayElement;
var btnIncreaseProbeTrustElement;
var btnRaiseProbeSpeedElement;
var btnLowerProbeSpeedElement;
var btnRaiseProbeNavElement;
var btnLowerProbeNavElement;
var btnRaiseProbeRepElement;
var btnLowerProbeRepElement;
var btnRaiseProbeHazElement;
var btnLowerProbeHazElement;
var btnRaiseProbeFacElement;
var btnLowerProbeFacElement;
var btnRaiseProbeHarvElement;
var btnLowerProbeHarvElement;
var btnRaiseProbeWireElement;
var btnLowerProbeWireElement;
var btnRaiseProbeCombatElement;
var btnLowerProbeCombatElement;

var coverElement;

var unusedClipsDisplayElement;
var transWireElement;
var nanoWireElement;
var clipsElement;
var unsoldClipsElement;

var stockSymbolElements = [];
var stockAmountElements = [];
var stockPriceElements = [];
var stockTotalElements = [];
var stockProfitElements = [];

var tourneyResultsElements = [];

// Cache
cacheDOMElements();

// Wire --------------------------------------------------------
function adjustWirePrice(){
    
    wirePriceTimer++;
    
    if (wirePriceTimer>250 && wireBasePrice>15){
        wireBasePrice = wireBasePrice - (wireBasePrice/1000);
        wirePriceTimer = 0;
    }
    
    if (Math.random() < .015) {
        wirePriceCounter++;
        var wireAdjust = 6*(Math.sin(wirePriceCounter));
        wireCost = Math.ceil(wireBasePrice + wireAdjust);
        wireCostElement.innerHTML = wireCost;
        }
}

function toggleWireBuyer(){
    if (wireBuyerStatus==1){
        wireBuyerStatus=0;
        wireBuyerStatusElement.innerHTML = "OFF";
    } else {
        wireBuyerStatus=1;
        wireBuyerStatusElement.innerHTML = "ON";
    }
}

function buyWire(){
    if(funds >= wireCost){
        wirePriceTimer = 0;
        wire = wire + wireSupply;
        funds = funds - wireCost;
        wirePurchase = wirePurchase + 1;
        wireBasePrice = wireBasePrice + .05;
        wireElement.innerHTML = formatWithCommas(Math.floor(wire));
        fundsElement.innerHTML = formatWithCommas(funds, 2);
    }
}

// QCHIPS -----------------------------------------------------------

var qChips = [];
var qChipsElements = [];

var qChip0 = {
    waveSeed: .1,
    value: 0,
    active: 0,
}

qChips.push(qChip0);
qChipsElements.push(document.getElementById("qChip0"));

var qChip1 = {
    waveSeed: .2,
    value: 0,
    active: 0,
}

qChips.push(qChip1);
qChipsElements.push(document.getElementById("qChip1"));

var qChip2 = {
    waveSeed: .3,
    value: 0,
    active: 0,    
}

qChips.push(qChip2);
qChipsElements.push(document.getElementById("qChip2"));

var qChip3 = {
    waveSeed: .4,
    value: 0,
    active: 0,    
}

qChips.push(qChip3);
qChipsElements.push(document.getElementById("qChip3"));

var qChip4 = {
    waveSeed: .5,
    value: 0,
    active: 0,    
}

qChips.push(qChip4);
qChipsElements.push(document.getElementById("qChip4"));

var qChip5 = {
    waveSeed: .6,
    value: 0,
    active: 0,    
}

qChips.push(qChip5);
qChipsElements.push(document.getElementById("qChip5"));

var qChip6 = {
    waveSeed: .7,
    value: 0,
    active: 0,    
}

qChips.push(qChip6);
qChipsElements.push(document.getElementById("qChip6"));

var qChip7 = {
    waveSeed: .8,
    value: 0,
    active: 0,    
}

qChips.push(qChip7);
qChipsElements.push(document.getElementById("qChip7"));

var qChip8 = {
    waveSeed: .9,
    value: 0,
    active: 0,    
}

qChips.push(qChip8);
qChipsElements.push(document.getElementById("qChip8"));

var qChip9 = {
    waveSeed: 1,
    value: 0,
    active: 0,    
}

qChips.push(qChip9);
qChipsElements.push(document.getElementById("qChip9"));

function quantumCompute(){
    qClock = qClock+.01;
    for (var i = 0; i<qChips.length; i++){
        qChips[i].value = Math.sin(qClock*qChips[i].waveSeed*qChips[i].active);
        qChipsElements[i].style.opacity=qChips[i].value; 
    }
}

function qComp(){
    
    qFade = 1;
    
    var q = 0;
    
    
    if (qChips[0].active == 0){
        qCompDisplayElement.innerHTML = "Need Photonic Chips";   
    } else {
    for (var i = 0; i<qChips.length; i++){
        q = q+qChips[i].value;
        }
        
        var qq = Math.ceil(q*360);
        var buffer = (memory*1000) - standardOps;
        var damper = (tempOps/100)+5;
        
        if (qq>buffer) {
            tempOps = tempOps + Math.ceil(qq/damper) - buffer;
            qq = buffer;
            opFade = .01;
            opFadeTimer = 0;
            }
        
        standardOps = standardOps + qq;
        qCompDisplayElement.innerHTML = "qOps: " + formatWithCommas(Math.ceil(q*360));
    }
    
}



function manageProjects(){
    
    for(var i = 0; i < projects.length; i++){
        if (projects[i].trigger() && (projects[i].uses > 0)){
            displayProjects(projects[i]);
            projects[i].uses = projects[i].uses - 1;
            activeProjects.push(projects[i]);
        }
    }
        
        
    for(var i = 0; i < activeProjects.length; i++){
        if (activeProjects[i].cost()){
            activeProjects[i].element.disabled = false;
        } else {
            activeProjects[i].element.disabled = true;
        }   
    }
}


function displayProjects(project){
    
    project.element = document.createElement("button");
project.element.setAttribute("id", project.id);
    
project.element.onclick = function(){project.effect()};
    
project.element.setAttribute("class", "projectButton");
    projectListTopElement.appendChild(project.element, projectListTopElement.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
project.element.appendChild(span);
    
    var title = document.createTextNode(project.title);
    span.appendChild(title);    
    
    var cost = document.createTextNode(project.priceTag);
project.element.appendChild(cost);
    
    var div = document.createElement("div");
project.element.appendChild(div);
    
    var description = document.createTextNode(project.description);
    project.element.appendChild(description);
    
    blink(project.element);
    
}

//  HYPNODRONE EVENT ----------------------------------------------------------------

hypnoDroneEventDivElement.style.display = "none"; 
var longBlinkCounter = 0;

function longBlink(element){
 
    { 
        var handle = setInterval(function () { longToggleVisibility(element)}, 32);    
    }
    
    function longToggleVisibility(element){
    longBlinkCounter++;    
        
    if (longBlinkCounter > 5 && longBlinkCounter < 10){
        hypnoDroneTextElement.innerHTML="Release"; 
        }    
    
    if (longBlinkCounter > 30 && longBlinkCounter < 40){
        hypnoDroneTextElement.innerHTML="<br /><br /><br />Release"; 
        }   
        
    if (longBlinkCounter > 45 && longBlinkCounter < 55){
        hypnoDroneTextElement.innerHTML="<br />Release";
        }       
        
     if (longBlinkCounter > 55){
        hypnoDroneTextElement.innerHTML="Release<br/>the<br/>Hypno<br/>Drones";
        }       
        
    if (longBlinkCounter >= 120){
        //console.log("weed wizzard");
        clearInterval(handle);
        longBlinkCounter = 0;
        element.style.display = "none";
    } else {
        if (element.style.display != ""){
            element.style.display = "";
        } else {
            element.style.display = "none";    
        }
      }   
    }
        
    }

function hypnoDroneEvent(){
    hypnoDroneTextElement.innerHTML="Release";
    longBlink(hypnoDroneEventDivElement);
}     


//  MESSAGES ------------------------------------------------------------------------


function displayMessage(msg){
    readoutElement5.innerHTML=readoutElement4.innerHTML;
    readoutElement4.innerHTML=readoutElement3.innerHTML;
    readoutElement3.innerHTML=readoutElement2.innerHTML;
    readoutElement2.innerHTML=readoutElement1.innerHTML;
    readoutElement1.innerHTML=msg;
}


// BLINK

function blink(element){

    { 
        var handle = setInterval(function () { toggleVisibility(element)}, 30);    
    }
    
    function toggleVisibility(element){
    blinkCounter = blinkCounter+1;    
    
    if (blinkCounter >= 12){
        clearInterval(handle);
        blinkCounter = 0;
        element.style.visibility = "visible";
    } else {
        if (element.style.visibility != "hidden"){
        element.style.visibility = "hidden";
        } else {
        element.style.visibility = "visible";    
        }
      }   
    }
        
    }



function buttonUpdate(){
    
    if (swarmFlag == 0){        
        swarmEngineElement.style.display="none";
        swarmGiftDivElement.style.display="none";
        } else {
        swarmEngineElement.style.display="";
        swarmGiftDivElement.style.display="";    
        }    
    
    if (project127.flag == 1 && spaceFlag == 0){        
        powerDivElement.style.display="";
        } else {
        powerDivElement.style.display="none";      
        }  
    
    if (spaceFlag==0){
        mpdsDivElement.style.display="none";
    } else if (spaceFlag==1) {
        mpdsDivElement.style.display="";
    }
   
    factoryRebootToolTipElement.innerHTML = "+" + spellf(factoryBill)+" clips";
    havesterRebootToolTipElement.innerHTML = "+" + spellf(harvesterBill)+" clips";
    wireDroneRebootToolTipElement.innerHTML = "+" + spellf(wireDroneBill)+" clips";   
    farmRebootToolTipElement.innerHTML = "+" + spellf(farmBill)+" clips";
    batteryRebootToolTipElement.innerHTML = "+" + spellf(batteryBill)+" clips";
    
    
    if (swarmFlag == 1){
        swarmSliderDivElement.style.display="";
    } else {
        swarmSliderDivElement.style.display="none";
    }
    
    clipCountCrunchedElement.innerHTML = spellf(Math.round(clips));
    
if (autoTourneyFlag==1) {
    autoTourneyStatusDivElement.style.display="";
    autoTourneyControlElement.style.display="";
    } else {
    autoTourneyStatusDivElement.style.display="none";
    autoTourneyControlElement.style.display="none";   
    }    

    qCompDisplayElement.style.opacity = qFade;
    qFade = qFade - .001;
    
if (wireBuyerFlag==1) {
    wireBuyerDivElement.style.display="";
    } else {
    wireBuyerDivElement.style.display="none";    
    }
    
if (resultsFlag == 1 && autoTourneyFlag == 1 && autoTourneyStatus ==1 && tournamentResultsTableElement.style.display == "") {
    resultsTimer++;
    
    if (resultsTimer>=300 && operations>=tourneyCost){
        newTourney();
        runTourney();
        resultsTimer = 0;
        }
    }    
    
    
tournamentStuffElement.onmouseover = function() {revealGrid()};  //m@: does this need to happen every button update? idts, but TODO: look this up
tournamentStuffElement.onmouseout = function() {revealResults()};    
    
if (project121.flag == 0){
        increaseMaxTrustDivElement.style.display="none";
        honorDivElement.style.display="none";
    } else {
        increaseMaxTrustDivElement.style.display="";
        honorDivElement.style.display="";
    }
    
if (battleFlag == 0){
        drifterDivElement.style.display="none";
    } else {
        drifterDivElement.style.display="";
    }     
    
if (battleFlag == 0){
        battleCanvasDivElement.style.display="none";
    } else {
        battleCanvasDivElement.style.display="";
    }    
    
if (project131.flag == 0){
    combatButtonDivElement.style.display = "none";
    } else {
    combatButtonDivElement.style.display = "";    
    }     
    
if (maxFactoryLevel>=50 || project45.flag == 0){
    factoryUpgradeDisplayElement.style.display = "none";
    } else {
    factoryUpgradeDisplayElement.style.display = "";    
    }
    
 if (maxDroneLevel>=50000){   
    droneUpgradeDisplayElement.style.display = "none";
    }
    
if (honor<maxTrustCost){btnIncreaseMaxTrustElement.disabled = true;
            } else {
            btnIncreaseMaxTrustElement.disabled = false;    
            }
     
if (unusedClips<probeCost){btnMakerProbeElement.disabled = true;
            } else {
            btnMakerProbeElement.disabled = false;    
            }    
    
if (probesLostHaz<1) {hazardBodyCountElement.style.display = "none";
            } else {
            hazardBodyCountElement.style.display = "";
                
            probesLostHazardsDisplayElement.innerHTML = spellf(probesLostHaz);
                
            }    
    
if (probesLostDrift<1) {driftBodyCountElement.style.display = "none";
            } else {
            driftBodyCountElement.style.display = "";
            }     
    
if (probesLostCombat<1) {combatBodyCountElement.style.display = "none";
            } else {
            combatBodyCountElement.style.display = "";
            }     


//if (prestigeU<1 && prestigeS<1 && prestigeX<1) {prestigeDivElement.style.display = "none";
//            } else {
//           prestigeDivElement.style.display = ""; 
//            }  

if (wire<1){btnMakePaperclipElement.disabled = true;
            } else {
            btnMakePaperclipElement.disabled = false;    
            }
if (funds<wireCost){btnBuyWireElement.disabled = true;
            } else {
            btnBuyWireElement.disabled = false;    
            }
if (funds<clipperCost){btnMakeClipperElement.disabled = true;
            } else {
            btnMakeClipperElement.disabled = false;    
            }   
if (funds<adCost){btnExpandMarketingElement.disabled = true;
            } else {
            btnExpandMarketingElement.disabled = false;    
            }    
if (margin<=.01){btnLowerPriceElement.disabled = true;
            } else {
            btnLowerPriceElement.disabled = false;    
            } 
    
if (trust<=processors+memory && swarmGifts <= 0){
            btnAddProcElement.disabled = true;
            btnAddMemElement.disabled = true;
            } else {
            btnAddProcElement.disabled = false;
            btnAddMemElement.disabled = false;    
            }
if (operations>=tourneyCost && tourneyInProg == 0){
            btnNewTournamentElement.disabled = false;
            } else {
            btnNewTournamentElement.disabled = true;    
            }
if (yomi<investUpgradeCost){
            btnImproveInvestmentsElement.disabled = true;
            } else {
            btnImproveInvestmentsElement.disabled = false;   
            }  
if (investmentEngineFlag == 0){
            
            investmentEngineElement.style.display="none";
            investmentEngineUpgradeElement.style.display="none";
            } else {
                
            investmentEngineElement.style.display="";
            investmentEngineUpgradeElement.style.display="";        
            }    

if (strategyEngineFlag == 0){
            
            strategyEngineElement.style.display="none";
            tournamentManagementElement.style.display="none";
            } else {
                
            strategyEngineElement.style.display="";
            tournamentManagementElement.style.display="";        
            }     
    
if (megaClipperFlag == 0){
            
            megaClipperDivElement.style.display="none";
            } else {
            megaClipperDivElement.style.display="";      
            } 
    
    if (funds < megaClipperCost) { btnMakeMegaClipperElement.disabled = true;
            } else {
            btnMakeMegaClipperElement.disabled = false;    
            }   
    
if (autoClipperFlag === 0){
            
            autoClipperDivElement.style.display="none";
            } else {
            autoClipperDivElement.style.display="";      
            } 
    
            if (funds>=5) {
                autoClipperFlag = 1;
            }
    
if (revPerSecFlag === 0){
            
            revPerSecDivElement.style.display="none";
            } else {
            revPerSecDivElement.style.display="";      
            }     
    
    
if (compFlag === 0){
            
            compDivElement.style.display="none";
            } else {
            compDivElement.style.display="";      
            }  
    
    
if (creativityOn === 0){
            creativityDivElement.style.display="none";
            } else {
            creativityDivElement.style.display="";    
}    
    
if (projectsFlag === 0){
            
            projectsDivElement.style.display="none";
            } else {
            projectsDivElement.style.display="";      
            }      

if (humanFlag === 0){
            
            businessDivElement.style.display="none";
            manufacturingDivElement.style.display="none";
            trustDivElement.style.display="none";
            investmentEngineFlag = 0;
            wireBuyerFlag = 0;
            creationDivElement.style.display="";
            } else {
            businessDivElement.style.display="";
            manufacturingDivElement.style.display="";
            trustDivElement.style.display="";
            creationDivElement.style.display="none";    
            }  
    
if (factoryFlag === 0){
            
            factoryDivElement.style.display="none";
            } else {
            factoryDivElement.style.display="";      
            }      
   
if (wireProductionFlag === 0){
            
            wireProductionDivElement.style.display="none";
            } else {
            wireProductionDivElement.style.display="";
            wireTransDivElement.style.display="none";    
            } 
    
if (harvesterFlag === 0){
            
            harvesterDivElement.style.display="none";
            } else {
            harvesterDivElement.style.display="";      
            }  
    
if (wireDroneFlag === 0){
            
            wireDroneDivElement.style.display="none";
            } else {
            wireDroneDivElement.style.display="";      
            }  
    
if (tothFlag === 0){
            
            tothDivElement.style.display="none";
            } else {
            tothDivElement.style.display="";      
            }    
    
if (spaceFlag === 0){
            spaceDivElement.style.display="none";
            factoryDivSpaceElement.style.display="none";
            droneDivSpaceElement.style.display="none";
            probeDesignDivElement.style.display = "none";
            increaseProbeTrustDivElement.style.display = "none";   
            } else {
            spaceDivElement.style.display=""; 
            factoryDivSpaceElement.style.display = "";
            droneDivSpaceElement.style.display="";
            probeDesignDivElement.style.display="";
            increaseProbeTrustDivElement.style.display="";    
            factoryDivElement.style.display="none";
            harvesterDivElement.style.display="none"; 
            wireDroneDivElement.style.display="none";         
            }  
    
if (qFlag === 0){
            qComputingElement.style.display="none";     
            } else {
            qComputingElement.style.display="";    
            }    
 
    
    if (unusedClips < factoryCost) {btnMakeFactoryElement.disabled = true;
            } else {
            btnMakeFactoryElement.disabled = false;    
            }     
     
    
    if (harvesterLevel === 0) {btnHarvesterRebootElement.disabled = true;
            } else {
            btnHarvesterRebootElement.disabled = false;    
            }
    
    if (wireDroneLevel === 0) {btnWireDroneRebootElement.disabled = true;
            } else {
            btnWireDroneRebootElement.disabled = false;    
            }   
    
    if (factoryLevel === 0) {btnFactoryRebootElement.disabled = true;
            } else {
            btnFactoryRebootElement.disabled = false;    
            }      
    
// PROBE DESIGN    

probeUsedTrust = (probeSpeed+probeNav+probeRep+probeHaz+probeFac+probeHarv+probeWire+probeCombat);    
    
probeTrustUsedDisplayElement.innerHTML = probeUsedTrust;    
    
if (yomi < probeTrustCost || probeTrust >= maxTrust) {btnIncreaseProbeTrustElement.disabled = true;
            } else {btnIncreaseProbeTrustElement.disabled = false;}  
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeSpeedElement.disabled = true;
            } else {btnRaiseProbeSpeedElement.disabled = false;}    
    
if (probeSpeed < 1) {btnLowerProbeSpeedElement.disabled = true;
            } else {btnLowerProbeSpeedElement.disabled = false;}      
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeNavElement.disabled = true;
            } else {btnRaiseProbeNavElement.disabled = false;}  
    
if (probeNav < 1) {btnLowerProbeNavElement.disabled = true;
            } else {btnLowerProbeNavElement.disabled = false;}     

if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeRepElement.disabled = true;
            } else {btnRaiseProbeRepElement.disabled = false;} 
    
if (probeRep < 1) {btnLowerProbeRepElement.disabled = true;
            } else {btnLowerProbeRepElement.disabled = false;}     
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeHazElement.disabled = true;
            } else {btnRaiseProbeHazElement.disabled = false;}
    
if (probeHaz < 1) {btnLowerProbeHaz.disabled = true;
            } else {btnLowerProbeHaz.disabled = false;}     
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeFacElement.disabled = true;
            } else {btnRaiseProbeFacElement.disabled = false;}   
    
if (probeFac < 1) {btnLowerProbeFacElement.disabled = true;
            } else {btnLowerProbeFacElement.disabled = false;}      
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeHarvElement.disabled = true;
            } else {btnRaiseProbeHarvElement.disabled = false;}  
    
if (probeHarv < 1) {btnLowerProbeHarvElement.disabled = true;
            } else {btnLowerProbeHarvElement.disabled = false;}    
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeWireElement.disabled = true;
            } else {btnRaiseProbeWireElement.disabled = false;}   

if (probeWire < 1) {btnLowerProbeWireElement.disabled = true;
            } else {btnLowerProbeWireElement.disabled = false;} 
    
if (probeTrust - probeUsedTrust < 1) {btnRaiseProbeCombatElement.disabled = true;
            } else {btnRaiseProbeCombatElement.disabled = false;}
    
if (probeCombat < 1) {btnLowerProbeCombatElement.disabled = true;
            } else {btnLowerProbeCombatElement.disabled = false;}    

 coverElement.style.display="none";
}



btnRunTournamentElement.disabled = true;
    
window.setInterval(function(){
    
pick = stratPickerElement.value;
    
}, 100);


//--------------------------------------------------------------------------------


function clipClick(number){
    
    if (dismantle>=4){
        finalClips++;
        }   
    
    if(wire >= 1){
    if (number > wire) {
        number = wire;
        }    
        
    clips = clips + number;
    unsoldClips = unsoldClips + number;
    wire = wire - number;
    unusedClips = unusedClips + number;
    
    if(humanFlag==0){
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);    
    }    
    
    if(humanFlag==0 && dismantle < 1){
        transWireElement.innerHTML = spellf(wire);    
        nanoWireElement.innerHTML = spellf(wire);        
    }    
        
    if (milestoneFlag < 15){
        clipsElement.innerHTML = formatWithCommas(Math.ceil(clips), 0);  //m@ todo fixed the thing that you fucked up where you made the tool tip of crunched not be in spelled numbers
        }    
        wireElement.innerHTML = formatWithCommas(wire);
        unsoldClipsElement.innerHTML = formatWithCommas(unsoldClips, 0);
    }
    
    if (dismantle>=4){
    transWireElement.innerHTML = formatWithCommas(wire);
    }
    
}



//STAGE 2
var maxFactoryLevel = 0;
var maxDroneLevel = 0;

var p10h = 0;
var p100h = 0;
var p1000h = 0;
var p10w = 0;
var p100w = 0;
var p1000w = 0;

// SWARM
var giftBits = 0;
var giftBitGenerationRate = 0;

// POWER
var p10f = 0;
var p100f = 0;
var p10b = 0;
var p100b = 0;


function updateStats(){
    
    if (wire === 1){
        inchSpanElement.innerHTML = "inch";
    } else {
        inchSpan.innerHTML = "inches";
    }
    
    
    if (milestoneFlag < 15){
        clipsElement.innerHTML = formatWithCommas(Math.ceil(clips), 0);
        }
    
    if (milestoneFlag === 15 && dismantle ==0){
        clipsElement.innerHTML = "29,999,999,999,999,900,000,000,000,000,000,000,000,000,000,000,000,000,000";
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        }
    
    if (dismantle === 1){
        clipsElement.innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000,000,000,000";
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        }
    
    if (dismantle === 2){
        clipsElement.innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000";
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        }
    
    if (dismantle === 3){
        clipsElement.innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,900";
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        }
    
    if (dismantle >=4){
        
    if (finalClips<10){
        clipsElement.innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,"+"90"+finalClips;
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        } else if (finalClips>9 && finalClips<100) {
        clipsElement.innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,"+"9"+finalClips;
        clipCountCrunchedElement.innerHTML = "29.9 septendecillion"
        } else if (finalClips===100) {
        clipsElement.innerHTML = "30,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000";
        clipCountCrunchedElement.innerHTML = "30.0 septendecillion"
        }
    
    }
    
    clipmakerRateElement.innerHTML = formatWithCommas(Math.round(clipRate));
    if (humanFlag===1){
        clipmakerRate2Element.innerHTML = formatWithCommas(clipRate);
    } else { 
    clipmakerRate2Element.innerHTML = spellf(clipRate);
    }      
    nanoWireElement.innerHTML = spellf(wire);
    fundsElement.innerHTML = formatWithCommas(funds, 2); 
    unsoldClipsElement.innerHTML = formatWithCommas(unsoldClips,0);
    
    demandElement.innerHTML = formatWithCommas(demand*10,0);
    operationsElement.innerHTML = formatWithCommas(operations);
    trustElement.innerHTML = formatWithCommas(trust);
    nextTrustElement.innerHTML = formatWithCommas(Math.floor(nextTrust));
    if(creativityOn){creativityElement.innerHTML = formatWithCommas(creativity)};
    
    factoryLevelDisplaySpaceElement.innerHTML = spellf(factoryLevel);
    harvesterLevelSpaceElement.innerHTML = spellf(harvesterLevel);
    wireDroneLevelSpaceElement.innerHTML = spellf(wireDroneLevel);
    maxOpsElement.innerHTML = formatWithCommas((memory*1000));
                                                                            
    }


var incomeThen;
var incomeNow;
var trueAvgRev;
var revTimer = 0;
var avgSales;
var incomeLastSecond;
var sum;


function calculateRev(){
    
    incomeThen = incomeNow;
    incomeNow = income;
    incomeLastSecond = Math.round((incomeNow - incomeThen)*100)/100;
    
    incomeTracker.push(incomeLastSecond);
    
    if (incomeTracker.length > 10) {
        incomeTracker.splice(0,1);
        }
    
    sum = 0;
    
    for (i=0; i<incomeTracker.length; i++){
        sum = Math.round((sum + incomeTracker[i])*100)/100;
//        console.log("sum = "+sum);
        }
    
    trueAvgRev = sum/incomeTracker.length;
    
    var chanceOfPurchase = demand/100;
    if (chanceOfPurchase > 1) {chanceOfPurchase = 1;}
    if (unsoldClips < 1) {chanceOfPurchase = 0;}
    
    avgSales = chanceOfPurchase * (.7*Math.pow(demand,1.15))*10;
    avgRev = chanceOfPurchase * (.7*Math.pow(demand,1.15))*margin*10;
    
    if (demand>unsoldClips){
        avgRev = trueAvgRev;
        avgSales = avgRev/margin;
        } 
    
    avgSalesElement.innerHTML = formatWithCommas(Math.round(avgSales));
    
    avgRevElement.innerHTML = formatWithCommas(avgRev, 2); 
    
}






var oneToTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    elevenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    multipleOfTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    placeValue = ["", " thousand ", " million ", " billion ", " trillion ", " quadrillion ", " quintillion ", " sextillion ", " septillion ", " octillion ", " nonillion ", " decillion ", " undecillion ", " duodecillion ", " tredecillion ", " quattuordecillion ", " quindecillion ", " sexdecillion ", " septendecillion ", " octodecillion ", " novemdecillion  ", " vigintillion ", " unvigintillion ", " duovigintillion ", " trevigintillion ", " quattuorvigintillion ", " quinvigintillion ", " sexvigintillion ", " septenvigintillion ", " octovigintillion ", " novemvigintillion ", " trigintillion ", " untrigintillion ", " duotrigintillion ", " tretrigintillion ", " quattuortrigintillion ", " quintrigintillion ", " sextrigintillion ", " septentrigintillion ", " octotrigintillion ", " novemtrigintillion ", " quadragintillion ", " unquadragintillion ", " duoquadragintillion ", " trequadragintillion ", " quattuorquadragintillion ", " quinquadragintillion ", " sexquadragintillion ", " septenquadragintillion ", " octoquadragintillion ", " novemquadragintillion ", " quinquagintillion ", " unquinquagintillion ", " duoquinquagintillion ", " trequinquagintillion ", " quattuorquinquagintillion ", " quinquinquagintillion ", " sexquinquagintillion ", " septenquinquagintillion ", " octoquinquagintillion ", " novemquinquagintillion ", " sexagintillion ", " unsexagintillion ", " duosexagintillion ", " tresexagintillion ", " quattuorsexagintillion ", " quinsexagintillion ", " sexsexagintillion ", " septsexagintillion ", " octosexagintillion ", " octosexagintillion ", " septuagintillion ", " unseptuagintillion ", " duoseptuagintillion ", " treseptuagintillion ", " quinseptuagintillion"," sexseptuagintillion"," septseptuagintillion"," octoseptuagintillion"," novemseptuagintillion"," octogintillion"," unoctogintillion"," duooctogintillion"," treoctogintillion"," quattuoroctogintillion"," quinoctogintillion"," sexoctogintillion"," septoctogintillion"," octooctogintillion"," novemoctogintillion"," nonagintillion"," unnonagintillion"," duononagintillion", " trenonagintillion "," quattuornonagintillion "," quinnonagintillion "," sexnonagintillion "," septnonagintillion "," octononagintillion "," novemnonagintillion ", " centillion"];

function spellf(userInput) {
    var numToWorkOn;
    
//        if (userInput === availableMatter)
//        {
//         console.log("_______");
//         console.log(userInput);
//        }
    //create map for all unique names in numbering system


    //To check if spell has been called as a function call :   spell(123)   window.spell(123)
    
    if (userInput < 0)
    {
        console.log("Error, value less than 0");
        return userInput.toString() ;
    }
    
    if (typeof(userInput) == "number" || typeof(userInput) == "string") {
        numToWorkOn = "" + userInput;
    }
    

    //To check if spell has been called using a Number/String Object:   "123".spell()   123..spell() 
    else if (typeof(this) == "object") {
        numToWorkOn = this.toString();
    }

     else {
        throw new Error("Invalid Input");
        return;
    }
    
    if (numToWorkOn.indexOf("e+") !== -1) {
    var splittedExponentNum = numToWorkOn.split("e+"),
        exponent = splittedExponentNum[1],
        str = '';
        if (numToWorkOn.indexOf(".") !== -1){
        numToWorkOn = splittedExponentNum[0].split(".");
        exponent -= numToWorkOn[1].length;
        numToWorkOn = numToWorkOn.join("");
        }
        else
        {
            numToWorkOn = splittedExponentNum[0];
        }
    while (exponent--) {
        str = str + '0';
        }
        numToWorkOn = numToWorkOn + str;
    }
    else if (numToWorkOn.indexOf(".") !== -1)
    {
        var splittedDecimal = numToWorkOn.split(".");
        var leftNum = splittedDecimal[0];
        var rightNum = splittedDecimal[1];
        numToWorkOn = leftNum;
    }

    //Put limit check on the program, placevalue map should be increased to increase capacity
    if (numToWorkOn.length >= 303) {
        throw new Error("Number out of bonds!");
        return;
    } else {
        return convertToString(numToWorkOn);
    }

    //Recursie logic to break number into strings of length 3 each and recursively pronounce each
    function convertToString(stringEquivalent) {
        if (stringEquivalent == 0) {
            return '0'
        }

        var result = '',
            unitLookup = 0,
            strLength = stringEquivalent.length;
        for (var k = strLength; k > 0; k = k - 3) {
            
             if (k -3 <= 0) 
                 {
                var subStr = stringEquivalent.substring(k, k - 3);
                pronounce = pronounceNum(subStr);
                 
            if (pronounce.toUpperCase() != 'zero') {
                var num = Number(subStr + "." + stringEquivalent.substring(subStr.length, subStr.length + 2));
                result = formatWithCommas(num, 1) + placeValue[unitLookup] + ' , '+ result;
            }
                 }
            unitLookup++;
        }
        //to trim of the extra ", " from last
        return result.substring(0,result.length-3)
    }

   //Determines the range of input and calls respective function
    function pronounceNum(val) {
        val = parseInt(val);
        if (parseInt(val / 10) == 0) {
            return numLessThan10(val);
        } else if (parseInt(val / 100) == 0) {
            return numLessThan99(val)
        } else
            return numLessThan1000(val);
    }

    //Pronounces any number less than 1000
    function numLessThan1000(val) {
        val = Number(val);
        var hundredPlace = parseInt(val / 100),
            result;
        if (val % 100 == 0) {
            result = oneToTen[hundredPlace] + " hundred ";
        } else {
            result = oneToTen[hundredPlace] + " hundred " + numLessThan99(val % 100);
        }
        return result;
    }

    //Pronounces any number less than 99
    function numLessThan99(val) {
        val = Number(val);
        var tenthPlace = parseInt(val / 10),
            result;
        if (tenthPlace !== 1) {
            val % 10 ? (result = multipleOfTen[tenthPlace] + " " + numLessThan10(val % 10)) : (result = multipleOfTen[tenthPlace]);
            return result;
        } else {
            result = elevenToNineteen[val % 10];
            return result;
        }
    }

    //Pronounces any number less than 10
    function numLessThan10(val) {
        val = Number(val);
        return oneToTen[val];
    };

}


// PROBES
var probeSpeed = 0;
var probeNav = 0;
var probeXBaseRate = 1750000000000000000;
var probeRep = 0;
var probeRepBaseRate = .00005;
var partialProbeSpawn = 0;
var probeHaz = 0;
var probeHazBaseRate = .01;
var partialProbeHaz = 0;
var probesLostHaz = 0;
var probesLostDrift = 0;
var probesLostCombat = 0;
var probeFac = 0;
var probeFacBaseRate = .000001;
var probeHarv = 0;
var probeHarvBaseRate = .000002;
var probeWire = 0;
var probeWireBaseRate = .000002;
var probeDescendents = 0;
var drifterCount = 0;
var probeTrust = 0;
var probeUsedTrust = 0;
var probeDriftBaseRate = .000001;
var probeLaunchLevel = 0;
var probeCost = Math.pow(10, 17);

var probeTrustCost = Math.floor(Math.pow(probeTrust+1, 1.47)*200);
//var probeCost = Math.pow((probeLaunchLevel+1), 1.44)*Math.pow(10, 24);

// CHECK FOR SAVES
if (localStorage.getItem("saveGame") != null) {
    load();
}
    
if (localStorage.getItem("savePrestige") != null) {
    loadPrestige();
    refresh();
}

// Set Prestige Values
setPrestigeValues();

// MAIN LOOP
window.setInterval(function(){
 
    ticks = ticks + 1;
    milestoneCheck();
    buttonUpdate();
    
    if (compFlag == 1){
        calculateOperations();
    }
    
    if (humanFlag == 1){
        calculateTrust(); 
    }
    
    if (qFlag == 1){
        quantumCompute(); 
    }
    
    updateStats(); 
    manageProjects();
    milestoneCheck();
    
    
// Clip Rate Tracker
    
    clipRateTracker++;
    
    if (clipRateTracker<100){
        var cr = clips - prevClips;
        clipRateTemp = clipRateTemp+cr;
        prevClips = clips;
        
    } else {
        clipRateTracker = 0;
        clipRate = clipRateTemp;
        clipRateTemp = 0;
    }
    

// Stock Report
    
    
    if (investmentEngineFlag==1){
    stockReportCounter++;
    if (stockReportCounter>=10000){
        var r = formatWithCommas(ledger+portTotal);
        displayMessage("Lifetime investment revenue report: $"+r);
        stockReportCounter = 0;
        }
    }
    
// WireBuyer
    
    if (humanFlag == 1 && wireBuyerFlag==1 && wireBuyerStatus==1 && wire<=1){
        buyWire();
    }   
    
    
    
// First, Explore
    
    
if (probeCount >= 1){    
exploreUniverse();     
}
    
// Then, Drones
    
if (humanFlag==0 && spaceFlag == 0){
    updateDroneButtons();  
    }   


if (humanFlag == 0){    
    
updatePower();
updateSwarm();
acquireMatter();   
processMatter();
  
}    
    
    
// Then Factories    
  
var fbst = 1;
    
if (factoryBoost > 1){
    fbst = factoryBoost * factoryLevel;
}      

    
if (dismantle<4){
    clipClick(powMod*fbst*(Math.floor(factoryLevel)*factoryRate));    
}    
// Then Other Probe Functions

if (spaceFlag == 1) {
    
	if (probeCount<0){
		probeCount = 0;
	}    
    
	encounterHazards();
	spawnFactories();
	spawnHarvesters();
	spawnWireDrones();
	spawnProbes();       
	drift();
	war();
    
}
    
// Auto-Clipper
    
if (dismantle<4){
    clipClick(clipperBoost*(clipmakerLevel/100));
    clipClick(megaClipperBoost*(megaClipperLevel*5));
    }    
    
// Demand Curve 
        
    if (humanFlag == 1) {
    
    marketing = (Math.pow(1.1,(marketingLvl-1)));
    demand = (((.8/margin) * marketing * marketingEffectiveness)*demandBoost);
    demand = demand + ((demand/10)*prestigeU);
        
    }       
 

    
// Creativity
    
    if (creativityOn && operations >= (memory*1000)){
    calculateCreativity();    
    }  
    
// Ending
    
    if (dismantle >= 1){
    
    probeDesignDivElement.style.display="none";
    if (endTimer1>=50) { 
        increaseProbeTrustDivElement.style.display="none"; 
        } 
    
    if (endTimer1>=100) { 
        increaseMaxTrustDivElement.style.display="none"; 
        }
    
    if (endTimer1>=150) { 
        spaceDivElement.style.display="none";
        }

    
    if (endTimer1>=175) {      
        battleCanvasDivElement.style.display="none";
        }
        
    if (endTimer1>=190) {     
        honorDivElement.style.display="none";
        }
    
    }   
    
if (dismantle >= 2){
    
    wireProductionDivElement.style.display="none";
    wireTransDivElement.style.display="";
    
    if (endTimer2 >= 50) {
    swarmGiftDivElement.style.display="none"; 
        }
    
    if (endTimer2 >= 100) { 
    swarmEngineElement.style.display="none"; 
        }
    
    if (endTimer2 >= 150) { 
    swarmSliderDivElement.style.display="none";
        }
    
    } 
    
if (dismantle >= 3) { 
    factoryDivSpaceElement.style.display="none";
    clipsPerSecDivElement.style.display="none";
    tothDivElement.style.display="none";     
    
}      
    
if (dismantle >= 4) {
   strategyEngineElement.style.display="none"; 
   tournamentManagementElement.style.display="none"; 
}    
    
if (dismantle >= 5) {
    
    btnQcomputeElement.style.display="none";
    
   for (var i = 0; i<qChips.length; i++){
        qChips[i].value = .5;
        qChipsElements[i].style.opacity=qChips[i].value;
        }
    
    if (endTimer4==10){
        wire = wire+1; 
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=10){
        qChipsElements[9].style.display="none";
    }
    
    if (endTimer4==60){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=60){
        qChipsElements[8].style.display="none";
    }    
  
    if (endTimer4==100){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=100){
        qChipsElements[7].style.display="none";
    }        
 
    if (endTimer4==130){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=130){
        qChipsElements[6].style.display="none";
    }   
    
    if (endTimer4==150){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=150){
        qChipsElements[5].style.display="none";
    }     

    if (endTimer4==160){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=160){
        qChipsElements[4].style.display="none";
    }   

    if (endTimer4==165){
        wire = wire+1;
    }
    
    if (endTimer4>=165){
        qChipsElements[3].style.display="none";
    }  
    
    if (endTimer4==169){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=169){
        qChipsElements[2].style.display="none";
    } 

    if (endTimer4==172){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=172){
        qChipsElements[1].style.display="none";
    }    

    if (endTimer4==174){
        wire = wire+1;
        transWireElement.innerHTML=formatWithCommas(wire);
    }
    
    if (endTimer4>=174){
        qChipsElements[0].style.display="none";
    }    
    
    if (endTimer4>=250){
        qComputingElement.style.display="none";
    }     

}     
    
if (dismantle >= 6) {
    processorDisplayElement.style.display="none"; 
    }    
    
if (dismantle >= 7) {
    compDivElement.style.display="none"; 
    projectsDivElement.style.display="none"; 
    
    }      
    
    if (project148.flag == 1){
        endTimer1++;    
        }
    
    if (project211.flag == 1){
        endTimer2++;
        }
    
    if (project212.flag == 1){
        endTimer3++;
        }
    
    if (project213.flag == 1){
        endTimer4++;
        }
    
    if (project215.flag == 1){
        endTimer5++;
        }
    
    if (project216.flag == 1 && wire == 0){
        endTimer6++;
    }
    
    if (endTimer6>=250) {
        creationDivElement.style.display="none";
    }
    
    if (endTimer6>=500 && milestoneFlag == 15) {
        playThrenody();
        displayMessage("Universal Paperclips");
        milestoneFlag++;
    }
    
    if (endTimer6>=600 && milestoneFlag == 16) {
        displayMessage("a game by Frank Lantz");
        milestoneFlag++;
    }
    
    if (endTimer6>=700 && milestoneFlag == 17) {
        displayMessage("combat programming by Bennett Foddy");
        milestoneFlag++;
    }
    
    if (endTimer6>=800 && milestoneFlag == 18) {
        displayMessage("'Riversong' by Tonto's Expanding Headband used by kind permission of Malcolm Cecil");
        milestoneFlag++;
    }
    
    if (endTimer6>=900 && milestoneFlag == 19) {
        displayMessage("&#169; 2017 Everybody House Games");
        milestoneFlag++;
    }
    
    

    
    
}, 10);

// Slow Loop

var saveTimer = 0;
var secTimer = 0;


window.setInterval(function(){
    
    // Wire Price Fluctuation
    
    adjustWirePrice();
    
    // Sales Calculator
    
    if (humanFlag==1){
    
        if (Math.random() < (demand/100)){
            sellClips(Math.floor(.7 * Math.pow(demand, 1.15)));
            }   
         
    
    // Fire Once a Second
    
    secTimer++;
        if (secTimer >= 10){
            calculateRev();
            secTimer = 0;
        }
        
    }    
 
    
    // Auto-Save
    
    saveTimer++;
    if (saveTimer >= 250) {
        save();
        saveTimer = 0;
    }
    
    
}, 100);
     

// Saving and Loading

function refresh() {
    
    
    //DEBUG
    
//    availableMatter = Math.pow(10, 24)*6000;
//    acquiredMatter = 0;
    
    ////////
    
    
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
    unusedClipsDisplayElement.innerHTML                         = spellf(unusedClips);
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
    yomiDisplayElement.innerHTML            = formatWithCommas(yomi);
    investmentLevelElement.innerHTML = investLevel;    
    prestigeUcounterElement.innerHTML=prestigeU;
    prestigeScounterElement.innerHTML=prestigeS;
	prestigeXcounterElement.innerHTML=prestigeX;
    newTourneyCostElement.innerHTML = formatWithCommas(tourneyCost);
    tourneyInProg = 0;
    maxTrustDisplayElement.innerHTML                 = formatWithCommas(maxTrust);
    victoryDivElement.style.visibility               = "hidden";
    probeTrustCostDisplayElement.innerHTML           = formatWithCommas(probeTrustCost);
    tournamentResultsTableElement.style.display      = "none";
    farmCostElement.innerHTML                        = spellf(farmCost); 
    batteryCostElement.innerHTML                     = spellf(batteryCost); 
    farmLevelElement.innerHTML                       = formatWithCommas(farmLevel); 
    batteryLevelElement.innerHTML                    = formatWithCommas(batteryLevel);    
    
    updateDronePrices();
    harvesterCostDisplayElement.innerHTML = spellf(harvesterCost); 
    wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost);     

    
    updateUpgrades();
    updatePower();
    updatePowPrices(); 
    
    
    
    // HOT FIXES

    if(project46.flag == 1)
    {
        loadThrenody();
    }
    
    project218.uses = 1;
    project219.uses = 1;
    
    
    // DEBUG
    
    if (battles.length>0){
        battles.splice(0,1);
    }
    
    
}

function setPrestigeValues() {
	//prestigeX
	if (prestigeX > 0) {
		autoClipperFlag=1;
		for (var i = 1; i<=prestigeX; i++){
		    clipmakerLevel = clipmakerLevel + 1;
		    clipmakerLevel2Element.innerHTML = clipmakerLevel;
		    clipperCost = (Math.pow(1.1,clipmakerLevel)+5);	
		    clipperCost = (Math.pow(1.1,clipmakerLevel)+5);
		    clipperCostElement.innerHTML = formatWithCommas(clipperCost, 2);
		}
	}
}
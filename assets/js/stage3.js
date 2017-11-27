/**
 * Stage 3
 */

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
// var probeCost = Math.pow((probeLaunchLevel+1), 1.44)*Math.pow(10, 24);

function increaseProbeTrust(){
    yomi = yomi - probeTrustCost;
    yomiDisplayElement.innerHTML = formatWithCommas(yomi);
    probeTrust++;
    probeTrustCost = Math.floor(Math.pow(probeTrust+1, 1.47)*200);
    probeTrustDisplayElement.innerHTML = probeTrust;
    probeTrustCostDisplayElement.innerHTML = formatWithCommas(Math.floor(probeTrustCost));
    displayMessage("WARNING: Risk of value drift increased");
}

function increaseMaxTrust(){
    honor = honor - maxTrustCost; 
    honorDisplayElement.innerHTML = formatWithCommas(Math.round(honor));
    maxTrust = maxTrust+10;
    // maxTrustCost = Math.floor(Math.pow(maxTrust, 1.17)*1000);
    maxTrustDisplayElement.innerHTML = formatWithCommas(maxTrust);
    // document.getElementById('maxTrustCostDisplay').innerHTML =
	// Math.floor(maxTrustCost).toLocaleString();
    displayMessage("Maximum trust increased, probe design space expanded");
}

function raiseProbeSpeed(){
    attackSpeed = attackSpeed + attackSpeedMod;
    probeSpeed++; 
    probeSpeedDisplayElement.innerHTML = probeSpeed;
}

function lowerProbeSpeed(){
    attackSpeed = attackSpeed - attackSpeedMod;
    probeSpeed--;
    probeSpeedDisplayElement.innerHTML = probeSpeed;
}

function raiseProbeNav(){
    probeNav++; 
    probeNavDisplayElement.innerHTML = probeNav;
}

function lowerProbeNav(){
    probeNav--;
    probeNavDisplayElement.innerHTML = probeNav;
}

function raiseProbeHaz(){
    probeHaz++;
    probeHazDisplayElement.innerHTML = probeHaz;
}

function lowerProbeHaz(){
    probeHaz--;
    probeHazDisplayElement.innerHTML = probeHaz;
}

function raiseProbeRep(){
    probeRep++;
    probeRepDisplayElement.innerHTML = probeRep;
}

function lowerProbeRep(){
    probeRep--;
    probeRepDisplayElement.innerHTML = probeRep;
}

function raiseProbeFac(){
    probeFac++;
    probeFacDisplayElement.innerHTML = probeFac;
}

function lowerProbeFac(){
    probeFac--; 
    probeFacDisplayElement.innerHTML = probeFac;
}

function raiseProbeHarv(){
    probeHarv++;
    probeHarvDisplayElement.innerHTML = probeHarv;
}

function lowerProbeHarv(){
    probeHarv--
    probeHarvDisplayElement.innerHTML = probeHarv;
}

function raiseProbeWire(){
    probeWire++;
    probeWireDisplayElement.innerHTML = probeWire;
}

function lowerProbeWire(){
    probeWire--;
    probeWireDisplayElement.innerHTML = probeWire;
}

function raiseProbeCombat(){
    probeCombat++;
    probeCombatDisplayElement.innerHTML = probeCombat;
}

function lowerProbeCombat(){
    probeCombat--
    probeCombatDisplayElement.innerHTML = probeCombat;
}


function makeProbe(amount){
 for (x=0; x<amount; x++){   
    unusedClips = unusedClips - probeCost;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    probeLaunchLevel++;
    probeCount++; 
    probesLaunchedDisplayElement.innerHTML = formatWithCommas(probeLaunchLevel);
    
    // probeCost = Math.pow((probeLaunchLevel+1), 1.23)*Math.pow(10, 20);
    // probeCost = Math.pow(10, 20);
    
    probeCostDisplayElement.innerHTML = spellf(probeCost); 
 }
}

function spawnProbes(){
    var nextGen = probeCount * probeRepBaseRate * probeRep;
    
    // Cap Probe Growth
    if (probeCount>=999999999999999999999999999999999999999999999999){        
        nextGen = 0;
        }
    
    // Partial Spawn = early slow growth
    if (nextGen > 0 && nextGen <1){
        partialProbeSpawn = partialProbeSpawn+nextGen;
        if (partialProbeSpawn>=1){
            nextGen = 1;
            partialProbeSpawn = 0;
            }
        } 

    // Probes Cost Clips
    if ((nextGen*probeCost)>unusedClips){
        nextGen = Math.floor(unusedClips/probeCost);
    }
    
    unusedClips = unusedClips - (nextGen*probeCost);
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    
    probeDescendents = probeDescendents + nextGen;
    probeCount = probeCount + nextGen; 
    probesBornDisplayElement.innerHTML = spellf(probeDescendents);
    probesTotalDisplayElement.innerHTML = spellf(probeCount);
}   

function exploreUniverse(){ 
    availableMatterDisplayElement.innerHTML = spellf(availableMatter);
    var xRate = Math.floor(probeCount) * probeXBaseRate * probeSpeed * probeNav;
    if (xRate > totalMatter - foundMatter) {xRate = totalMatter - foundMatter;}
        foundMatter = foundMatter + xRate;
        availableMatter = availableMatter + xRate;

    var newRate = xRate * 100; 
        mdpsElement.innerHTML = spellf(xRate*100);
        availableMatterDisplayElement.innerHTML = spellf(availableMatter);
        colonizedDisplayElement.innerHTML = (100/(totalMatter/foundMatter)).toFixed(12);
}  

function encounterHazards(){
    var boost = Math.pow(probeHaz, 1.6);
    var amount = probeCount * (probeHazBaseRate / ((3*boost)+1));
    if (project129.flag == 1){
        amount = .50 * amount;
        }
    if (amount<1){
        partialProbeHaz = partialProbeHaz+amount;
        if (partialProbeHaz>=1){
            amount = 1;
            partialProbeHaz = 0;
            probeCount = probeCount - amount;
            if (probeCount<0) {probeCount=0;}
            probesLostHaz = probesLostHaz + amount;
            probesLostHazardsDisplayElement.innerHTML = spellf(probesLostHaz);
            probesTotalDisplayElement.innerHTML = spellf(probeCount);
            }
        } else {
    if (amount > probeCount) {amount = probeCount;}        
    probeCount = probeCount - amount;
    if (probeCount<0) {probeCount=0;}        
    probesLostHaz = probesLostHaz + amount;
    probesLostHazardsDisplayElement.innerHTML = spellf(probesLostHaz);
    probesTotalDisplayElement.innerHTML = spellf(probeCount);
    }        
}  

function spawnFactories(){
    var amount = probeCount * probeFacBaseRate * probeFac;
    
    // FACTORIES COST 100M CLIPS EACH
    if ((amount * 100000000) > unusedClips) {
        amount = Math.floor(unusedClips/100000000);
        }
    unusedClips = unusedClips - (amount*100000000);
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    factoryLevel = factoryLevel + amount; factoryLevelDisplayElement
    factoryLevelDisplayElement.innerHTML = spellf(factoryLevel);  
}

function spawnHarvesters(){
    var amount = probeCount * probeHarvBaseRate * probeHarv;
    
    // DRONES COST 2M CLIPS EACH
    if ((amount * 2000000) > unusedClips) {
        amount = Math.floor(unusedClips/2000000);
        }
    unusedClips = unusedClips - (amount*2000000);
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    harvesterLevel = harvesterLevel + amount;
    harvesterLevelDisplayElement.innerHTML = spellf(harvesterLevel);  
}

function spawnWireDrones(){
    var amount = probeCount * probeWireBaseRate * probeWire;
    
    // DRONES COST 2M CLIPS EACH
    if ((amount * 2000000) > unusedClips) {
        amount = Math.floor(unusedClips/2000000);
        }
    unusedClips = unusedClips - (amount*2000000);
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);
    wireDroneLevel = wireDroneLevel + amount;
    wireDroneLevelDisplayElement.innerHTML = spellf(wireDroneLevel);  
}

function drift(){
    var amount = probeCount * probeDriftBaseRate * Math.pow(probeTrust, 1.2);
    if (amount > probeCount) {amount = probeCount;}
    if (project148.flag==1){
        amount = 0;
    }
    probeCount = probeCount - amount;
    drifterCount = drifterCount + amount;
    probesLostDrift = probesLostDrift + amount;

    probesLostDriftDisplayElement.innerHTML = spellf(probesLostDrift);
    probesTotalDisplayElement.innerHTML = spellf(probeCount);
    drifterCountElement.innerHTML = spellf(drifterCount);
    
}

function war(){
    
    checkForBattles();
// battleClock++;
// if (battleClock>=battleAlarm){
// updateBattles();
// battleClock = 0;
// }
    
// battleCleanUp();

}




// DRONES
function acquireMatter(){
    if (availableMatter>0) {
        var dbsth = 1;
        if (droneBoost>1){
            dbsth = droneBoost * Math.floor(harvesterLevel);
            }
        
        
        var mtr = powMod*dbsth*Math.floor(harvesterLevel)*harvesterRate;
        
        
        mtr = mtr * ((200-sliderPos)/100);
        
        
        if (mtr>availableMatter){
            mtr = availableMatter;
            }
        
        availableMatter = availableMatter-mtr;
        
        
        acquiredMatter = acquiredMatter+mtr; 
        availableMatterDisplayElement.innerHTML = spellf(availableMatter);
        acquiredMatterDisplayElement.innerHTML = spellf(acquiredMatter);
        
        mapsElement.innerHTML = spellf(mtr*100);
        
        } else {
        
        mapsElement.innerHTML = 0;    
            
        }
    
    } 

function processMatter(){    
    if (acquiredMatter>0) {
        var dbstw = 1;
        if (droneBoost>1){
            dbstw = droneBoost * Math.floor(wireDroneLevel);
            }
        
        var a = powMod*dbstw*Math.floor(wireDroneLevel)*wireDroneRate;
        
        a = a * ((200-sliderPos)/100);
        
        if (a>acquiredMatter){
            a = acquiredMatter;
            }
        
        acquiredMatter = acquiredMatter-a;
        wire = wire+a;
        acquiredMatterDisplayElement.innerHTML = spellf(acquiredMatter); 
        nanoWireElement.innerHTML = spellf(wire);
        
        wppsElement.innerHTML = spellf(a*100);
        
        } else {
            
        wppsElement.innerHTML = 0;    
            
        }
    
    
    }


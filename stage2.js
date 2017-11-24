/**
 * 
 */



function makeFactory(){
    unusedClips = unusedClips - factoryCost;
    factoryBill = factoryBill + factoryCost;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    factoryLevel++;
    factoryLevelDisplayElement.innerHTML = factoryLevel;
    var fcmod = 1;
    if (factoryLevel > 0 && factoryLevel < 8){
        fcmod = 11 - factoryLevel;
        } else if (factoryLevel > 7 && factoryLevel < 13){
        fcmod = 2;    
        } else if (factoryLevel > 12 && factoryLevel < 20){
        fcmod = 1.5;    
        } else if (factoryLevel > 19 && factoryLevel < 39){
        fcmod = 1.25;
        } else if (factoryLevel > 38 && factoryLevel < 79){
        fcmod = 1.15;           
        } else if (factoryLevel > 78 && factoryLevel < 99){
        fcmod = 1.10;    
        } else if (factoryLevel > 98 && factoryLevel < 199){
        fcmod = 1.10;    
        } else if (factoryLevel > 198){
        fcmod = 1.10;    
        }
    
    if (factoryLevel > maxFactoryLevel){
        maxFactoryLevel = factoryLevel;
        }
    updateUpgrades();
    
    factoryCost = factoryCost * fcmod;
 //   factoryCost = Math.log(1.25,(factoryLevel+1))*100000000;
    factoryCostDisplayElement.innerHTML = spellf(factoryCost); 
}

function makeHarvester(amount){
    
 for (x=0; x<amount; x++){   
    unusedClips = unusedClips - harvesterCost;
    harvesterBill = harvesterBill + harvesterCost;
    harvesterLevel++; 
    harvesterCost = Math.pow((harvesterLevel+1),2.25)*1000000;  
    }
    
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    harvesterLevelDisplayElement.innerHTML = formatWithCommas(harvesterLevel);
    harvesterCostDisplayElement.innerHTML = spellf(harvesterCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    updateDronePrices();
    updateUpgrades();
    
}

function updateUpgrades(){
    var nfup = 0;
    var ndup = 0;
    
    if (maxFactoryLevel < 10){
        nfup = 10;
    } else if (maxFactoryLevel < 20){
        nfup = 20;
    } else if (maxFactoryLevel < 50){
        nfup = 50;
    } 
    
    if (maxDroneLevel < 500){
        ndup = 500;
    } else if (maxDroneLevel < 5000){
        ndup = 5000;
    } else if (maxDroneLevel < 50000){
        ndup = 50000;
    }
    

    nextFactoryUpgradeElement.innerHTML = formatWithCommas(nfup);
    nextDroneUpgradeElement.innerHTML = formatWithCommas(ndup);
    
}


function makeWireDrone(amount){
    
 for (x=0; x<amount; x++){   
    unusedClips = unusedClips - wireDroneCost;
    wireDroneBill = wireDroneBill + wireDroneCost;
    wireDroneLevel++; 
    wireDroneCost = Math.pow((wireDroneLevel+1),2.25)*1000000;  
    }
    
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    wireDroneLevelDisplayElement.innerHTML = formatWithCommas(wireDroneLevel);
    wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    
    updateDronePrices();
    updateUpgrades();
    
}


function updateDronePrices(){
    
    p10h = 0;
    p100h = 0;
    p1000h = 0;
    p10w = 0;
    p100w = 0;
    p1000w = 0;
    
    var h = harvesterLevel+1;
    for (x=0; x<10; x++){
        p10h = p10h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var h = harvesterLevel+1;
    for (x=0; x<100; x++){
        p100h = p100h + Math.pow(h,2.25)*1000000;    
        h++    
        } 
    
    var h = harvesterLevel+1;
    for (x=0; x<1000; x++){
        p1000h = p1000h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<10; x++){
        p10w = p10w + Math.pow(w,2.25)*1000000;    
        w++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<100; x++){
        p100w = p100w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
    
    var w = wireDroneLevel+1;
    for (x=0; x<1000; x++){
        p1000w = p1000w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
}
 
    function updateDroneButtons(){
    
    if (unusedClips<harvesterCost){btnMakeHarvesterElement.disabled = true;
            } else {
            btnMakeHarvesterElement.disabled = false;    
            }      
    
    if (unusedClips<p10h){btnHarvesterx10Element.disabled = true;
            } else {
            btnHarvesterx10Element.disabled = false;    
            }     

    if (unusedClips<p100h){btnHarvesterx100Element.disabled = true;
            } else {
            btnHarvesterx100Element.disabled = false;    
            } 
    
    if (unusedClips<p1000h){btnHarvesterx1000Element.disabled = true;
            } else {
            btnHarvesterx1000Element.disabled = false;    
            }  
        
    if (unusedClips<wireDroneCost){btnMakeWireDroneElement.disabled = true;
                } else {
                btnMakeWireDroneElement.disabled = false;    
                }   

    if (unusedClips<p10w){btnWireDronex10Element.disabled = true;
                } else {
                btnWireDronex10Element.disabled = false;    
                }     

    if (unusedClips<p100w){btnWireDronex100Element.disabled = true;
                } else {
                btnWireDronex100Element.disabled = false;    
                } 

    if (unusedClips<p1000w){btnWireDronex1000Element.disabled = true;
                } else {
                btnWireDronex1000Element.disabled = false;    
                }  
        
}


function harvesterReboot(){
    harvesterLevel = 0;
    unusedClips = unusedClips + harvesterBill;
    harvesterBill = 0;
    updateDronePrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    harvesterLevelDisplayElement.innerHTML = harvesterLevel;
    harvesterCost = 2000000;
    harvesterCostDisplayElement.innerHTML = spellf(harvesterCost); 
}

function wireDroneReboot(){
    wireDroneLevel = 0;
    unusedClips = unusedClips + wireDroneBill;
    wireDroneBill = 0;
    updateDronePrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    wireDroneLevelDisplayElement.innerHTML = wireDroneLevel;
    wireDroneCost = 2000000;
    wireDroneCostDisplayElement.innerHTML = spellf(wireDroneCost); 
}

function factoryReboot(){
    factoryLevel = 0;
    unusedClips = unusedClips + factoryBill;
    factoryBill = 0;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    factoryLevelDisplayElement.innerHTML = factoryLevel;
    factoryCost = 100000000;
    factoryCostDisplayElement.innerHTML = spellf(factoryCost);
}

function synchSwarm(){
        yomi = yomi - synchCost;
        yomiDisplayElement.innerHTML = formatWithCommas(yomi);
        disorgFlag = 0;
        disorgCounter = 0;
        disorgMsg = 0;
}

function entertainSwarm(){
        creativity = creativity - entertainCost;
        entertainCost = entertainCost + 10000;
        boredomFlag = 0;
        boredomLevel = 0;
        boredomMsg = 0;
}

function updateSwarm(){
    
    
    if (swarmFlag == 1){
        sliderPos = sliderElement.value;
        }
    
    
    if (yomi<synchCost){btnSynchSwarmElement.disabled = true;
            } else {
            btnSynchSwarmElement.disabled = false;    
            } 
    
    if (creativity<entertainCost){btnEntertainSwarmElement.disabled = true;
            } else {
            btnEntertainSwarmElement.disabled = false;    
            } 
    
    if (availableMatter == 0 && (harvesterLevel + wireDroneLevel)>=1) {
        boredomLevel = boredomLevel + 1;
        } else if (availableMatter > 0 && boredomLevel > 0) {
        boredomLevel = boredomLevel - 1;    
        }
    
    if (boredomLevel >= 30000) {
        boredomFlag = 1;
        boredomLevel = 0;
            if (boredomMsg == 0) {
            displayMessage("No matter to harvest. Inactivity has caused the Swarm to become bored");
            boredomMsg = 1;
            }  
        
        }
    
    
    var droneRatio = Math.max(harvesterLevel+1, wireDroneLevel+1)/Math.min(harvesterLevel+1, wireDroneLevel+1);
    
    if (droneRatio < 1.5 && disorgCounter > 1){
        disorgCounter = disorgCounter - .01;
        } else if (droneRatio > 1.5) {
        var x = droneRatio/10000;    
        if (x>.01) {x=.01;}   
        disorgCounter = disorgCounter + x;   
        }
    
    
    if (disorgCounter >= 100) {
        disorgFlag = 1;
        if (disorgMsg == 0) {
            displayMessage("Imbalance between Harvester and Wire Drone levels has disorganized the Swarm");
            disorgMsg = 1;
            }    
    }
    
    var d = Math.floor(harvesterLevel + wireDroneLevel);

    swarmSizeElement.innerHTML = spellf(d);
    swarmGiftsElement.innerHTML = formatWithCommas(swarmGifts, 0);
    
    if (giftCountdown <= 0) {
        nextGift = Math.round((Math.log10(d))*sliderPos/100);
        if (nextGift <= 0){nextGift = 1;}
        swarmGifts = swarmGifts + nextGift;
        swarmGiftsElement.innerHTML = formatWithCommas(swarmGifts, 0);
        if (milestoneFlag<15){
            displayMessage("The swarm has generated a gift of "+nextGift+" additional computational capacity");
            }
        
//        THE OLD WAY        
//        giftCountdown = giftPeriod;
//        elapsedTime = 0;
        
//        THE NEW WAY        
          giftBits = 0;
        
    }
    
    
    if (powMod == 0){
        swarmStatus = 6;
    } else {
        swarmStatus = 0;
    }
    
    if (spaceFlag == 1 && project130.flag == 0){
        swarmStatus = 9;
    }
    
    if (d == 0){
        swarmStatus = 7;
    } else if (d == 1){
        swarmStatus = 8;
    }
    
    if (swarmFlag == 0){
        swarmStatus = 6;
    }
    
    if (boredomFlag == 1){
        swarmStatus = 3;  
    }
    
    if (disorgFlag == 1){
        swarmStatus = 5;
    }
    
    
    if (swarmStatus == 0){
        
 //       THE OLD WAY
 //      elapsedTime = elapsedTime + 1;       
 //      giftCountdown = ((giftPeriod/Math.log(d)) / (sliderPos/100)) - elapsedTime; 
        
        
//      THE NEW WAY        
        giftBitGenerationRate = Math.log(d) * (sliderPos/100);
        giftBits = giftBits + giftBitGenerationRate;
        giftCountdown = (giftPeriod - giftBits) / giftBitGenerationRate;

        swarmStatusElement.innerHTML="Active";
        giftCountdownElement.innerHTML= timeCruncher(giftCountdown);
        giftTimerElement.style.display=""; 
        } else {
        giftTimerElement.style.display="none";    
        }
    
    if (swarmStatus == 1){
        swarmStatusElement.innerHTML="Hungry";
        feedButtonDivElement.style.display="";
        } else {
        feedButtonDivElement.style.display="none";    
        }
    
     if (swarmStatus == 2){
        swarmStatusElement.innerHTML="Confused";
        teachButtonDivElement.style.display="";
        } else {
        teachButtonDivElement.style.display="none";    
        } 
    
     if (swarmStatus == 3){
        swarmEntertainCostElement.innerHTML = formatWithCommas(entertainCost); 
        swarmStatusElement.innerHTML="Bored";
        entertainButtonDivElement.style.display="";
        } else {
        entertainButtonDivElement.style.display="none";    
        } 
    
     if (swarmStatus == 4){
        swarmStatusElement.innerHTML="Cold";
        cladButtonDivElement.style.display="";
        } else {
        cladButtonDivElement.style.display="none";    
        }  
    
     if (swarmStatus == 5){
        swarmStatusElement.innerHTML="Disorganized";
        synchButtonDivElement.style.display="";
        } else {
        synchButtonDivElement.style.display="none";    
        }     
    
       if (swarmStatus == 6){
        swarmStatusElement.innerHTML="Sleeping";
        } 
    
       if (swarmStatus == 7){
        swarmStatusDivElement.style.display="none";
        } else {
        swarmStatusDivElement.style.display="";    
        }    
    
        if (swarmStatus == 8){
        swarmStatusElement.innerHTML="Lonely";
        }   
    
        if (swarmStatus == 9){
        swarmStatusElement.innerHTML="NO RESPONSE...";
        }  
    

    
}

function updatePowPrices(){
    
    p10f = 0;
    p100f = 0;
    p10b = 0;
    p100b = 0;
    
    var f = farmLevel+1;
    for (x=0; x<10; x++){
        p10f = p10f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var f = farmLevel+1;
    for (x=0; x<100; x++){
        p100f = p100f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var b = batteryLevel+1;
    for (x=0; x<10; x++){
        p10b = p10b + Math.pow(b,2.54)*10000000;    
        b++    
        }     
    
    var b = batteryLevel+1;
    for (x=0; x<100; x++){
        p100b = p100b + Math.pow(b,2.54)*10000000;    
        b++    
        } 
    
}

function makeFarm(amount){
    
 for (x=0; x<amount; x++){    
    unusedClips = unusedClips - farmCost;
    farmBill = farmBill + farmCost;
    farmLevel++; 
    farmCost = Math.pow(farmLevel+1,2.78)*100000000;  
    }
     
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips); 
    farmLevelElement.innerHTML = formatWithCommas(farmLevel);
    farmCostElement.innerHTML = spellf(farmCost); 
    
    updatePowPrices();
    
}

function farmReboot(){
    farmLevel = 0;
    unusedClips = unusedClips + farmBill;
    farmBill = 0;
    updatePowPrices();
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    farmLevelElement.innerHTML = formatWithCommas(farmLevel);
    farmCost = 10000000;
    farmCostElement.innerHTML = spellf(farmCost);
}

function makeBattery(amount){
    
 for (x=0; x<amount; x++){    
    unusedClips = unusedClips - batteryCost;
    batteryBill = batteryBill + batteryCost;
    batteryLevel++; 
    batteryCost = Math.pow(batteryLevel+1,2.54)*10000000;  
    }
     
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips); 
    batteryLevelElement.innerHTML = formatWithCommas(batteryLevel);
    batteryCostElement.innerHTML = spellf(batteryCost); 
    
    updatePowPrices();
    
}

function batteryReboot(){
    batteryLevel = 0;
    unusedClips = unusedClips + batteryBill;
    batteryBill = 0;
    updatePowPrices();
    storedPower = 0;
    unusedClipsDisplayElement.innerHTML = spellf(unusedClips);  
    batteryLevelElement.innerHTML = formatWithCommas(batteryLevel);
    batteryCost = 1000000;
    batteryCostElement.innerHTML = spellf(batteryCost);
}

function updatePower(){
    
    if (humanFlag==0 && spaceFlag == 0){
    
    var supply = farmLevel * farmRate/100;
    var dDemand = (harvesterLevel * dronePowerRate/100) + (wireDroneLevel * dronePowerRate/100);
    var fDemand = (factoryLevel * factoryPowerRate/100);
    var demand = dDemand + fDemand;
    var nuSupply = 0;
    var xsDemand = 0;
    var xsSupply = 0;
    var cap = batteryLevel * batterySize;

    if (supply>=demand) {
        xsSupply = supply-demand;
        if (storedPower < cap){
            if (xsSupply > cap - storedPower) {
                xsSupply = cap - storedPower;
            }
            storedPower = storedPower + xsSupply;
        } 
        
        if (powMod<1){powMod = 1;}
        
        if (momentum == 1) {
            powMod = powMod + .0001;
            }
        
        
    } else if (supply<demand) {
        xsDemand = demand-supply;
        if (storedPower > 0) {   
            if (storedPower >= xsDemand){
                
                if (momentum == 1) {
                powMod = powMod + .0001;
                }
                
                storedPower = storedPower - xsDemand;
            } else if (storedPower < xsDemand){
                xsDemand = xsDemand - storedPower;
                storedPower = 0;
                nuSupply = supply - xsDemand;
                powMod = nuSupply / demand;
            } 
        } else if (storedPower <= 0) {
            powMod = supply / demand;
        }
    }
    
        powerProductionRateElement.innerHTML = formatWithCommas(Math.round(supply*100));
        powerConsumptionRateElement.innerHTML = formatWithCommas(Math.round(demand * 100));
        storedPowerElement.innerHTML = formatWithCommas(Math.round(storedPower));
        facPowConRateElement.innerHTML = formatWithCommas(Math.round(fDemand*100));
        dronePowConRateElement.innerHTML = formatWithCommas(Math.round(dDemand*100));
        maxStorageElement.innerHTML = formatWithCommas(Math.round(cap));
        
        
    if (factoryLevel == 0 && harvesterLevel == 0 && wireDroneLevel == 0){
        performanceElement.innerHTML = 0;
        } else {   
        performanceElement.innerHTML = formatWithCommas(Math.round(powMod*100));  
        }    
        
    if (unusedClips<farmCost){btnMakeFarmElement.disabled = true;
            } else {
            btnMakeFarmElement.disabled = false;    
            } 
    
    if (unusedClips<batteryCost){btnMakeBatteryElement.disabled = true;
            } else {
            btnMakeBatteryElement.disabled = false;    
            } 
    
    if (farmLevel<1){btnFarmRebootElement.disabled = true;
            } else {
            btnFarmRebootElement.disabled = false;    
            } 
    
    if (batteryLevel<1){btnBatteryRebootElement.disabled = true;
            } else {
            btnBatteryRebootElement.disabled = false; 
            } 
    
    if (unusedClips<p10f){btnFarmx10Element.disabled = true;
            } else {
            btnFarmx10Element.disabled = false;    
            }        
        
    if (unusedClips<p100f){btnFarmx100Element.disabled = true;
            } else {
            btnFarmx100Element.disabled = false;    
            }
    
    if (unusedClips<p10b){btnBatteryx10Element.disabled = true;
            } else {
            btnBatteryx10Element.disabled = false;
            }          
        
    if (unusedClips<p100b){btnBatteryx100Element.disabled = true;
            } else {
            btnBatteryx100Element.disabled = false;
            }      

    }    
    
}
    
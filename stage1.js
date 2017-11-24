/**
 * 
 */


    
function buyAds(){
    if(funds >= adCost){
        marketingLvl = marketingLvl +1;             
        funds = funds - adCost; 
        adCost = Math.floor(adCost * 2);
        adCostElement.innerHTML = formatWithCommas(adCost, 2);
        fundsElement.innerHTML = formatWithCommas(funds, 2);
        marketingLvlElement.innerHTML = marketingLvl;
    }
}


function makeClipper(){  
    if(funds >= clippperCost){
        clipmakerLevel = clipmakerLevel + 1;
        funds = funds - clipperCost;
        clipmakerLevel2Element.innerHTML = clipmakerLevel;
    }
    
    clipperCost = (Math.pow(1.1,clipmakerLevel)+5);
    clipperCostElement.innerHTML = formatWithCommas(clipperCost, 2);
    
}

function makeMegaClipper(){  
    if(funds >= megaClipperCost){
        megaClipperLevel = megaClipperLevel + 1;
        funds = funds - megaClipperCost;
        megaClipperLevelElement.innerHTML = megaClipperLevel;
        fundsElement.innerHTML = formatWithCommas(funds, 2);
    }
    
    megaClipperCost = (Math.pow(1.07,megaClipperLevel)*1000);
    megaClipperCostElement.innerHTML = formatWithCommas(megaClipperCost,2);
    
}

function sellClips(clipsDemanded){
    if (unsoldClips > 0) {
        if (clipsDemanded > unsoldClips){
        transaction = (Math.floor((unsoldClips * margin)*1000))/1000;   
        funds = funds + transaction;
        income = income + transaction;    
        clipsSold = clipsSold + unsoldClips;    
        unsoldClips = 0;
        } else {
        transaction = (Math.floor((clipsDemanded * margin)*1000))/1000;    
        funds = (Math.floor((funds + transaction)*100))/100;
        income = income + transaction;      
        clipsSold = clipsSold + clipsDemanded;    
        unsoldClips = unsoldClips - clipsDemanded;       
        }
    } 
}

function raisePrice(){
    margin = (Math.round((margin + .01)*100))/100;  
    demandElement.innerHTML = demand.toFixed(2);
    marginElement.innerHTML = margin.toFixed(2);  
}

function lowerPrice(){
    if (margin >= .01){
    margin = (Math.round((margin - .01)*100))/100;
    demandElement.innerHTML = demand.toFixed(2);
    marginElement.innerHTML = margin.toFixed(2);
    }    
}

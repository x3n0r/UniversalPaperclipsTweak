/**
 * 
 */


function timeCruncher(t){
    var x = t/100;
    var h = Math.floor(x / 3600);
    var m = Math.floor(x % 3600 / 60);
    var s = Math.floor(x % 3600 % 60);
    
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    
    return hDisplay + mDisplay + sDisplay;
}

function numberCruncher(number, decimals){
    var suffix = "";
    if (decimals == undefined){decimals = 2;}
    var precision = decimals;
    if (number>999999999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000000000;
        suffix = "sexdecillion";
    } else if (number>999999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000000;
        suffix = "quindecillion";
    } else if (number>999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000;
        suffix = "quattuordecillion";
    } else if (number>999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000;
        suffix = "tredecillion";
    } else if (number>999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000;
        suffix = "duodecillion";
    } else if (number>999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000;
        suffix = "undecillion";
    } else if (number>999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000;
        suffix = "decillion";
    } else if (number>999999999999999999999999999999){
        number = number/1000000000000000000000000000000;
        suffix = "nonillion";
    } else if (number>999999999999999999999999999){
        number = number/1000000000000000000000000000;
        suffix = "octillion";
    } else if (number>999999999999999999999999){
        number = number/1000000000000000000000000;
        suffix = "septillion";
    } else if (number>999999999999999999999){
        number = number/1000000000000000000000;
        suffix = "sextillion";
    } else if (number>999999999999999999){
        number = number/1000000000000000000;
        suffix = "quintillion";
    } else if (number>999999999999999){
        number = number/1000000000000000;
        suffix = "quadrillion";
    } else if (number>999999999999){
        number = number/1000000000000;
        suffix = "trillion";
    } else if (number>999999999){
        number = number/1000000000;
        suffix = "billion";
    } else if (number>999999){
        number = number/1000000;
        suffix = "million";
    } else if (number>999){
        number = number/1000;
        suffix = "thousand";
    }  else if (number<1000){
        precision = 0;
    }
    return number.toFixed(precision) + " " + suffix;
}


function round(roundNum){
    roundSetup();
    roundLoop();
    
    function roundSetup(){
        rCounter = 0;
        pickStrats(roundNum);
        var $ = ("Round "+(roundNum+1));
        tourneyReport($); 
    }
    
    
    function roundLoop(){
    if (rCounter<10){
        runRound();
        setTimeout(function(){clearGrid();}, 50);
        } else {
        currentRound++;
        runTourney();    
        }
    }
    
    
    function clearGrid() {
        
        payoffCellAAElement.style.backgroundColor = "white";
        payoffCellABElement.style.backgroundColor = "white";
        payoffCellBAElement.style.backgroundColor = "white";
        payoffCellBBElement.style.backgroundColor = "white";
        
        
        setTimeout(function(){roundLoop();}, 50);
        
    }
    
    function runRound() { 
        
        rCounter++;
        
        hMovePrev = hMove;
        vMovePrev = vMove;
        hMove = hStrat.pickMove();
        vMove = vStrat.pickMove();
        
        calcPayoff(hMove, vMove);   
    }
    }

formatWithCommas = function(num, decimal) {
    var hasDot = false;
    var base = num.toString();
    if (base.indexOf("e+") !== -1) {
    var splittedExponentNum = base.split("e+"),
        exponent = splittedExponentNum[1],
        str = '';
        if (base.indexOf(".") !== -1){
        base = splittedExponentNum[0].split(".");
        exponent -= base[1].length;
        base = base.join("");
        }
    while (exponent--) {
        str = str + '0';
        }
        base = base + str;
    }
    if (base.indexOf(".") !== -1)
    {
        hasDot = true;
    }
    if (decimal === 0)
    {
        if (base.length <= 3 && !hasDot) return base;
    }
    if (typeof (decimal) === "undefined")
    {   
        decimal = 0;
    }
    var leftNum = hasDot ? base.substr(0, base.indexOf(".")) : base;
    if (decimal === 0) {
        if (num <= 999) return leftNum; 
        else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    } 
    var dec = hasDot ? base.substr(base.indexOf("."), decimal + 1) : ".";
    while (dec.length < decimal+1)
        {
         dec += "0";   
        }
        if (num <= 999) return leftNum + dec;
        else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + dec;   
}
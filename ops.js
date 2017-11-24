/**
 *  ops realeated stuff
 */




function addProc(){
        processors=processors+1;
        creativitySpeed = Math.log10(processors) * Math.pow(processors,1.1) + processors-1;    
        processorsElement.innerHTML = processors;
        if (creativityOn == 1){
          displayMessage("Processor added, operations (or creativity) per sec increased")
        } else {displayMessage("Processor added, operations per sec increased")}
    
        if (humanFlag == 0){
            swarmGifts = swarmGifts - 1;
        }
    
}

function addMem(){
        displayMessage("Memory added, max operations increased");
        memory=memory+1;
        memoryElement.innerHTML = memory;
        if (humanFlag == 0){
            swarmGifts = swarmGifts - 1;
        }
}

function calculateTrust(){
    if (clips>(nextTrust-1)){
        trust = trust +1;
        displayMessage("Production target met: TRUST INCREASED, additional processor/memory capacity granted");
        var fibNext = fib1+fib2;
        nextTrust = fibNext*1000;
        fib1 = fib2;
        fib2 = fibNext;
    }
}

function calculateCreativity(number){
    
    creativityCounter++;
    
    var creativityThreshold = 400;
    
    var s = prestigeS/10;
    var ss = creativitySpeed+(creativitySpeed*s);
    
    var creativityCheck = creativityThreshold/ss;
    
    if (creativityCounter >= creativityCheck){
        
        if (creativityCheck >= 1){
            creativity = creativity+1;
            }
        
        if (creativityCheck < 1){
            

            creativity = (creativity + ss/creativityThreshold);
            
        }
        
        creativityCounter = 0;
    }
    
}

function calculateOperations(){
    
    if (tempOps > 0){
        opFadeTimer++;
        }
    
    if (opFadeTimer > opFadeDelay && tempOps > 0) {
        opFade = opFade + Math.pow(3,3.5)/1000;
        }
        
    if (tempOps > 0) {
        tempOps = Math.round(tempOps - opFade);
        } else {
        tempOps = 0;    
        }
    
    if (tempOps + standardOps < memory*1000){
        standardOps = standardOps + tempOps;
        tempOps = 0;
        }
    
    operations = Math.floor(standardOps + Math.floor(tempOps));
    
    if (operations<memory*1000){
        var opCycle = processors/10;
        var opBuf = (memory*1000)-operations;
        
        if (opCycle > opBuf) {
            opCycle = opBuf;
        }
            
        standardOps = standardOps + opCycle;
        
        }
        
    if (standardOps > memory*1000){
        standardOps = memory*1000;
        }
    
}

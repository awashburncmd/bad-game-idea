let corn = document.getElementById("corn-num")
let clickerLvl = document.getElementById("clicker-lvl")
let clickerCost = document.getElementById("clicker-cost")

let clickerCosty = 10
let cornAmt = 0
let clickerLevel = 0
let clickAmt = 1

function addCorn() {
cornAmt = cornAmt + clickAmt
corn.innerHTML = cornAmt 
}

function buyClicker(){
    if (cornAmt >= clickerCosty){
        cornAmt = cornAmt - clickerCosty
        clickerCosty += clickerCosty * .5
        clickerLevel += 1
        clickerCost.innerHTML = clickerCosty
         corn.innerHTML = cornAmt
        clickerLvl.innerHTML = clickerLevel
        clickAmt += clickerLevel/10
    }

}


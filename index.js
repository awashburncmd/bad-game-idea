

//imported variables

let corn = document.getElementById("corn-num")
let clickerLvl = document.getElementById("clicker-lvl")
let clickerCost = document.getElementById("clicker-cost")
let harvesterCost = document.getElementById("harvester-cost")
let harvesterLvl = document.getElementById("harvester-lvl")


//js variables
let clickerPrice = 10
let harvesterPrice = 30
let harvesterLevel = 0
let cornAmt = 100
let clickerLevel = 0
let clickAmt = 1
let cornTime = 1
let cps = 0

//corn clicker

function addCorn() {
cornAmt = cornAmt + clickAmt

corn.innerHTML =  Math.round(cornAmt)
}


//to buy and use the clicker upgrade
function buyClicker(){
    if (cornAmt >= clickerPrice){
        cornAmt = cornAmt - clickerPrice
        clickerPrice += clickerPrice * .5
        clickerLevel += 1
        clickerCost.innerHTML = clickerPrice
         corn.innerHTML =  Math.round(cornAmt)
        clickerLvl.innerHTML = clickerLevel
        clickAmt += clickerLevel/10
    }

}
//to buy and use harvester upgrade

function buyHarvester() {
    
        if (cornAmt >= harvesterPrice){
           
            cornAmt = cornAmt - harvesterPrice
            harvesterPrice += harvesterPrice * .5
            harvesterLevel += 1
            harvesterCost.innerHTML = harvesterPrice
            corn.innerHTML =  Math.round(cornAmt)
            harvesterLvl.innerHTML = harvesterLevel
            cps +=  1
        }
    
    }
    

    setInterval(() => {
        cornAmt += cps / 10
        corn.innerHTML = Math.round(cornAmt)
},100)
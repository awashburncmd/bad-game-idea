

let gameBtn = document.getElementById("game-btn");
let i = 0;
let moneyNum = document.getElementById("money-num")
function moneyAmount() {
    moneyNum.innerHTML += i++;
    console.log(moneyNum)
}



gameBtn.addEventListener('click', moneyAmount()); {
    trackbutton()
}
console.log("hi")

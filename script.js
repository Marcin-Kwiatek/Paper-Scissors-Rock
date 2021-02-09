let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let rock = document.getElementById("rock")

paper.addEventListener("click", function () { choose("paper") })
scissors.addEventListener("click", function () { choose("scissors") })
rock.addEventListener("click", function () { choose("rock") })

function choose(event){
    let war = document.getElementById("war")
    let resultComputer = computer()
    war.innerHTML = event + " vs " + resultComputer
}
function computer (){
    let arrComputer = new Array()
    arrComputer[0]="paper"
    arrComputer[1]="scissors"
    arrComputer[2]="rock"
    return arrComputer[Math.floor(Math.random() * arrComputer.length)]
}
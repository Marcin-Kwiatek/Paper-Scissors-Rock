let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let rock = document.getElementById("rock")

paper.addEventListener("click", function () { choose("paper") })
scissors.addEventListener("click", function () { choose("scissors") })
rock.addEventListener("click", function () { choose("rock") })

function choose(event) {
    let war = document.getElementById("war")
    let resultComputer = computer()
    document.getElementById("computerChoice").innerHTML = resultComputer
    war.innerHTML = event + " vs " + resultComputer
    console.log(resultComputer)
    let winner = document.getElementById("winner")
    if (event === resultComputer) {
        winner.innerHTML = "Draw"
    }
    if (event === "paper" && resultComputer === "rock" || event === "rock" && resultComputer === "scissors" || event === "scissors" && resultComputer === "paper") {
        winner.innerHTML = "Winner = Player"
    }
    if (event === "paper" && resultComputer === "scissors" || event === "scissors" && resultComputer === "rock" || event === "rock" && resultComputer === "paper") {
        winner.innerHTML = "Winner = Computer"
    }
}
function computer() {
    let arrComputer = new Array()
    arrComputer[0] = "paper"
    arrComputer[1] = "scissors"
    arrComputer[2] = "rock"
    return arrComputer[Math.floor(Math.random() * arrComputer.length)]
}
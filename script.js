let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let rock = document.getElementById("rock")
let lock = true
paper.addEventListener("click", function () { choose("img/paper.png") })
scissors.addEventListener("click", function () { choose("img/scissors.png") })
rock.addEventListener("click", function () { choose("img/rock.png") })

function choose(event) {
    if(lock === false){return}
    setTimeout(function () {
        let resultComputer = computer()
        let imgComputer = document.createElement('img')
        imgComputer.src = resultComputer
        document.getElementById('computerChoice').appendChild(imgComputer)
        setTimeout(function () {
            let war = document.createElement('img')
            war.src = event
            let war2 = document.createElement('img')
            war2.src = resultComputer
            document.getElementById('war').appendChild(war)
            document.getElementById('war').appendChild(war2)
            setTimeout(function () {
                let winner = document.getElementById("winner")
                if (event === resultComputer) {
                    winner.innerHTML = "Draw"
                }
                if (event === "img/paper.png" && resultComputer === "img/rock.png" || event === "img/rock.png" && resultComputer === "img/scissors.png" || event === "img/scissors.png" && resultComputer === "img/paper.png") {
                    winner.innerHTML = "Winner = Player"
                }
                if (event === "img/paper.png" && resultComputer === "img/scissors.png" || event === "img/scissors.png" && resultComputer === "img/rock.png" || event === "img/rock.png" && resultComputer === "img/paper.png") {
                    winner.innerHTML = "Winner = Computer"
                }
            }, 500)
        }, 500)
    }, 500)
    lock = false
}
function computer() {
    let arrComputer = new Array()
    arrComputer[0] = "img/paper.png"
    arrComputer[1] = "img/scissors.png"
    arrComputer[2] = "img/rock.png"
    return arrComputer[Math.floor(Math.random() * arrComputer.length)]
}
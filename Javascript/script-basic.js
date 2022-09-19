const playerOne = document.getElementById('player1');
const cpu = document.getElementById('cpu');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button')
let playerChoice
let cpuChoice
let result

function generateCpuChoice () {
    const cpuHand = Math.floor(Math.random() * 3 + 1)
    if (cpuHand === 1) {
        cpuChoice = "rock";
    }
    if (cpuHand === 2) {
        cpuChoice = "paper";
    }
    if (cpuHand === 3) {
        cpuChoice = "scissors";
    }
    cpu.innerHTML = cpuChoice;
    console.log(cpuHand)
}

function theResult() {
    if (playerChoice === cpuChoice) {
        outCome = "not decided 😐, retry to find out"
    } else
    if (playerChoice === "rock" && cpuChoice === "paper") {
        outCome = "not Player 1 😂"
    } else
    if (playerChoice === "rock" && cpuChoice === "scissors") {
        outCome = "not CPU 😍"
    } else
    if (playerChoice === "scissors" && cpuChoice === "rock") {
        outCome = "not Player 1 😂"
    } else
    if (playerChoice === "scissors" && cpuChoice === "paper") {
        outCome = "not CPU 😍"
    } else
    if (playerChoice === "paper" && cpuChoice === "scissors") {
        outCome = "not Player 1 😂"
    } else
    if (playerChoice === "paper" && cpuChoice === "rock") {
        outCome = "not CPU 😍"
    }
    resultDisplay.innerHTML = outCome
}

possibleChoice.forEach(
    possibleChoice => possibleChoice.addEventListener(
        'click', (e) => {
            playerChoice = e.target.id
            playerOne.innerHTML = playerChoice
            generateCpuChoice()
            theResult()
        }
    ) 
)
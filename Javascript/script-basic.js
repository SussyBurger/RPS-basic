const playerOne = document.getElementById('player1');
const cpu = document.getElementById('cpu');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button')
// ================================
// Tại sao chỗ này lại dùng let mà không phải var???
/* dùng let ít lỗi hơn(!?) */
// ================================
// Trong trường hợp dùng let. Nếu console.log biến playerChoice ở đây thì sẽ có kết quả gì?
// Trong trường hợp dùng var. Nếu console.log biến playerChoice ở đây thì sẽ có kết quả gì?
// Tại sao?
/* Cả let và var đều hiện undefined do chưa có giá trị */
// ================================

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
    (possibleChoice) => {
        console.log(possibleChoice);
        possibleChoice.addEventListener(
            // (e) ở đây có nghĩa là gì?
            /* event */
            'click', (e) => {
/*                 playerChoice = e.target.id */
                playerOne.innerHTML = playerChoice
                // Nếu gọi hàm theResult() trước hàm generateCpuChoice() trước thì sẽ có kết quả gì? Tại sao?
                /* Hàm theResult() sẽ chạy trước nhưng ko có hiển thị j do cpuChoice chưa được đặt */
                generateCpuChoice()
                theResult()
            }
        ) 
    }
)

// Nếu không khai báo biến playerChoice thì làm cách nào để hàm theResult() vẫn có thể chạy đúng kết quả?
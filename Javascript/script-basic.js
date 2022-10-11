const playerOne = document.getElementById('player1');
const cpu = document.getElementById('cpu');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button')
// ================================
// Tại sao chỗ này lại dùng let mà không phải var???
/* var nếu khai báo lại sẽ  */
// ================================
// Trong trường hợp dùng let. Nếu console.log biến playerChoice ở đây thì sẽ có kết quả gì?
// Trong trường hợp dùng var. Nếu console.log biến playerChoice ở đây thì sẽ có kết quả gì?
// Tại sao?
/* Với cả let và var sẽ hiển thị undefined do chưa gán giá trị cho khi khai báo
   với var cũng hiện undefined do giá trị mặc định của var là undefined */
// ================================

let playerChoice;
console.log(playerChoice)
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
}

/* function theResult() {
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
} */

// Nếu không khai báo biến playerChoice thì làm cách nào để hàm theResult() vẫn có thể chạy đúng kết quả?
/* Lấy kết quả ngay khi nhận playerChoice  */
let chooseRock = document.getElementById('rock')
let choosePaper = document.getElementById('paper')
let chooseScissors = document.getElementById('scissors')

function theResult() {
    chooseRock.onclick = () => {
        if (cpuChoice == "paper") {
            outCome = "not u 😂"
        } else
        if (cpuChoice == "scissors") {
            outCome = "u 😍"
        } else 
        if (cpuChoice == "rock") {
            outCome = "not decided 😐, retry to find out"
        }
        resultDisplay.innerHTML = outCome
    }
    choosePaper.onclick = () => {
        if (cpuChoice == "scissors") {
            outCome = "not u 😂"
        } else
        if (cpuChoice == "rock") {
            outCome = "u 😍"
        } else 
        if (cpuChoice == "paper") {
            outCome = "not decided 😐, retry to find out"
        }
        resultDisplay.innerHTML = outCome
    }
    chooseScissors.onclick = () => {
        if (cpuChoice == "rock") {
            outCome = "not u 😂"
        } else
        if (cpuChoice == "paper") {
            outCome = "u 😍"
        } else 
        if (cpuChoice == "scissors") {
            outCome = "not decided 😐, retry to find out"
        }
        resultDisplay.innerHTML = outCome
    }
    
} 

possibleChoice.forEach(
    (possibleChoice) => {
        possibleChoice.addEventListener(
            // (e) ở đây có nghĩa là gì?
            /* event khi xử lý nhấp chuột */
            'click', (e) => {     
            playerChoice = e.target.id
            playerOne.innerHTML = playerChoice
                // Nếu gọi hàm theResult() trước hàm generateCpuChoice() trước thì sẽ có kết quả gì? Tại sao?
                /*  chỉ hiển thị duy nhất playerChoice(), result cần phải có CpuChoice mới cho kết quả  */
                generateCpuChoice()       
                theResult()   
            }
        ) 
    }
)


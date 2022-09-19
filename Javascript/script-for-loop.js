const player = document.createElement('h2');
const cpu = document.createElement('h2');
const result = document.createElement('h2');
const gameplay = document.getElementById('GameDisplays');
const choices = ['rock', 'paper', 'scissors'];
let playerHand
const clickEvent = (e) => {
    playerHand.e.target.id
}

gameplay.append(playerOne, cpu, result);

for (let i = 0; i < choices.length; i++) {
    const hand = document.createElement("button");
    hand.id = choices[i];
    hand.innerHTML = choices[i];
    hand.addEventListener('click', clickEvent)
    gameplay.appendChild(hand);
}

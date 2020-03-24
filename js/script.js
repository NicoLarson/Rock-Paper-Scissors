let robot;
let playerSelection = prompt("Rock Paper Scissors - Choose you weapon");
let choices = ["Rock", "Paper", "Scissors"];
var btn = document.querySelector('button');
btn.addEventListener('click',playRound)

function computerPlay(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
robot = choices[computerPlay(0, 2)];
playerSelection = playerSelection.toUpperCase();
robot = robot.toUpperCase();

/* Condition */
function playRound() {
    if (robot == "ROCK" && playerSelection == "ROCK") {
        return "Drawww.";
    } else if (robot == "ROCK" && playerSelection == "PAPER") {
        return "You Win!";
    } else if (robot == "ROCK" && playerSelection == "SCISSORS") {
        return "You Lose!";
    } else if (robot == "PAPER" && playerSelection == "ROCK") {
        return "You Lose!";
    } else if (robot == "PAPER" && playerSelection == "PAPER") {
        return "Drawww.";
    } else if (robot == "PAPER" && playerSelection == "SCISSORS") {
        return "You Win!";
    } else if (robot == "SCISSORS" && playerSelection == "ROCK") {
        return "You Win!";
    } else if (robot == "SCISSORS" && playerSelection == "PAPER") {
        return "You Lose!";
    } else if (robot == "SCISSORS" && playerSelection == "SCISSORS") {
        return "Drawww.";
    } else {
        return "If you don't want to play, don't play!"
    }
}



console.log("You choose " + playerSelection + ".");
console.log("Computer choose " + robot + ".");
console.log("So..." + playRound());

let output = document.querySelector('#playButton');
output.innerHTML = '';
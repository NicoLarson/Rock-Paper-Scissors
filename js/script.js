alert("Chose your weapon! And play");

let choices = ["ROCK", "PAPER", "SCISSORS"];
let player;
let robot;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    player = "ROCK";
})

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    player = "PAPER";
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    player = "SCISSORS";
})

var playerScore = 0;
var robotScore = 0;

function alertGame() {
    alert("You choose " + player + ".");
    alert("Computer choose " + robot + ".");
}

function playRound() {
    robot = choices[Math.round(Math.random() * 2)];

    if (robot == "ROCK" && player == "ROCK") {
        return "Drawww.";
    } else if (robot == "ROCK" && player == "PAPER") {
        return "You Win!";
    } else if (robot == "ROCK" && player == "SCISSORS") {
        return "You Lose!";
    } else if (robot == "PAPER" && player == "ROCK") {
        return "You Lose!";
    } else if (robot == "PAPER" && player == "PAPER") {
        return "Drawww.";
    } else if (robot == "PAPER" && player == "SCISSORS") {
        return "You Win!";
    } else if (robot == "SCISSORS" && player == "ROCK") {
        return "You Win!";
    } else if (robot == "SCISSORS" && player == "PAPER") {
        return "You Lose!";
    } else if (robot == "SCISSORS" && player == "SCISSORS") {
        return "Drawww.";
    } else {
        return "If you don't want to play, don't play!"
    }
}


let score = function scoreTable() {
    if (playRound() = "You Win!") {
        playerScore = playerScore + 1 ;
        return playerScor;
    } else if (playRound() = "You Lose!") {
        return robotScore++;
    } else {
        return "Draw"
    }
}

const play = document.querySelector('#play');
play.addEventListener('click', () => {
    // for (let i = 0; i < 6; i++) 
    {
        alertGame();
        alert(playRound());
        score;
        console.log("Your score: " + playerScore + ". " + "robotScore: " + robotScore)
        // Essayer  case (playRound() = "You Lose!")
        //  Alors +1 au Robot
    }
})

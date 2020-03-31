document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Loaded")
    
    alert("Chose your weapon! And play");


let player, robot, choices = ["ROCK", "PAPER", "SCISSORS"], playerScore = 0, robotScore = 0;

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


const playerScr = document.querySelector('#playerScore');
const pScore = document.createElement('p');
pScore.classList.add('content');
pScore.textContent = playerScore;
playerScr.appendChild(pScore);

const robotScr = document.querySelector('#robotScore');
const rScore = document.createElement('p');
rScore.classList.add('content');
rScore.textContent = robotScore;
robotScr.appendChild(rScore);



let playRound = () => {
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

const play = document.querySelector('#play');
play.addEventListener('click', () => {
    // for (let i = 0; i < 6; i++) 
    {
        playRound()
        console.log("You choose " + player + " and robot choose " + robot + ".")
        console.log(playRound())
        console.log(playerScore)
        // Essayer  case (playRound() = "You Lose!")
        //  Alors +1 au Robot
    }
})
})
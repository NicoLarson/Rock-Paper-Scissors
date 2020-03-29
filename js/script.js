
        alert("Chose your weapon! And play")


let choices = ["ROCK", "PAPER", "SCISSORS"];
let randomNum = Math.round(Math.random() * 2);
let robot = choices[randomNum];
let player;

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



function playRound() {
    alert("You choose " + player + ".");
    alert("Computer choose " + robot + ".");

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
        alert("So..." + playRound());
    }
})

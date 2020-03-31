document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded")

    let player, robot, choices = [rock, paper, scissors]


    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        return rock;
    })
    const paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
        return paper;
    })
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {
        return scissors;
    })

    let robotChoice = choices[Math.round(Math.random() * 2)];

let playerChoice = () =>|
    


    let playRound = () => {       
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



})
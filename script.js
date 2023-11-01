let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let position = Math.floor(Math.random() * choice.length);
    return choice[position];
}

function singleRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return "You Lose!";
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        return "You Won!";
    } else {
        return "It's Tie!";
    }
}

function game() {
    let countPlayer = 0;
    let countComputer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice? ").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = singleRound(playerSelection, computerSelection);

        if (result === "You Lose!") {
            countComputer += 1;
            console.log("You Lose!");
        } else if (result === "You Won!") {
            countPlayer += 1;
            console.log("You Won!");
        } else {
            console.log("It's Tie!");
        }
    }
    // Display the final score here
    if (countComputer > countPlayer) {
        console.log("You Lost This Battle!");
    } else if (countComputer < countPlayer) {
        console.log("You Won This Battle!");
    } else {
        console.log("It's Tie!")
    }
}

game()
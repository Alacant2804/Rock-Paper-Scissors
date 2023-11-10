let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result");

initialize();

function initialize() {
    resultDiv.innerHTML = `Result: New Game Has Started!`
    scoreDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function computerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let position = Math.floor(Math.random() * choice.length);
    return choice[position];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        playerScore++;
        return "You Won!";
    } else {
        computerScore++;
        return "You Lost!";
    }
}

function updateScore() {
    scoreDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function displayResult(result) {
    resultDiv.innerHTML = `Result: ${result}`;
}

function checkWinner() {
    if (playerScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, you lost. Try again!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    displayResult("The Game Has Started");
}

function handleButtonClick(playerChoice) {
    const computerSelection = computerChoice();
    const roundResult = playRound(playerChoice, computerSelection);
    updateScore();
    displayResult(roundResult);
    checkWinner();
}

rockButton.addEventListener('click', () => handleButtonClick('rock'));
paperButton.addEventListener('click', () => handleButtonClick('paper'));
scissorsButton.addEventListener('click', () => handleButtonClick('scissors'));

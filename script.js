let playerScore = 0;
let computerScore = 0;
let result = " ";
let gameresult = " ";

function getPlayerChoice(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        ((playerChoice === "rock") && (computerChoice === "scissors")) ||
        ((playerChoice === "paper") && (computerChoice === "rock")) ||
        ((playerChoice === "scissors") && (computerChoice === "paper"))
    ) {
        playerScore++;
        result = "You win! " + playerChoice + " beats " + computerChoice;
        updateScoreboard();

        if (playerScore === 5) {
            gameresult = "You win the game!";
            endGame();
        }
    } else {
        computerScore++;
        result = "Computer wins! " + computerChoice + " beats " + playerChoice;
        updateScoreboard();

        if (computerScore === 5) {
            gameresult = "Computer wins the game!";
            endGame();
        }
    }
}

function updateScoreboard() {
    score = "Player = " + playerScore + "<br>Computer = " + computerScore;
    document.getElementById("scoreboard").innerHTML = score;
    document.getElementById("roundresult").innerHTML = result;
    document.getElementById("gameresult").innerHTML = gameresult; // Added this line
}

function endGame() {
    updateScoreboard();
    document.getElementById("rock").removeEventListener("click", getPlayerChoice);
    document.getElementById("paper").removeEventListener("click", getPlayerChoice);
    document.getElementById("scissors").removeEventListener("click", getPlayerChoice);
}

document.getElementById("rock").addEventListener("click", getPlayerChoice);
document.getElementById("paper").addEventListener("click", getPlayerChoice);
document.getElementById("scissors").addEventListener("click", getPlayerChoice);

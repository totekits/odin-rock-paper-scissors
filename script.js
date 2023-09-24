// declare global variables
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// repeat five rounds
for (let round = 1; round <= 5; round++) {

// get player input
const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();    
console.log("You: " + playerChoice);

// get computer output
const computerChoice = options[Math.floor(Math.random() * options.length)];
console.log("Computer: " + computerChoice);

// get result 
let result;
if (playerChoice === computerChoice) {
    result = " It's a tie!";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||  
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
    result = " You win!";
    playerScore++;
} else {
    result = " Computer wins!";
    computerScore++;
} console.log("Round-" + round + result)
}

// display result in console
let finalResult;
if (playerScore === computerScore) {
finalResult = "IT'S A TIE!";
} else if (playerScore > computerScore) {
    finalResult = "YOU WIN!"; 
} else {
    finalResult = "COMPUTER WINS!"
}
console.log(finalResult)
console.log("You: " + playerScore);
console.log("Computer: " + computerScore);


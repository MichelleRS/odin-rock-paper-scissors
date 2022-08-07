// get random computer choice and display
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choiceStr = "";

    if (randomNumber === 0) {
        choiceStr = "rock";
    } else if (randomNumber === 1) {
        choiceStr = "paper";
    } else {
        choiceStr = "scissors";
    }
    console.log("Computer choice: " + choiceStr);
    return randomNumber;
}

// compare player and computer choice, declare a winner, and award 1 pt to winner
function getRoundResult(playerChoice, computerChoice) {
    result = "";

    if ((playerChoice === "rock" && computerChoice === 0) ||
        (playerChoice === "paper" && computerChoice === 1) ||
        (playerChoice ==="scissors" && computerChoice === 2)) {
        result = "It's a tie.";
    } else if ((playerChoice === "rock" && computerChoice === 2) ||
        (playerChoice === "paper" && computerChoice === 0) ||
        (playerChoice === "scissors" && computerChoice === 1)) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins.";
        computerScore++;
    }
    return result;
}

function playRound() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    playerChoice = playerChoice.toLowerCase();
    console.log("Player choice: " + playerChoice);
    let computerChoice = getComputerChoice();
    let roundResultResult = getRoundResult(playerChoice, computerChoice);
    console.log(roundResultResult);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

// start of app

// start players at 0
let playerScore = 0
let computerScore = 0

// loop to play 5 rounds of the game
for (let i = 0; i < 5; i++) {
    playRound(i);
}
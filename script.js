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

/* play a round that includes:
(1) prompt player to make a choice;
(2) get random computer choice;
(3) compare choices
(4) log round result and scores
*/
function playRound() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    playerChoice = playerChoice.toLowerCase();
    console.log("Player choice: " + playerChoice);
    let computerChoice = getComputerChoice();
    let roundResult = getRoundResult(playerChoice, computerChoice);
    console.log(roundResult);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

// compare final scores and log a winner
function finalResult(playerScore, computerScore) {
    result = "";

    if (playerScore > computerScore) {
        result = "Player wins the 5 rounds!";
    } else if (computerScore > playerScore) {
        result = "Computer wins the 5 rounds.";
    } else {
        result = "The 5 rounds resulted in a tie!";
    }
    return result;
}

// start of app

// start players at 0
let playerScore = 0
let computerScore = 0

// loop to play 5 rounds of the game
for (let i = 0; i < 5; i++) {
    playRound();
}

// log final game result
console.log(finalResult(playerScore, computerScore));

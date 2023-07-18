function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase()
    if (player == computer) {
        return 'Its a tie';
    }
    else if (
        (player === "ROCK" && computer ==="SCISSORS") ||
        (player === "PAPER" && computer ==="ROCK") ||
        (player === "SCISSORS" && computer ==="PAPER")
    ) {
        return 'You lose';
    }
    else {
        return 'You win';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?")
        let computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection) == "You win") {
            console.log("You win! " + playerSelection.toUpperCase() +
            " beats " + computerSelection.toUpperCase());
            playerScore++;
        }
        else if (playRound(playerSelection, computerSelection) == "You lose") {
            console.log("You lost! " + computerSelection.toUpperCase() +
            " beats " + playerSelection.toUpperCase());
            computerScore++;
        }
        else {
            console.log(playRound(playerSelection, computerSelection))
            computerScore++;
            playerScore++;
        }
        console.log("The score is: player: " + playerScore + " computer: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game!")
    }
    else {
        console.log("The game tied!")
    }
}

game()
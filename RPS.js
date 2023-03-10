// Function to generate a random computer move

function computerPlay() {
  const moves = ["rock", "paper", "scissors"]; //the moves of the game
  return moves[Math.floor(Math.random() * moves.length)]; //random generated moves for the computer
}
// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  const validInputs = ["rock", "paper", "scissors"];
  playerSelection = playerSelection.toLowerCase(); //to make the inputs lowercase
  computerSelection = computerSelection.toLowerCase();
  if (
    !validInputs.includes(playerSelection) || //to forbid adding other moves or random text
    !validInputs.includes(computerSelection)
  ) {
    return "Invalid input(s)!";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") || //with this if statement we choose which combination is a win or a lose,
    (playerSelection === "paper" && computerSelection === "rock") || //in other words the function is deciding which move is stronger between the two.
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
// Function to start the game
function startGame() {
  let choice = prompt(
    "Would you like to play against the computer (1) or against another player (2) or multiplayer (3)?"
  );
  //we choose how we want to play the game vs player or computer by typing 1 or 2
  if (choice === "1") {
    playAgainstComputer();
  } else if (choice === "2") {
    playAgainstPlayer();
  } else if (choice === "3") {
    multiPlayer();
  } else {
    console.log("Invalid choice. Please choose 1 or 2 or 3");
  }
} /*
function multiPlayer() {
  let numOfPlayers = parseInt(prompt("How many players?"));
  let playerSelections = [];
  let colors = ["red", "green", "blue", "orange", "purple", "pink"];

  for (let i = 1; i <= numOfPlayers; i++) {
    let selection = prompt(
      "Player " +
        i +
        ", please enter your selection (rock, paper, or scissors):"
    );
    playerSelections.push(selection);
  }

  let computerSelection = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];

  for (let i = 0; i < playerSelections.length; i++) {
    let result = playRound(playerSelections[i], computerSelection);
    console.log("%cPlayer " + (i + 1) + ": " + result, "color:" + colors[i]);
  }
}*/
function multiPlayer() {
  let numOfPlayers = parseInt(prompt("How many players?"));
  let playerSelections = [];
  let colors = ["red", "green", "blue", "orange", "purple", "pink"];

  for (let i = 1; i <= numOfPlayers; i++) {
    let selection = prompt(
      "Player " +
        i +
        ", please enter your selection (rock, paper, or scissors):"
    );
    playerSelections.push(selection);
  }

  for (let i = 0; i < playerSelections.length; i++) {
    for (let j = i + 1; j < playerSelections.length; j++) {
      let result = playRound(playerSelections[i], playerSelections[j]);
      console.log(
        "%cPlayer " + (i + 1) + " vs Player " + (j + 1) + ": " + result,
        "color:" + colors[i]
      );
    }
  }
}
// Function to play against the computer
function playAgainstComputer() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    //5 rounds of the game
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is tied!");
  }
}

// Function to play against another player
function playAgainstPlayer() {
  let player1Score = 0;
  let player2Score = 0;

  for (let i = 0; i < 5; i++) {
    let player1Selection = prompt("Player 1: Rock, paper, or scissors?");
    let player2Selection = prompt("Player 2: Rock, paper, or scissors?");
    let result = playRound(player1Selection, player2Selection);
    console.log(result);

    if (result.includes("Player 1 wins")) {
      player1Score++;
    } else if (result.includes("Player 2 wins")) {
      player2Score++;
    }
  }

  if (player1Score > player2Score) {
    console.log("Player 1 wins the game!");
  } else if (player1Score < player2Score) {
    console.log("Player 2 wins the game!");
  } else {
    console.log("The game is tied!");
  }
}

// Start the game
startGame();

/*

function playRound(playerSelection, computerSelection) {
  const validInputs = ["rock", "paper", "scissors"];
  
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (!validInputs.includes(playerSelection) || !validInputs.includes(computerSelection)) {
    return "Invalid input(s)!";
  }
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  let numOfPlayers = parseInt(prompt("How many players?"));
  let playerSelections = [];
  
  for (let i = 1; i <= numOfPlayers; i++) {
    let selection = prompt("Player " + i + ", please enter your selection (rock, paper, or scissors):");
    playerSelections.push(selection);
  }
  
  let computerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  
  for (let i = 0; i < playerSelections.length; i++) {
    let result = playRound(playerSelections[i], computerSelection);
    console.log("Player " + (i+1) + ": " + result);
  }
}

game();

*/
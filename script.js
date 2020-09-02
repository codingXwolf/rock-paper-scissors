// player and computer scores
let playerScore = document.getElementById("scoreP");
playerScore.innerHTML = 0;

let computerScore = document.getElementById("scoreC");
computerScore.innerHTML = 0;

console.log(playerScore, computerScore)

//Game Message
let scoreBoardMessage = document.getElementById("gameMessage");

//Computer Selected
let computerSelected = document.getElementById("computerSelected");

// rounds
let round = document.getElementById("roundScore");
round.innerHTML = 0;

//Restart Button
let restartButton = document.getElementById("restartGameButton");
restartButton.disabled = true;
restartButton.style.display = "none";

// Switch RPS buttons off function
const RPSButtonsOff = () => {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
};

// Switch RPS buttons on function
const RPSButtonsOn = () => {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
};

//Restart Game
const restartGame = () => {
    debugger;
  round.innerHTML = 0;
  //Not sure why its not changing score to 0 using playerScore/computerScore.innerHTML = 0;
  document.getElementById("scoreP").innerHTML = 0;
  playerScore = 0;
  document.getElementById("scoreC").innerHTML = 0;
  computerScore = 0;
  console.log(playerScore, computerScore)
  scoreBoardMessage.innerHTML = "...";
  computerSelected.innerHTML = " ";
  RPSButtonsOn();
  restartButton.style.display = 'none'
};

//Get winner
const checkWinner = () => {
    
    if (+round.innerHTML === 5) {
        playerScore = +playerScore.innerHTML;
        computerScore = +computerScore.innerHTML;
      
    restartButton.style.display = "";
    console.log(`checkWinner - Player${playerScore} Computer: ${computerScore}`);
    if (playerScore > computerScore) {
       
      scoreBoardMessage.innerHTML = `You Win! Final scores - Player: ${playerScore} Computer: ${computerScore}`;
      restartButton.disabled = false;
      RPSButtonsOff();
    } else if (playerScore < computerScore) {
      scoreBoardMessage.innerHTML = `Computer Wins! Final scores - Computer:
              ${computerScore} Player: ${playerScore}`;
      restartButton.disabled = false;
      RPSButtonsOff();
    } else if (playerScore === computerScore) {
        
      scoreBoardMessage.innerHTML = `Game is a tie! Final scores - Player:
              ${playerScore} Computer: ${computerScore}`;
      restartButton.disabled = false;
      RPSButtonsOff();
    }
  }
};

const playRound = (playerSelection) => {
  round.innerHTML++;

  scoreBoardMessage.innerHTML = "...";

  //computer will choose RPS at random
  let RPS = ["rock", "paper", "scissors"];
  const computerPlay = () => {
    return RPS[Math.floor(Math.random() * RPS.length)];
  };
  const computerSelection = computerPlay();

  //Displays the right computer selection
  computerSelected.innerHTML = computerSelection;

  // player vs computer win loose logic
  // add scores and rounds
  if (playerSelection === computerSelection) {
    playerScore.innerHTML++;
    computerScore.innerHTML++;

    scoreBoardMessage.innerHTML = "Draw!";
    //computer wins rock vs paper
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    scoreBoardMessage.innerHTML = `computer wins! ${computerSelection} beats ${playerSelection}.`;
    computerScore.innerHTML++

    //player wins
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    playerScore.innerHTML++

    //computer wins paper vs scissors
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`;

    computerScore.innerHTML++

    //player wins
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    playerScore.innerHTML++

    //computer wins rock vs scissors
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`;

    computerScore.innerHTML++

    // player wins
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    playerScore.innerHTML++
  } else {
    scoreBoardMessage.innerHTML = "Please select rock, paper, or scissors";
  }
console.log("Player:", playerScore);
console.log("Computer:", computerScore);
    checkWinner();
};

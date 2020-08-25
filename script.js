// player and computer scores
let playerScore = document.getElementById("scoreP").innerHTML = 0;
let computerScore = document.getElementById("scoreC").innerHTML = 0;

//Game Message
let scoreBoardMessage = document.getElementById("gameMessage");

//Computer Selected
let computerSelected = document.getElementById("computerSelected");

// rounds
let round = document.getElementById("roundScore");
round.innerHTML = 0;

//RPS Buttons
let RPSButton = (document.getElementsByClassName("rps-class").disabled = false);

//Restart Button
let restartButton = document.getElementById("restartGameButton");
restartButton.disabled = true;
restartButton.style.display = "none";

//Restart Game
const restartGame = () => {
  document.getElementById("scoreP").innerHTML = 0;
  document.getElementById("scoreC").innerHTML = 0;
  scoreBoardMessage.innerHTML = "...";
  computerSelected.innerHTML = "";
  round.innerHTML = 0;
};

// Get winner
// const checkWinner = () => {
//     debugger;
//   if (+round.innerHTML === 5) {
//     if (playerScore > computerScore) {
//       scoreBoardMessage.innerHTML = `You Win! Final scores - Player: ${playerScore} Computer: ${computerScore}`;
//       restartButton.disabled = false;
//       document.getElementById("rock").disabled = true;
//       document.getElementById("paper").disabled = true;
//       document.getElementById("scissors").disabled = true;
//     } else if (playerScore < computerScore) {
//       scoreBoardMessage.innerHTML = `Computer Wins! Final scores - Computer:
//               ${computerScore} Player: ${playerScore}`;
//       restartButton.disabled = false;
//       document.getElementById("rock").disabled = true;
//       document.getElementById("paper").disabled = true;
//       document.getElementById("scissors").disabled = true;
//     } else if (playerScore === computerScore) {
//       scoreBoardMessage.innerHTML = `Game is a tie! Final scores - Player:
//               ${playerScore} Computer: ${computerScore}`;
//       restartButton.disabled = false;
//       document.getElementById("rock").disabled = true;
//       document.getElementById("paper").disabled = true;
//       document.getElementById("scissors").disabled = true;
//     } else {
//       ("");
//     }
//   }
// };

const playRound = (playerSelection) => {
  // your code here!
  round.innerHTML++;
  //checkWinner();
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
    document.getElementById("scoreP").innerHTML++;
    document.getElementById("scoreC").innerHTML++;

    scoreBoardMessage.innerHTML = "Draw!";
    //computer wins rock vs paper
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    scoreBoardMessage.innerHTML = `computer wins! ${computerSelection} beats ${playerSelection}.`;
    document.getElementById("scoreC").innerHTML++;

    //player wins
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    document.getElementById("scoreP").innerHTML++;

    //computer wins paper vs scissors
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`;

    document.getElementById("scoreC").innerHTML++;

    //player wins
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    document.getElementById("scoreP").innerHTML++;

    //computer wins rock vs scissors
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`;

    document.getElementById("scoreC").innerHTML++;

    // player wins
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    document.getElementById("scoreP").innerHTML++;
  } else {
    scoreBoardMessage.innerHTML = "Please select rock, paper, or scissors";
  }

    if (+round.innerHTML === 5) {
    restartButton.style.display = "";
      if (playerScore > computerScore) {
        scoreBoardMessage.innerHTML = `You Win! Final scores - Player: ${playerScore} Computer: ${computerScore}`;
        restartButton.disabled = false;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
      } else if (playerScore < computerScore) {
        scoreBoardMessage.innerHTML = `Computer Wins! Final scores - Computer:
              ${computerScore} Player: ${playerScore}`;
        restartButton.disabled = false;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
      } else if (playerScore === computerScore) {
        scoreBoardMessage.innerHTML = `Game is a tie! Final scores - Player:
              ${playerScore} Computer: ${computerScore}`;
        restartButton.disabled = false;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
      } else {
        ("");
      }
    }
};

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;


    const playRound = () => {
        // your code here!
        round++;
      console.log(`Current Round: ${round}`);

      //computer will choose RPS at random
      let RPS = ["rock", "paper", "scissors"];
      const computerPlay = () => {
        return RPS[Math.floor(Math.random() * RPS.length)];
      };
      const computerSelection = computerPlay();

      // Player choice. Prompt will pop up with a message.
      const playerSelection = prompt("Rock, Paper, or Scissors?");

      // player vs computer win loose logic
      // add scores and rounds
      if (playerSelection === computerSelection) {
        console.log("Draw");
        playerScore++;
        computerScore++;
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        //return "Draw";

        //computer wins rock vs paper
      } else if (
        computerSelection === "paper" &&
        playerSelection === "rock"
      ) {
        computerScore++;
        console.log(
          `computer wins! ${computerSelection} beats ${playerSelection}`
        );
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        //return `computer wins! ${computerSelection} beats ${playerSelection}`;

        //player wins
      } else if (
        playerSelection === "paper" &&
        computerSelection === "rock"
      ) {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        return `You win! ${playerSelection} beats ${computerSelection}`;

        //computer wins paper vs scissors
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "paper"
      ) {
        computerScore++;
        console.log(
          `computer wins! ${computerSelection} beats ${playerSelection}`
        );
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        //return `computer wins! ${computerSelection} beats ${playerSelection}`;

        //player wins
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        playerScore++;
        console.log(
          `You wins! ${playerSelection} beats ${computerSelection}`
        );
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

       // return `You win! ${playerSelection} beats ${computerSelection}`;

        //computer wins rock vs scissors
      } else if (
        computerSelection === "rock" &&
        playerSelection === "scissors"
      ) {
        computerScore++;
        console.log(
          `computer wins! ${computerSelection} beats ${playerSelection}`
        );
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

       // return `computer wins! ${computerSelection} beats ${playerSelection}`;

        // player wins
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        playerScore++;
        console.log(
          `You win! ${playerSelection} beats ${computerSelection}`
        );
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        //eturn `You win! ${playerSelection} beats ${computerSelection}`;

      } else {
        console.log("Please select rock, paper, or scissors");
        return "Please select rock, paper, or scissors";
      }

      // Get winner
      if (round == 5) {
        if (playerScore > computerScore) {
        console.log(`You Win! Final scores = Player: ${playerScore} Computer: ${computerScore}`);

        } else if (playerScore < computerScore) {
        console.log(`Computer Wins! Final scores=Computer:
              ${computerScore} Player: ${playerScore}`);
        } else {
        console.log(`Game is a tie! Final scores=Player:
              ${playerScore} Computer: ${computerScore}`);
        }
      }

    };
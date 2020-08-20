    // player and computer scores
    let playerScore = document.getElementsByClassName('scoreP')[0].innerHTML = 0;
    let computerScore = document.getElementsByClassName('scoreC')[0].innerHTML = 0;

    //Game Message
    let scoreBoardMessage = document.getElementById('gameMessage');

    //Computer Selected
    let computerSelected = document.getElementById('computerSelected');

    // rounds 
    let round = document.getElementById('roundScore');
    round.innerHTML = +1

    //RPS Buttons
    let RPSButton = document.getElementsByClassName("rps-class").disabled = false;

    //Restart Button
    document.getElementById("restartGameButton").disabled = true;

    //Restart Game
    const restartGame = () => {
        document.getElementsByClassName('scoreP')[0].innerHTML = 0;
        document.getElementsByClassName('scoreC')[0].innerHTML = 0;
        scoreBoardMessage.innerHTML = '...'
        computerSelected.innerHTML = ''
        round.innerHTML = +1;
    }

    const playRound = (playerSelection) => {
        // your code here!

        round.innerHTML++

        //computer will choose RPS at random
        let RPS = ["rock", "paper", "scissors"];
        const computerPlay = () => {
            computerSelected.innerHTML = RPS[Math.floor(Math.random() * RPS.length)];

            return RPS[Math.floor(Math.random() * RPS.length)];
        };
        const computerSelection = computerPlay();

        // player vs computer win loose logic
        // add scores and rounds
        if (playerSelection === computerSelection) {
            scoreBoardMessage.innerHTML = "Draw!";

            document.getElementsByClassName('scoreP')[0].innerHTML++
            document.getElementsByClassName('scoreC')[0].innerHTML++

            //computer wins rock vs paper
        } else if (
            computerSelection === "paper" &&
            playerSelection === "rock"
        ) {
            scoreBoardMessage.innerHTML = `computer wins! ${computerSelection} beats ${playerSelection}.`
            document.getElementsByClassName('scoreC')[0].innerHTML++


            //player wins
        } else if (
            playerSelection === "paper" &&
            computerSelection === "rock"
        ) {
            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

            document.getElementsByClassName('scoreP')[0].innerHTML++

            //computer wins paper vs scissors
        } else if (
            computerSelection === "scissors" &&
            playerSelection === "paper"
        ) {
            scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`

            document.getElementsByClassName('scoreC')[0].innerHTML++

            //player wins
        } else if (
            playerSelection === "scissors" &&
            computerSelection === "paper"
        ) {
            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

            document.getElementsByClassName('scoreP')[0].innerHTML++

            //computer wins rock vs scissors
        } else if (
            computerSelection === "rock" &&
            playerSelection === "scissors"
        ) {
            scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`

            document.getElementsByClassName('scoreC')[0].innerHTML++

            // player wins
        } else if (
            playerSelection === "rock" &&
            computerSelection === "scissors"
        ) {
            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

            document.getElementsByClassName('scoreP')[0].innerHTML++

        } else {
            scoreBoardMessage.innerHTML = "Please select rock, paper, or scissors";
        }

        // Get winner
        if (round.innerHTML == 5) {

            if (playerScore > computerScore) {
                scoreBoardMessage.innerHTML = `You Win! Final scores - Player: ${playerScore} Computer: ${computerScore}`;
                document.getElementById("restartGameButton").disabled = false;
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;

            } else if (playerScore < computerScore) {
                scoreBoardMessage.innerHTML = `Computer Wins! Final scores - Computer:
              ${computerScore} Player: ${playerScore}`;
                document.getElementById("restartGameButton").disabled = false;
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;

            } else if (playerScore === computerScore) {
                scoreBoardMessage.innerHTML = `Game is a tie! Final scores - Player:
              ${playerScore} Computer: ${computerScore}`;
                document.getElementById("restartGameButton").disabled = false;
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;

            } else {
                ''
            }

        }

    };
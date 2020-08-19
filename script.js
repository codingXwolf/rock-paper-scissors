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

    // Player choice. Prompt will pop up with a message.
    const getPlayerSelection = (playerInput) => {
        playRound(playerInput);
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
            document.getElementsByClassName('scoreC')[0].innerHTML++

            scoreBoardMessage.innerHTML = `computer wins! ${computerSelection} beats ${playerSelection}.`

            //player wins
        } else if (
            playerSelection === "paper" &&
            computerSelection === "rock"
        ) {
            document.getElementsByClassName('scoreP')[0].innerHTML++

            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

            //computer wins paper vs scissors
        } else if (
            computerSelection === "scissors" &&
            playerSelection === "paper"
        ) {
            document.getElementsByClassName('scoreC')[0].innerHTML++

            scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`

            //player wins
        } else if (
            playerSelection === "scissors" &&
            computerSelection === "paper"
        ) {
            document.getElementsByClassName('scoreP')[0].innerHTML++

            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

            //computer wins rock vs scissors
        } else if (
            computerSelection === "rock" &&
            playerSelection === "scissors"
        ) {
            document.getElementsByClassName('scoreC')[0].innerHTML++

            scoreBoardMessage.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`

            // player wins
        } else if (
            playerSelection === "rock" &&
            computerSelection === "scissors"
        ) {
            document.getElementsByClassName('scoreP')[0].innerHTML++

            scoreBoardMessage.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            scoreBoardMessage.innerHTML = "Please select rock, paper, or scissors";
        }

        // Get winner
        if (round.innerHTML == 5) {
            if (playerScore > computerScore) {
                scoreBoardMessage.innerHTML = `You Win! Final scores - Player: ${playerScore} Computer: ${computerScore}`;

            } else if (playerScore < computerScore) {
                scoreBoardMessage.innerHTML = `Computer Wins! Final scores - Computer:
              ${computerScore} Player: ${playerScore}`;

            } else if (playerScore === computerScore) {
                scoreBoardMessage.innerHTML = `Game is a tie! Final scores - Player:
              ${playerScore} Computer: ${computerScore}`;

            } else {
                ''
            }
        }

    };
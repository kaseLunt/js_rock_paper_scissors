function getComputerChoice() {
  rand = Math.random() * 10;
  return rand <= 3.33 ? 'rock' : rand <= 6.66 ? 'paper' : 'scissors';
}

function playRound(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore
) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `It's a draw! ${playerSelection} = ${computerSelection}`;
  }

  switch (playerSelection) {
    case 'rock':
      return computerSelection === 'scissors'
        ? () => {
            playerScore++;
            return 'You won! Rock beats Scissors';
          }
        : () => {
            computerScore++;
            return 'You lost! Paper beats Rock';
          };
    case 'scissors':
      return computerSelection === 'rock'
        ? () => {
            computerScore++;
            return 'You lost! Rock beats Scissors';
          }
        : () => {
            playerScore++;
            return 'You won! Scissors beat Paper';
          };
    case 'paper':
      return computerSelection === 'rock'
        ? () => {
            playerScore++;
            return 'You win! Paper beats Rock';
          }
        : () => {
            computerScore++;
            return 'You lose! Scissors beats paper';
          };
  }
}

function game(numRounds) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < numRounds; i++) {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt().toLowerCase();
    while (
      playerSelection !== 'rock' &&
      playerSelection !== 'paper' &&
      playerSelection !== 'scissors'
    ) {
      playerSelection = prompt().toLowerCase();
    }
    console.log(
      playRound(playerSelection, computerSelection, playerScore, computerScore)
    );
  }
  playerScore > computerScore
    ? console.log(
        `Humanity has prevailed this time, you win! You: ${playerScore}. Computer: ${computerScore}`
      )
    : playerScore == computerScore
    ? console.log(
        `It was a draw! You and the computer both scored ${playerScore} points.`
      )
    : console.log(
        `You let humanity down big time here. Your pathetic score: ${playerScore}. Computer's score: ${computerScore}`
      );
}

game(5);

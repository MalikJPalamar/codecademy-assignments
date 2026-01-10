const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
 } else {
  console.log('Invalid Input! Please choose either rock, paper or scissors.');
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); 
if (randomNumber === 0) {
  return 'rock';
 } else if (randomNumber === 1) {
  return 'paper';
  } else {
  return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You won with a super move!'
    }
    if (userChoice === computerChoice)
      return 'The game is a tie';
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You won!';
    }
  } 
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You won!';
    }
  }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'Computer wins!'; 
    } else {
      return 'You won!';
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()

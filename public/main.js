let player2 = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const main = () => {
  // gen a random from array
  let opponent = player2[Math.floor(Math.random() * player2.length)]
  console.log('the computer genned ' + opponent)
}

const compareRock = () => {
  console.log('rock')
  if (opponent === 'lizard' || opponent === 'scissors') {
    document.querySelector('.result').textContent = 'You won with rock'
  } else if (opponent === 'rock') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent = 'They beat your rock'
  }
}

const comparePaper = () => {
  console.log('paper')
  if (opponent === 'rock' || opponent === 'spock') {
    document.querySelector('.result').textContent = 'You won with paper'
  } else if (opponent === 'paper') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent = 'They beat your paper'
  }
}

const compareScissors = () => {
  console.log('scissors')
  if (opponent === 'paper' || opponent === 'lizard') {
    document.querySelector('.result').textContent = 'You won with scissors'
  } else if (opponent === 'scissors') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent = 'They beat your scissors'
  }
}

const compareLizard = () => {
  console.log('lizard')
  if (opponent === 'spock' || opponent === 'paper') {
    document.querySelector('.result').textContent = 'You won with lizard'
  } else if (opponent === 'lizard') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent = 'They beat your lizard'
  }
}

const compareSpock = () => {
  console.log('spock')
  if (opponent === 'scissors' || opponent === 'rock') {
    document.querySelector('.result').textContent = 'You won with Spock'
  } else if (opponent === 'spock') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent = 'They beat your Spock'
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.rock').addEventListener('click', compareRock)
document.querySelector('.paper').addEventListener('click', comparePaper)
document.querySelector('.scissors').addEventListener('click', compareScissors)
document.querySelector('.lizard').addEventListener('click', compareLizard)
document.querySelector('.spock').addEventListener('click', compareSpock)

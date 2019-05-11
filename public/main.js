let player2 = ['rock', 'paper', 'scissors', 'lizard', 'Spock']
let opponent = player2[Math.floor(Math.random() * player2.length)]
const main = () => {
  console.log('main loaded')

  console.log('the computer genned ' + opponent)
}

const compareRock = () => {
  console.log('rock')
  if (opponent === 'lizard' || opponent === 'scissors') {
    document.querySelector('.result').textContent = 'You won with rock'
  } else if (opponent === 'rock') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent =
      'They beat your rock with ' + opponent
  }
}

const comparePaper = () => {
  console.log('paper')
  if (opponent === 'rock' || opponent === 'Spock') {
    document.querySelector('.result').textContent = 'You won with paper'
  } else if (opponent === 'paper') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent =
      'They beat your paper with ' + opponent
  }
}

const compareScissors = () => {
  console.log('scissors')
  if (opponent === 'paper' || opponent === 'lizard') {
    document.querySelector('.result').textContent = 'You won with scissors'
  } else if (opponent === 'scissors') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent =
      'They beat your scissors with ' + opponent
  }
}

const compareLizard = () => {
  console.log('lizard')
  if (opponent === 'Spock' || opponent === 'paper') {
    document.querySelector('.result').textContent = 'You won with lizard'
  } else if (opponent === 'lizard') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent =
      'They beat your lizard with ' + opponent
  }
}

const compareSpock = () => {
  console.log('Spock')
  if (opponent === 'scissors' || opponent === 'rock') {
    document.querySelector('.result').textContent = 'You won with Spock'
  } else if (opponent === 'Spock') {
    document.querySelector('.result').textContent = 'Tie. Play again.'
  } else {
    document.querySelector('.result').textContent =
      'They beat your Spock with ' + opponent
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.rock').addEventListener('click', compareRock)
document.querySelector('.paper').addEventListener('click', comparePaper)
document.querySelector('.scissors').addEventListener('click', compareScissors)
document.querySelector('.lizard').addEventListener('click', compareLizard)
document.querySelector('.spock').addEventListener('click', compareSpock)

let myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const compareRock = () => {
  console.log('rock')
  document.querySelector('.result').textContent = 'rock'
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.rock').addEventListener('click', compareRock)

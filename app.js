const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // or you can write 3 because there are three possible choices here; +1 because we want numbers from 1-3 not from 0-2
    console.log(randomNumber)

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
        case 3:
            computerChoice = 'paper'
            break;    
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper' || computerChoice === 'scissors' && userChoice === 'rock' || computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you won!"
    }
    else {
        result = "you lost!"
    }
    resultDisplay.innerHTML = result 
}

// add counting points
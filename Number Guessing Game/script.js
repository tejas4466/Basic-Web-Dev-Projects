let random=Math.round(Math.random()*100+1)
// // console.log(random);

let submit=document.querySelector('#subt')
let userInput=document.querySelector('#guessField')
let guessSlot=document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

console.log(userInput.value);

let p=document.createElement('p')
let playGame=true;
let prevGuess=[];
let numGuess=1;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else{
        prevGuess.push(guess)
    if (numGuess === 11) {
      clearGuess(guess)
      displayMessage(`Game Over. Random number was ${random}`)
      endGame()
    } else {
      clearGuess(guess)
      checkGuess(guess)
    }
    }
}

function checkGuess(guess){
    if(guess===random){
        displayMessage(`You guessed it right`)
        endGame()
        
    }
    else if(guess<random){
        displayMessage(`Number is low`)
    }
    else if(guess>random){
        displayMessage(`Number is high`)
    }
        
    }


function displayMessage(messsage){
    lowOrHigh.innerHTML=`<h2>${messsage}</h2>`
}

function clearGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    p.style.cursor="pointer"
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1)
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess} `
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
  
      playGame = true
    })
}
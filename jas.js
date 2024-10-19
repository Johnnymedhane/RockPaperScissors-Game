
const computerDisplay = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-choice");
const computerScore = document.getElementById("computer-score")
const playerScore = document.getElementById("player-score")

const info = document.getElementById("result");
const btns = document.querySelectorAll("button");




// with user interface!



let human = 0;

let computer = 0;

let roundCount = 1;
let  resetButton;

let result;



function getComputerChoice () {
  const choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  console.log(choice[random]);
   return choice[random];
  
}


function playRound( playerChoice) {

  
const computerChoice = getComputerChoice();
info.classList.remove('win', 'lose', 'tie');

if (playerChoice === computerChoice) {
info.classList.add('tie');
result = "It's tie!";

   }  else if (roundCount >= 5) {
result = "GAME OVER!!<br>";
finalResult();
setGameOver();

  }  else if ( (playerChoice === "rock" && computerChoice === "scissors") 
     || (playerChoice === "scissors" && computerChoice === "rock") 
     || (playerChoice === "paper" && computerChoice === "rock")) {

human ++;
info.classList.add('win'); 
playerScore.innerHTML = human;
result = `You win! ${playerChoice} beats ${computerChoice}.`;

   
   }  else {
computer ++;
info.classList.add('lose');
computerScore.innerHTML = computer;
result = `You lose! ${computerChoice} beats ${playerChoice}.`;

}
    
   
roundCount++;
info.innerHTML = result;
computerDisplay.textContent = `Computer: ${computerChoice}`;
playerDisplay.textContent = `Player: ${playerChoice}`;
round.textContent = `round: ${roundCount}`;
 }

function  setGameOver() {
  human = 0;
  computer = 0;
  const div = document.querySelector(".new-game")
  btns.forEach( (btn) => btn.disabled = true);
  
resetButton = document.createElement('button');
resetButton.textContent = 'Play Again';
div.appendChild(resetButton);
resetButton.addEventListener("click", resetGame);
}


function resetGame() {
roundCount = 1 ;
computerScore.textContent = '';
playerScore.textContent = '';
resetButton.parentNode.removeChild(resetButton);
info.textContent = " ";
playerDisplay.textContent = 'Player';
computerDisplay.textContent = 'Computer'
btns.forEach( (buttn) => buttn.disabled = false);

}


function finalResult () {

if (human > computer) {
   info.classList.add('win');
   result += '\n You are the winner!';
 }  else if (human < computer) {
   info.classList.add('lose');
   result += '\n The computer is  the winner!';
 }  else {
    result += '\n The game is tie!';
  }
}






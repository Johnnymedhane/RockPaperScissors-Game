
const userScoreP = document.getElementById("usescore");
const computerScoreP = document.getElementById("com-score");
const finalInfo = document.getElementById("final")
const round = document.getElementById('round')

const select = document.getElementById("humanChoice");
const submitBotton = document.getElementById('submit');
const div = document.getElementById('addbtn');








// computer choice

function getComputerChoice () {
  const choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);

  console.log( choice[random]);
   return choice[random];
}
 


//  user choice

function getUserchoice() {

  
 const options = ["rock", "paper", "scissors"]; 
 let userinput = prompt(" please insert rock, paper, scissors".toLowerCase());
 while (!options.includes(userinput)) {
   userinput = prompt("invalid choice. please insert rock, paper, scissors".toLowerCase());
 }
 console.log( userinput);
  return userinput;
}



// score


let humanScore = 0;

let computerScore = 0;


// playround

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("It's tie!");
  }
  else if ( (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {

    humanScore ++;
     console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  
  }

  else {
    computerScore ++;
   
   console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
   
  }
   
    
 
}
 

function playgame() {
  for (let i = 0; i < 5; i++) {

    const palyer = getUserchoice();
  const computer = getComputerChoice();
  console.log(playRound(palyer, computer));
  }
console.log(`Final Score - player: ${humanScore}, Computer: ${computerScore}`);



    if (humanScore > computerScore){

     console.log("You are the winer!");
     

    }
    else if (computerScore > humanScore) {
     console.log("You lose! try second round");
     
    }
    else {
     console.log("the game is tie!!");
      
    }

}






    playgame();








// with user interface!

/*

let humanScore = 0;

let computerScore = 0;

let roundCount = 1;
let  resetButton;

let result;






function getComputerChoice () {
  const choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  console.log(choice[random]);
   return choice[random];
  
}


function getUserChoice() {
  const select = document.getElementById("humanChoice");
  const selectedValue = select.value;
console.log(selectedValue);
 return selectedValue;
}




function playRound() {

  const playerChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  const userScoreP = document.getElementById("usescore");
  const computerScoreP = document.getElementById("com-score");

 

  


  if (playerChoice === computerChoice) {
    result = "It's tie!";
    finalInfo.style.color = "#fff";
   }

  else if (roundCount === 5) {
    result = '!!!GAME OVER!!!';
    finalInfo.style.color = "#fff";
    setGameOver();
    finalResult();
  }

   else if ( (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "rock")) {
 
     humanScore ++;
      userScoreP.innerHTML = humanScore;
     result = `You win! ${playerChoice} beats ${computerChoice}.`;
     finalInfo.style.color = "green";
   
   }
 
   else {
     computerScore ++;
     computerScoreP.innerHTML = computerScore;
     result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    finalInfo.style.color = "red";
   }
    
   
    roundCount++;
     finalInfo.textContent = result;
    computerScoreP.textContent = computerScore;
    userScoreP.textContent = humanScore;
    round.textContent = `round: ${roundCount}`;

 }

function  setGameOver() {
  select.disabled = true;
  submitBotton.disabled = true;
  resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	 div.appendChild(resetButton);
	

    resetButton.addEventListener("click", resetGame);
}







function resetGame() {
  roundCount = 1 ;
 computerScore = 0;
  humanScore = 0;
  const resetParas = document.querySelectorAll('.para p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';

  }
  resetButton.parentNode.removeChild(resetButton);

finalInfo.textContent = " ";
select.disabled = false;
  submitBotton.disabled = false;
  select.value = "";
 
}


function finalResult () {

  
  if (humanScore > computerScore) {
   result += `\n\nyou are the winner!`;

  }

  else if (humanScore < computerScore) {
   result += `\n\nthe computer is  the winner!`;
  }

  else {
    result += `\n\nthe game is tie!`;
  }
}
*/





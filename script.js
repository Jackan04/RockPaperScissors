// Variables
let computerScore = 0;
let humanScore = 0;
const results = document.querySelector("#results");
const buttonContainer = document.querySelector("#button-container");
const scoreContainer = document.querySelector("#scores");
const choiceContainer = document.querySelector("#choices");
const roundResultContainer = document.querySelector("#round-results");



buttonContainer.addEventListener("click", function(event){

    let target = event.target;
    let humanChoice;
    
    switch(target.id){

        case "rock":
            humanChoice = "rock";
        break;

        case "paper":
            humanChoice = "paper";
        break;
        
        case "sciccors":
            humanChoice = "sciccors";
        break;
    }

    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

function getComputerChoice(){
    let randomNumber;
    randomNumber = Math.random();
    let computerChoice;
    
    if(randomNumber < 1/3){
        computerChoice = "rock";
        
    }
    else if(randomNumber < 2/3){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }

    return computerChoice;
}


function playRound(humanChoice, computerChoice){
        let winner; 
        const displayHumanChoice = document.createElement("p");
        const displayComputerChoice = document.createElement("p");
        const displayWinner = document.createElement("p");
        const displayHumanScore = document.createElement("p");
        const displayComputerScore = document.createElement("p");
        const champion = document.createElement("h3");
        const replayButton = document.createElement("button");

        replayButton.textContent = "Replay";
        
        results.textContent = "";
        
        

    
        if(humanChoice === computerChoice){
            winner = "It's a Tie!"
            
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            
            winner = "You win this round!";
            humanScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            winner = "You win this round!";
            humanScore++;
            
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            winner = "You win this round!";
            humanScore++;
            
        }
        else{
            winner = "Computer win this round!";
            computerScore++;
        }
        
        displayHumanScore.textContent = "Your Score: " + humanScore;    
        displayComputerScore.textContent = "Computer Score: " + computerScore;
        displayHumanChoice.textContent = "You: " + humanChoice;
        displayComputerChoice.textContent = "Computer: " + computerChoice;
        displayWinner.textContent = winner;
        results.append(displayHumanScore, displayComputerScore, displayComputerChoice, displayHumanChoice, displayWinner)
     
        
        if (humanScore === 3) {
            champion.textContent = "You are the champion!";
            buttonContainer.style.pointerEvents = "none";
            results.append(champion);
            buttonContainer.style.pointerEvents = "none";
            results.append(replayButton);

            replayButton.addEventListener("click", function(){
                location.reload();
            });
        } else if (computerScore === 3) {
            champion.textContent = "Computer is the champion!";
            results.append(champion);
            buttonContainer.style.pointerEvents = "none";
            results.append(replayButton);

            replayButton.addEventListener("click", function(){
                location.reload();
            });
        }
    
}








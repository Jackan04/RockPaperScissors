// Variables
let computerScore = 0;
let humanScore = 0;


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


function getHumanChoice(){
    let humanChoice = prompt("Enter one of the following:\n1.Rock\n2.Paper\n3.Scissors").toLowerCase(); // Make input lowercase which prevents faulty input.
    return humanChoice;
    
}

function playRound(humanChoice, computerChoice){
        let winner; 
        
        console.log("You choose: " + humanChoice);
        console.log("Computer choose " + computerChoice);

        console.log("You choose: " + humanChoice);
        console.log("Computer choose: " + computerChoice);
    
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
        
        console.log(winner);    
    
}

function playGame(){
    
    while(humanScore < 3 && computerScore < 3){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); 
    
    }

    if (humanScore === 3){
        console.log("You are the champion!")
        
    }
    else {
        console.log("Computer is the champion!")
    }

  
}

// playGame();



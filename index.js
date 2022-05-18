function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        return "rock";
    }
    else if(randomNumber == 2) {
        return "paper";
    }
    else{
        return "scissors";
    }
    
}

let playerSelection;
let computerSelection;
let wins;
let losses;
function playRound(playerSelection, computerSelection) {
   
     if (playerSelection == "rock" && computerSelection == "paper"){
        losses++;
        return "You Lose! Paper beats Rock";
        
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        losses++;
        return "You Lose! Scissors beat Paper";
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        losses++;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        wins++
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        wins++
        return "You Win! Scissors beat Paper";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        wins++;
        return "You Win! Rock beats Scissors";
    }
    else {
        return "It's a draw!!!";
    }
    
}

function game() {
    wins = 0;
    losses = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Select one: Rock, Paper, or Scissors").toLowerCase();
        computerSelection = computerPlay();
        let playRoundResult = playRound(playerSelection,computerSelection)
        
        console.log(playRoundResult);
        console.log("Wins: %d",wins);
        console.log("Losses: %d",losses);        
    }

    if(wins > losses){
        console.log("So the winner is............ You!!!!!!!!");
    }
    else if(wins < losses) {
        console.log("So the loser is............ You!!!!!!!!");
    }
    else{
        console.log("It's a draw!!");
    }
}
game();
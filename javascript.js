let playerRecord = 0
let computerRecord = 0
let tieRecord = 0
let stringVerify1 = "ROCK"
let stringVerify2 = "PAPER"
let stringVerify3 = "SCISSORS"

/*function getPlayerChoice(a){
       let a = prompt("Choose rock, paper or scissors. Please")
       a = a.toUpperCase()
       while (!(["ROCK", "PAPER", "SCISSORS"].includes(a))){
           a = prompt("Didn't recognize that, please try again.")
           a = a.toUpperCase()
       }
       console.log(a)
       return a
   }    */

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let a = getRndInteger(1,3)
    if (a == 1){
    a = "ROCK";
    }
    else if(a == 2){
    a = "PAPER";
    }
    else {
    a = "SCISSORS"}
    return a;
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice()
    console.log(`You chose: ${playerChoice}`)
    console.log(`Computer chose: ${computerChoice}`)

    if ((playerChoice == "ROCK" && 
    computerChoice == "SCISSORS")||
    (playerChoice == "PAPER" && computerChoice == "ROCK")||
    (playerChoice == "SCISSORS" && computerChoice == "PAPER")){
        console.log("You win the round!");
        playerRecord++;
        //return playerRecord;
    }


    else if ((playerChoice == "ROCK" && 
    computerChoice == "PAPER")||
    (playerChoice == "PAPER" && computerChoice == "SCISSORS")||
    (playerChoice == "SCISSORS" && computerChoice == "ROCK")){
        console.log("You lose the round!");
        computerRecord++;
        //return computerRecord;
    }


    else if ((playerChoice == "ROCK" && computerChoice == "ROCK")||
    (playerChoice == "PAPER" && computerChoice == "PAPER")||
    (playerChoice == "SCISSORS" && computerChoice == "SCISSORS")){
        tieRecord++;
        console.log("It is a tie!!");
        //return tieRecord;
    }     


}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice)

    }
    if (playerRecord > computerRecord){
        console.log("You win the game!!!")
    }
    else {
        console.log("You lose the game!!!")
    }
    let gameStats = `You: ${playerRecord} - 
    Computer: ${computerRecord} - Ties ${tieRecord}` 
    console.log(gameStats)
}
    
       // game()

//UI
const rockbtn = document.querySelector('#ROCK');
const paperbtn = document.querySelector('#PAPER');
const scissorsbtn = document.querySelector('#SCISSORS');   

rockbtn.addEventListener('click',function(e){
    playRound("ROCK")
} );
paperbtn.addEventListener('click',function(e){
    playRound("PAPER")
});
scissorsbtn.addEventListener('click', function(e){
    playRound("SCISSORS")
});

 
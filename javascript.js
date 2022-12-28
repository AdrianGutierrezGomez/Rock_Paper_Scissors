let playerRecord = 0
let computerRecord = 0
let tieRecord = 0
/*let stringVerify1 = "ROCK"
let stringVerify2 = "PAPER"
let stringVerify3 = "SCISSORS"*/
const buttons = document.querySelectorAll('button')

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

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice()
  let result = ""


    if ((playerChoice == "ROCK" && 
    computerChoice == "SCISSORS")||
    (playerChoice == "PAPER" && computerChoice == "ROCK")||
    (playerChoice == "SCISSORS" && computerChoice == "PAPER")){
        
        playerRecord++;
        result = ('You win! ' + playerChoice + ' beats ' + 
        computerChoice + "<br><br>Player score: " + playerRecord 
        + "<br>Computer score: " + computerRecord)

        //return playerRecord;
        if (playerRecord == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }


    else if ((playerChoice == "ROCK" && 
    computerChoice == "PAPER")||
    (playerChoice == "PAPER" && computerChoice == "SCISSORS")||
    (playerChoice == "SCISSORS" && computerChoice == "ROCK")){
        
        computerRecord++;
        result = ('You lose! ' + computerChoice + ' beats ' + 
        playerChoice + "<br><br>Player score: " + 
        playerRecord + "<br>Computer score: " + computerRecord)
        //return computerRecord;
        if (computerRecord == 5) {
            result += '<br><br>The computer wins the game! Reload the page to play again'
            disableButtons()
        }
    }


    else if ((playerChoice == "ROCK" && computerChoice == "ROCK")||
    (playerChoice == "PAPER" && computerChoice == "PAPER")||
    (playerChoice == "SCISSORS" && computerChoice == "SCISSORS")){
        tieRecord++;
        
        result = ('It\'s a tie. You both chose ' + playerChoice
            + "<br><br>Player score: " + playerRecord + 
            "<br>Computer score: " + computerRecord)
        //return tieRecord;    
    }     
    document.getElementById('scoreboard').innerHTML = result;
return;
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

rockbtn.addEventListener('click',function(){
    playRound("ROCK")
} );
paperbtn.addEventListener('click',function(){
    playRound("PAPER")
});
scissorsbtn.addEventListener('click', function(){
    playRound("SCISSORS")
});

 
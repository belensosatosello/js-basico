
// Code the game rock paper scissors using if else loops
function playGame (human, machine) {    
    if(human == "rock" && machine == "scissors" 
    ||  human == "paper" && machine == "rock"
    ||  human == "scissors" && machine == "paper"){
        console.log("You win! H:" + human +" M:"+ machine);
    } else if(human == machine){
        console.log("Its a tie! H:" + human +" M:"+ machine);
    } else {
        console.log("You loose! H:" + human +" M:"+ machine);
    }
}

var options = ["rock", "paper", "scissors"];
var machine = options[Math.floor(Math.random() * options.length)];
var choice = prompt("Enter your choice 1-rock, 2-paper or 3-scissors.");

playGame(options[choice-1], machine);
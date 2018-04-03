 
 var playerScore = 0;
 var computerScore = 0;
 
	function computerPlay(){
		let playerObj = ["rock","paper","scissors"];
		let randPick = Math.floor(Math.random() * playerObj.length);
		if (randPick == 1) {
			return "paper";
		}else if(randPick == 2){
			return "scissors";
		}else
		{
			return "rock";
		}
	
	}
	
	function userPick(){
		let playerObj = prompt ("choose rock paper or scissors");
		return playerObj;
	}
	

	function compareGuesses(guess1, guess2) {
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and the computer chose: " + guess2 + "!");
  //First check for equality
  if(guess1 === guess2) {
    alert("You and the computer guessed the same thing! Go again, no score added!");
    return 0;
  }
  //No check for guess1 winning
  if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
   alert("Player wins the round!");
    return 1;
    }
   alert("Computer wins the round!");
   return 2;
}

function updateScores(result, points) {
    if(result === 1) {
      playerScore += points;
    }
    if(result === 2) {
      computerScore += points;
    }
    if(result === 0) {
      computerScore += 0;
      playerScore += 0;
    }
}

function clearScores() {
  playerScore = 0;
  computerScore = 0;
}

function Game(numOfRounds) {
  do {
    var player   = userPick();
    var computer = computerPlay();
    var result = compareGuesses(player, computer);
    updateScores(result, 5);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);

  if(playerScore > computerScore) {
    alert("The player has " + playerScore + " points compared to the computer's " + computerScore + " points. So the player wins!");
  }
  else {
    alert("The computer has " + computerScore + " points compared to the player's " + playerScore + " points. So the computer wins!");
  }

  clearScores();

}

Game(5);
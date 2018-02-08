var botScore=0;
var	playerScore=0;
var botsWeapon="";
var playersWeapon="";
var explanation="";
var adverbPos="";
var adverbNeg="";

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("Spock").onclick=playerThrowsSpock;
document.getElementById("lizard").onclick=playerThrowsLizard;


function playerThrowsRock(){
	getRandomWeapon();
	playersWeapon = "rock";
	getExplanation(botsWeapon,playersWeapon);
	getRandomAdverbPos();
	getRandomAdverbNeg();
	checkWhoWon(botsWeapon,playersWeapon);
}
function playerThrowsScissors(){
	getRandomWeapon();
	playersWeapon = "scissors";
	getExplanation(botsWeapon,playersWeapon);
	getRandomAdverbPos();
	getRandomAdverbNeg();
	checkWhoWon(botsWeapon,playersWeapon);
}
function playerThrowsPaper(){
	getRandomWeapon();
	playersWeapon = "paper";
	getExplanation(botsWeapon,playersWeapon);
	getRandomAdverbPos();
	getRandomAdverbNeg();
	checkWhoWon(botsWeapon,playersWeapon);
}
function playerThrowsSpock(){
	getRandomWeapon();
	playersWeapon = "Spock";
	getExplanation(botsWeapon,playersWeapon);
	getRandomAdverbPos();
	getRandomAdverbNeg();
	checkWhoWon(botsWeapon,playersWeapon);
}
function playerThrowsLizard(){
	getRandomWeapon();
	playersWeapon = "lizard";
	getExplanation(botsWeapon,playersWeapon);
	getRandomAdverbPos();
	getRandomAdverbNeg();
	checkWhoWon(botsWeapon,playersWeapon);
}
function getRandomWeapon(){
	var randomNumber=Math.random();

	if(randomNumber<.2){
		botsWeapon="rock";
	}
	else if(randomNumber<.4){
		botsWeapon="scissors";
	} 
	else if(randomNumber<.6){
		botsWeapon="paper";
	} 
	else if(randomNumber<.8){
		botsWeapon="Spock";
	} else {
		botsWeapon="lizard";
	}
	return botsWeapon;
}
function getRandomAdverbPos(){
	var randomNumber=Math.random();

	if(randomNumber<.2){
		adverbPos="brilliantly";
	}
	else if(randomNumber<.4){
		adverbPos="wisely";
	} 
	else if(randomNumber<.6){
		adverbPos="sagely";
	} 
	else if(randomNumber<.8){
		adverbPos="astutely";
	} else {
		adverbPos="ingeniously";
	}
	return adverbPos;
}
function getRandomAdverbNeg(){
	var randomNumber=Math.random();

	if(randomNumber<.2){
		adverbNeg="idiotically";
	}
	else if(randomNumber<.4){
		adverbNeg="inexplicably";
	} 
	else if(randomNumber<.6){
		adverbNeg="moronically";
	} 
	else if(randomNumber<.8){
		adverbNeg="boneheadedly";
	} else {
		adverbNeg="absurdly";
	}
	return adverbNeg;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="Spock") ||
		(botsWeapon=="Spock" && playersWeapon=="rock") ||
		(botsWeapon=="Spock" && playersWeapon=="scissors") ||
		(botsWeapon=="lizard" && playersWeapon=="Spock") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="rock" && playersWeapon=="lizard") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}




function getExplanation(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		explanation="";
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") || 
		(playersWeapon=="scissors" && botsWeapon=="paper")
		){
		explanation="Scissors cut the paper.";
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="lizard") || 
		(playersWeapon=="scissors" && botsWeapon=="lizard")
		){
		explanation="Scissors decapitate the lizard.";
	}
	else if(
		(botsWeapon=="rock" && playersWeapon=="paper") || 
		(playersWeapon=="rock" && botsWeapon=="paper")
		){
		explanation="Paper covers rock.";
	}
	else if(
		(botsWeapon=="Spock" && playersWeapon=="paper") || 
		(playersWeapon=="Spock" && botsWeapon=="paper")
		){
		explanation="The paper disproves Spock.";
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="Spock") || 
		(playersWeapon=="scissors" && botsWeapon=="Spock")
		){
		explanation="Spock smashes scissors.";
	}
	else if(
		(botsWeapon=="Spock" && playersWeapon=="rock") || 
		(playersWeapon=="Spock" && botsWeapon=="rock")
		){
		explanation="Spock vaporizes rock.";
	}
	else if(
		(botsWeapon=="lizard" && playersWeapon=="paper") || 
		(playersWeapon=="lizard" && botsWeapon=="paper")
		){
		explanation="Lizards eats paper.";
	}
	else if(
		(botsWeapon=="lizard" && playersWeapon=="Spock") || 
		(playersWeapon=="lizard" && botsWeapon=="Spock")
		){
		explanation="The lizard poisons Spock.";
	}
	else if(
		(botsWeapon=="rock" && playersWeapon=="lizard") || 
		(playersWeapon=="rock" && botsWeapon=="lizard")
		){
		explanation="Rock crushes lizard.";
	} else{
		explanation="The rock crushes the scissors.";
	}
}


function increaseBotScore(){
	botScore++;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser! You " + adverbNeg + " chose " + playersWeapon + ", and the bot " + adverbPos + " picked " + botsWeapon + ". " + explanation);
}
function increasePlayerScore(){
	playerScore++
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You're the biggest winner ever!! You " + adverbPos + " chose " + playersWeapon + ", and the bot " + adverbNeg + " picked " + botsWeapon + ". " + explanation);
}
function displayCompleteMessage(status){
	document.getElementById("status").innerHTML=status;
}
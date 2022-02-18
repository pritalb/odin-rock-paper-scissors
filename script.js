function getRandomInt(maxNum) {
	return Math.floor(Math.random() * maxNum);
}

function computerPlay() {
	let hands = ['rock', 'paper', 'scissor'];
	let compPlay = getRandomInt(3);

	return hands[compPlay];
}

function playRound(playerSelection, computerSelection) {
	let win = false;
	let playerPlay = playerSelection.toLowerCase();

	if (playerPlay === computerSelection) {
		return  `Draw! Both players selected ${playerPlay}`;
	}

	if ((playerPlay === 'rock' && computerSelection === 'scissor') || (playerPlay === 'paper' && computerSelection === 'rock') || (playerPlay === 'scissor' && computerSelection === 'paper')) {
		win = true;
	}

	if (win) {
		return `You Win! ${playerPlay} beats ${computerSelection}`;
	}
	return `You Lose! ${computerSelection} beats ${playerPlay}`;
}

function game() {

}

let playerPlay = 'Rock';
let compPlay = computerPlay();

console.log(playRound(playerPlay, compPlay))
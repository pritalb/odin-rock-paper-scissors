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
	let result = {};

	if (playerPlay === computerSelection) {
			result['result'] = `Draw! Both players selected ${playerPlay}`;
			result['winner'] = 'no winner';
	}

	if ((playerPlay === 'rock' && computerSelection === 'scissor') || (playerPlay === 'paper' && computerSelection === 'rock') || (playerPlay === 'scissor' && computerSelection === 'paper')) {
		win = true;
	}

	if (win) {
		result['result'] = `You Win! ${playerPlay} beats ${computerSelection}`;
		result['winner'] = 'player';
	} else {
		result['result'] = `You Lose! ${computerSelection} beats ${playerPlay}`;
		result['winner'] = 'computer';
	}

	return result
}

function game() {
	let score = {
		'player': 0,
		'computer': 0,
		'no winner': 0,
	};

	let win_score = 5;

	let rock_btn = document.createElement('button');
	rock_btn.innerText = 'rock';
	rock_btn.addEventListener('on_click', () => {
		playRound(rock_btn.innerText);
	})

	let paper_btn = document.createElement('button');
	paper_btn.innerText = 'paper';
	paper_btn.addEventListener('on_click', () => {
		playRound(paper_btn.innerText);
	})

	let scissor_btn = document.createElement('button');
	scissor_btn.innerText = 'scissor';
	scissor_btn.addEventListener('on_click', () => {
		playRound(scissor_btn.innerText);
	})

	let play_btns = document.createElement('div');
	play_btns.append(rock_btn, paper_btn, scissor_btn);

	document.body.append(play_btns);

	// for (let index = 0; index < 5; index++) {
	// 	let player_hand = prompt(` Round ${index}: choose a hand (from: rock, paper or scissor).`);
	// 	let compPlay = computerPlay();

	// 	let round_result = playRound(player_hand, compPlay);
		
	// 	score[round_result['winner']]++;
	// 	console.log(`Round ${index} result: ${round_result['result']}`);
	// 	console.log(`current score => player : ${score['player']}, computer : ${score['computer']}`);
	// }

	if (score['player'] > score['computer']) {
		console.log('Player wins.')
	} else if (score['player'] < score['computer']) {
		console.log('Computer wins.')
	} else {
		console.log('Game Draw.');
	}
}

game();
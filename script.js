function getRandomInt(maxNum) {
	return Math.floor(Math.random() * maxNum);
}

function computerPlay() {
	let hands = ['Rock', 'Paper', 'Scissor'];
	let compPlay = getRandomInt(3);

	return hands[compPlay];
}

function playRound(playerPlay) {
	let win = false;
	let result = {};
	let computerSelection = computerPlay();

	if (playerPlay === computerSelection) {
			result['result'] = `Draw! Both players selected ${playerPlay}`;
			result['winner'] = 'no winner';
	}

	if ((playerPlay === 'Rock' && computerSelection === 'Scissor') || (playerPlay === 'Paper' && computerSelection === 'Rock') || (playerPlay === 'Scissor' && computerSelection === 'Paper')) {
		win = true;
	}

	if (win) {
		result['result'] = `Yeah! You Win! ${playerPlay} beats ${computerSelection}`;
		result['winner'] = 'player';
	} else {
		result['result'] = `Oops! You Lose! ${computerSelection} beats ${playerPlay}`;
		result['winner'] = 'computer';
	}

	return result
}

function reset() {
	let player_score_ui = document.querySelector('#player_score');
	let computer_score_ui = document.querySelector('#computer_score');
	let result_ui = document.querySelector('#round_result');
	let win_ui = document.querySelector('#win');

	score = {
		'player': 0,
		'computer': 0,
		'no winner': 0,
	};

	player_score_ui.innerText = 'Player Score: 0';
	computer_score_ui.innerText = 'Computer Score: 0';
	result_ui.innerText = 'Play a hand to start the game.';
	win_ui.innerText = '';	

}

function game(button_name) {
	if ( (score['player'] >= 5) || (score['computer'] >= 5) ) {
		reset();
	}
	
	let player_score_ui = document.querySelector('#player_score');
	let computer_score_ui = document.querySelector('#computer_score');
	let result_ui = document.querySelector('#round_result');
	let win_ui = document.querySelector('#win');

	let round_result = playRound(button_name);
	score[round_result['winner']]++;

	player_score_ui.innerText = `Player Score: ${score['player']}`;
	computer_score_ui.innerText = `Computer Score: ${score['computer']}`;
	result_ui.innerText = round_result['result'];

	if (score['player'] == 5) {
		win_ui.innerText = 'Player wins.';
	} else if (score['computer'] == 5) {
		win_ui.innerText = 'Computer wins.';
	}
}

function main() {
	let rock_btn = document.createElement('button');
	rock_btn.innerText = 'Rock';
	rock_btn.addEventListener('click', () => {
		game(rock_btn.innerText);
	})

	let paper_btn = document.createElement('button');
	paper_btn.innerText = 'Paper';
	paper_btn.addEventListener('click', () => {
		game(paper_btn.innerText);
	})

	let scissor_btn = document.createElement('button');
	scissor_btn.innerText = 'Scissor';
	scissor_btn.addEventListener('click', () => {
		game(scissor_btn.innerText);
	})

	let play_btns = document.querySelector('#buttons');
	play_btns.append(rock_btn, paper_btn, scissor_btn);

	reset();
}

let score = {};
main()

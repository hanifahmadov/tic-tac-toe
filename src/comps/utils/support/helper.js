/* eslint-disable */
import { ff } from "../styled/globals.styled";
import { minimax } from "./minimax";
import { sweetAlertify } from "./notify";

//# Set Setting
export function setSetting(id, state) {
	state = JSON.parse(JSON.stringify(state));

	// if (id == 55) {
	// 	state.setting.ff = true;
	// 	state.setting.tt = false;
	// } else if (id == 33) {
	// 	state.setting.ff = false;
	// 	state.setting.tt = true;
	// } 
	
	
	// if (state.setting.ai && state.setting.ff) {
		// 	let t = `<h2>I'M ON IT</h2>
		// 		<p>Because of the lag issue on single thread JS, I have decided to move it to AWS serverless. Be back soon!</p>`;
		// 	sweetAlertify(t, 5000);
		
		// 	state.setting.pvp = true;
		// 	state.setting.ai = false;
		// }

		if (id == 1) {
			state.setting.pvp = true;
			state.setting.ai = false;
		} else if (id == 2) {
			state.setting.pvp = false;
			state.setting.ai = true;
		} else if (id == 3) {
			state.setting.lang = ff.carter;
		} else if (id == 4) {
			state.setting.lang = ff.nunito;
		}
		
		return state;
}

//# Make Move PvP
export function makeMovePvP(index, state) {
	// console.log("make move PvP works");
	state = JSON.parse(JSON.stringify(state));
	let otherPlayer = "O";

	//: First choose to what is the board size ff or tt
	//: actually board size is not matter because of incoming index

	//: if person vs ai, at the end
	//: ai turn must be true and person must be false
	if (state.setting.ai) {
		if (state.setting.tt) {
			state.board.tt[index] = state.person.value;
		} else {
			state.board.ff[index] = state.person.value;
		}

		state.person.moves.push(index);

		//: in this case person turn gets false
		state.person.turn = false;

		//: and ai turns gets true
		state.ai.turn = true;

		return state;
	}

	//: if person vs person, ai turn stays still
	if (state.person.turn) {
		if (state.setting.tt) {
			state.board.tt[index] = state.person.value;
		} else {
			state.board.ff[index] = state.person.value;
		}

		state.person.moves.push(index);
	} else {
		if (state.setting.tt) {
			state.board.tt[index] = otherPlayer;
		} else {
			state.board.ff[index] = otherPlayer;
		}

		//: this is temproray stocks for the O player
		state.ai.moves.push(index);
	}

	state.person.turn = !state.person.turn;
	return state;
}

//# Make Move Ai
export function makeMoveAi(index, state) {
	console.log("make move Ai works");
	state = JSON.parse(JSON.stringify(state));

	state.board.tt[index] = state.ai.value;

	state.ai.moves.push(index);
	state.ai.turn = false;
	state.person.turn = true;

	return state;
}

//# Best Index
export function getBestIndex(state) {
	state = JSON.parse(JSON.stringify(state));
	let board = state.board.tt;

	let index = null;
	let best = {
		val: -Infinity,
		move: 0,
	};

	for (let i = 0; i < board.length; i++) {
		if (board[i] == null) {
			board[i] = state.ai.value;

			let score = minimax(board, state, false, 0);
			board[i] = null;

			best.move += score.move;

			if (score.val > best.val) {
				best = score;
				index = i;
			}
		}
	}

	return index;
}

//# Available Spots
export function availableSpots(board) {
	let temp = [];

	board.forEach((val, index) => {
		if (val == null) {
			temp.push(index);
		}
	});

	return temp;
}

//# Is Board Full
export function isBoardFull(board) {
	for (let i of board) {
		if (i == null) return false;
	}

	return true;
}

//# Check Winner
export function checkWinner(state, board, winPositions) {
	for (let position of winPositions) {
		let win = true;

		for (let i of position) {
			if (board[i] == null || board[i] != board[position[0]]) {
				win = false;
				break;
			}
		}

		if (win) {
			if (board[position[0]] == state.person.value) return 1;
			if (board[position[0]] == state.ai.value) return 0;
		}
	}

	return null;
}

//# Board Check Up
export function boardCheckUp(state, board, winPositions) {
	let win = checkWinner(state, board, winPositions);
	let isFull = isBoardFull(board);

	if (win == 0) {
		state.current.winner = win;
		state.current.gameover = true;

		state.current.winPositions = winnerCellIndexes(
			state.setting.tt,
			state.ai.moves,
			winPositions
		);
	}

	if (win == 1) {
		state.current.winner = win;
		state.current.gameover = true;
		state.current.winPositions = winnerCellIndexes(
			state.setting.tt,
			state.person.moves,
			winPositions
		);
	}

	if (isFull && win == null) {
		state.current.draw = true;
		state.current.gameover = true;
	}

	return state;
}

//# Winner Cell Indexes
export function winnerCellIndexes(tt, moves, winPositions) {
	let temp = [];

	for (let position of winPositions) {
		let count = tt ? 3 : 5;

		for (let val of position) {
			if (moves.includes(val)) {
				count -= 1;
			}
		}

		if (count == 0) {
			temp = [...temp, ...position];
		}
	}

	return temp;
}

//# Get Random Index
export function getRandomIndex(arr, board) {
	let indx = arr[Math.floor(Math.random() * arr.length)];

	while (board[indx] !== null) {
		indx = arr[Math.floor(Math.random() * arr.length)];
	}

	return indx;
}

export function shuffleArray(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

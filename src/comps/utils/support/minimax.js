/* eslint-disable */
import { winPositions33 } from "../states/db";
import { checkWinner, isBoardFull } from "./helper";


export const minimax = (board, state, aiturn, move) => {

	console.log("minimax works")
	//: returns true or false
	let isFull = isBoardFull(board);

	//: returns 1 or 0
	let win = checkWinner(state, board, winPositions33);

	move += 1;


	//: person wins
	if (win == 1) return { val: -1, move };

	//: ai wins
	if (win == 0) return { val: 1, move };

	//: draw
	if (isFull) return { val: 0, move };

	if (aiturn) {
		let best = { val: -Infinity, move: 0 };

		for (let i = 0; i < board.length; i++) {

			if (board[i] == null) {

				board[i] = state.ai.value;

				let score = minimax(
					board,
					state,
					false,
					move
				);

				board[i] = null;

				best.move += score.move;

				if (score.val > best.val) {
					best = score;
				}
			}
		}

		return best;

	} else {
		let best = { val: Infinity, move: 0 };

		for (let i = 0; i < board.length; i++) {
			if (board[i] == null) {

				board[i] = state.person.value;
				let score = minimax(
					board,
                    state,
					true,
					move
				);
				board[i] = null;

				best.move += score.move;

				if (score.val < best.val) {
					best = score;
				}
			}
		}

		return best;
	}
};

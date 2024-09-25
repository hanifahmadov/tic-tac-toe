import { winPositions } from "../states/board-state";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

/** ai winner checker return 0 or 1 accordingly
 *  ai - O wins return 1 else return -1
 */
function checkAiWinner(board, winPositions) {
	// console.log(board);
	for (let position of winPositions) {
		let win = true;

		for (let i of position) {
			if (board[i] == null || board[i] != board[position[0]]) {
				win = false;
				break;
			}
		}

		if (win) {
			if (board[position[0]] == "X") return -1;
			if (board[position[0]] == "O") return 1;
		}
	}

	return null;
}

/* MINIMAX */
/* MINIMAX with call count and shuffle */
export const minimax = (board, turn, isTopLevel = true, counter = { count: 0 }) => {
	counter.count++;

	const isFull = !board.some((val) => val == null);
	const win = checkAiWinner(board, winPositions);

	if (win !== null) return { value: win, count: counter.count };
	if (isFull) return { value: 0, count: counter.count };

	let availableMoves = [];
	for (let i = 0; i < board.length; i++) {
		if (board[i] == null) {
			availableMoves.push(i);
		}
	}

	// Shuffle the available moves
	shuffle(availableMoves);

	if (turn === 0) {
		/* AI's turn (maximizing player) */
		let bestVal = -Infinity;
		let bestIndex = -1;

		for (let i of availableMoves) {
			board[i] = "O";
			const result = minimax(board, 1, false, counter);
			board[i] = null;

			if (result.value > bestVal) {
				bestVal = result.value;
				bestIndex = i;
			}
		}

		return isTopLevel ? { value: bestIndex, count: counter.count } : { value: bestVal, count: counter.count };
	} else {
		/* Player's turn (minimizing player) */
		let bestVal = Infinity;

		for (let i of availableMoves) {
			board[i] = "X";
			const result = minimax(board, 0, false, counter);
			board[i] = null;

			if (result.value < bestVal) {
				bestVal = result.value;
			}
		}

		return { value: bestVal, count: counter.count };
	}
};

/* Function to get the best index and the recursive call count */
export const getBestIndex = (board, turn) => {
	return new Promise(async (resolve, reject) => {
		try {
			// Initialize a counter object
			const counter = { count: 0 };

			// Call the minimax function to get the best index and call count
			const result = minimax(board, turn, true, counter);

			await delay(2000);

			// Resolve the promise with the best index and call count
			resolve({
				bestIndex: result.value,
				callCount: result.count,
			});
		} catch (error) {
			// In case of any error, reject the promise
			reject(error);
		}
	});
};

/* MINIMAX */
/* MINIMAX with call count */
// export const minimax = (board, turn, isTopLevel = true, counter = { count: 0 }) => {
// 	// Increment the counter at the beginning of each call
// 	counter.count++;

// 	/* Check if the board is full */
// 	const isFull = !board.some((val) => val == null);

// 	/* Get the win value: 1 (AI wins), -1 (player wins), or null (no win yet) */
// 	const win = checkAiWinner(board, winPositions);

// 	/* Base cases */
// 	if (win !== null) return { value: win, count: counter.count };
// 	if (isFull) return { value: 0, count: counter.count };

// 	if (turn === 0) {
// 		/* AI's turn (maximizing player) */
// 		let bestVal = -Infinity;
// 		let bestIndex = -1;

// 		/* Loop through all possible moves */
// 		for (let i = 0; i < board.length; i++) {
// 			if (board[i] == null) {
// 				// AI makes a move
// 				board[i] = "O";

// 				// Recursive call with player's turn
// 				const result = minimax(board, 1, false, counter);

// 				// Undo move
// 				board[i] = null;

// 				/* Update bestVal and bestIndex if a better score is found */
// 				if (result.value > bestVal) {
// 					bestVal = result.value;
// 					bestIndex = i;
// 				}
// 			}
// 		}

// 		/* Return the best index at the top level, otherwise return the score */
// 		return isTopLevel ? { value: bestIndex, count: counter.count } : { value: bestVal, count: counter.count };
// 	} else {
// 		// Player's turn (minimizing player)
// 		let bestVal = Infinity;

// 		/* Loop through all possible moves */
// 		for (let i = 0; i < board.length; i++) {
// 			if (board[i] == null) {
// 				// Player makes a move
// 				board[i] = "X";

// 				// Recursive call with AI's turn
// 				const result = minimax(board, 0, false, counter);

// 				// Undo move
// 				board[i] = null;

// 				/* Update bestVal if a lower score is found */
// 				if (result.value < bestVal) {
// 					bestVal = result.value;
// 				}
// 			}
// 		}

// 		/* Return the best score */
// 		return { value: bestVal, count: counter.count };
// 	}
// };

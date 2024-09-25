export function checkWinner(board, winPositions) {
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
			return position;
		}
	}

	return null;
}




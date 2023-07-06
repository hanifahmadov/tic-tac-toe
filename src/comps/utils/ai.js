/* eslint-disable */
import * as helper from "./helper";

// INFO: minimax
export const minimax = (board, positions, aiturn, count, depth) => {
    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(board, positions);

    count++;

    // if x wins
    if (win == 1) return { val: -1, count, depth };

    // if ai: o wins
    if (win == 0) return { val: 1, count, depth };

    // draw
    if (isFull) return { val: 0, count, depth };

    if (aiturn) {
        let best = { val: -Infinity, count: 0, depth: 0 };

        for (let i in board) {
            if (board[i] == "") {
                board[i] = "O";
                let score = minimax(board, positions, false, count, depth + 1);
                board[i] = "";

                // maximize
                if (score.val > best.val) {
                    best = score;
                }
            }
        }

        return best;
    } else {
        let best = { val: Infinity, count: 0, depth: 0 };

        for (let i in board) {
            board[i] = "X";
            let score = minimax(board, positions, true, count, depth + 1);
            board[i] = "";

            // minimize
            if (score.val < best.val) {
                best = score;
            }
        }

        return best;
    }
};

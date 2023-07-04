/* eslint-disable */
import * as helper from "./helper";

// INFO: minimax
export const minimax = (board, positions, aiturn, sum, depth) => {
    let emptyCells = helper.getAvailableCells(board);

    // every possible move( ai or human) calculates 1
    sum++;

    // edge cases
    if (helper.checkWinner(true, board, positions) === 1) {
        // if(depth == 3) return { val: 10, anaz: sum, depth };
        return { val: -1, anaz: sum, depth };
    } else if (helper.checkWinner(true, board, positions) === 0) {
        return { val: 1, anaz: sum, depth };
    } else if (emptyCells.length === 0) {
        return { val: 0, anaz: sum, depth };
    }

    if (aiturn) {
        // ai turn
        let bestScore = { val: -Infinity, anaz: 0, depth };

        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {

                board[i] = "O";
                let score = minimax(board, positions, false, sum, depth + 1);
                board[i] = "";

                bestScore = {
                    val: Math.max(score.val, bestScore.val),
                    anaz: score.anaz + bestScore.anaz,
                    depth: Math.max(score.depth, bestScore.depth)
                };
            }
        }

        return bestScore;
    } else {
        // human turn
        let bestScore = { val: Infinity, anaz: 0, depth };

        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "X";
                let score = minimax(board, positions, true, sum, depth + 1);
                board[i] = "";

                bestScore = {
                    val: Math.min(score.val, bestScore.val),
                    anaz: score.anaz + bestScore.anaz,
                    depth: Math.max(score.depth, bestScore.depth)
                };
            }
        }

        return bestScore;
    }
};

/* INFO: Hope you are done 
    in board position [ 'x', 'o', 'x', '', 'o', '', 'x', '' ,'' ]
    minimax take index 3 and make itself 2 winning position and wins
    but index 6 wins directly

    TODO 
    add depth value and return val/index with min depth to play the shorttest win index
 */

/* eslint-disable */

import { aviableSpots } from "./helper";

// INFO: 3x3 ai challange MINIMAX
export const minimax = (board, position, aiturn, sum, checkWin) => {
    let emptySpots = aviableSpots(board);

    // every possible move( ai or human) calculates 1
    sum++;

    console.log('loooppp')

    // edge cases
    if (checkWin(board, position) === 1) {
        return { val: -1, anaz: sum  };
    } else if (checkWin(board, position) === 0) {
        return { val: 1, anaz: sum };
    } else if (emptySpots.length === 0) {
        return { val: 0, anaz: sum };
    }

    if (aiturn) {
        // ai turn
        let bestScore = { val: -Infinity, anaz: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "O";
            let score = minimax(board, position, false, sum, checkWin);
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.max(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
            };
        }

        return bestScore;
    } else {
        // human turn
        let bestScore = { val: Infinity, anaz: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "X";
            let score = minimax(board, position, true, sum, checkWin);
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.min(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
            };
        }

        return bestScore;
    }
};

/* WARNING 
    in board position [ 'x', 'o', 'x', '', 'o', '', 'x', '' ,'' ]
    minimax take index 3 and make itself 2 winning position and wins
    but index 6 wins directly

    TODO 
    add depth value and return val/index with min depth to play the shorttest win index
 */


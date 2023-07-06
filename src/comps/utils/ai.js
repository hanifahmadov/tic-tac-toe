/* eslint-disable */
import * as helper from "./helper";



// INFO: minimax
export const minimax = (alfa, betta, board, positions, aiturn, sum, depth) => {
    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(board, positions);

    // every possible move( ai or human) calculates 1

    sum++;

    console.log('depth::::', depth)

    // edge cases

    // draw
    if (isFull) return 0;

    // if x wins
    if (win == 1) return -1;

    // if ai: o wins
    if (win == 0) return 1;

    // stop after depth 7
    // else if (depth >= 7) return 0;

    if (aiturn) {
        // ai turn
        let bestScore = -Infinity;

        for (let i in board) {
            if (board[i] == "") {
                board[i] = "O";

                // call minimax recursivle
                let score = minimax(
                    alfa,
                    betta,
                    board,
                    positions,
                    false,
                    sum,
                    depth + 1
                );

                board[i] = "";

                // maximize bestscore for ai
                bestScore = Math.max(score, bestScore);

                // alfa = Math.max(alfa, bestScore);
                // if (betta <= alfa) break;
            }
        }

        return bestScore;

    } else {
        // human turn
        let bestScore = Infinity;

        for (let i in board) {
            if (board[i] == "") {
                board[i] = "X";
                // call minimax recursivle

                let score = minimax(
                    alfa,
                    betta,
                    board,
                    positions,
                    true,
                    sum,
                    depth + 1
                );

                board[i] = "";

                // minimize hu scores ( -10 is best spot than -1)
                bestScore = Math.min(score, bestScore);

                // betta = Math.min(betta, bestScore);
                // if (betta <= alfa) break;
            }
        }

        return bestScore;
    }
};

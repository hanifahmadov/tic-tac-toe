/* eslint-disable */
import { aviableSpots5x5, checkWin5x5 } from "./helper5";


// INFO: 5x5 ai challange MINIMAX 
export const minimax5x5 = (board, win_position, aiturn, sum ) => {
    let emptySpots = aviableSpots5x5(board)

    console.log('MINIMAX 555555')
    // every possible move( ai or human) calculates 1
    sum++;

    // edge cases
    if (checkWin5x5(board, win_position) === 1) {
        console.log('xxxx winnnns')
        return { val: -1, anaz: sum };
    } else if (checkWin5x5(board, win_position) === 0) {
        console.log('oooo winnnss')
        return { val: 1, anaz: sum };
    } else if (emptySpots.length === 0) {
        'drawwwwww'
        return { val: 0, anaz: sum };
    }

    if (aiturn) {

        console.log('aii inside ai turne')
        // ai turn
        let bestScore = { val: -Infinity, anaz: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "O";
            let score = minimax5x5(board, win_position, false, sum );
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.max(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
            };
        }

        return bestScore;
        
    } else {
        // human turn
        console.log('humana humana turn')
        let bestScore = { val: Infinity, anaz: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "X";
            let score = minimax5x5(board, win_position, true, sum );
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.min(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
            };
        }

        return bestScore;
    }
};

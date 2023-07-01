/* eslint-disable */
import { checkWin, aviableSpots } from "./helper";
import { aviableSpots5, checkWin5, shuffle } from "./helper5";

// INFO: 3x3 ai challange MINIMAX
export const minimax = (board, position, aiturn, sum, depth) => {
    let emptySpots = aviableSpots(board);

    // every possible move( ai or human) calculates 1
    sum++;

    // edge cases
    if (checkWin(board, position) === 1) {
        return { val: -1, anaz: sum, depth};
    } else if (checkWin(board, position) === 0) {
        return { val: 1, anaz: sum };
    } else if (emptySpots.length === 0) {
        return { val: 0, anaz: sum };
    }

    if (aiturn) {
        // ai turn
        let bestScore = { val: -Infinity, anaz: 0, depth: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "O";
            let score = minimax(board, position, false, sum, depth + 1);
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.max(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
                depth
            };
        }

        return bestScore;
        
    } else {
        // human turn
        let bestScore = { val: Infinity, anaz: 0 };

        for (let i = 0; i < emptySpots.length; i++) {
            board[emptySpots[i]] = "X";
            let score = minimax(board, position, true, sum, depth + 1);
            board[emptySpots[i]] = "";

            bestScore = {
                val: Math.min(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
                depth
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


    // INFO: 5x5 ai 
    export const minimax5 = (currentBoardState, cache, index, board, winposition, aiturn, sum ) => {
        let avail = aviableSpots5(board);


        console.log(avail, "emptySpots5::")
    
        // every possible move( ai or human) calculates 1
        sum++;
        if(sum == 2) return;

        // edge cases
        if (checkWin5(board, winposition) == 1) {
            return { val: -1, anaz: sum };
        } else if (checkWin5(board, winposition) == 0) {
            return { val: 1, anaz: sum  };
        } else if (avail.length == 0) {
            return { val: 0, anaz: sum  };
        }
    
        if (aiturn) {
            // ai turn
            let bestScore = { val: -Infinity, anaz: 0 };
    
            for (let [i,j] of avail) {
                board[i][j] = "O";
                let score = minimax5(board, winposition, false, sum );
                board[i][j] = "";
    
                bestScore = {
                    val: Math.max(score.val, bestScore.val),
                    anaz: score.anaz + bestScore.anaz,
                };
            }
    
            return bestScore;
            
        } else {
            // human turn
            let bestScore = { val: Infinity, anaz: 0 };
    
            for (let [i, j] of avail) {

                board[i][j] = "X";
                let score = minimax5(board, winposition, true, sum);
                board[i][j] = "";
    
                bestScore = {
                    val: Math.min(score.val, bestScore.val),
                    anaz: score.anaz + bestScore.anaz,
                };
            }
    
            return bestScore;
        }
    };



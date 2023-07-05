/* eslint-disable */
import * as helper from "./helper";

const evaluteBoard = (b) => {

}

// INFO: minimax
// export const minimax = (small, board, positions, aiturn, sum, depth) => {

//     let emptyCells = helper.getAvailableCells(board);
//     let win = helper.checkWinner(small, board, positions)

//     // every possible move( ai or human) calculates 1

//     sum++;
//     // edge cases

//     // if player: x wins
//     if (win === 1) {
//         // if(depth == 3) return { val: 10, anaz: sum, depth };
//         return { val: -1, anaz: sum, depth };
//     } 
    
//     // if ai: o wins
//     else if ( win === 0) return { val: 1, anaz: sum, depth };

//     // if draw
//     else if (emptyCells.length === 0) return { val: 0, anaz: sum, depth };

//     // stop after depth 7 
//     else if (depth >= 7) return 0;


//     if (aiturn) {
//         // ai turn
//         let bestScore = { val: -Infinity, anaz: 0, depth };

//         for (let i of emptyCells) {
//             board[i] = "O";

//             // call minimax recursivle
//             let score = minimax(small, board, positions, false, sum, depth + 1);
//             board[i] = "";

//             // maximize bestscore for ai
//             bestScore = {
//                 val: Math.max(score.val, bestScore.val),
//                 anaz: score.anaz + bestScore.anaz,
//                 depth,
//             };
//         }

//         return bestScore;

//     } else {
//         // human turn
//         let bestScore = { val: Infinity, anaz: 0, depth };

//         for (let i of emptyCells) {
//             board[i] = "X";
//               // call minimax recursivle

//             let score = minimax(small, board, positions, true, sum, depth + 1);

//             board[i] = "";

//             // minimize hu scores ( -10 is best spot than -1)
//             bestScore = {
//                 val: Math.min(score.val, bestScore.val),
//                 anaz: score.anaz + bestScore.anaz,
//                 depth,
//             };


//         }

//         return bestScore;
//     }
// };






export const minimax = (alfa, betta,  board,  positions, aiturn, sum, depth) => {

    console.log('minimax workkks')

    let emptyCells = helper.getAvailableCells(board);
    let win = helper.checkWinner(board, positions)

    // every possible move( ai or human) calculates 1

    sum++;
    // edge cases

    // if player: x wins
    if (win === 1) {
        // if(depth == 3) return { val: 10, anaz: sum, depth };
        return { val: -1, anaz: sum, depth };
    } 
    
    // if ai: o wins
    else if ( win === 0) return { val: 1, anaz: sum, depth };

    // if draw
    else if (emptyCells.length === 0) return { val: 0, anaz: sum, depth };

    // stop after depth 7 
    else if (depth >= 5)  return { val: 0, anaz: sum, depth };


    if (aiturn) {
        // ai turn
        let bestScore = { val: -Infinity, anaz: 0, depth };

        for (let i of emptyCells) {
            board[i] = "O";

            // call minimax recursivle
            let score = minimax(alfa, betta, board, positions, false, sum, depth + 1);
            board[i] = "";

            // maximize bestscore for ai
            bestScore = {
                val: Math.max(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
                depth: score.depth
            };

            alfa = Math.max(alfa, score.val)

            if(betta <= alfa) break;
        }

        return bestScore;

    } else {
        // human turn
        let bestScore = { val: Infinity, anaz: 0, depth };

        for (let i of emptyCells) {
            board[i] = "X";
              // call minimax recursivle

            let score = minimax(alfa, betta, board, positions, true, sum, depth + 1);

            board[i] = "";

            // minimize hu scores ( -10 is best spot than -1)
            bestScore = {
                val: Math.min(score.val, bestScore.val),
                anaz: score.anaz + bestScore.anaz,
                depth: score.depth,
            };

            betta = Math.min(betta, score.val)

            if(betta <= alfa) break;

            
        }

        return bestScore;
    }
};

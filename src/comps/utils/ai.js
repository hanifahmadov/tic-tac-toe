/* eslint-disable */
import * as helper from "./helper";

// INFO: minimax
// export const minimax = (board, positions, aiturn, depth) => {
//     console.log("minimax::::::");

//     let isFull = helper.isBordFull(board);
//     let win = helper.checkWinner(board, positions);

//     // if x wins
//     if (win == 1) return { val: -1, depth: depth}

//     // if ai: o wins
//     if (win == 0) return { val: 1, depth: depth}

//     // draw
//     if (isFull) return { val: 0, depth: depth}

//     if (aiturn) {
//         let best = { val: -Infinity, depth: Infinity };

//         for (let i = 0; i < board.length; i++) {
//             if (board[i] == "") {
//                 board[i] = "O";
//                 let score = minimax(board, positions, false, depth + 1);
//                 board[i] = "";

//                 // maximize
//                 if (score.val == -1 && score.depth < best.depth) {
//                     best = score;
//                 } else {
//                     if(score.val > best.val && score.depth < best.depth) {
//                         best = score
//                     }
//                 }

//             }
//         }

//         return best;
//     } else {
//         let best = { val: Infinity, depth: Infinity };

//         for (let i = 0; i < board.length; i++) {
//             if (board[i] == "") {
//                 board[i] = "X";
//                 let score = minimax(board, positions, true, depth + 1);
//                 board[i] = "";

//                 // minimize
//                 if (score.val == -1 && score.depth < best.depth) {
//                     best = score;
//                 } else {
//                     if(score.val < best.val && score.depth < best.depth) best = score
//                 }
//             }
//         }

//         return best;
//     }
// };

const gen_boards = (board, p) => {
    return board.reduce((array, pos, i) => {
        if (pos === "") {
            const validBoard = [...board];
            validBoard[i] = p;
            array.push({ to: i, board: validBoard });
        }
        return array;
    }, []);
};

export const minimax = (board, positions, aiturn, move, d) => {
    console.log("minimax");


    move += 1;

    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(board, positions);

    // if x wins
    if (win == 1) return -1;

    // if ai: o wins
    if (win == 0) return 1;

    // draw
    if (isFull) return 0;

    return aiturn
        ? Math.max(
              -Infinity,
              ...gen_boards(board, "O").map((board) =>
                  minimax(board.board, positions, false, move, d + 1)
              )
          )
        : Math.min(
              Infinity,
              ...gen_boards(board, "X").map((board) =>
                  minimax(board.board, positions, true, d + 1)
              )
          );
};

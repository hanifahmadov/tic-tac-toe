/* eslint-disable */


// const gen_boards = (board, p) => {
//     return board.reduce((array, pos, i) => {
//         if (pos === "") {
//             const validBoard = [...board];
//             validBoard[i] = p;
//             array.push({ to: i, board: validBoard });
//         }
//         return array;
//     }, []);
// };

// export const minimax = (board, positions, aiturn, move, d) => {
//     console.log("minimax");

//     move += 1;

//     let isFull = helper.isBordFull(board);
//     let win = helper.checkWinner(board, positions);

//     // if x wins
//     if (win == 1) return -1;

//     // if ai: o wins
//     if (win == 0) return 1;

//     // draw
//     if (isFull) return 0;

//     return aiturn
//         ? Math.max(
//               -Infinity,
//               ...gen_boards(board, "O").map((board) =>
//                   minimax(board.board, positions, false, move, d + 1)
//               )
//           )
//         : Math.min(
//               Infinity,
//               ...gen_boards(board, "X").map((board) =>
//                   minimax(board.board, positions, true, d + 1)
//               )
//           );
// };



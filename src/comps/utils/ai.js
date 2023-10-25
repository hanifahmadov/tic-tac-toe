/* eslint-disable */
import * as helper from "./helper";

// INFO: minimax 3x3
export const minimax_sm = (player, board, positions, aiturn, depth, sum) => {
    console.log("minimax_sm::::::");

    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(player, board, positions);

    sum += 1;

    // if x wins
    if (win == 1) {
        let x = { v: -1, d: depth, s: sum };
        // console.log(x, 'x::::::::::::::::')
        return x;
    }

    // if ai: o wins
    if (win == 0) {
        let o = { v: 1, d: depth, s: sum };

        // console.log(o, 'o::::::::::::::::')
        return o;
    }

    // draw
    if (isFull) return { v: 0, d: depth, s: sum };

    if (aiturn) {
        let best = { v: -Infinity, d: Infinity, s: 0 };

        for (let i = 0; i < board.length; i++) {
            if (board[i] == null) {
                board[i] = player.ai.value;
                let score = minimax_sm(player, board, positions, false, depth + 1, sum);
                board[i] = null;

                best.s += score.s;

                if (score.v > best.v) {
                    best = score;
                }
            }
        }

        return best;
    } else {
        let best = { v: Infinity, d: Infinity, s: 0 };

        for (let i = 0; i < board.length; i++) {
            if (board[i] == null) {
                board[i] = player.hu.value;
                let score = minimax_sm(player, board, positions, true, depth + 1, sum);
                board[i] = null;

                best.s += score.s;

                if (score.v < best.v) {
                    best = score;
                }
            }
        }

        return best;
    }
};

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

// INFO: minimax larget
export const minimax_lg = (
    player,
    board,
    positions,
    aiturn,
    depth,
    sum,
    alfa,
    betta
) => {
    console.log("minimax_lg::::::");

    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(player, board, positions);

    sum += 1;

    // if x wins
    if (win == 1) return { v: -1, d: depth, s: sum };
        

    // if ai: o wins
    if (win == 0) return { v: 1, d: depth, s: sum };

    // draw
    if (isFull || depth >= 5) return { v: 0, d: depth, s: sum };

    if (aiturn) {
        let best = { v: -Infinity, d: Infinity, s: 0 };

        for (let i = 0; i < board.length; i++) {
            if (board[i] == null) {
                board[i] = player.ai.value;

                let score = minimax_lg(
                    player,
                    board,
                    positions,
                    false,
                    depth + 1,
                    sum,
                    alfa,
                    betta
                );
                board[i] = null;

                if (score.v > best.v) {
                    best = score;
                }

                alfa = Math.max(alfa, score.v)

                if (betta <= alfa) break;
            }
        }

        return best;
    } else {
        let best = { v: Infinity, d: Infinity, s: 0 };

        for (let i = 0; i < board.length; i++) {
            if (board[i] == null) {
                board[i] = player.hu.value;
                let score = minimax_lg(
                    player,
                    board,
                    positions,
                    true,
                    depth + 1,
                    sum,
                    alfa,
                    betta
                );
                board[i] = null;

                best.s += score.s;

                if (score.v < best.v) {
                    best = score;
                }

                betta = Math.min(betta, score.v)
                if (betta <= alfa) break;
            }
        }

        return best;
    }
};

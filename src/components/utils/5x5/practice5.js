/* eslint-disable */
// // TODO

// function checkWin5 (board, winPositions) {

//     for (let position of winPositions) {
//         let x = 5;
//         let o = 5;

//         for (let val of position) {
//             if (board[val] == "X") {
//                 x -= 1;
//             } else if (board[val] == "O") {
//                 o -= 1;
//             }
//         }

//         if (x == 0) {
//             return 1;
//         } else if (o == 0) {
//             return 0;
//         }
//     }
// };

// const winPositionsState5 = [
//     // left-to-right
//     [0, 1, 2, 3, 4],
//     [5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19],
//     [20, 21, 22, 23, 24],

//     // dioganals
//     [0, 6, 12, 18, 24],
//     [4, 8, 12, 16, 20],

//     // top-to-bottom
//     [0, 5, 10, 15, 20],
//     [1, 6, 11, 16, 21],
//     [2, 7, 12, 17, 22],
//     [3, 8, 13, 18, 23],
//     [4, 9, 14, 19, 23],
// ];


// let board =  [
    
//     "X", "X", "X", "", "X",
//     "", "", "", "X", "",
//     "", "", "X", "", "",
//     "O", "O", "O", "O", "O",
//     "X", "", "", "", "",
// ]

// console.log(checkWin5(board, winPositionsState5))



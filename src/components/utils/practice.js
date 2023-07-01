/* eslint-disable */

// const checkWin5 = (board, winPositions) => {
//     // iterating rows
//     for (let position of winPositions) {
//         let x = 5;
//         let o = 5;

//         for (let [i, j] of position) {
//             if (board[i][j] == "X") x--;
//             if (board[i][j] == "O") o--;
//         }

//         if (x == 0) return 1;
//         if (o == 0) return 0;
//     }
// };

// const winPositionsState5 = [
//     // left-to-right
//     [[0,0], [0,1], [0,2], [0,3], [0,4]],
//     [[1,0], [1,1], [1,2], [1,3], [1,4]],
//     [[2,0], [2,1], [2,2], [2,3], [2,4]],
//     [[3,0], [3,1], [3,2], [3,3], [3,4]],
//     [[4,0], [4,1], [4,2], [4,3], [4,4]],

//     // dioganals
//     [[0,0], [1,1], [2,2], [3,3], [4,4]],
//     [[0,4], [1,3], [2,2], [3,1], [4,0]],

//     // top-to-bottom
//     [[0,0], [1,0], [2,0], [3,0], [4,0]],
//     [[0,1], [1,1], [2,1], [3,1], [4,1]],
//     [[0,2], [1,2], [2,2], [3,2], [4,2]],
//     [[0,3], [1,3], [2,3], [3,3], [4,3]],
//     [[0,4], [1,4], [2,4], [3,4], [4,4]],
// ];

const aviableSpots5 = (board, index) => {
    let res = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "") {
                res.push([i, j]);
            }
        }
    }

    return res;
};

let board = [
    ['X', 'X', 'X', 'X', ''],
    ['X', 'X', 'X', 'X', ''],
    ['X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'X']

]

for(let [i, j] of aviableSpots5(board)){
    console.log(i, "i::")
    console.log(j, "j::")
}

console.log(aviableSpots5(board))
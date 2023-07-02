/* eslint-disable */
import { atom } from "recoil";


// WARN: TABLE 5 STATES         

// INFO: board 5 
/* 

        ['0', '1', '2', '3', '4'],
        ['5', '6', '7', '8', '9'],
        ['10', '11', '12', '13', '14'],
        ['15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24']

*/

// INFO: arr for creating board 
export const arr5x5 = [
    [0, 5],
    [5, 10],
    [10, 15],
    [15, 20],
    [20, 25],
];


// INFO: boardState 
export const boardState5x5= atom({
    key: "boardState5x5",
    default: [

        "",
        "",
        "",
        "",
        "",

        "",
        "",
        "",
        "",
        "",

        "",
        "",
        "",
        "",
        "",

        "",
        "",
        "",
        "",
        "",

        "",
        "",
        "",
        "",
        "",
    ],
});

// INFO: win positions 5
export const winPositionsState5x5 = [
    // left-to-right
    [0,  1,  2,  3,  4],
    [5,  6,  7,  8,  9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // dioganals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],

    // top-to-bottom
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 23],
];





// INFO: player 5
export const playerState5x5 = atom({
    key: "playersState5x5",
    default: {
        hu: {
            value: "X",
            moves: [],
            turn: true,
        },

        ai: {
            value: "O",
            moves: [],
            turn: false,
        },
    },
});

// INFO: current
export const currentState5x5 = atom({
    key: "currentState5x5",
    default: {
        totalMoves: 0,
        winIndexes: [],
        gameOver: false,
        draw: false,
    },
});

// export const memoState = atom({
//     key: "memo",
//     default: {
//         ai: {
//             turn: false,
//             store: [],
//         },

//         hu: {
//             turn: false,
//             store: [],
//         },
//     },
// });

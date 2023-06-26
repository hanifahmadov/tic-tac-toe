/* eslint-disable */
import { atom } from "recoil";

// const board = [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],
// ]


// win positions matrix
export const winPositionsState = [
    // left-to-right
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // dioganals
    [0, 4, 8],
    [2, 4, 6],

    // top-to-bottom
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

// board initial state
export const boardState = atom({
    key: 'boardState',
    default: ["", "", "", "", "", "", "", "", ""]
});




// 2 players moves states
export const playerState =  atom({
    key: 'playersState',
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
    }
})




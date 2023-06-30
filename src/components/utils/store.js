/* eslint-disable */
import { atom } from "recoil";

// const board = [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],
// ]

// INFO: win position state 
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



// INFO: board state 
export const boardState = atom({
    key: "boardState",
    default: ["", "", "", "", "", "", "", "", ""],
});



// INFO: game over state 
export const gameOverState = atom ({
    key: 'gameOver',
    default: {
        over: false,
        draw: false
    }
})


// INFO: player state 
export const playerState = atom({
    key: "playersState",
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


// INFO: setting state 
export const settingsState = atom({
  key:'settingsState',
  default: {
    txt: true,
    fxf: false,
    person: true,
    ai: false,
  }
});



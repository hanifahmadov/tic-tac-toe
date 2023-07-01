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


// INFO: currentState 
export const currentState = atom({
    key: 'currentState',
    default: {
        totalMoves: 0,
        winResultIndexes: [],
        gameOver: false,
        draw: false
    }
})


// INFO: board state 
export const boardState = atom({
    key: "boardState",
    default: ["", "", "", "", "", "", "", "", ""],
});



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
    reset: false,
    txt: true,
    fxf: false,
    person: true,
    ai: false,
  }
});



// FIXME: TABLE 5 STATES                                                         

// INFO: board 5 
export const boardState5 = atom({
    key: 'boardState5',
    default: [
        ['X', '', '', '', ''],
        ['', 'X', '', '', ''],
        ['', '', 'X', '', ''],
        ['', '', '', 'X', ''],
        ['', '', '', '', 'X']
    ]
})

// INFO: win positions 5 
export const winPositionsState5 = [
    // left-to-right
    [[0,0], [0,1], [0,2]]
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],

    // dioganals
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]],

    // top-to-bottom
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
];


// INFO: player 5 
export const playerState5= atom({
    key: "playersState5",
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
export const currentState5 = atom({
    key: 'currentState5',
    default: {
        totalMoves: 0,
        winIndexes: [],
        gameOver: false,
        draw: false
    }
})



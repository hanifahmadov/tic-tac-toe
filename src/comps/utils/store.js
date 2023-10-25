/* eslint-disable */
import { atom } from "recoil";


/*  5x5

        '',  '',  '',  '',  '',
        '',  '',  '',  '',  '',
        '',  '',  '',  '',  '',
        '',  '',  '',  '',  '',
        '',  '',  '',  '',  '', 


*/



// INFO: board state 3x3
export const boardState3x3 = atom({
    key: "boardState3x3",
    default: new Array(9).fill(null)
});



// INFO: boardState
export const boardState5x5 = atom({
    key: "boardState5x5",
    default: new Array(25).fill(null)
});

export const ind5 = [
    [0, 5],
    [5, 10],
    [10, 15],
    [15, 20],
    [20, 25],
];

export const ind3 = [
    [0, 3],
    [3, 6],
    [6, 9],
];



// INFO: win positions 5
export const winPositionsState5x5 = [
    // left-to-right
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
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
    [4, 9, 14, 19, 24],
];


export const winPositionState5x5_dioganals = [
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
]





// INFO: board INDEX 3x3
export const boardIndex3x3 = atom({
    key: "boardIndex3x3",
    default: [
        [0, 3],
        [3, 6],
        [6, 9],
    ],
});

// INFO: board INDEX 5x5
export const boardIndex5x5 = atom({
    key: "boardIndex5x5",
    default: [
        [0, 5],
        [5, 10],
        [10, 15],
        [15, 20],
        [20, 25],
    ],
});

// INFO: win position state 3x3
export const winPositionsState3x3 = [
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

export const winPositionsState4x4 = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [21, 22, 23, 24],

    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [5, 11, 17, 23],
    [6, 12, 18, 24],

    [3, 7, 11, 15],
    [4, 8, 12, 16],
    [8, 12, 16, 20],
    [9, 13, 17, 21],

    [0, 5, 10, 15],
    [5, 10, 15, 20],
    [1, 6, 11, 16],
    [6, 11, 16, 21],
    [2, 7, 12, 17],
    [7, 12, 17, 22],
    [3, 8, 13, 18],
    [8, 13, 18, 23],
    [4, 9, 14, 19],
    [9, 14, 19, 24],
];

// INFO: currentState
export const currentState = atom({
    key: "currentState",
    default: {
        totalMoves: 0,
        winPositions: [],
        gameOver: false,
        draw: false
    },
});

// TODO: try this
//  draw: totalMoves == 9 && !gameOver ? true : false,

// INFO: player state
export const playerState = atom({
    key: "playerState",
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
    key: "settingsState",
    default: {
        reset: false,
        txt: true,
        fxf: false,
        pvp: true,
        ai: false,
        easy: true
    },
});


export const randomEmoj = [
    "https://yt3.ggpht.com/HmsXEgqUogkQOnL5LP_FdPit9Z909RJxby-uYcPxBLNhaPyqPTcGwvGaGPk2hzB_cC0hs_pV=w48-h48-c-k-nd",
    "https://yt3.ggpht.com/2Ht4KImoWDlCddiDQVuzSJwpEb59nZJ576ckfaMh57oqz2pUkkgVTXV8osqUOgFHZdUISJM=w48-h48-c-k-nd",
    "https://yt3.ggpht.com/EURfJZi_heNulV3mfHzXBk8PIs9XmZ9lOOYi5za6wFMCGrps4i2BJX9j-H2gK6LIhW6h7sY=w48-h48-c-k-nd",
    "https://yt3.ggpht.com/2Ht4KImoWDlCddiDQVuzSJwpEb59nZJ576ckfaMh57oqz2pUkkgVTXV8osqUOgFHZdUISJM=w48-h48-c-k-nd",
    "https://yt3.ggpht.com/g6_km98AfdHbN43gvEuNdZ2I07MmzVpArLwEvNBwwPqpZYzszqhRzU_DXALl11TchX5_xFE=w48-h48-c-k-nd",
];
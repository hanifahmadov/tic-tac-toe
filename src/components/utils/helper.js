/* eslint-disable */

import { useRecoilState } from "recoil";
import { gameOverState } from "./store";

// HEADER: checkWin
// hecks board if there is win
export const checkWin = (board, winPositions) => {
    for (let position of winPositions) {
        let x = 3;
        let o = 3;

        for (let val of position) {
            if (board[val] == "X") {
                x -= 1;
            } else if (board[val] == "O") {
                o -= 1;
            }
        }

        if (x == 0) {
            return 1;
        } else if (o == 0) {
            return 0;
        }
    }
};

// HEADER
// get win positions if game is over
export const getWinPositions = (winPositions, arr) => {
    let res = [];

    for (let position of winPositions) {
        let count = 3;

        for (let val of position) {
            if (arr.includes(val)) count -= 1;
        }

        if (count == 0) {
            res = [...res, ...position];
        }
    }

    return res;
};

// HEADER
// get avialable spots from board
export const aviableSpots = (board) => {
    let res = [];

    // store empty spots index
    board.forEach((val, index) => {
        if (val === "") {
            res.push(index);
        }
    });

    return res;
};

// HEADER
// get random spot from available spots from board
export const getRandomSpot = (board) => {
    // get available spots
    let res = aviableSpots(board);

    // return randomly index from available spots
    return res[Math.floor(Math.random() * res.length)];
};


// INFO: make move ai 
export const makeMove = (
    currentBoardState,
    setBoard,
    player,
    setPlayer,
    index
) => {
    // ai plays
    if (player.ai.turn) {
        currentBoardState[index] = "O";
        setBoard(currentBoardState);

        setPlayer({
            hu: {
                value: "X",
                moves: [...player.hu.moves],
                turn: true,
            },

            ai: {
                value: "O",
                moves: [...player.ai.moves, index],
                turn: false,
            },
        });

        return;
    }

    // hu plays
    if (player.hu.turn) {
        if (currentBoardState[index] === "") {
            currentBoardState[index] = "X";
            setBoard(currentBoardState);

            setPlayer({
                hu: {
                    value: "X",
                    moves: [...player.hu.moves, index],
                    turn: false,
                },

                ai: {
                    value: "O",
                    moves: [...player.ai.moves],
                    turn: true,
                },
            });
        }

        return;
    }
};


// INFO: minimax 
export const getBestIndex_WithMinimax = (
    boardCurrentState,
    winPositionsState,
    minimax
) => {
    let index = null;
    let bestScore = { val: -Infinity, anaz: 0 };

    for (let i = 0; i < boardCurrentState.length; i++) {
        if (boardCurrentState[i] === "") {
            boardCurrentState[i] = "O";
            let score = minimax(
                boardCurrentState,
                winPositionsState,
                false,
                0,
                0
            );
            boardCurrentState[i] = "";

            bestScore.anaz = bestScore.anaz + score.anaz;

            if (score.val > bestScore.val) {
                bestScore.val = score.val;
                index = i;
            }
        }
    }

    return index;
};



// INFO: check board after every move made to see if there is win or not!
export const checkBoard_afterEveryMove = (
    player,
    board,
    winPositionsState,
    getWinPositions,
    checkWin
) => {
    let totalMoves = player.ai.moves.length + player.hu.moves.length;
    let winResultIndexes = [];
    let gameOver = false;
    let draw = false;

    // if x wins
    if (checkWin(board, winPositionsState) == 1) {
        // get array of winsspot for x
        winResultIndexes = getWinPositions(winPositionsState, player.hu.moves);
        // end game
        gameOver = true;

        return { totalMoves, winResultIndexes, draw, gameOver};
    } // if o wins
    else if (checkWin(board, winPositionsState) == 0) {
        // get array of winspot for o
        winResultIndexes = getWinPositions(winPositionsState, player.ai.moves);
        // end game
        gameOver = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } // if game over and it means its a draw
    else if (totalMoves == 9) {
        gameOver = true;
        draw = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } else {
        return { totalMoves, winResultIndexes, draw, gameOver };
    }
};



// INFO: handle settings click 
export const handleSettingClicks = (val, setting, setSetting) => {
    if (val === "size5x5") {
        setSetting({
            ...setting,
            fxf: true,
            txt: false,
        });
    } else if (val === "size3x3") {
        setSetting({
            ...setting,
            fxf: false,
            txt: true,
        });
    } else if (val === "person") {
        setSetting({
            ...setting,
            person: true,
            ai: false,
        });
    } else if (val === "ai") {
        setSetting({
            ...setting,
            person: false,
            ai: true,
        });
    } else if (val === "reset") {

        setSetting({
            txt: true,
            fxf: false,
            person: true,
            ai: false,
        });
    }
};

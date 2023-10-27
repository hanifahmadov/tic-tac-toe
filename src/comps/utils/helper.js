/* eslint-disable */
import { minimax_lg, minimax_sm } from "./ai";
import * as store from './store'

export function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

// INFO: checkWinner
export function checkWinner(player, board, positions) {
    for (let position of positions) {
        let win = true;

        for (let i of position) {
            if (board[i] == null || board[i] != board[position[0]]) {
                win = false;
                break;
            }
        }

        if (win) {
            if (board[position[0]] == player.hu.value) return 1;
            if (board[position[0]] == player.ai.value) return 0;
        }
    }
}

// INFO: getWinnerCells
export function getWinnerCells(small, arr, positions) {
    let temp = [];

    for (let position of positions) {
        let count = small ? 3 : 5;

        for (let val of position) {
            if (arr.includes(val)) count -= 1;
        }

        if (count == 0) {
            temp = [...temp, ...position];
        }
    }

    return temp;
}

// INFO: getAvailableCells
export function getAvailableCells(board) {
    let temp = [];

    // store empty spots index
    board.forEach((val, index) => {
        if (val == null) {
            temp.push(index);
        }
    });

    return temp;
}

// INFO: getRandomCell
export function getRandomCell(board) {
    // get available spots
    let res = aviableSpots(board);

    // return randomly index from available spots
    return res[Math.floor(Math.random() * res.length)];
}

// INFO: make move
export function makeMove(board, player, current, index, positions, setting) {

    board = JSON.parse(JSON.stringify(board));
    player = JSON.parse(JSON.stringify(player));
    current = JSON.parse(JSON.stringify(current));
    setting = JSON.parse(JSON.stringify(setting));

    
    

    // INFO: vs Ai
    // WARN: player ai
    if (player.ai.turn && !current.gameOver && setting.ai) {

        board[index] = player.ai.value;

        current.totalMoves += 1;

        player.ai.moves.push(index);
        player.ai.turn = false;
        player.hu.turn = true;

        let win = checkWinner(player, board, positions);

    

        if (win == 0) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.ai.moves],
                positions
            );

            return { board, current, player };
        } 

        if(isBordFull(board) == true){
            current.gameOver = true;
        }

        return { board, current, player };

    }


    // WARN: player hu
    if (player.hu.turn && !current.gameOver && setting.ai) {

        board[index] = player.hu.value;
        current.totalMoves += 1;

        player.hu.moves.push(index);
        player.hu.turn = false;
        player.ai.turn = true;

        let win = checkWinner(player, board, positions);

        if (win == 1) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.hu.moves],
                positions
            );

            return { board, current, player };
        }

        if(isBordFull(board) == true){
            current.gameOver = true;
        }

        return { board, current, player };
    }

    // INFO: PvP
    // WARN: player ai && pvp
    if (player.ai.turn && !current.gameOver && setting.pvp) {
        board[index] = player.ai.value;
        current.totalMoves += 1;

        player.ai.moves.push(index);
        player.ai.turn = false;
        player.hu.turn = true;

        let win = checkWinner(player, board, positions);

        if (win == 0) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.ai.moves],
                positions
            );

            return { board, current, player };
        }

        if(isBordFull(board) == true){
            current.gameOver = true;
        }

        return { board, current, player };
    }

    // WARN: player hu && pvp
    if (player.hu.turn && !current.gameOver && setting.pvp) {
        board[index] = player.hu.value;
        current.totalMoves += 1;

        player.hu.moves.push(index);
        player.hu.turn = false;
        player.ai.turn = true;

        let win = checkWinner(player, board, positions);

        // console.log('win inside hu:::', win)

        if (win == 1) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.hu.moves],
                positions
            );

            return { board, current, player };
        }

        if(isBordFull(board) == true){
            current.gameOver = true;
        }

        return { board, current, player };
    }
}

// INFO: getBestIndex
export function getBestIndex(player, board, positions, large, current) {
    board = JSON.parse(JSON.stringify(board));

    let index = null;
    let best = { v: -Infinity, d: Infinity, s: 0 };

    for (let i = 0; i < board.length; i++) {
        if (board[i] == null) {
            board[i] = player.ai.value;
            let score = large
                ? minimax_lg(player, board, positions, false, 0, 0, -1000, 1000)
                : minimax_sm(player, board, positions, false, 0, 0);

            board[i] = null;

            best.s += score.s;

            if (score.v > best.v) {
                best = score;
                index = i;
            }
        }
    }

    return index;
}

// INFO: handle settings click
export function handleSettingClicks(val, board, setting, current, player) {

    setting = JSON.parse(JSON.stringify(setting));
    current = JSON.parse(JSON.stringify(current));
    board = JSON.parse(JSON.stringify(board));
    current = JSON.parse(JSON.stringify(current));
    player = JSON.parse(JSON.stringify(player));


    if (val === "size5x5") {
        setting.fxf = true;
        setting.txt = false;
    } else if (val === "size3x3") {
        setting.fxf = false;
        setting.txt = true;
    } else if (val === "pvp") {
        setting.pvp = true;
        setting.ai = false;
    } else if (val === "ai") {
        setting.pvp = false;
        setting.ai = true;
    } else if (val == "easy") {
        setting.easy = !setting.easy;
    } else if (val === "reset") {
        let b3 = new Array(9).fill(null);
        let b5 = new Array(25).fill(null);

        board = setting.txt ? b3 : b5;

        setting.reset = false;

        current = {
            totalMoves: 0,
            winPositions: [],
            gameOver: false,
            draw: false,
            easy: true,
        };

        player = {
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
        };
    }

    return { board, setting, current, player };
}

export function isBordFull(b) {
    for (let i of b) {
        if (i == null) return false;
    }

    return true;
}


// minimax_lg(player, board, positions, false, 0, 0, -1000, 1000)

export function getRandomIndex_forAi(b5, wpos, current){


    if(current.totalMoves < 4){

        let random = new Set([...store.winPositionState5x5_dioganals[0],...store.winPositionState5x5_dioganals[1]])
        console.log('random', random)

        return 

    } else {

    }

}
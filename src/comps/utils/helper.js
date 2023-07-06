/* eslint-disable */
import { minimax } from "./ai";

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
export function checkWinner(board, positions) {
    for (let position of positions) {
        let win = true;

        for (let i of position) {
            if (board[i] == "" || board[i] != board[position[0]]) {
                win = false;
                break;
            }
        }

        if (win) {
            if (board[position[0]] == "X") return 1;
            if (board[position[0]] == "O") return 0;
        }
    }
}

// INFO: getWinnerCells
export function getWinnerCells(small, arr, positions) {
    let temp = [];

    for (let position of positions) {
        let count = small ? 3 : 4;

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
        if (val === "") {
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
    player = JSON.parse(JSON.stringify(player));
    current = JSON.parse(JSON.stringify(current));

    // INFO: vs Ai
    // WARN: player ai
    if (player.ai.turn && !current.gameOver && setting.ai) {
        board[index] = "O";
        current.totalMoves += 1;

        player.ai.moves.push(index);
        player.ai.turn = false;
        player.hu.turn = true;

        let win = checkWinner(board, positions);

        if (win == 0) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.ai.moves],
                positions
            );
            return { board, current, player };
        }

        return { board, current, player };
    }

    // WARN: player hu
    if (player.hu.turn && !current.gameOver && setting.ai) {
        board[index] = "X";
        current.totalMoves += 1;

        player.hu.moves.push(index);
        player.hu.turn = false;
        player.ai.turn = true;

        let win = checkWinner(board, positions);

        if (win == 1) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.hu.moves],
                positions
            );

            return { board, current, player };
        }

        return { board, current, player };
    }

    // INFO: PvP
    // WARN: player ai && pvp
    if (player.ai.turn && !current.gameOver && setting.pvp) {
        board[index] = "O";
        current.totalMoves += 1;

        player.ai.moves.push(index);
        player.ai.turn = false;
        player.hu.turn = true;

        let win = checkWinner(board, positions);

        if (win == 0) {
            current.gameOver = true;
            current.winPositions = getWinnerCells(
                setting.txt,
                [...player.ai.moves],
                positions
            );

            return { board, current, player };
        }

        return { board, current, player };
    }

    // WARN: player hu && pvp
    if (player.hu.turn && !current.gameOver && setting.pvp) {
        board[index] = "X";
        current.totalMoves += 1;

        player.hu.moves.push(index);
        player.hu.turn = false;
        player.ai.turn = true;

        let win = checkWinner(board, positions);

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

        return { board, current, player };
    }
}

// INFO: getBestIndex
export function getBestIndex(board, positions) {

    let index = null;
    let best = -100;


    console.log(emptyCells, 'emptycells')

    for (let i of emptyCells) {

        board[i] = "O";

        let score = minimax(board, positions, false);

        board[i] = "";

        if (score > best) {
            best = score;
            index = i;
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
    } else if (val === "reset") {
        let b3 = ["", "", "", "", "", "", "", "", ""];
        let b5 = [
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
        ];

        board = setting.txt ? b3 : b5;

        setting.reset = false;

        current = {
            totalMoves: 0,
            winPositions: [],
            gameOver: false,
            draw: false,
            easyMode: true,
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
        if (i == "") return false;
    }

    return true;
}

// // INFO: get status
// export async function getStatus(
//     current,
//     player,
//     board,
//     positions,
//     checkWinner,
//     getWinnerCells
// ) {
//     let temp = checkWinner(true, [...board], positions);

//     if (temp == 1) {
//         current.winPositions = getWinnerCells([...player.hu.moves], positions);
//         current.gameOver = true;

//         return current;
//     } else if (temp == 0) {
//         current.winPositions = getWinnerCells([...player.ai.moves], positions);
//         current.gameOver = true;

//         return current;
//     } else if (current.totalMoves == 9) {
//         current.draw = true;
//         current.gameOver = true;

//         return current;
//     } else {
//         return true;
//     }
// }

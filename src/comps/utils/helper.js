/* eslint-disable */
import { useEffect } from "react";
import { minimax } from "./ai";

// INFO: shuffle array
export function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

<<<<<<< HEAD
<<<<<<< HEAD:src/components/utils/helper.js
import { useRecoilState } from "recoil";
import { gameOverState } from "./store";
import { shuffle } from "./helper5";
=======
// INFO: shuffle array 
export function shuffleArray (array) {
    let currentIndex = array.length,  randomIndex;
  
=======
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
<<<<<<< HEAD
  }
>>>>>>> fb9955b (5x5 minimax loop problem):src/components/utils/3x3/helper.js





// INFO: checkWinner 
export function checkWinner (small, board, positions) {
=======
}
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)

// INFO: checkWinner
export function checkWinner(small, board, positions) {
    for (let position of positions) {
        let x = small ? 3 : 5;
        let o = small ? 3 : 5;

        for (let val of position) {
            if (board[val] === "X") {
                x -= 1;
            } else if (board[val] === "O") {
                o -= 1;
            }
        }

        if (x == 0) {
            return 1;
        } else if (o == 0) {
            return 0;
        }
    }
}

// INFO:getWinPositions
export function getWinnerCells(arr, positions) {
    let temp = [];

    for (let position of positions) {
        let count = 3;

        for (let val of position) {
            if (arr.includes(val)) count -= 1;
        }

        if (count == 0) {
            temp = [...temp, ...position];
        }
    }

    return temp;
}

// INFO: aviableSpots
export function getAvailableCells(board) {
    let temp = [];

    // store empty spots index
    board.forEach((val, index) => {
        if (val === "") {
            temp.push(index);
        }
    });
<<<<<<< HEAD
    
    return shuffle(res);
};



=======

    return temp;
}
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)

// INFO: getRandomCell
export function getRandomCell(board) {
    // get available spots
    let res = aviableSpots(board);

    // return randomly index from available spots
    return res[Math.floor(Math.random() * res.length)];
}

// INFO: make move
export function makeMove(
    board,
    player99,
    current,
    index,
    positions
) {

    let player = JSON.parse(JSON.stringify(player99));

    // ai plays
    if (player.ai.turn && !current.gameOver) {

        board[index] = "O";
        current.totalMoves += 1;
        
    

        player.ai.moves.push(index)
        player.ai.turn = false
        player.hu.turn = true;

        let win = checkWinner(true, board, positions);

        if(win == 0) {
            current.gameOver = true
            current.winPositions = getWinnerCells([...player.ai.moves], positions);
            return { board, current, player };
        } 

        return { board, current, player };
    }

    // hu plays
    if (player.hu.turn && !current.gameOver) {


        board[index] = "X";
        current.totalMoves += 1;

        player.hu.moves.push(index);
        player.hu.turn = false;
        player.ai.turn = true

        let win = checkWinner(true, board, positions);

        if(win == 1) {
            current.gameOver = true
            current.winPositions = getWinnerCells([...player.hu.moves], positions);
            return { board, current, player };
        } 

        return { board, current, player };
      
    }
}

// INFO: getBestIndex
export function getBestIndex(currentBoard, winPositions) {
    let index = null;
    let bestScore = { val: -Infinity, anaz: 0, depth: 0 };

    for (let i = 0; i < currentBoard.length; i++) {
        if (currentBoard[i] == "") {
            currentBoard[i] = "O";

            let score = minimax(
                currentBoard,
                winPositions,
                false, // ai turn
                0, // sum,
                0 // depth
            );

            currentBoard[i] = "";

            bestScore.anaz = bestScore.anaz + score.anaz;

            // WARN: console
            // console.log(score);

            if (score.val > bestScore.val) {
                bestScore.val = score.val;
                index = i;
            }
        }
    }

    return index;
}

// INFO: check board after every move made to see if there is win or not!
export function checkBoard_afterEveryMove(
    player,
    board,
    winPositionsState,
    getWinPositions,
    checkWin
) {
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

        return { totalMoves, winResultIndexes, draw, gameOver };
    } // if o wins
    else if (checkWin(board, winPositionsState) == 0) {
        // get array of winspot for o
        winResultIndexes = getWinPositions(winPositionsState, player.ai.moves);
        // end game
        gameOver = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } // if game over and it means its a draw
    else if (totalMoves === 9) {
        gameOver = true;
        draw = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } else {
        return { totalMoves, winResultIndexes, draw, gameOver };
    }
}

// INFO: handle settings click
export function handleSettingClicks(val, setting, setSetting, current) {
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
            reset: current.gameOver ? true : false,
            txt: true,
            fxf: false,
            person: true,
            ai: false,
        });
    }
}

//  INFO: reset all
export function resetAll(
    setBoard,
    setSetting,
    setPlayer,
    setCurrent,
    setting,
    current
) {
    if (setting.reset && current.gameOver) {
        setBoard(["", "", "", "", "", "", "", "", ""]);

        setCurrent({
            totalMoves: 0,
            winResultIndexes: [],
            gameOver: false,
            draw: false,
        });

        setPlayer({
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
        });

        setSetting({
            reset: false,
            txt: true,
            fxf: false,
            person: true,
            ai: false,
        });
    }
}


// INFO: get status
export async function getStatus(
    current,
    player,
    board,
    positions,
    checkWinner,
    getWinnerCells
) {
    let temp = checkWinner(true, [...board], positions);

    if (temp == 1) {

        current.winPositions = getWinnerCells([...player.hu.moves], positions);
        current.gameOver = true;

        return current;

    } else if (temp == 0) {

        current.winPositions = getWinnerCells([...player.ai.moves], positions);
        current.gameOver = true;

        return current;

    } else if (current.totalMoves == 9) {

        current.draw = true;
        current.gameOver = true;

        return current;

    } else {
        return true;
    }



}

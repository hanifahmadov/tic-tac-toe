/* eslint-disable */

// INFO: shuffle array 
export function shuffleArray (array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





// INFO: checkWinner 
export function checkWinner (small, board, positions) {

    for (let position of positions) {
        let x = small ? 3 : 5;
        let o = small ? 3 : 5;

        for (let val of position) {
            if (board[val] == "X") {
                x -= 1;
            } else if (board[val] == "O") {
                o -= 1;
            }
        }

        if (x == 0 ) {
            return 1
        } else if (o == 0) {
            return 0
        }
    }

};




// INFO:getWinPositions 
export function getWinPositions (arr, positions ) {
    let temp = [];

    for (let position of positions) {
        let count = 3;

        for (let val of position) {
            if (arr.includes(val)) count -= 1;
        }

        if (count == 0) {
            temp = [...res, ...position];
        }
    }

    return temp;
};




// INFO: aviableSpots 
export function getAvailableCells (board) {
    let temp = [];

    // store empty spots index
    board.forEach((val, index) => {
        if (val === "") {
            temp.push(index);
        }
    });

    return res;
};




// INFO: getRandomCell
export function getRandomCell(board) {
    // get available spots
    let res = aviableSpots(board);

    // return randomly index from available spots
    return res[Math.floor(Math.random() * res.length)];
};



// INFO: make move 
export function makeMove(
    board,
    setBoard,
    player,
    setPlayer,
    current,
    index
) {


    // ai plays
    if (player.ai.turn && !current.gameOver) {
        board[index] = "O";
        setBoard(board);

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
    if (player.hu.turn && !current.gameOver) {
        if (board[index] === "") {
            board[index] = "X";
            setBoard(board);

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



// INFO: getBestIndex_WithMinimax 
export function getBestIndex_WithMinimax (
    currentBoard,
    winPositionsState,
    minimax,
    checkwin
) {
    let index = null;
    let bestScore = { val: -Infinity, anaz: 0 };

    console.log('getBestIndex_WithMinimax 3333')

    for (let i = 0; i < currentBoard.length; i++) {
        if (currentBoard[i] == "") {
            currentBoard[i] = "O";
            let score = minimax(
                currentBoard,
                winPositionsState,
                false,
                0,
                checkWin
            );
            currentBoard[i] = "";

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
export function checkBoard_afterEveryMove (
    player,
    board,
    winPositionsState,
    getWinPositions,
    checkWin,
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

        return { totalMoves, winResultIndexes, draw, gameOver};
    } // if o wins
    else if (checkWin(board, winPositionsState) == 0) {
        // get array of winspot for o
        winResultIndexes = getWinPositions(winPositionsState, player.ai.moves);
        // end game
        gameOver = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } // if game over and it means its a draw
    else if (totalMoves >= 9) {
        gameOver = true;
        draw = true;

        return { totalMoves, winResultIndexes, draw, gameOver };
    } else {
        return { totalMoves, winResultIndexes, draw, gameOver };
    }
};



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
};



//  INFO: reset all
export function resetAll (setBoard, setSetting, setPlayer, setCurrent, setting, current){

    if(setting.reset && current.gameOver){

        setBoard(["", "", "", "", "", "", "", "", ""])

        setCurrent({
            totalMoves: 0,
            winResultIndexes: [],
            gameOver: false,
            draw: false
        })

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
        })

        setSetting({
            reset: false,
            txt: true,
            fxf: false,
            person: true,
            ai: false,
        })
    }
}



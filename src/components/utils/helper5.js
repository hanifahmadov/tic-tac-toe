/* eslint-disable */
import { minimax5 } from "./ai";

// INFO: shuffle array
export const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex = 0;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};



//  INFO: getBoardPlayedValues  
export const getBoardPlayedValues = (board) => {

    let res = [];

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== ""){
                res.push(i + ',' + j)
            }
        }
    }

    return res;

}




// INFO: make move
export const makeMove5 = (board, setBoard, player, setPlayer, index) => {
    // ai plays
    if (player.ai.turn) {
        let [i, j] = index;
        board[i][j] = "O";
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
    if (player.hu.turn) {
        let [i, j] = index.split(",").map((val) => Number(val));

        if (board[i][j] === "") {
            board[i][j] = "X";
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

// INFO: getBestIndex_WithMinimax5 
export const getBestIndex_WithMinimax5 = (tempBoard, winPositionsState5, memo, setMemo) => {

    console.log(tempBoard) 
    let index = [-1, -1];
    let bestScore = { val: -Infinity, anaz: 0 };

    let cache =  {
        ai: {
            turn: false,
            store: [],
        },

        hu: {
            turn: false,
            store: [],
        },
    }

    let currentBoardState  = getBoardPlayedValues(tempBoard);

    for (let i = 0; i < tempBoard.length; i++) {
        for (let j = 0; j < tempBoard[i].length; j++) {
            if (tempBoard[i][j] == "") {
                tempBoard[i][j] = "O";

    let currentBoardState  = getBoardPlayedValues(tempBoard);
    let score = minimax5(currentBoardState, cache, [i, j], tempBoard, winPositionsState5, false, 0 );

                tempBoard[i][j] = "";

                bestScore.anaz = bestScore.anaz + score.anaz;

                if (score.val > bestScore.val) {
                    bestScore.val = score.val;
                    index = [i, j];
                }
            }
        }
    }

    return index;
};

// INFO: aviableSpots
export const aviableSpots5 = (board) => {
    let res = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "") {
                res.push([i, j]);
            }
        }
    }

    return res;
};

// INFO: checkWin 5
export const checkWin5 = (board, winPositions) => {
    // iterating rows
    for (let position of winPositions) {
        let x = 5;
        let o = 5;

        for (let [i, j] of position) {
            if (board[i][j] == "X") x--;
            if (board[i][j] == "O") o--;
        }

        if (x == 0) return 1;
        if (o == 0) return 0;
    }
};

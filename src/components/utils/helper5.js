/* eslint-disable */



// INFO: make move 
export const makeMove5 = (
    board,
    setBoard,
    player,
    setPlayer,
    index
) => {



    // ai plays
    if (player.ai.turn) {
        // let [i, j] = index;
        // board[i][j]= "O";
        // setBoard(currentBoardState);

        // setPlayer({
        //     hu: {
        //         value: "X",
        //         moves: [...player.hu.moves],
        //         turn: true,
        //     },

        //     ai: {
        //         value: "O",
        //         moves: [...player.ai.moves, index],
        //         turn: false,
        //     },
        // });

        // return;
    }

    // hu plays
    if (player.hu.turn) {

        let [i, j] = index.split(',').map(val => Number(val))

        if ( board[i][j] = 'X') {
            
            setBoard(board)

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
export const getBestIndex_WithMinimax5 = (
    tempBoard,
    winPositionsState5,
    minimax
) => {
    let index = [-1, -1];
    let bestScore = { val: -Infinity, anaz: 0 };

    for (let i = 0; i < tempBoard.length; i++) {
        for(let j = 0; j < tempBoard[0].length; j++){
            if (tempBoard[i][j] === "") {
                tempBoard[i][j] = "O";

                let score = minimax(
                    tempBoard,
                    winPositionsState5,
                    false,
                    0,
                );

                tempBoard[i][j]= "";
    
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
export const aviableSpots5 = (board, index) => {
    let res = [];

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === ""){
                res.push([i,j])
            }
        }
        
    }

    return res;
};



// INFO:checkWin 
export const checkWin5 = (board, winPositions) => {
    
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
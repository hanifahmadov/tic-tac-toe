/* eslint-disable */

// checks board if there is win
export const checkWin = (board, winPositions) => {

    for(let position of winPositions){

        let x = 3;
        let o = 3;

        for(let val of position){

            if(board[val] == 'X') {
                x -= 1;
            } else if (board[val] == 'O') {
                o -= 1;
            }
        }

        if(x == 0){
            return 1;
        } else if(o == 0){
            return 0
        }

    }


}




// get win positions if game is over
export const getWinPositions = (winPositions, arr) => {

    let res = []

    for(let position of winPositions){

        let count = 3;
       
        for(let val of position){
            if(arr.includes(val)) count -= 1; 
        }

        if(count == 0){
            res = [...res, ...position]
        }

    }

    return res;
}



// get avialable spots from board
export const aviableSpots = (board) => {
    let res = []

    // store empty spots index
    board.forEach((val, index) => {
        if(val === "") {
            res.push(index)
        }
    })

    return res;
}



// get random spot from available spots from board
export const getRandomSpot = (board) => {

    // get available spots
    let res = aviableSpots(board);

    // return randomly index from available spots
    return res[Math.floor(Math.random() * res.length)];

}

export const makeMove = (currentBoardState, setBoard, player, setPlayer, index) => {

    // ai plays
    if(player.ai.turn){

        let temp = [...currentBoardState];
        temp[index] = "O";
        setBoard(temp);
    
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
    if(player.hu.turn) {

        if (board[index] === "") {

            let temp = [...currentBoardState];
            temp[index] = "X";
            setBoard(temp);

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

    }
 
}



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




// returns win postion indexes
export const winSpots = (winPositions, arr) => {

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


// avialable slots
export const aviableSpots = (board) => {
    let res = []

    board.forEach((val, index) => {
        if(val === '') {
            res.push(index)
        }
    })

    return res;
}

// ai turn and it plays
export const aiPlays = (board) => {

    console.log('board:::', board)

    let res = aviableSpots(board);

    return res[Math.floor(Math.random() * res.length)];

}


// MINIMAX
export const minimax = (board, position, aiturn) => {

    let emptySpots = aviableSpots(board);

    // console.log(position)



    // edge cases
    if(emptySpots.length == 0) {
        return 0
    } else if(checkWin(board, position) === 1) {
        return -1;
    } else if(checkWin(board, position) === 0){
        return 1;
    } 

    if(aiturn) {
        // ai turn
        let bestScore = -Infinity;

        for(let i = 0; i < emptySpots.length; i++){

            board[emptySpots[i]] = "O";
            let score = minimax(board, position, false)
            board[emptySpots[i]] = "";

            bestScore = Math.max(score, bestScore)

             
        }

        return bestScore;
    
    } else {

        // human turn
        let bestScore = Infinity;

        for(let i = 0; i < emptySpots.length; i++){

            board[emptySpots[i]] = "X";
            let score = minimax(board, position, true)
            board[emptySpots[i]] = "";

            bestScore = Math.min(score, bestScore)

        }

        return bestScore
    }


}
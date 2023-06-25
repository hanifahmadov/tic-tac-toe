/* eslint-disable */

// checks board if there is win
export const checkBoard = (board, winPositions) => {

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
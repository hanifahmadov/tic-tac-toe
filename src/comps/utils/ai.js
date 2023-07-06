/* eslint-disable */
import * as helper from "./helper";



// INFO: minimax
export const minimax = (board, positions, aiturn) => {
    
    let isFull = helper.isBordFull(board);
    let win = helper.checkWinner(board, positions);
    let emptyCells = helper.getAvailableCells(board)


    // if x wins
    if (win == 1) return -1

    // if ai: o wins
    if (win == 0) return 1

    // draw
    if (isFull) return 0

    
    if(aiturn){

        let best = -100;

        for(let i of emptyCells){

            board[i] = 'O';
            best = Math.max(best, minimax(board, positions, false))
            board[i] = '';
        }

        return best;

    } else {

        let best = 100;

        for(let i of emptyCells){

            board[i] = 'X';
            best = Math.min(best, minimax(board, positions, false))
            board[i] = '';
        }

        return best;

    }

       
};

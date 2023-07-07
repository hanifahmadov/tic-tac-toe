/* eslint-disable */
 


let arr = ['X', null, null]



const gen_boards = (board) => {

    return board.reduce((array, pos, i) => {
        if (pos === null) {
            const validBoard = [...board]
            validBoard[i] = 'O'
            array.push({to: i, board: validBoard})
        }
        return array
    }, [])
}

console.log( gen_boards(arr))
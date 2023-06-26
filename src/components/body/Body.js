/* eslint-disable */
import React, { useEffect } from "react";
import "./body.scss";

import {
    checkWin,
    winSpots,
    aiPlays,
    minimax,
    aviableSpots,
} from "../utils/helper";
import { boardState, winPositionState, movesState } from "../utils/store";
import { useRecoilState } from "recoil";

export const Body = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [moves, setMoves] = useRecoilState(movesState);

    const res = checkWin(board, winPositionState);
    let totalMoves = moves.ai.moves.length + moves.hu.moves.length;
    let result = [];
    let gameOver = false;
    let draw = false;

    // check player turn
    // if x wins
    if (res == 1) {
        // get array of winsspot for x
        result = winSpots(winPositionState, moves.hu.moves);
        // end game
        gameOver = true;
    } // if o wins
    else if (res == 0) {
        // get array of winspot for o
        result = winSpots(winPositionState, moves.ai.moves);
        // end game
        gameOver = true;
    } // if game over and it means its a draw
    else if (totalMoves == 9) {
        console.log("game DRAWWW");
        gameOver = true;
        draw = true;
    }

    // handle click/turn
    const handleClick = (e) => {
        // hu turn
        if (moves.hu.turn) {
            let index = Number(e.target.className);

            if (board[index] == "") {
                let temp = [...board];
                temp[index] = "X";
                setBoard(temp);

                setMoves({
                    hu: {
                        value: "X",
                        moves: [...moves.hu.moves, index],
                        turn: false,
                    },

                    ai: {
                        value: "O",
                        moves: [...moves.ai.moves],
                        turn: true,
                    },
                });
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            // ai turn
            if (moves.ai.turn && !gameOver) {
                // let index = ;

                let index;
                let tempboard = [...board];
                let bestScore = -Infinity;

                console.log(tempboard)

                for (let i = 0; i < tempboard.length; i++) {
                    if (tempboard[i] === "") {
                        tempboard[i] = "O";
                        console.log(tempboard)
                        let score = minimax(tempboard, winPositionState, false);
                        tempboard[i] = "";

                        if (score > bestScore) {
                            bestScore = score;
                            index = i;
                            break;
                        }
                    }
                }

                let temp = [...board];
                temp[index] = "O";
                setBoard(temp);

                setMoves({
                    hu: {
                        value: "X",
                        moves: [...moves.hu.moves],
                        turn: true,
                    },

                    ai: {
                        value: "O",
                        moves: [...moves.ai.moves, index],
                        turn: false,
                    },
                });
            }
        }, 800);

        return 0;
    }, [moves.ai.turn]);

    return (
        <div id='body'>
            {/* {console.log(moves)} */}
            <div className='wrapper-table'>
                <div className='custom-table'>
                    <div
                        className='custom-body'
                        onClick={(e) => {
                            gameOver ? "" : handleClick(e);
                        }}
                    >
                        {/* CHILD 1 */}
                        <div className='child1'>
                            <div
                                id='zero'
                                className='0'
                                style={{
                                    background: result.includes(0)
                                        ? "#aaa"
                                        : "",
                                    borderTopLeftRadius: "50px",
                                }}
                            >
                                <span>{board[0]}</span>
                            </div>

                            <div
                                id='one'
                                className='1'
                                style={{
                                    background: result.includes(1)
                                        ? "#aaa"
                                        : "",
                                }}
                            >
                                <span>{board[1]}</span>
                            </div>

                            <div
                                id='two'
                                className='2'
                                style={{
                                    background: result.includes(2)
                                        ? "#aaa"
                                        : "",
                                    borderTopRightRadius: "50px",
                                }}
                            >
                                <span>{board[2]}</span>
                            </div>
                        </div>

                        {/* CHILD 2 */}
                        <div className='child2'>
                            <div
                                id='three'
                                className='3'
                                style={{
                                    background: result.includes(3)
                                        ? "#aaa"
                                        : "",
                                }}
                            >
                                <span>{board[3]}</span>
                            </div>

                            <div
                                id='four'
                                className='4'
                                style={{
                                    background: result.includes(4)
                                        ? "#aaa"
                                        : "",
                                }}
                            >
                                <span>{board[4]}</span>
                            </div>

                            <div
                                id='five'
                                className='5'
                                style={{
                                    background: result.includes(5)
                                        ? "#aaa"
                                        : "",
                                }}
                            >
                                <span>{board[5]}</span>
                            </div>
                        </div>

                        {/* CHILD 3 */}
                        <div className='child3'>
                            <div
                                id='six'
                                className='6'
                                style={{
                                    background: result.includes(6)
                                        ? "#aaa"
                                        : "",
                                    borderBottomLeftRadius: "50px",
                                }}
                            >
                                <span>{board[6]}</span>
                            </div>

                            <div
                                id='seven'
                                className='7'
                                style={{
                                    background: result.includes(7)
                                        ? "#aaa"
                                        : "",
                                }}
                            >
                                <span>{board[7]}</span>
                            </div>

                            <div
                                id='eight'
                                className='8'
                                style={{
                                    background: result.includes(8)
                                        ? "#aaa"
                                        : "",
                                    borderBottomRightRadius: "50px",
                                }}
                            >
                                <span>{board[8]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

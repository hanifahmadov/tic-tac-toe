/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";


import {
    checkWin,
    getWinPositions,
    getRandomSpot,
    aviableSpots,
    makeMove,
} from "../utils/helper";
import { boardState, winPositionsState, playerState } from "../utils/store";
import { minimax } from "../utils/ai";
import { useRecoilState } from "recoil";

export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);


    let totalMoves = player.ai.moves.length + player.hu.moves.length;
    let winResultIndexes = [];
    let gameOver = false;
    let draw = false;

    // check player turn
    // if x wins
    if (checkWin(board, winPositionsState) == 1) {
        // get array of winsspot for x
        winResultIndexes = getWinPositions(winPositionsState, player.hu.moves);
        // end game
        gameOver = true;

    } // if o wins
    else if (checkWin(board, winPositionsState) == 0) {
        // get array of winspot for o
        winResultIndexes = getWinPositions(winPositionsState, player.ai.moves);
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
        if (player.hu.turn) {
            let index = Number(e.target.className);
            makeMove([...board], setBoard, player, setPlayer, index)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            
            // ai turn
            if (player.ai.turn && !gameOver) {
          
                let index;
                let tempbd = [...board];
                console.log('tempbd', tempbd)
                let bestScore = { val: -Infinity, anaz: 0 }

                // console.log(tempbd)

                for (let i = 0; i < tempbd.length; i++) {
                    if (tempbd[i] === "") {

                        tempbd[i] = "O";
                        let score = minimax(tempbd, winPositionsState, false, 0, 0);
                        tempbd[i] = "";

                        bestScore.anaz = bestScore.anaz + score.anaz

                        if (score.val > bestScore.val) {
                            bestScore .val= score.val;
                            index = i;
                        }
                    }
                }

                console.log("analize:::", bestScore.anaz)
                makeMove([...board], setBoard, player, setPlayer, index)
            }
        }, 400);

        return 0;
    }, [player.ai.turn]);

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
                                    background: winResultIndexes.includes(0)
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
                                    background: winResultIndexes.includes(1)
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
                                    background: winResultIndexes.includes(2)
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
                                    background: winResultIndexes.includes(3)
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
                                    background: winResultIndexes.includes(4)
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
                                    background: winResultIndexes.includes(5)
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
                                    background: winResultIndexes.includes(6)
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
                                    background: winResultIndexes.includes(7)
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
                                    background: winResultIndexes.includes(8)
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

/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";

import {
    checkWin,
    getWinPositions,
    getRandomSpot,
    aviableSpots,
    makeMove,
    getBestIndex_WithMinimax,
    checkBoard_afterEveryMove,
} from "../utils/helper";
import { boardState, winPositionsState, playerState } from "../utils/store";
import { minimax } from "../utils/ai";
import { useRecoilState } from "recoil";

export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);

    // HEADER 
    // check current state after every move made on board
    let currentState = checkBoard_afterEveryMove(player, board, winPositionsState, getWinPositions, checkWin)
    

    // HEADER 
    // hu clicks and if his turn is true
    const handleClick = (e) => {
        // hu turn
        if (player.hu.turn) {
            let index = Number(e.target.className);
            makeMove([...board], setBoard, player, setPlayer, index)
        }
    };


    // HEADER 
    // if ai turn is true, run useEffect
    useEffect(() => {

        setTimeout(() => {
            // ai turn
            if (player.ai.turn && !currentState.gameOver) {

                // get valid best index for ai
                let index = getBestIndex_WithMinimax([...board], winPositionsState, minimax )
                
                //ai makes its move
                makeMove([...board], setBoard, player, setPlayer, index)
            }
        }, 300);

        // WARN 
        // not sure return or not, and why? 
        // return 0;

    }, [player.ai.turn]);



    // HEADER 
    // Table return
    return (
        <div id='body'>
            {/* {console.log(moves)} */}
            <div className='wrapper-table'>
                <div className='custom-table'>
                    <div
                        className='custom-body'
                        onClick={(e) => {
                            currentState.gameOver ? "" : handleClick(e);
                        }}

                        style={{borderRadius: "50px"}}
                    >
                        {/* CHILD 1 */}
                        <div className='child1'>
                            <div
                                id='zero'
                                className='0'
                                style={{
                                    background: (currentState.winResultIndexes.includes(0))
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
                                    background: (currentState.winResultIndexes.includes(1))
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
                                    background: currentState.winResultIndexes.includes(2)
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
                                    background: currentState.winResultIndexes.includes(3)
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
                                    background: currentState.winResultIndexes.includes(4)
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
                                    background: currentState.winResultIndexes.includes(5)
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
                                    background: currentState.winResultIndexes.includes(6)
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
                                    background: currentState.winResultIndexes.includes(7)
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
                                    background: currentState.winResultIndexes.includes(8)
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

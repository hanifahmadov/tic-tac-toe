/* eslint-disable */
import React from "react";
import './table3.scss'

export const Table3 = ({board, gameOver, currentState, handleClick}) => {
    return (
        <div id='table3'>
            <div className='table3_content_wrapper'>
                <div
                    className='table3_content'
                    onClick={(e) => {
                        gameOver.over ? "" : handleClick(e);
                    }}
                    style={{ borderRadius: "50px" }}
                >
                    {/* CHILD 1 */}
                    <div className='child1'>
                        <div
                            id='zero'
                            className='0'
                            style={{
                                background:
                                    currentState.winResultIndexes.includes(0)
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
                                background:
                                    currentState.winResultIndexes.includes(1)
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
                                background:
                                    currentState.winResultIndexes.includes(2)
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
                                background:
                                    currentState.winResultIndexes.includes(3)
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
                                background:
                                    currentState.winResultIndexes.includes(4)
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
                                background:
                                    currentState.winResultIndexes.includes(5)
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
                                background:
                                    currentState.winResultIndexes.includes(6)
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
                                background:
                                    currentState.winResultIndexes.includes(7)
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
                                background:
                                    currentState.winResultIndexes.includes(8)
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
    );
};

/* eslint-disable */
import React from "react";
import './table3.scss'
import { useRecoilValue } from "recoil";
import { boardState, currentState } from "../../utils/3x3/store";
import { board99 } from "../../utils/service";

export const Table3 = ({ handleClick }) => {

    const board = useRecoilValue(boardState)
    const current = useRecoilValue(currentState)

    const board9911 = useRecoilValue(board99)

    console.log(board9911.handleBoardClick("X", 8))




    return (
        <div id='table3'>
            <div className='table3_content_wrapper'>
                <div
                    className='table3_content'
                    onClick={(e) => {
                        current.gameOver ? '': handleClick(e);
                    }}
                    style={{ borderRadius: "50px" }}
                >
                   
                </div>
            </div>
        </div>
    );
};


{/* <div
id='zero'
className='0'
style={{
    background:
        current.winResultIndexes.includes(0)
            ? "#aaa"
            : "",
    borderTopLeftRadius: "50px",
}}
>
<span>{board[0]}</span>
</div> */}
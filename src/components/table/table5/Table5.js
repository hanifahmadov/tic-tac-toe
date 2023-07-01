/* eslint-disable */
import React, { useEffect } from "react";
import "./table5.scss";
import { useRecoilState } from "recoil";
import { boardState5, currentState5, playerState5, winPositionsState5 } from "../../utils/store";
import { getBestIndex_WithMinimax5, makeMove5 } from "../../utils/helper5";
import { minimax } from "../../utils/ai";

export const Table5 = () => {
    const [board, setBoard] = useRecoilState(boardState5);
    const [player, setPlayer] = useRecoilState(playerState5);
    const [current, setCurrent] = useRecoilState(currentState5);

    const handleClick = (e) => {
        let index = e.target.getAttribute("data_index");

        // hu makes move
        makeMove5(
            board.map((val) => [...val]),
            setBoard,
            player,
            setPlayer,
            index
        );
    };



    // INFO: Ai turn
    useEffect(() => {
        setTimeout(() => {
            // ai turn
            if (player.ai.turn && !current.gameOver) {
                // get valid best index for ai
                let index = getBestIndex_WithMinimax5(
                    board.map((val) => [...val]),
                    winPositionsState5,
                    minimax
                );

                console.log(index)

                //ai makes move
                // makeMove5([...board], setBoard, player, setPlayer, index);
            }
        }, 300);
    }, [player.ai.turn]);



    return (
        <div id='table5'>
            <div className='table5_content_wrapper'>
                <div className='table5_content'>
                    {board.map((child, child_index) => (
                        <div id={"child" + child_index} key={child_index}>
                            {child.map((slot, slot_index) => (
                                <div
                                    key={slot_index}
                                    id={"id_" + child_index + "_" + slot_index}
                                    data_index={child_index + "," + slot_index}
                                    onClick={handleClick}
                                >
                                    <span
                                        data_index={
                                            child_index + "," + slot_index
                                        }
                                    >
                                        {slot}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

{
    /* <div
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
</div> */
}

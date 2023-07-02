/* eslint-disable */
import React, { useEffect } from "react";
import "./table5.scss";
import { arr5x5, boardState5x5, currentState5x5, playerState5x5, winPositionsState5x5 } from "../../utils/5x5/store5";
import { minimax5x5 } from "../../utils/5x5/ai5";
import { useRecoilState } from "recoil";
import { boardState5, currentState5, playerState5, winPositionsState5 } from "../../utils/store";
import { getBestIndex_WithMinimax5, makeMove5 } from "../../utils/helper5";
import { minimax } from "../../utils/ai";

export const Table5 = () => {
    const [board, setBoard] = useRecoilState(boardState5);
    const [player, setPlayer] = useRecoilState(playerState5);
    const [current, setCurrent] = useRecoilState(currentState5);

    // INFO: handleClick hu turn
    const handleClick = (e) => {
        // hu turn
        if (player5.hu.turn && !current5.gameOver) {

            let index = Number(e.target.getAttribute("data"));

            // console.log(index);
            console.log(' click handle hu turn')

            // hu makes move
            makeMove5x5([...board5], setBoard5, player5, setPlayer5, index);
        }
    };

    // INFO: Ai turn
    useEffect(() => {

        console.log(' use state ai turn')

        setTimeout(() => {

            console.log('set time outttt')
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
    }, [player5.ai.turn]);

    return (
        <div id='table5'>
            <div className='table5_content_wrapper'>
                <div className='table5_content'>
                    {arr5x5.map((val, index) => {
                        let [i, j] = val;
                        return (
                            <div
                                id={"child" + index}
                                key={index}
                                onClick={handleClick}
                            >
                                {board5.slice(i, j).map((val, index) => (
                                    <div
                                        id={"id_" + (i + index)}
                                        key={index}
                                        data={i + index}
                                    >
                                        <span>{val}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


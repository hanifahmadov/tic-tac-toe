/* eslint-disable */
import React, { useEffect } from "react";
import "./table5.scss";
import { arr5x5, boardState5x5, currentState5x5, playerState5x5, winPositionsState5x5 } from "../../utils/5x5/store5";
import { minimax5x5 } from "../../utils/5x5/ai5";
import { useRecoilState } from "recoil";
import { getBestIndex_WithMinimax5x5, makeMove5x5 } from "../../utils/5x5/helper5";


export const Table5 = () => {

    const [board5, setBoard5] = useRecoilState(boardState5x5);
    const [player5, setPlayer5] = useRecoilState(playerState5x5);
    const [current5, setCurrent5] = useRecoilState(currentState5x5);

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
            if (player5.ai.turn && !current5.gameOver) {

                console.log('ai serachs index')
                // get valid best index for ai

                
                let index = getBestIndex_WithMinimax5x5(
                    [...board5],
                    winPositionsState5x5,
                    minimax5x5
                );

                console.log('index:::', index)
                //ai makes move
                // makeMove([...board], setBoard, player, setPlayer, index);
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


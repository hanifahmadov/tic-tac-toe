/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";
import { minimax } from "../utils/ai";
import { reject, resolve } from "promise";
import { useRecoilState } from "recoil";
import * as helper from "../utils/helper";
import * as store from "../utils/store";

export const Table = () => {
    const [board, setBoard] = useRecoilState(store.boardState3x3);
    const [boardIndex, setBoadrIndex] = useRecoilState(store.boardIndexes3x3);
    const [player, setPlayer] = useRecoilState(store.playerState);
    const [setting, setSetting] = useRecoilState(store.settingState);
    const [current, setCurrent] = useRecoilState(store.currentState);

    let state = false;
    // person plays
    const handleClick = (e) => {
        // hu turn
        let index = Number(e.target.getAttribute("data"));

        if (player.hu.turn && !current.gameOver && board[index] == "") {

            // hu makes move
            let temp = helper.makeMove(
                [...board],
                {...player},
                {...current},
                index,
                store.winPositionsState3x3
            );

            console.log(temp)

            setBoard(temp.board);
            setCurrent(temp.current);
            setPlayer(temp.player)

        }
    };

    // ai plays
    useEffect(() => {

        console.log("curren::: ai PLAYSSS", current)
        if (player.ai.turn && !current.gameOver) {
            setTimeout(async () => {
                // get valid best index for ai
                let index =
                    player.ai.moves.length < 2 && current.easyMode
                        ? helper.shuffleArray(
                              helper.getAvailableCells([...board])
                          )[0]
                        : helper.getBestIndex(
                              [...board],
                              store.winPositionsState3x3
                          );

                // console.log('index:', index)

                //ai makes move
                let temp = helper.makeMove(
                    [...board],
                    {...player},
                    {...current},
                    index,
                    store.winPositionsState3x3
                );



                console.log(temp)

                setBoard(temp.board);
                setCurrent(temp.current);
                setPlayer(temp.player)

            }, 300);
        }
    }, [player.ai.turn]);

    // // INFO: reset all states when reset button clicked
    // useEffect(() => {
    //     // reset all
    //     if (setting.reset) {
    //         resetAll(
    //             setBoard,
    //             setSetting,
    //             setPlayer,
    //             setCurrent,
    //             setting,
    //             current
    //         );
    //     }
    // }, [setting.reset]);

    // useEffect(() => {
    //     let status = helper.getStatus(
    //         { ...current },
    //         player,
    //         [...board],
    //         store.winPositionsState3x3,
    //         helper.checkWinner,
    //         helper.getWinnerCells
    //     );

    //     // console.log(status, 'statuss:::')

        
            

    //     // console.log('current:::', current)
    // }, [current.totalMoves, current.winPositions.length]);

    // INFO: Table return
    return (
        <div id='table'>
            <div id='table_header'>
                <div id='table_body' onClick={handleClick}>
                    {boardIndex.map((val, index) => {
                        let [i, j] = val;
                        return (
                            <div id={"child_" + index} key={index} style={{ background: current.gameOver ? '#eee' : '' }}>
                                {board.slice(i, j).map((el, ind) => (
                                    <div
                                        id={"id_" + (i + ind)}
                                        key={ind}
                                        data={i + ind}
                                        className={current.gameOver ? '' : 'active'}

                                        style={{ background: current.winPositions.includes(i+ ind) ? 'rgb(0, 162, 255)' : ''}}
                                    >
                                        {el}
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

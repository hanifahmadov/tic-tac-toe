/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";
<<<<<<< HEAD



import { useRecoilState } from "recoil";
<<<<<<< HEAD:src/components/table/Table.js
import { Table3 } from "./table3/Table3";
import { minimax } from "../utils/3x3/ai";
import { Table5 } from "./table5/Table5";
=======
=======
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
import { minimax } from "../utils/ai";
import { reject, resolve } from "promise";
import { useRecoilState } from "recoil";
import * as helper from "../utils/helper";
import * as store from "../utils/store";

<<<<<<< HEAD

>>>>>>> 5328523 (re-build):src/comps/table/Table.js

=======
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
export const Table = () => {
    const [board, setBoard] = useRecoilState(store.boardState3x3);
    const [boardIndex, setBoadrIndex] = useRecoilState(store.boardIndexes3x3);
    const [player, setPlayer] = useRecoilState(store.playerState);
    const [setting, setSetting] = useRecoilState(store.settingState);
    const [current, setCurrent] = useRecoilState(store.currentState);

<<<<<<< HEAD
    console.log('current.gameOver:::', current.gameOver)

    useEffect(() => {
        // update current board state
        // console.log("first");

        let temp = checkBoard_afterEveryMove(
            player,
            board,
            winPositionsState,
            getWinPositions,
            checkWin
        );

        // update current board state
        setCurrent(temp);
    }, [board]);

    // console.log(board)

    // INFO: hu turn
=======
    let state = false;
    // person plays
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
    const handleClick = (e) => {
        // hu turn
        let index = Number(e.target.getAttribute("data"));

        if (player.hu.turn && !current.gameOver && board[index] == "") {

            // hu makes move
<<<<<<< HEAD
            makeMove([...board], setBoard, player, setPlayer, index);

            

            // setCurrent(
            //     checkBoard_afterEveryMove(
            //         player,
            //         board,
            //         winPositionsState,
            //         getWinPositions,
            //         checkWin
            //     )
            // );

            // console.log(current, "hu current");
=======
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

>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
        }
    };

    // ai plays
    useEffect(() => {

<<<<<<< HEAD
    

    // INFO: Ai turn
    useEffect(() => {
        // console.log(current, 'current inside ai')

        if (player.ai.turn && !external) {
            setTimeout(() => {
                // ai turn

                // get valid best index for ai
<<<<<<< HEAD
=======

                console.log(player)

>>>>>>> 8540662 (horrible desing)
                let index = getBestIndex_WithMinimax(
                    [...board],
                    winPositionsState,
                    minimax
                );

                //ai makes move
<<<<<<< HEAD
                makeMove([...board], setBoard, player, setPlayer, index );
            }, 300);

            // setCurrent(
            //     checkBoard_afterEveryMove(
            //         player,
            //         board,
            //         winPositionsState,
            //         getWinPositions,
            //         checkWin
            //     )
            // );

        }
=======
                makeMove([...board], setBoard, player, setPlayer, index);
            }
        });
>>>>>>> 8540662 (horrible desing)
=======
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
>>>>>>> 7caeed5 (rebuilt 3x3 and ai also)
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

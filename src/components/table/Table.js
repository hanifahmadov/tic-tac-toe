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
    resetAll,
} from "../utils/3x3/helper";
import {
    boardState,
    winPositionsState,
    playerState,
    settingsState,
    currentState,
} from "../utils/3x3/store";

import { useRecoilState } from "recoil";
import { Table3 } from "./table3/Table3";
import { minimax } from "../utils/3x3/ai";
import { Table5 } from "./table5/Table5";

export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);
    const [setting, setSetting] = useRecoilState(settingsState);
    const [current, setCurrent] = useRecoilState(currentState);

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
    const handleClick = (e) => {
        // hu turn
        if (player.hu.turn && !current.gameOver) {
            let index = Number(e.target.className);

            // hu makes move
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
        }
    };

    // INFO: reset all states when reset button clicked
    useEffect(() => {
        // reset all
        if (setting.reset) {
            resetAll(
                setBoard,
                setSetting,
                setPlayer,
                setCurrent,
                setting,
                current
            );
        }
    }, [setting.reset]);

    

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
    }, [player.ai.turn]);

    // INFO: Table return
    return (
        <div id='table_main'>
            {setting.txt && <Table3 handleClick={handleClick} />}
            {setting.fxf && <Table5 />}
        </div>
    );
};

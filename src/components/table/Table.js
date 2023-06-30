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
} from "../utils/helper";
import {
    boardState,
    winPositionsState,
    playerState,
    settingsState,
    currentState,
} from "../utils/store";
import { minimax } from "../utils/ai";
import { useRecoilState } from "recoil";
import { Table3 } from "./table3/Table3";
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

        console.log('temp:::' ,temp)
        // update current board state
        setCurrent(temp);

    }, [player.hu.turn]);



    // INFO: hu turn
    const handleClick = (e) => {
        // hu turn
        if (player.hu.turn && !current.gameOver) {
            let index = Number(e.target.className);

            // hu makes move
            makeMove([...board], setBoard, player, setPlayer, index);
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
        setTimeout(() => {
            // ai turn
            if (player.ai.turn && !current.gameOver) {
                // get valid best index for ai
                let index = getBestIndex_WithMinimax(
                    [...board],
                    winPositionsState,
                    minimax
                );

                //ai makes move
                makeMove([...board], setBoard, player, setPlayer, index);
            }
        }, 300);
    }, [player.ai.turn]);

    // INFO: Table return
    return (
        <div id='table_main'>
            {setting.txt && <Table3 handleClick={handleClick} />}
            {setting.fxf && <Table5 />}
        </div>
    );
};

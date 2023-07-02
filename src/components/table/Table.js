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
import { minimax5x5 } from "../utils/5x5/ai5";
import { checkWin5x5, shuffle } from "../utils/5x5/helper5";



export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);
    const [setting, setSetting] = useRecoilState(settingsState);
    const [current, setCurrent] = useRecoilState(currentState);



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
                let index = !player.ai.moves.length 
                    ? shuffle(aviableSpots([...board]))[0]
                    : getBestIndex_WithMinimax(
                    [...board],
                    winPositionsState,
                    minimax5x5,
                    checkWin
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

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
} from "../utils/helper";
import { boardState, winPositionsState, playerState, gameOverState } from "../utils/store";
import { minimax } from "../utils/ai";
import { useRecoilState } from "recoil";
import { Table3 } from "./table3/Table3";

export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);
    const [gameOver, setGameOver] = useRecoilState(gameOverState)

    // INFO: check current state after every move made on board 
    let currentState = checkBoard_afterEveryMove(player, board, winPositionsState, getWinPositions, checkWin)
   
    // console.log('currentState', currentState)

    // INFO: hu clicks and if his turn is true 
    const handleClick = (e) => {
        // hu turn
        if (player.hu.turn) {
            let index = Number(e.target.className);
            makeMove([...board], setBoard, player, setPlayer, index)
        }
    };

    useEffect(()=> {

     

        setGameOver({
            ...gameOver,
            over: currentState.gameOver,
            draw: currentState.draw
        })

    }, [currentState.gameOver, currentState.draw])


    // INFO: if ai turn is true, run useEffect 
    useEffect(() => {

        setTimeout(() => {
            // ai turn
            if (player.ai.turn && !currentState.gameOver) {

                // get valid best index for ai
                let index = getBestIndex_WithMinimax([...board], winPositionsState, minimax )
                
                //ai makes its move
                makeMove([...board], setBoard, player, setPlayer, index)
            }
        }, 300);

        // INFO: 
        // not sure return or not, and why? 
        // return 0;

    }, [player.ai.turn]);



    // INFO: Table return 
    return (
        <div id='body'>
            <Table3 board={board} gameOver={gameOver} currentState={currentState} handleClick={handleClick}/>
        </div>
    );
};

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
import { boardState, winPositionsState, playerState, gameOverState, settingsState, currentState3 } from "../utils/store";
import { minimax } from "../utils/ai";
import { useRecoilState } from "recoil";
import { Table3 } from "./table3/Table3";
import { Table5 } from "./table5/Table5";


export const Table = () => {
    const [board, setBoard] = useRecoilState(boardState);
    const [player, setPlayer] = useRecoilState(playerState);
    const [gameOver, setGameOver] = useRecoilState(gameOverState)
    const [setting, setSetting] = useRecoilState(settingsState)
    const [current, setCurrent] = useRecoilState(currentState3)


 
   
    // console.log('currentState', currentState)

    // INFO: hu clicks and if his turn is true 
    const handleClick = (e) => {

        // INFO: check current state after every move made on board 
   
        let currentState = checkBoard_afterEveryMove(player, board, winPositionsState, getWinPositions, checkWin)
        setCurrent(currentState)

        // hu turn
        if (player.hu.turn) {
            let index = Number(e.target.className);
            makeMove([...board], setBoard, player, setPlayer, index)
        }
    };

    console.log(current)

    useEffect(()=> {
        setGameOver({
            over: current.gameOver,
            draw: current.draw
        })

    }, [current.gameOver, current.draw])



    useEffect(()=> {
  
        console.log('useEffet resett')
        if(setting.reset && gameOver.over){
            setBoard(["", "", "", "", "", "", "", "", ""])

            setGameOver({
                over: false,
                draw: false
            })
        }

    }, [setting.reset])


    // console.log('setting reset::', setting.reset )
    // console.log('gameOver over::', gameOver.over )
    // console.log('gameOver draw::', gameOver.draw )


    // INFO: if ai turn is true, run useEffect 
    useEffect(() => {

        setTimeout(() => {
            // ai turn
            if (player.ai.turn && !current.over) {

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
        <div id='table_main'>
          { setting.txt &&  <Table3 board={board} gameOver={gameOver} currentState={current} handleClick={handleClick}/> }
          { setting.fxf && <Table5 /> }
        </div>
    );
};

/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import * as helper from "../utils/helper";
import * as store from "../utils/store";

export const Table = () => {
    const [setting, setSetting] = useRecoilState(store.settingsState);
    const [player, setPlayer] = useRecoilState(store.vsAiState);
    const [current, setCurrent] = useRecoilState(store.currentState);
    const [boardIndex, setBoardIndex] = useRecoilState(store.boardIndex3x3);
    const [board, setBoard] = useRecoilState(store.boardState3x3);

    // person plays
    const handleClick = (e) => {
        // hu turn
        let index = Number(e.target.getAttribute("data"));

        // WARN: vs Ai
        if (
            setting.ai &&
            player.hu.turn &&
            !current.gameOver &&
            board[index] == ""
        ) {
            // hu makes move
            let temp = helper.makeMove(
                [...board],
                { ...player },
                { ...current },
                index,
                setting.txt ? store.winPositionsState3x3 : store.winPositionsState5x5,
                setting
            );

            setBoard(temp.board);
            setCurrent(temp.current);
            setPlayer(temp.player);
        }

        // WARN: PvP
        if (setting.pvp && !current.gameOver && board[index] == "") {
            // hu makes move
            let temp = helper.makeMove(
                [...board],
                { ...player },
                { ...current },
                index,
                setting.txt ? store.winPositionsState3x3 : store.winPositionsState5x5,
                setting
            );

            setBoard(temp.board);
            setCurrent(temp.current);
            setPlayer(temp.player);
        }
    };

    // ai turn
    useEffect(() => {
        if (player.ai.turn && !current.gameOver && setting.ai) {
            
        
            setTimeout(async () => {
                // get valid best index for ai
            

                let index = player.ai.moves.length < 2 && current.easyMode
                    ? helper.shuffleArray(
                          helper.getAvailableCells([...board])
                      )[0]
                    : helper.getBestIndex(
                        setting.txt,
                        [...board],
                        setting.txt ? store.winPositionsState3x3 : store.winPositionsState5x5
                    )
                    
                 

                //ai makes move
                let temp = helper.makeMove(
                    [...board],
                    { ...player },
                    { ...current },
                    index,
                    setting.txt ? store.winPositionsState3x3 : store.winPositionsState5x5,
                    setting
                );

                setBoard(temp.board);
                setCurrent(temp.current);
                setPlayer(temp.player);
            }, 300);
        }
    }, [player.ai.turn]);

    useEffect(() => {
        if (setting.fxf) {
            setBoard(store.b5);
            setBoardIndex(store.ind5);
            return;
        }

        if (setting.txt) {
            const b3 = ["", "", "", "", "", "", "", "", ""];
            const ind3 = [
                [0, 3],
                [3, 6],
                [6, 9],
            ];

            setBoard(b3);
            setBoardIndex(ind3);

            return;
        }
    }, [setting.fxf, setting.txt]);

    // INFO: Table return
    return (
        <div id='table'>
              {/* {  console.log('hu:::::', player)}
               { console.log('curret::::', current)} */}
            <div id='table_header'>
                {/* {console.log(boardIndex, 'boardIndexes::::')} */}
                <div
                    id={setting.txt ? "table_body_3x3" : "table_body_5x5"}
                    onClick={handleClick}
                >
                    {boardIndex.map((val, index) => {
                     

                        let [i, j] = val;
                        return (
                            <div
                                id={"child_" + index}
                                key={index}
                                style={{
                                    background: current.gameOver ? "#eee" : "",
                                }}
                            >
                                {board.slice(i, j).map((el, ind) => (
                                    <div
                                        id={"id_" + (i + ind)}
                                        key={ind}
                                        data={i + ind}
                                        className={
                                            current.gameOver ? "" : "active"
                                        }
                                        style={{
                                            background:
                                                current.winPositions.includes(
                                                    i + ind
                                                )
                                                    ? "#0d6efdd6"
                                                    : "",
                                        }}
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

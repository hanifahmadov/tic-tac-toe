/* eslint-disable */
import React, { useEffect } from "react";
import "./table.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import * as helper from "../utils/helper";
import * as store from "../utils/store";

export const Table = () => {
    let [setting, setSetting] = useRecoilState(store.settingsState);
    let [player, setPlayer] = useRecoilState(store.playerState);
    let [current, setCurrent] = useRecoilState(store.currentState);
    let [boardIndex, setBoardIndex] = useRecoilState(store.boardIndex3x3);
    let [board, setBoard] = useRecoilState(store.boardState3x3);

    // person plays
    const handleClick = (e) => {
        // hu turn
        let index = Number(e.target.getAttribute("data"));

        console.log(board);

        // WARN: vs Ai
        if (
            setting.ai &&
            player.hu.turn &&
            !current.gameOver &&
            board[index] == null
        ) {
            // hu makes move
            let temp = helper.makeMove(
                board,
                player,
                current,
                index,
                setting.txt
                    ? store.winPositionsState3x3
                    : store.winPositionsState5x5,
                setting
            );

            setBoard(temp.board);
            setCurrent(temp.current);
            setPlayer(temp.player);
        }

        // WARN: PvP
        if (setting.pvp && !current.gameOver && board[index] == null) {
            // hu makes move
            let temp = helper.makeMove(
                board,
                player,
                current,
                index,
                setting.txt
                    ? store.winPositionsState3x3
                    : store.winPositionsState5x5,
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
            let index = 0;

            if (setting.txt) {
                index = helper.getBestIndex(
                    player,
                    board,
                    store.winPositionsState3x3,
                    false
                );
            } else if (setting.fxf) {
                index =
                    current.totalMoves < 10
                        ? helper.getRandomIndex_forAi(
                              board,
                              store.winPositionsState5x5,
                              current
                          )
                        : helper.getBestIndex(
                              player,
                              board,
                              store.winPositionsState5x5,
                              true
                          );
            }

            setTimeout(() => {
                // get valid best index for ai

                //ai makes move
                let temp = helper.makeMove(
                    board,
                    player,
                    current,
                    index,
                    setting.txt
                        ? store.winPositionsState3x3
                        : store.winPositionsState5x5,
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
            setBoard(new Array(25).fill(null));
            setBoardIndex(store.ind5);
            return;
        }

        if (setting.txt) {
            setBoard(new Array(9).fill(null));
            setBoardIndex(store.ind3);

            return;
        }
    }, [setting.fxf, setting.txt]);

    // INFO: Table return
    return (
        <div id='table'>
            <div id='table_header'>
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
                                    cursor: current.gameOver
                                        ? "not-allowed"
                                        : "pointer",
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
                                            cursor: current.gameOver
                                                ? "not-allowed"
                                                : "pointer",
                                            background:
                                                current.winPositions.includes(
                                                    i + ind
                                                )
                                                    ? "rgba(253, 13, 13, 0.39)"
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

// "rgb(253 13 13 / 39%)"

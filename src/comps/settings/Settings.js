/* eslint-disable */
import React, { useEffect } from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import * as store from "../utils/store";
import * as helper from "../utils/helper";

export const Settings = () => {
    const [player, setPlayer] = useRecoilState(store.playerState);
    const [setting, setSetting] = useRecoilState(store.settingsState);
    const [board, setBoard] = useRecoilState(store.boardState3x3);
    const [current, setCurrent] = useRecoilState(store.currentState);

    const handleClick = (e) => {
        // console.log(board, "board:::");

        let val = e.target.getAttribute("data_value");

        let temp = helper.handleSettingClicks(
            val,
            board,
            setting,
            current,
            player
        );

        if (val == "reset") {
            setBoard(temp.board);
            setSetting(temp.setting);
            setCurrent(temp.current);
            setPlayer(temp.player);
        } else if (val == "size3x3" || val == "size5x5" || val == "pvp" || val == "ai") {
            setSetting(temp.setting);
        }
    };






    return (
        <div id='settings'>
            <div className='settings-body' onClick={handleClick}>
                <div className=''>
                    <button
                        type='button'
                        id='resetButton'
                        className='fw-bold btn btn-primary'
                        disabled={!current.totalMoves ? true : false}
                        data_value='reset'
                    >
                        Reset
                    </button>
                </div>

                <div className='setting_size mx-4'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic example'
                    >
                        <button
                            type='button'
                            className={
                                setting.txt
                                    ? "fw-bold btn btn-warning mx-1"
                                    : "fw-bold btn btn-outline-primary  mx-1"
                            }
                            disabled={current.totalMoves ? true : false}
                            data_value='size3x3'
                        >
                            3x3
                        </button>
                        <button
                            type='button'
                            className={
                                setting.fxf
                                    ? "fw-bold btn btn-warning"
                                    : "fw-bold btn btn-outline-primary"
                            }
                            disabled={current.totalMoves ? true : false}
                            data_value='size5x5'
                        >
                            5x5
                        </button>
                    </div>
                </div>

                <div className='setting_player'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic example'
                    >
                        <button
                            type='button'
                            className={
                                setting.pvp
                                    ? "fw-bold btn btn-warning mx-1"
                                    : "fw-bold btn btn-outline-primary mx-1"
                            }
                            disabled={current.totalMoves ? true : false}
                            data_value='pvp'
                        >
                            PvP
                        </button>
                        <button
                            type='button'
                            className={
                                setting.ai
                                    ? "fw-bold btn btn-warning"
                                    : "fw-bold btn btn-outline-primary"
                            }
                            disabled={current.totalMoves ? true : false}
                            data_value='ai'
                        >
                            vs Ai
                        </button>
                    </div>
                </div>
            </div>

            {/* TODO: STYLE THIS  */}
            <div
                className={setting.txt ? 'my-3' : 'my-1'}
                style={{ visibility: current.gameOver ? "visible" : "hidden" }}
                data_value='endGameEmoj'
            >
                <div
                    className='fw-bold border border-info p-2 mb-3 rounded'
                    data_value='easy'
                >
                    <img
                        src={helper.shuffleArray(store.randomEmoj)[0]}
                        alt='Girl in a jacket'
                        width='30'
                        height='35'
                        id='challange'
                        data_value='easy'
                    />
                </div>
            </div>
        </div>
    );
};

/* eslint-disable */
import React from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState, settingsState } from "../utils/store";

export const Settings = () => {
    const [player, setPlayer] = useRecoilState(playerState);
    const [setting, setSetting] = useRecoilState(settingsState);
    const [board, setBoard] = useRecoilState(boardState);
    // const [gameOver, setGameOver] = useRecoilState(gameOverState)

    let anyMovePlayed = board.every((val) => val == "");

    const handleClick = (e) => {
        console.log(e.target.getAttribute("data_value"));
        // if (e.target.className === "size5x5") {
        //     setSetting({
        //         ...setting,
        //         fxf: false,
        //         txt: false,
        //     });
        // } else if (e.target.className === "size3x3") {
        //     setSetting({
        //         ...setting,
        //         fxf: true,
        //         txt: true,
        //     });
        // }
    };

    return (
        <div id='subheader'>
            <div className='setting-wrapper' onClick={handleClick}>
                <div className="">
                    <button type='button' className='btn btn-primary' data_value="reset">
                        Reset
                    </button>
                </div>

                <div className='setting_size mx-4'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic example'
                    >
                        <button type='button' className='btn btn-primary mx-1' data_value="size3x3">
                            3x3
                        </button>
                        <button type='button' className='btn btn-primary' data_value="size5x5">
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
                        <button type='button' className='btn btn-primary mx-1' data_value="aifun">
                            Ai fun
                        </button>
                        <button type='button' className='btn btn-primary' data_value="aismart">
                            Ai smart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

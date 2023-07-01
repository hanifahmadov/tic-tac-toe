/* eslint-disable */
import React from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import { boardState, currentState, gameOverState, playerState, settingsState } from "../utils/store";
import { handleSettingClicks } from "../utils/helper";

export const Settings = () => {
    const [player, setPlayer] = useRecoilState(playerState);
    const [setting, setSetting] = useRecoilState(settingsState);
    const [board, setBoard] = useRecoilState(boardState);
    const [current, setCurrent] = useRecoilState(currentState)

    // console.log(setting)

    let anyMovePlayed = board.every((val) => val == "");

    const customClass = {
        size3x3: setting.txt ? 'btn btn-warning mx-1' : 'btn btn-primary mx-1',
        size5x5: setting.fxf ? 'btn btn-warning' : 'btn btn-primary',
        person: setting.person ? 'btn btn-warning mx-1' : 'btn btn-primary mx-1' ,
        ai: setting.ai ? 'btn btn-warning' : 'btn btn-primary',
    }

    const handleClick = (e) => {
        let val = e.target.getAttribute("data_value");
        handleSettingClicks(val, setting, setSetting, current)
    };

    return (
        <div id='subheader'>
            <div className='setting-wrapper' onClick={handleClick}>
                <div className="">
                    <button type='button' className='btn btn-primary' disabled={ anyMovePlayed && !current.gameOver} data_value="reset">
                        Reset
                    </button>
                </div>

                <div className='setting_size mx-4'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic example'
                    >
                        <button type='button' className={customClass.size3x3} disabled={!anyMovePlayed && !current.gameOver} data_value="size3x3">
                            3x3
                        </button>
                        <button type='button' className={customClass.size5x5} disabled={!anyMovePlayed && !current.gameOver}  data_value="size5x5">
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
                        <button type='button' className={customClass.person} disabled={!anyMovePlayed && !current.gameOver}  data_value="person">
                            vs Person
                        </button>
                        <button type='button' className={customClass.ai} disabled={!anyMovePlayed && !current.gameOver}  data_value="ai">
                            vs Ai
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

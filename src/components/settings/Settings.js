/* eslint-disable */
import React from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import { playerState } from "../utils/store";

// import friendly from "../../shared/happy-robot.png";
// import challenge from "../../shared/smart-robot.png";

export const Settings = () => {
    const [player, setPlayer] = useRecoilState(playerState);

    const handleClick = (e) => {
        console.log(e.target.className)
    }

  

    return (
        <div id='subheader'>
            <div className='setting-wrapper' onClick={handleClick}>
                <div className='resetButton'>
                    <span className="reset">Reset</span>
                </div>

                <div className='setting_size'>
                    <span className='size3x3'>3x3</span>
                    <span className='size5x5'>5x5</span>
                </div>
                
                <div className='setting_player'>
                        <span className="vsPerson">PVP</span>
                        <span className="vsAi">vs Ai</span>
                </div>

            </div>
        </div>
    );
};

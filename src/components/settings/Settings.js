/* eslint-disable */
import React from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import { playerState } from "../utils/store";

// import friendly from "../../shared/happy-robot.png";
// import challenge from "../../shared/smart-robot.png";

export const Settings = () => {
    const [player, setPlayer] = useRecoilState(playerState);

    const challenge =
        "https://icongr.am/feather/frown.svg?size=30&color=ffffff";
    const friendly = "https://icongr.am/feather/smile.svg?size=30&color=ffffff";

    return (
        <div id='subheader'>
            <div className='setting-wrapper' onClick={(e) => handleClick(e)}>

                <div className='resetButton'>
                    <span>RESET</span>
                </div>

                <div className='setting_hu'>
                    <div>
                        {/* <span>Online</span> */}
                        <span>PVP</span>
                    </div>
                </div>

                <div className='setting_ai'>
                        <span>vs Ai</span>
                </div>

                <div className='setting_size'>
                        <span>
                            3x3
                        </span>

                </div>


            </div>
        </div>
    );
};

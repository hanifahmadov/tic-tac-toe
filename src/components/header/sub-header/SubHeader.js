/* eslint-disable */
import React from "react";
import "./subheader.scss";

// import friendly from "../../shared/happy-robot.png";
// import challenge from "../../shared/smart-robot.png";

export const SubHeader = () => {

    const challenge = 'https://icongr.am/feather/frown.svg?size=30&color=ffffff'
    const friendly = 'https://icongr.am/feather/smile.svg?size=30&color=ffffff'

    return (
        <div id='subheader'>
            <div className='wrapper-robots'>
                <div className='wrapper-friendly'>
                    <span>
                        <img className='img-friendly' src={friendly} />
                    </span>
                </div>

                <div className='challange'>
                    <span>
                        <img className='img-friendly' src={challenge} />
                    </span>
                </div>
            </div>
        </div>
    );
};

/* eslint-disable */
import React, { Fragment, useContext } from "react";
import "./header.scss";

import { Settings } from "../settings/Settings";

export const Header = () => {
    return (
        <div id='navbar'>
            <div className="wrapper-navbar">
                <div className=''>
                    <h1 className='header'>TIC TAC TOE</h1>
                </div>
            </div>
        </div>
    );
};

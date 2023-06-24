/* eslint-disable */
import React, { Fragment, useContext } from "react";
import "./header.scss";

import { SubHeader } from "./sub-header/SubHeader";

export const Header = () => {
    return (
        <div id='navbar'>
            <div className="wrapper-navbar">
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <h1 className='header'>TIC TAC TOE</h1>
                </nav>
            </div>

            <div className='wrapper-subheader'>
                <SubHeader/>
            </div>
        </div>
    );
};

/* eslint-disable */
import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";

import { Table } from "./comps/table/Table";
import { Settings } from "./comps/settings/Settings";

const App = () => {
    return (
        <Fragment>
            <div id='navbar'>
                <h1>Tic Tac Toe</h1>
                <h3>Login</h3>
            </div>
            <Settings />
            <Table />
        </Fragment>
    );
};

export default App;

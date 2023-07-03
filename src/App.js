/* eslint-disable */
import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";

import { Header } from "./comps/header/Header";
import { Table } from "./comps/table/Table";
import { Settings } from "./comps/settings/Settings";

const App = () => {


    return (
        <Fragment>
            <Header />
            <Settings/>
            <Table/>
      
        </Fragment>
    );
};

export default App;

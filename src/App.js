/* eslint-disable */
import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";
import { Settings } from "./components/settings/Settings";

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

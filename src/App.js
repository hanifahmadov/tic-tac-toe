/* eslint-disable */
import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Body />
        </Fragment>
    );
};

export default App;

/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const appJsx = (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

        <RecoilRoot>
            <App />
        </RecoilRoot>
        
    </BrowserRouter>
);

ReactDOM.render(appJsx, document.getElementById("root"));

/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const appJsx = (
    <BrowserRouter>

        <RecoilRoot>
            <App />
        </RecoilRoot>
        
    </BrowserRouter>
);

ReactDOM.render(appJsx, document.getElementById("root"));

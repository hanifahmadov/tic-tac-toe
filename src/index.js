/* eslint-disable */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import { RecoilRoot } from "recoil";

const appJsx = (
	<RecoilRoot>
		<App />
	</RecoilRoot>
);

ReactDOM.render(appJsx, document.getElementById("root"));

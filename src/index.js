/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";

import "./index.scss";

import { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";



/* layouts */
import { RootLayout } from "./layouts/RootLayout";
import { App } from "./App";



const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <App />,
				children: [
					// {
					// 	path: "/",
					// 	element: <div />,
					// },
			
					// {
					// 	path: "*",
					// 	element: <Navigate to='/' replace />,
					// },
				],
			},
		],
	},
	{
		path: "/404",
		element: <Navigate to='/' replace />,
	},
	{
		path: "*",
		element: <Navigate to='/' replace />,
	},
]);

/**
 *
 *  StyleSheetManager, CustomStyleSheetManager
 * 	are to avoid $value or $ while passing arg to styled-components
 *
 */
const CustomStyleSheetManager = (props) => (
	<StyleSheetManager shouldForwardProp={(prop) => prop !== "comp"}>{props.children}</StyleSheetManager>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CustomStyleSheetManager>
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	</CustomStyleSheetManager>
);

/* eslint-disable */
import React, { Fragment, useEffect } from "react";
import { Nav } from "./comps/nav/Nav";
import { GStyled } from "./comps/shared/globals.styled";
import { Settings } from "./comps/settings/Settings";
import { Table } from "./comps/table/Table";
import { Frame } from "./comps/shared/shared.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardState3x3, deviceState, settingsState } from "./comps/utils/store";
import { ThemeProvider } from "styled-components";
import { ISettings, ITable } from "./comps/shared/app.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";

const App = () => {
	let setting = useRecoilValue(settingsState);
	let [device, setDevice] = useRecoilState(deviceState);
	let phone = useMediaQuery({
		query: "(max-width: 768px)",
	});

	useEffect(() => {
		device = JSON.parse(JSON.stringify(device));
		setDevice({
			...device,
			phone,
		});
	}, [phone]);

	const notify = () => {
		toast(
			"🚀 I've decided to move the 5x5 minimax algorithm to the Cloud due to a lag issue. Active Soon!",
			{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "light",
			}
		);
	};

	const handleClickAlert = () => {
		notify()
	};

	return (
		<Fragment>
			<ThemeProvider theme={{ device, setting }}>
				<ToastContainer />
				<GStyled />
				<Nav />
				<ISettings>
					<Settings handleClickAlert={handleClickAlert} />
				</ISettings>
				<ITable>
					<Table />
				</ITable>
			</ThemeProvider>
		</Fragment>
	);
};

export default App;

/*        <div id='navbar'>
                <h1>Tic Tac Toe</h1>
                <h3>DEMO</h3>
            </div>
            <Settings />
            <Table /> */

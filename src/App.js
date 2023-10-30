/* eslint-disable */
import React, { Fragment } from "react";
import { useRecoilState, RecoilEnv } from "recoil";
import { ThemeProvider } from "styled-components";
import { stateDefaultValue } from "./comps/utils/states/store";
import { INav, ISettings, ITable } from "./comps/utils/styled/app.styled";
import { Nav } from "./comps/nav/Nav";
import { Settings } from "./comps/settings/Settings";
import { Table } from "./comps/table/Table";
import Swal from "sweetalert2";

const App = () => {
	//: solutuon for dublicate bug error on recoil atom
	RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
	const [state, setState] = useRecoilState(stateDefaultValue);

	return (
		<Fragment>
			<ThemeProvider theme={state}>
				<INav>
					<Nav />
				</INav>

				<ISettings>
					<Settings />
				</ISettings>

				<ITable>
					<Table />
				</ITable>
			</ThemeProvider>
		</Fragment>
	);
};

export default App;

// import React, { Fragment, useEffect } from "react";
// import { Nav } from "./comps/nav/Nav";
// import { GStyled } from "./comps/utils/styled/globals.styled";
// import { Settings } from "./comps/settings/Settings";
// import { Table } from "./comps/table/Table";
// import { Frame } from "./comps/utils/styled/common";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { boardState3x3, deviceState, settingsState } from "./comps/utils/states/store";
// import { ThemeProvider } from "styled-components";
// import { ISettings, ITable } from "./comps/utils/styled/app.styled";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useMediaQuery } from "react-responsive";

// const App = () => {
// 	let setting = useRecoilValue(settingsState);
// 	let [device, setDevice] = useRecoilState(deviceState);
// 	let phone = useMediaQuery({
// 		query: "(max-width: 768px)",
// 	});

// 	useEffect(() => {
// 		device = JSON.parse(JSON.stringify(device));
// 		setDevice({
// 			...device,
// 			phone,
// 		});
// 	}, [phone]);

// 	const notify = () => {
// 		toast(
// 			"🚀 I've decided to move the 5x5 minimax algorithm to the Cloud due to a lag issue. Active Soon!",
// 			{
// 				position: "top-right",
// 				autoClose: 5000,
// 				hideProgressBar: false,
// 				closeOnClick: true,
// 				pauseOnHover: true,
// 				draggable: false,
// 				progress: undefined,
// 				theme: "light",
// 			}
// 		);
// 	};

// 	const handleClickAlert = () => {
// 		notify()
// 	};

// 	return (
// 		<Fragment>
// 			<ThemeProvider theme={{ device, setting }}>
// 				<ToastContainer />
// 				<GStyled />
// 				<Nav />
// 				<ISettings>
// 					<Settings handleClickAlert={handleClickAlert} />
// 				</ISettings>
// 				<ITable>
// 					<Table />
// 				</ITable>
// 			</ThemeProvider>
// 		</Fragment>
// 	);
// };

// export default App;

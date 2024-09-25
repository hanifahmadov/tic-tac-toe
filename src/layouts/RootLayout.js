/* NPM packages */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";

/* global states */
import { deviceDefault } from "../store/states/app-state";

/* helpers */

export const RootLayout = () => {
	/**
	 *  device state and
	 *  parse into regular to me modified
	 */
	let [device, setDevice] = useRecoilState(deviceDefault);
	device = JSON.parse(JSON.stringify(device));

	/* small screen */
	let sm = useMediaQuery({
		query: "(max-width: 576px)",
	});

	/* medium screen */
	let md = useMediaQuery({
		query: "(max-width: 768px)",
	});

	/**
	 *  adjust the sizing
	 *  sm 576
	 *  md 768
	 */
	useEffect(() => {
		setDevice({
			...device,
			sm,
			md,
		});
	}, [sm, md]);

	return (
		<ThemeProvider theme={{ sm, md }}>
			<div
				className='root-layout h-[100svh] w-[100svw] 
                            flex justify-center items-center
                            fixed inset-0 bg-white
                        	'
			>
				<div className='flex justify-center items-center p-[1rem] rounded-3xl relative bottom-[2rem]' >
					<Outlet />
				</div>
			</div>
		</ThemeProvider>
	);
};

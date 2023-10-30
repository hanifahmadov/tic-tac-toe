/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
	PlayerButtons,
	ResetButton,
	SettingsContent,
	SettingsWr,
	SizeButtons,
	Button,
} from "./settings.styled";

import { stateDefaultValue } from "../utils/states/store";
import { setSetting } from "../utils/support/helper";
import { sweetAlertify } from "../utils/support/notify";

export const Settings = ({ handleClickAlert }) => {
	let [state, setState] = useRecoilState(stateDefaultValue);
	let resetSetting = useResetRecoilState(stateDefaultValue);

	const handleClick = (e) => {
		let id = Number(e.target.id);

		if (id == 0) {
			resetSetting();
		} else {
			if (!state.person.moves.length) {
				setState(setSetting(id, state));
			}
		}
	};

	return (
		<SettingsWr>
			{/* {console.log("state::", state)} */}
			<SettingsContent onClick={handleClick}>
				{console.log(state)}
				<ResetButton>
					<button
						type='button'
						id='0'
						className='fw-bold btn btn-primary btn-lg'
					>
						Reset
					</button>
				</ResetButton>

				<SizeButtons className='btn-group' role='group'>
					<button
						type='button'
						id='33'
						className={
							state.setting.tt
								? "fw-bold btn btn-warning btn-lg"
								: "fw-bold btn btn-outline-primary btn-lg"
						}
					>
						3x3
					</button>
					<button
						type='button'
						id='55'
						className={
							state.setting.ff
								? "fw-bold btn btn-warning btn-lg"
								: "fw-bold btn btn-outline-primary btn-lg"
						}
					>
						5x5
					</button>
				</SizeButtons>

				<PlayerButtons className='btn-group' role='group'>
					<button
						type='button'
						id='1'
						className={
							state.setting.pvp
								? "fw-bold btn btn-warning btn-lg"
								: "fw-bold btn btn-outline-primary btn-lg"
						}
					>
						PvP
					</button>

					<button
						type='button'
						id='2'
						className={
							state.setting.ai
								? "fw-bold btn btn-warning btn-lg"
								: "fw-bold btn btn-outline-primary btn-lg"
						}
					>
						vs Ai
					</button>
				</PlayerButtons>
			</SettingsContent>
		</SettingsWr>
	);
};

/* 



*/

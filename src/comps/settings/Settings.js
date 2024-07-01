/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
	PlayerButtons,
	ResetButton,
	SettingsContent,
	SettingsWr,
	SizeButtons,
} from "./settings.styled";

import { aiDefaults, boardDefaults, currentDefaults, personDefaults, stateDefaultValue } from "../utils/states/store";
import { setSetting } from "../utils/support/helper";
import { sweetAlertify } from "../utils/support/notify";


export const Settings = ({ handleClickAlert }) => {
	let [state, setState] = useRecoilState(stateDefaultValue);


	const handleClick = (e) => {
		let id = Number(e.target.id);
		state = JSON.parse(JSON.stringify(state));
		

		if (id == 0) {
			state.board = boardDefaults
			state.person = personDefaults
			state.ai = aiDefaults
			state.current = currentDefaults
			setState(state);

		} else {
			if (!state.person.moves.length) {
				setState(setSetting(id, state));
			}
		}
	};

	return (
		<SettingsWr>
			<SettingsContent onClick={handleClick}>
				<ResetButton>
					<button
						type='button'
						id='0'
						className='fw-bold btn btn-primary btn-lg'
					>
						Reset
					</button>
				</ResetButton>

				{/* <SizeButtons className='btn-group' role='group'>
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
				</SizeButtons> */}

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

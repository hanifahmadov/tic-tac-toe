/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { PlayerButtons, ResetButton, SettingsContent, SettingsWr } from "./settings.styled";

import { aiDefaults, boardDefaults, currentDefaults, personDefaults, stateDefaultValue } from "../utils/states/store";
import { setSetting } from "../utils/support/helper";

export const Settings = ({ handleClickAlert }) => {
	let [state, setState] = useRecoilState(stateDefaultValue);

	let disabledPlayerButtons = state.person.moves.length && true;
	let disabledResetButtons = state.current.gameover ? false : true;

	const handleClick = (e) => {
		let id = Number(e.target.id);
		state = JSON.parse(JSON.stringify(state));

		if (id == 0) {
			state.board = boardDefaults;
			state.person = personDefaults;
			state.ai = aiDefaults;
			state.current = currentDefaults;
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
				<ResetButton $resetAbled={disabledResetButtons}>
					<button
						type='button'
						id='0'
						className={disabledResetButtons ? "fw-bold bg-transparent" : "fw-bold bg-danger"}
						disabled={disabledResetButtons}
					>
						Reset
					</button>
				</ResetButton>

				<PlayerButtons $abled={disabledPlayerButtons}>
					<button
						type='button'
						id='1'
						className={state.setting.pvp ? "fw-bold mx-1 bg-warning" : "fw-bold mx-1 bg-transparent"}
						disabled={disabledPlayerButtons}
					>
						PvP
					</button>

					<button
						type='button'
						id='2'
						className={state.setting.ai ? "fw-bold bg-warning" : "fw-bold bg-transparent"}
						disabled={disabledPlayerButtons}
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

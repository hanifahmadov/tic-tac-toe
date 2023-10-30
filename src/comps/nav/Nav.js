/* eslint-disable */
import React from "react";
import { Icon } from "../utils/styled/globals.styled";
import { useRecoilValue } from "recoil";
import { randomEmoj } from "../utils/states/db";
import { stateDefaultValue } from "../utils/states/store";

export const Nav = () => {
	const state = useRecoilValue(stateDefaultValue);

	return (
		<>
			<span className='hder'>Tic Tac Toe</span>
			<span className='demo'>DEMO</span>
		</>
	);
};

/* eslint-disable */
import styled from "styled-components";

export const SettingsWr = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	& > * {
		pointer-events: none;
	}

	button {
		padding: 0.75rem;
		font-size: 1rem;
		pointer-events: auto;
	}
`;

export const SettingsContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;

	background: white;
	width: 50%;
	height: 100%;
`;

export const ResetButton = styled.div``;
export const SizeButtons = styled.div``;
export const PlayerButtons = styled.div``;

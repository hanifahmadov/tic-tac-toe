/* eslint-disable */
import styled from "styled-components";
import { checkWinner, isBoardFull } from "../utils/support/helper";
import { winPositions33 } from "../utils/states/db";

export const SettingsWr = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 1rem;

	& > * {
		pointer-events: none;
	}

	button {
		padding: ${({ theme }) => (theme.device.phone ? ".7rem" : ".75rem")};
		font-size: ${({ theme }) => (theme.device.phone ? ".95rem" : "1rem")};
		pointer-events: auto;
		border: 2px solid white;

		color: white;
	}
`;

export const SettingsContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	width: ${({ theme }) => (theme.device.phone ? "100%" : "18rem")};

	button {
		border-radius: 9px;
		transition: all 0.4s ease-in-out;
	}
`;

export const ResetButton = styled.div`
	border-radius: 10px;
	transition: all 0.3s ease-in-out;
	opacity: ${({ $resetAbled }) => ($resetAbled ? "0.5" : "1")};
`;

export const SizeButtons = styled.div``;

export const PlayerButtons = styled.div`
	border-radius: 10px;
	transition: all 0.3s ease-in-out;
	opacity: ${({ $abled }) => ($abled ? "0.5" : "1")};
`;
export const Button = styled.button``;

/* 
		pointer-events: auto;
		pointer-events: ${({ theme }) => theme.person.moves.length && "none;"};
		pointer-events: ${({ theme }) =>
			(isBoardFull(theme.board.tt) ||
				checkWinner(theme, theme.board.tt, winPositions33) == 1 ||
				checkWinner(theme, theme.board.tt, winPositions33) == 0) &&
			"auto;"};

			// opacity: ${({ theme }) => (theme.person.moves.length ? 0.4 : 1)};
*/

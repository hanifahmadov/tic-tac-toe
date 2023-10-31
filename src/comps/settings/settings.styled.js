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
		padding: ${({theme}) => theme.device.phone ? '.7rem' : '.75rem'};
		font-size: ${({theme}) => theme.device.phone ? '.95rem' : '1rem'};
		pointer-events: auto;
	}
`;

export const SettingsContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;

	
	width:${({theme}) => theme.device.phone ? '100%' : '30rem'};
	
	height: 100%;

	.btn-group {
		transition: all 0.4s ease-in-out;
		opacity: ${({ theme }) => (theme.person.moves.length ? 0.2 : 1)};

		button {
			pointer-events: ${({ theme }) =>
				theme.person.moves.length && "none;"};
		}
	}
`;

export const ResetButton = styled.div``;
export const SizeButtons = styled.div``;
export const PlayerButtons = styled.div``;
export const Button = styled.button``;

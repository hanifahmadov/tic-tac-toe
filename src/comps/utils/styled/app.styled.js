/* eslint-disable */
import styled, { createGlobalStyle } from "styled-components";
import { bg, clr, ff } from "./globals.styled";

export const IApp = styled.div`
	max-width: 40rem;
	// background: ;
	// border: 1px solid white;
	border-radius: 1rem;
	padding-top: 1rem;

	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const INav = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => (theme.device.phone ? "0 1rem " : "0rem 2rem")};
	height: 5rem;

	border-bottom: 3px solid rgba(255, 255, 255, 1);
	color: white;
	font-family: ${ff.unicaone};
	font-size: ${({ theme }) => (theme.device.phone ? "2.5rem" : "4rem")};
	font-weight: 900 !important;
`;

export const ISettings = styled.div`
	width: 100%;

	height: ${({ theme }) => (theme.device.phone ? "4rem" : "5rem")};
	margin: ${({ theme }) => (theme.device.phone ? "1rem 0rem" : "0rem")};

	margin-top: 0.5rem;

	// border: 2px solid red;

	// border-bottom: 3px solid white;
`;

export const ITable = styled.div`
	width: 100%;
	margin: 2rem 0rem;
	margin-top: 1rem;
	overflow: hidden;

	// flex-grow: 1;
	// border: 10px solid yellow;
`;

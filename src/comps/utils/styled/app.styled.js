/* eslint-disable */
import styled, { createGlobalStyle } from "styled-components";
import { bg, ff } from "./globals.styled";


export const IApp = styled.div`
    width: 100%;
    height: 100vh;

`


export const INav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 2rem;
	height: 6rem;

	background: ${bg.unk02};
	color: black;
	font-family: ${ff.unicaone};
	font-size: 3rem;
	font-weight: 900 !important;



	border: 2px solid black;
`;

export const ISettings = styled.div`
	width: 100%;
	height: 5rem;


	border: 2px solid white;
`;

export const ITable = styled.div`
	width: 100%;
    flex-grow: 1;

    border: 2px solid yellow;
`;

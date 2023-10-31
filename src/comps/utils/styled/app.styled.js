/* eslint-disable */
import styled, { createGlobalStyle } from "styled-components";
import { bg, ff } from "./globals.styled";


export const IApp = styled.div`

    width: 100%;
    height: 100vh;

`


export const INav = styled.div`
${(props) => console.log(props, "Styled thememme")}
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:${({theme}) => theme.device.phone ? '.5rem' : '0rem 2rem'};
	height: 6rem;
	

	background: ${bg.unk02};
	color: black;
	font-family: ${ff.unicaone};
	font-size:  ${({theme}) => theme.device.phone ? '2.5rem' : '3rem'};
	font-weight: 900 !important;



	// border: 2px solid black;
`;

export const ISettings = styled.div`
	width: 100%; 

	height: ${({theme}) => theme.device.phone ? '4rem' : '5rem'};
	margin:  ${({theme}) => theme.device.phone ? '1rem 0rem' : '0rem'};

	margin-top: 1rem;


	// border: 2px solid white;
`;

export const ITable = styled.div`
	width: 100%;
	margin-top: 3rem;

    // flex-grow: 1;
    // border: 2px solid yellow;
`;

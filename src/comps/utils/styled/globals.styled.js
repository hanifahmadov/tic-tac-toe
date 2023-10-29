/* eslint-disable */
import styled, { createGlobalStyle } from "styled-components";

//: font-family: 'Roboto Mono', monospace;
//: font-family: "Poppins", sans-serif;
//: font-family: 'Roboto Slab', serif;
export const ff = {
	poppin: `'Poppins', sans-serif`,
	robslab: `'Roboto Slab', serif`,
	robmono: `'Roboto Mono', monospace`,
	unicaone: `'Unica One', sans-serif`,
};

export const clr = {
	athens01: "#EBECF0",
	athens02: "#EFF0F3",
	athens03: "#F5F5F7",

	azure: "#f8feff",
	coolblack: "#151922",
	personal01: "#212224",

	unk01: "#ecf0f4",
};

export const bg = {
	unk01: `conic-gradient(from 0deg, rgba(255, 255, 255, 1), rgb(6, 27, 185))`,
	unk02: `linear-gradient( 180deg,
		    rgba(14, 82, 252, 1) 0%,
		    rgba(129, 164, 253, 1) 53%,
		    rgba(248, 250, 255, 1) 98%,
		    rgba(255, 255, 255, 1) 100%
		)`,
};

export const GlobalStyled = createGlobalStyle`
  body {


  }
`;

export const Icon = styled.div`


	img {
		border-radius: 10%;
		padding: 2px;
		height: 60px;
		width: 60px;
		background: white;
	}
`;

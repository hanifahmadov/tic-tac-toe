/* eslint-disable */

import delf from "../../utils/svg/delfine.png";
import butterfly from "../../utils/svg/butterfly.png";
import hams from "../../utils/svg/hamster.png";
import lady from "../../utils/svg/lady.png";
import panda from "../../utils/svg/panda.png";
import ping from "../../utils/svg/pinguin.png";
import tavs from "../../utils/svg/tavsan.png";

//: svgs
export const randomEmoj = [delf, butterfly, lady, panda, tavs, ping, hams];
export const randomIndex = [0, 2, 4, 6, 8];
//: boards
export const tableBoard3 = new Array(9).fill(null);
export const tableBoard5 = new Array(25).fill(null);

//: board cell indexes for txt
export const indtxt = [
	[0, 3],
	[3, 6],
	[6, 9],
];

//: win positions for txt ( third x third)
export const winPositions33 = [
	// left-to-right
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	// dioganals
	[0, 4, 8],
	[2, 4, 6],

	// top-to-bottom
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
];

//: board cell indexes for fxf
export const indfxf = [
	[0, 5],
	[5, 10],
	[10, 15],
	[15, 20],
	[20, 25],
];

//: win positions for 5x5
export const winPositions55 = [
	// left-to-right
	[0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24],

	// dioganals
	[0, 6, 12, 18, 24],
	[4, 8, 12, 16, 20],

	// top-to-bottom
	[0, 5, 10, 15, 20],
	[1, 6, 11, 16, 21],
	[2, 7, 12, 17, 22],
	[3, 8, 13, 18, 23],
	[4, 9, 14, 19, 24],
];

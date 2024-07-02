/* eslint-disable */
import { atom } from "recoil";
import { tableBoard33, tableBoard55 } from "./db";
import { clr, ff } from "../styled/globals.styled";

/*

TODO:
: remove reset value from store setting

*/

export const boardDefaults = {
	tt: tableBoard33,
	ff: tableBoard55,
};

export const currentDefaults = {
	// totalmoves: 0,
	winPositions: [],
	gameover: false,
	draw: false,
	winner: null,
};

export const settingDefaults = {
	reset: false,
	tt: true, //: third x third
	ff: false, //: five x five
	pvp: true, //: person vs person
	ai: false, //: minimax
	lang: ff.carter,
};

export const personDefaults = {
	value: "X",
	moves: [],
	turn: true,
};

export const aiDefaults = {
	value: "O",
	moves: [],
	turn: false,
};

export const deviceDefaults = {
	phone: false,
};

export const stateDefaultValue = atom({
	key: "stateDefaultValue",
	default: {
		board: boardDefaults,
		current: currentDefaults,
		setting: settingDefaults,
		person: personDefaults,
		ai: aiDefaults,
		device: deviceDefaults,
	},
});

// export const stateDefaultValue = atom({
// 	key: "stateDefaultValue",
// 	default: {
// 		board: {
// 			tt: tableBoard33,
// 			ff: tableBoard55,
// 		},

// 		current: {
// 			// totalmoves: 0,
// 			winPositions: [],
// 			gameover: false,
// 			draw: false,
// 			winner: null,
// 		},

// 		setting: {
// 			reset: false,
// 			tt: true, //: third x third
// 			ff: false, //: five x five
// 			pvp: true, //: person vs person
// 			ai: false, //: minimax
// 		},

// 		person: {
// 			value: "X",
// 			moves: [],
// 			turn: true,
// 		},

// 		ai: {
// 			value: "O",
// 			moves: [],
// 			turn: false,
// 		},

// 		device: {
// 			phone: false,
// 		},
// 	},
// });

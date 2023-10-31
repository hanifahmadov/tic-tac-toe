/* eslint-disable */
import { atom } from "recoil";
import { tableBoard3, tableBoard5 } from "./db";

export const stateDefaultValue = atom({
	key: "stateDefaultValue",
	default: {
		board: {
			tt: tableBoard3,
			ff: tableBoard5,
		},

		current: {
			// totalmoves: 0,
			winPositions: [],
			gameover: false,
			draw: false,
			winner: null,
		},

		setting: {
			reset: false,
			tt: true, //: third x third
			ff: false, //: five x five
			pvp: true, //: person vs person
			ai: false, //: minimax
		},

		person: {
			value: "X",
			moves: [],
			turn: true,
		},

		ai: {
			value: "O",
			moves: [],
			turn: false,
		},


		device: {
			phone: false,
		},
	},
});


/* 

TODO:
: remove reset value from store setting

*/

export const boardDefaults = atom({
	key: "boardDefaults",
	default:  {
		tt: tableBoard3,
		ff: tableBoard5,
	}
});

export const settingsDefaults = atom({
	key: "settingsDefaults",
	default:{
		reset: false,
		tt: true, //: third x third
		ff: false, //: five x five
		pvp: true, //: person vs person
		ai: false, //: minimax
	}
});

export const currentDefaults = atom({
	key: "currentDefaults",
	default:  {
		winPositions: [],
		gameover: false,
		draw: false,
		winner: null,
	}
});

export const aiDefaults = atom({
	key: "aiDefaults",
	default:  {
		value: "O",
		moves: [],
		turn: false,
	}
});

export const personDefaults = atom({
	key: "personDefaults",
	default:  {
		value: "X",
		moves: [],
		turn: false,
	}
});

export const deviceDefaults = atom({
	key: "deviceDefaults",
	default: {
		phone: false
	}
});
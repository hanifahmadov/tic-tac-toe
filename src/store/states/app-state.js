import { atom } from "recoil";

/**
 *  device default states
 */
export const deviceDefault = atom({
	key: "deviceDefault",
	default: {
		xsm: null /* > 360 */,
		sm: null /* > 576*/,
		md: null /* > 768 */,
		lg: null /* > 1024 */,
		xlg: null /*  > 1440 */,
	},
});

/*  active index */
export const activeIndexDefault = atom({
	key: "activeIndexDefault",
	default: false,
});

/*  active index */
export const displayIndexDefault = atom({
	key: "displayIndexDefault",
	default: 0,
});

/* minimax ai default */
export const aiDefault = atom({
	key: "aiDefault",
	default: {
		value: "O",
		moves: [],
		turn: false,
	},
});

/* user default */
export const userDefault = atom({
	key: "userDefault",
	default: {
		value: "X",
		moves: [],
		turn: true,
	},
});

/* setting default */
export const resetButtonDefault = atom({
	key: "resetButtonDefault",
	default: false,
});

export const pvpButtonDefault = atom({
	key: "pvpButtonDefault",
	default: true,
});


export const aiButtonDefault = atom({
	key: "aiButtonDefault",
	default: false,
});

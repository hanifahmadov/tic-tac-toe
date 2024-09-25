/* npm packages */
import { atom } from "recoil";

/* win positions */
export const winPositions = [
	/* left-to-right */
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	/*  dioganals */
	[0, 4, 8],
	[2, 4, 6],

	/* top-to-bottom */
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
];

/* table array */
export const boardDefault = atom({
	key: "boardDefault",
	default: new Array(9).fill(null),
});

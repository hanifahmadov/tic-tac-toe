/* eslint-disable */
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
var async = require("async");

import Swal from "sweetalert2";

import { Cell, CellsWr, TableContent, TableWr } from "./table.styled";
import { stateDefaultValue } from "../utils/states/store";
import {
	boardCheckUp,
	checkWinner,
	getBestIndex,
	getRandomIndex,
	makeMoveAi,
	makeMovePvP,
} from "../utils/support/helper";
import { winPositions33, winPositions55 } from "../utils/states/db";
import { sweetAlertify } from "../utils/support/notify";

export const Table = () => {
	let [state, setState] = useRecoilState(stateDefaultValue);
	state = JSON.parse(JSON.stringify(state));

	// person plays
	const handleClick = (e) => {
		let ind = Number(e.target.getAttribute("data-ind"));

		//: if length is 0, means innerHTML has no value
		let availSpot = e.target.innerHTML.length;

		if (availSpot == 0) {
			// console.log('clicked')

			//: PvP in this case state ai turn stays false always
			if (state.setting.pvp) {
				let result = makeMovePvP(ind, state);
				setState(result);
			}

			//: Ai in this case human plays and ai turns gets true
			if (state.setting.ai && state.person.turn) {
				let result = makeMovePvP(ind, state);
				setState(result);
			}
		}

		console.log("table handleClick state:", state);
	};

	//: minimax moves
	useEffect(() => {
		//: minimax ai turn
		if ( state.ai.turn && state.setting.tt && !state.current.gameover ) {
			console.log("table useEffect state:", state);
			state = JSON.parse(JSON.stringify(state));

			//: get best index for minimax


			let bestIndex =
				state.ai.moves.length == 0
					? getRandomIndex([2, 4, 6, 8], state.board.tt)
					: getBestIndex(state);

			// let bestIndex = getBestIndex(state);

			//: make move ai
			let res = makeMoveAi(bestIndex, state);

			//: make 1 sec latency for every move
			setTimeout(() => {
				setState(res);
			}, 1000);
		}

	}, [state.ai.turn]);

	//: check for winner on every move on board
	useEffect(() => {
		if (state.setting.tt) {
			let res = boardCheckUp(state, state.board.tt, winPositions33);
			return setState(res);
		}

		if (state.setting.ff) {
			let res = boardCheckUp(state, state.board.ff, winPositions55);
			setState(res);
		}

		//: useEffect tracker for state.board causes loop stack overflow,
		//: so, i have to follow fixed numbers to avoid
	}, [state.ai.moves.length, state.person.moves.length]);

	useEffect(() => {
		let winner = checkWinner(
			state,
			state.setting.tt ? state.board.tt : state.board.ff,
			state.setting.tt ? winPositions33 : winPositions55
		);

		if(winner == 1){
			let t = `<h2>CONGRATS</h2> 
					<h6>YOU WON!</h6>`
			sweetAlertify(t, 2000)
		} else if(winner == 0){
			let t = `<h2>WOOW</h2> 
			<h6>YOU LOST</h6>`
			sweetAlertify(t, 2000)
		}
	}, [state.current.gameover]);

	return (
		<TableWr>
			<TableContent>
				<CellsWr onClick={handleClick}>
					{(state.setting.tt ? state.board.tt : state.board.ff).map(
						(val, index) => (
							<Cell
								key={index}
								id={"cell" + index}
								data-ind={index}
								value={val} //: it passes the val to Cell to cursor default if played
							>
								{val}
							</Cell>
						)
					)}
				</CellsWr>
			</TableContent>
		</TableWr>
	);
};

/* 




	async.waterfall([
				function getIn(callback){
					let bestIndex = getBestIndex(state);
					callback(null, bestIndex)
				},

				function makeMove(index, callback) {
					let  res = makeMoveAi(index, state)
					callback(null, res)
				}
			], function(err, res){
				if(err){
					console.log('error in async useEffect', err)
					return;
				}

				setTimeout(()=> {
					setState(res)
				}, 1000)
			})


				// if (state.ai.turn && state.setting.tt) {
		// 	state = JSON.parse(JSON.stringify(state));

		// 	async.waterfall(
		// 		[
		// 			function getIn(callback) {
		// 				let bestIndex = getBestIndex(state);
		// 				callback(null, bestIndex);
		// 			},

		// 			function makeMove(index, callback) {
		// 				let res = makeMoveAi(index, state);
		// 				callback(null, res);
		// 			},
		// 		],
		// 		function (err, res) {
		// 			if (err) {
		// 				console.log("error in async useEffect", err);
		// 				return;
		// 			}

		// 			setTimeout(() => {
		// 				setState(res);
		// 			}, 1000);
		// 		}
		// 	);
		// }

*/

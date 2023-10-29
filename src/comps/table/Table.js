/* eslint-disable */
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
var async = require("async");

import { Cell, CellsWr, TableContent, TableWr } from "./table.styled";
import { stateDefaultValue } from "../utils/states/store";
import {
	boardCheckUp,
	checkWinner,
	getBestIndex,
	makeMoveAi,
	makeMovePvP,
} from "../utils/support/helper";
import { winPositions33, winPositions55 } from "../utils/states/db";

export const Table = () => {
	let [state, setState] = useRecoilState(stateDefaultValue);
	state = JSON.parse(JSON.stringify(state));

	// person plays
	const handleClick = (e) => {
		let ind = Number(e.target.getAttribute("data-ind"));


		//: if length is 0, means innerHTML has no value
		let availSpot = e.target.innerHTML.length;

		if (availSpot == 0) {
			// console.log('table handleClick state:', state)

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
	};

	//: minimax moves
	useEffect(() => {
		//: minimax ai turn
		if (state.ai.turn && state.setting.tt) {
			state = JSON.parse(JSON.stringify(state));
			//: get best index for minimax
			let bestIndex = getBestIndex(state);
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
			console.log("res:::", res);
		}

		if (state.setting.ff) {
			let res = boardCheckUp(state, state.board.ff, winPositions55);
			console.log("res:::", res);
		}

		// console.log("checker::", checker)
	}, [state]);

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


								style={{
									background:
										state.current.gameover &&
										state.current.winPositions.includes(
											index
										) &&
										"red",
								}}


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


*/

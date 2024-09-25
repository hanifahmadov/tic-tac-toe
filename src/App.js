import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";

/* global states */
import { boardDefault, winPositions } from "./store/states/board-state";
import {
	aiButtonDefault,
	aiDefault,
	pvpButtonDefault,
	resetButtonDefault,
	userDefault,
} from "./store/states/app-state";

/* helper */
import { checkWinner } from "./store/fn/helper";
import { getBestIndex, minimax } from "./store/fn/minimax";
import Loading from "./store/spinner/Loading";
import { Toaster } from "./comps/Toaster";

/* helpers */

export const App = () => {
	/* resets */
	const resetBoard = useResetRecoilState(boardDefault);

	/* states */
	const [board, setBoard] = useRecoilState(boardDefault);
	const [resetBtn, setResetBtn] = useState(true);
	const [pvpBtn, setPvpBtn] = useState(true);
	const [aiBtn, setAiBtn] = useState(false);

	/* players */
	const [ai, setAi] = useState(false);
	const [user, setUser] = useState(true);
	// const [ai, setAi] = useRecoilState(aiDefault);
	// const [user, setUser] = useRecoilState(userDefault);

	/* winner position indexes */
	const [winner, setWinner] = useState(null);
	const [winIndex, setWinIndex] = useState([]);
	const [gameStarted, setGameStarted] = useState(false);

	/**
	 * local state
	 * turn = 1 player X
	 * turn = 0 player O
	 */
	const [turn, setTurn] = useState(1);
	const [moves, setMoves] = useState(0);
	const [analyzing, setAnalyzing] = useState(false);

	/** handle reset btn click */
	const handleResetClick = () => {
		/* reset  */
		resetBoard();
		setTurn(1);
		setWinner(null);
		setWinIndex([]);
		setGameStarted(false);
		setMoves(0);
		setAnalyzing(false);
	};

	/** handle pvp btn click */
	const handlePvpClick = () => {
		if (winner) return;
		setPvpBtn(true);
		setAiBtn(false);
	};

	/** handle ai btn click */
	const handleAiClick = () => {
		console.log("ai btn clicked");
		if (winner) return;
		setPvpBtn(false);
		setAiBtn(true);
	};

	/* handle cell clicks */
	const handleCellClick = (e) => {
		/* if winner stop all actions in the board */
		if (winner) return;

		/* any click in board, game started */
		setGameStarted(true);

		/* get the id of the cell */
		const id = Number(e.target.id);

		/* if the cell is not availbale stop click actions */
		if (board[id] !== null) return;

		/* person vs person */
		if (pvpBtn) {
			/* make desicison whose turn X & O */
			if (turn == 1) {
				setBoard(
					produce((draft) => {
						draft[id] = "X";
					})
				);
				setTurn(0);
			} else {
				setBoard(
					produce((draft) => {
						draft[id] = "O";
					})
				);
				setTurn(1);
			}
		}

		/* if person vs ai (minimax) */
		if (aiBtn) {
			/* make desicison whose turn X & O */
			/* if turn 1 then player X turn */
			if (turn == 1) {
				setBoard(
					produce((draft) => {
						draft[id] = "X";
					})
				);
				setTurn(0);
			}
		}
	};

	useEffect(() => {
		if (winner) return;

		if (!board.some((val) => val == null)) {
			/* stop all actions on the board */
			setWinner(true);
		}

		const checker = checkWinner(board, winPositions);

		if (checker) {
			/* get the winner position indexes [1,2,3] or .... */
			setWinIndex(checker);

			/* stop all actions on the board */

			setWinner(true);
		}
	}, [board]);

	useEffect(() => {
		if (aiBtn && turn == 0) {
			console.log("loopp");
			setAnalyzing(true);

			getBestIndex(board.slice(), 0)
				.then(({ bestIndex, callCount }) => {
					/* update the current board value */
					setBoard(
						produce((draft) => {
							draft[bestIndex] = "O";
						})
					);

					setMoves(callCount);
					setAnalyzing(false);

					setTurn(1);
				})
				.catch((err) => {
					console.log("error for best index ai", err);
				});
		}
	}, [turn]);

	return (
		<div className='mama h-full w-full flex gap-2 flex-col justify-center items-center'>
			<Toaster
				aiBtn={aiBtn}
				pvpBtn={pvpBtn}
				board={board}
				analyzing={analyzing}
				winIndex={winIndex}
				winner={winner}
				moves={moves}
			/>
			<div className='h-full w-full flex gap-[3rem] flex-col justify-center items-center'>
				<div className='row-top flex gap-5 flex-col justify-center items-center'>
					<div className='header flex gap-1'>
						<div className='text-[25px] border px-3 rounded'>Tic</div>
						<div className='text-[25px] border px-3 rounded'>Tac </div>
						<div className='text-[25px] border px-3 rounded'>Toe</div>
					</div>

					<div className='settings flex gap-10'>
						<motion.div
							whileTap={{ scale: 1.03 }}
							onClick={handleResetClick}
							className={`border px-3 py-1 rounded 
									cursor-pointer
									hover:bg-blue-100
									${winner && "animate-pulse-bg"}
									${analyzing && "pointer-events-none opacity-50"}
									`}
						>
							Reset
						</motion.div>

						<div className={`flex gap-1 ${gameStarted && "pointer-events-none opacity-40"}`}>
							<motion.span
								whileTap={!winner && { scale: 1.03 }}
								onClick={handlePvpClick}
								className={`border px-3 py-1 rounded 
										inline-block
										${winner ? "hover:bg-none cursor-not-allowed" : "cursor-pointer hover:bg-blue-100"}
										${pvpBtn ? "bg-blue-100 font-[500]" : "bg-white"}
										`}
							>
								PvP
							</motion.span>
							<motion.span
								whileTap={!winner && { scale: 1.03 }}
								onClick={handleAiClick}
								className={`border px-3 py-1 rounded 
										inline-block
										${winner ? "hover:bg-none cursor-not-allowed" : "cursor-pointer hover:bg-blue-100"}
										${aiBtn ? "bg-blue-100 font-[500]" : "bg-white"}
										`}
							>
								Ai
							</motion.span>
						</div>
					</div>
				</div>

				<div className='row-bottom mt-2 relative'>
					<div
						className={`sikko-table w-[240px] flex flex-wrap 
								rounded-3xl overflow-hidden
								${aiBtn && turn == 0 && "pointer-events-none"}
								`}
					>
						{board.map((val, i) => {
							return (
								<div
									key={i}
									id={i}
									onClick={handleCellClick}
									className={`w-[80px] h-[80px] flex justify-center items-center 
											items-center overflow-hidden border-[1px] border-black
											text-[35px] font-[600] font-nunito 

											
											${(i == 0 || i == 1 || i == 2) && "border-t-0"}
											${(i == 0 || i == 3 || i == 6) && "border-l-0"}
											${(i == 2 || i == 5 || i == 8) && "border-r-0"}
											${(i == 6 || i == 7 || i == 8) && "border-b-0"}


											${winner ? "cursor-not-allowed hover:bg-none " : "cursor-pointer hover:bg-blue-100"}
											${winner && winIndex.includes(i) && "bg-blue-100"}
											

											`}
								>
									{val}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

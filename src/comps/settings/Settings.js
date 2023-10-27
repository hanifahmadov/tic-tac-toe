/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import * as store from "../utils/store";
import * as helper from "../utils/helper";
import { ResetButton, SettingsWr, StContent } from "./settings.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Settings = ({ handleClickAlert }) => {
	const [player, setPlayer] = useRecoilState(store.playerState);
	const [setting, setSetting] = useRecoilState(store.settingsState);
	const [board, setBoard] = useRecoilState(store.boardState3x3);
	const [current, setCurrent] = useRecoilState(store.currentState);

	const handleClick = (e) => {
		let val = e.target.getAttribute("data_value");
		let temp = helper.handleSettingClicks(
			val,
			board,
			setting,
			current,
			player
		);

		if (val == "reset") {
			setBoard(temp.board);
			setSetting(temp.setting);
			setCurrent(temp.current);
			setPlayer(temp.player);
		} else if (
			val == "size3x3" ||
			val == "size5x5" ||
			val == "pvp" ||
			val == "ai"
		) {
			setSetting(temp.setting);
		}
	};

	const handleAiClick = () => {
		// if (setting.fxf) {
		// 	const Toast = Swal.mixin({
		// 		toast: true,
		// 		position: "center",
		// 		showConfirmButton: false,
		//         background: '#fff',
		// 		padding: "2rem 1rem",
		// 		width: "30em",
		//         iconColor: '#10c2fe',
		// 		color: "#000",
		//         allowOutsideClick: true,
		//         backdrop:true,
		// 		timer: 2500,
		// 		customClass: {
		// 			popup: "colored-toast",
		// 		},
		// 		timerProgressBar: true,
		// 		didOpen: (toast) => {
		// 			toast.addEventListener("mouseenter", Swal.stopTimer);
		// 			toast.addEventListener("mouseleave", Swal.resumeTimer);
		// 		},
		// 	});
		// 	Toast.fire({
		// 		icon: "info",
		//         backdrop:true,
		//         allowOutsideClick: true,
		//         allowOutsideClick: true,
		// 		html: `<h4>Working on it</h4>
		//                <p>I have decided to move the 5x5 Minimax algorithm to the cloud due to a lag issue in the recursive fn.</p>
		//                `,
		// 	});
		// }
	};

	const [blur, setBlur] = useState(false);

	const handleAll = () => {
		if (setting.fxf && !blur) {
			handleClickAlert();
			setBlur(true);

			setTimeout(() => {
				setBlur(false);
			}, 6000);
		}
	};

	return (
		<SettingsWr>
			<StContent onClick={handleClick}>
				<ResetButton>
					<button
						type='button'
						id='resetButton'
						className='fw-bold btn btn-primary'
						disabled={!current.totalMoves ? true : false}
						data_value='reset'
					>
						Reset
					</button>
				</ResetButton>

				<div className='setting_size mx-4'>
					<div
						className='btn-group'
						role='group'
						aria-label='Basic example'
					>
						<button
							type='button'
							className={
								setting.txt
									? "fw-bold btn btn-warning mx-1"
									: "fw-bold btn btn-outline-primary  mx-1"
							}
							disabled={current.totalMoves ? true : false}
							data_value='size3x3'
						>
							3x3
						</button>
						<button
							type='button'
							className={
								setting.fxf
									? "fw-bold btn btn-warning"
									: "fw-bold btn btn-outline-primary"
							}
							disabled={current.totalMoves ? true : false}
							data_value='size5x5'
						>
							5x5
						</button>
					</div>
				</div>

				<div className='setting_player'>
					<div
						className='btn-group'
						role='group'
						aria-label='Basic example'
					>
						<button
							type='button'
							className={
								setting.pvp
									? "fw-bold btn btn-warning mx-1"
									: "fw-bold btn btn-outline-primary mx-1"
							}
							disabled={current.totalMoves ? true : false}
							data_value='pvp'
						>
							PvP
						</button>
						<span
							style={{
								opacity: blur ? 0.2 : 1,
								transition: "all .5s ease-in-out",
							}}
							onClick={handleAll}
						>
							<button
								type='button'
								className={
									setting.ai
										? "fw-bold btn btn-warning"
										: "fw-bold btn btn-outline-primary"
								}
								disabled={
									current.totalMoves || setting.fxf
										? true
										: false
								}
								data_value={setting.fxf ? "pvp" : "ai"}
							>
								vs Ai
							</button>
						</span>
					</div>
				</div>
			</StContent>

			<div
				className='mt-4'
				style={{ visibility: current.gameOver ? "visible" : "hidden" }}
				data_value='endGameEmoj'
			>
				<div
					className='fw-bold border p-2 border-info rounded'
					data_value='easy'
				>
					<img
						src={helper.shuffleArray(store.randomEmoj)[0]}
						alt='Girl in a jacket'
						width='40'
						height='40'
						id='challange'
						data_value='easy'
					/>
				</div>
			</div>
		</SettingsWr>
	);
};

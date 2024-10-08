import React from "react";
import { motion } from "framer-motion";

/* helper */
import { Loading } from "../store/lottie/Loading";

export const Toaster = ({ pvpBtn, aiBtn, analyzing, winner, moves, board, winIndex }) => {
	let result = null;

	if (winner) {
		if (winIndex.length > 0 && board[winIndex[0]] == "X") {
			result = "X";
		} else if (winIndex.length > 0 && board[winIndex[0]] == "O") {
			result = "O";
		} else {
			result = null;
		}
	}
	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={analyzing || moves > 1 || winner ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
			transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
			className={`w-full h-[50px] flex flex-col gap-0 items-center justify-center`}
		>
			<div className='bg-white h-full w-full pb-0 flex gap-2 flex-col justify-center items-center relative'>
				{/* analyzing while mimimax recursing */}
				{analyzing && (
					<div className='h-full w-full flex flex-col gap-0 items-center justify-center'>
						<div className="relative top-[-2rem]">
							<Loading />
						</div>
						<div className='text-black font-[450] absolute top-[2rem]'>Calculating best move...</div>
					</div>
				)}

				{!analyzing && !winner && moves > 1 && (
					<div className='h-full w-full  flex gap-2 flex-col gap-0 items-center justify-center '>
						<span className='bg-blue-100 px-2 py-[1px] font-[500] rounded'>{moves}</span>
						<span className='font-[450]'>Computed possible moves.</span>
					</div>
				)}

				{!analyzing && winner && (
					<div className='h-full w-full  flex flex-col gap-0 items-center justify-center '>
						<span className='font-[450]'>
							{!result && (
								<span className=''>
									Game is a Draw <span className='pl-0'>♡</span>
								</span>
							)}

							{result == "X" && (
								<span>
									<span className='font-[500] text-[14px]'>X</span> player has won!{" "}
									<span className='pl-1'>🎉</span>
								</span>
							)}

							{result == "O" && (
								<span>
									<span className='font-[500] text-[14px]'>O</span> player has won!{" "}
									<span className='pl-1'>🎉</span>
								</span>
							)}
						</span>
					</div>
				)}
			</div>
		</motion.div>
	);
};

// {
// 	/* Show loading state while analyzing */
// }
// {
// 	analyzing && (
// 		<>
// 			<Loading />
// 			<span className='text-black font-[450]'>Calculating best move...</span>
// 		</>
// 	);
// }

// {
// 	/* Display moves if more than 1 and there is no winner */
// }
// {
// 	!analyzing && !winner && moves > 1 && (
// 		<>
// 			<span className='bg-blue-100 px-2 py-[1px] font-[500] rounded'>{moves}</span>
// 			<span className='font-[450]'>Computed possible moves.</span>
// 		</>
// 	);
// }

// {
// 	/* Display winner message if there's a winner */
// }
// {
// 	!analyzing && winner && (
// 		<>
// 			{board[winIndex[0]] == "X" && (
// 				<>
// 					<span className='font-[450]'>
// 						You have won <span className='pl-1'>🎉</span>
// 					</span>
// 				</>
// 			)}

// 			{board[winIndex[0]] == "O" && (
// 				<>
// 					<span className='font-[450]'>
// 						Ai has won <span className='pl-1'>🎉</span>
// 					</span>
// 				</>
// 			)}

// 			{winner && !winIndex.length && (
// 				<>
// 					<span className='font-[450]'>
// 						Game is Draw <span className='pl-1'>🎉</span>
// 					</span>
// 				</>
// 			)}
// 		</>
// 	);
// }

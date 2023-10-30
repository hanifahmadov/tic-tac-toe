/* eslint-disable */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { randomEmoj } from "../states/db";
import { getRandomIndex, shuffleArray } from "./helper";

export const sweetAlertify = (text, timer) => {
	let arr = shuffleArray(randomEmoj);

	setTimeout(() => {
		Swal.fire({
			html: text,
			timer: timer,
			timerProgressBar: true,
			allowOutsideClick: true,
			showCancelButton: false,
			showConfirmButton: false,
			backdrop: true,
			icon: "warning",
			iconColor: "black",

			iconHtml: `<img src=${
				arr[Math.floor(Math.random() * arr.length)]
			} style={{ width: 10px, height: 10px }}/>`,

			customClass: {
				container: "swallContainer",
				popup: "swallPopUp",
				header: "...",
				title: "swalltitle",
				htmlContainer: "swallHTML",
				icon: "icon",
				image: "...",
				timerProgressBar: "progressBar",
			},

			didOpen: () => {
				// Swal.showLoading();
			},

			willClose: () => {},
		});
	}, 100);
};

/* 

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


*/

import React from "react";
import Lottie from "lottie-react";

import aiThinking from "./ai-think.json";

export const Loading = () => {
	return (
		<div>
			<Lottie animationData={aiThinking} loop={true} autoplay={true} className={"w-[3rem] h-[3rem]"} />
		</div>
	);
};



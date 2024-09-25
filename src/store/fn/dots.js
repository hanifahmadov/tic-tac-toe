/*  */
/*  */

export const dots = (counts = 16, color = "text-gray-800") => {
	const arr = new Array(counts).fill(0);

	return arr.map((a, i) => (
		<span key={i} className={`text-[14px] leading-none ${color} pb-[5px]`}>
			.
		</span>
	));
};

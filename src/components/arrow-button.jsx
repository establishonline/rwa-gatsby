import React from "react";
import { Link } from "gatsby";

import GreenArrow from "../images/green-arrow.inline.svg";

const ArrowButton = ({ to, content, buttonClasses, iconClasses }) => {
	return (
		<Link
			to={to}
			className={`text-blue hover:text-green text-base lg:text-xl font-bold flex items-center mt-4 fill-green hover:fill-blue duration-500 ${buttonClasses}`}>
			{content}
			<GreenArrow
				className={`ml-2 lg:ml-4 w-6 h-6 lg:w-10 lg:h-10 ${iconClasses}`}
			/>
		</Link>
	);
};

export default ArrowButton;

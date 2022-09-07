import React from "react";

import Layout from "../components/layout";
import useCookie from "../hooks/useCookie";

const Dev = () => {
	const [cookie, updateCookie] = useCookie("username", "Bharat Rajagopalan");

	return (
		<Layout>
			<div className='container p-8'>
				<div className='row'>
					<div className='basis-full max-w-full shrink-0 px-4 text-center'>
						<h1 className='text-5xl text-green'>{cookie}</h1>
						<button
							onClick={() => {
								updateCookie("Random Update", 10);
							}}>
							Store Cookie
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dev;

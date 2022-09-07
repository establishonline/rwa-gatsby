import React from "react";

import Layout from "../components/layout";
import useCookie from "../hooks/useCookie";

const DevTwo = () => {
    const [cookie] = useCookie("username", "abc");

	return (
		<Layout>
			<div className='container p-8'>
				<div className='row'>
					<div className='basis-full max-w-full shrink-0 px-4 text-center'>
						<h1 className='text-5xl text-green'>{cookie}</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DevTwo;

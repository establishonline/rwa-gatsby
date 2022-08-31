import React from "react";
import Form from "./appointment-form";

import Card from "./card";

const HomeAppointment = () => {
	return (
		<section className='bg-light_gray py-32 bg-[url("../images/hero-image.jpg")] relative'>
			<div className='container'>
				<div className='row justify-center'>
					<div className='basis-full max-w-full shrink-0'></div>
				</div>
				<div className='row justify-center'>
					<div className='basis-5/12 max-w-5/12 shrink-0'>
						<Card color='white' radius='br'>
							<h2 className='text-3xl text-center text-blue font-bold mb-8'>
								Request an Appointment
							</h2>
							<Form bg='transparent' text='gray' />
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAppointment;

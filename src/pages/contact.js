import React from "react";

import Layout from "../components/layout";
import Form from "../components/appointment-form";
import Card from "../components/card";

import GreenArrow from "../images/green-arrow.inline.svg";

const ContactPage = () => {
	return (
		<Layout>
			<section className='py-16 bg-black rounded-tl-10xl'>
				<div className='container'>
					<div className='row justify-center'>
						<div className='py-12 basis-full max-w-full shrink-0 md:basis-8/12 md:max-w-8/12 lg:basis-5/12 lg:max-w-5/12'>
							<h2 className='text-3xl text-center text-white font-bold mb-8'>
								Request an Appointment
							</h2>
							<Form bg='black' text='white' />
						</div>
					</div>
				</div>
			</section>
			<section className='bg-light_gray py-32'>
				<div className='container'>
					<div className='row justify-evenly'>
						<div className='basis-5/12 max-w-5/12 shrink-0'>
							<Card color='white' radius='tl'>
								<h2 className='text-blue text-2xl font-bold mt-8 mr-2 mb-4'>
									Visit Us
								</h2>
								<div className='mb-6'>
									<h4 className='font-bold'>Gurgaon Office:</h4>
									<p>
										G19/3, First Floor, DLF Phase 1, Gurgaon, Haryana - 122002
									</p>
									<a
										href='https://goo.gl/maps/Df2JJoYUB9VBfQbHA'
										className='text-blue font-bold flex items-center mt-2 mr-4'
										target='_blank'
										rel='noreferrer'>
										Get Directions <GreenArrow className='ml-2 w-6 h-6' />
									</a>
								</div>
								<div className='mb-6'>
									<h4 className='font-bold'>Delhi Office:</h4>
									<p>Wadhwa Plaza, Sector-6, Dwarka, New Delhi - 110045</p>
									<a
										href='https://goo.gl/maps/g5qFKETooVV1DaS17'
										className='text-blue font-bold flex items-center mt-2 mr-4'
										target='_blank'
										rel='noreferrer'>
										Get Directions <GreenArrow className='ml-2 w-6 h-6' />
									</a>
								</div>
								<div className='mb-6'>
									<h4 className='font-bold'>Sonepat Office:</h4>
									<p>1065, Sector-14, Sonepat, Haryana - 131001</p>
									<a
										href='https://goo.gl/maps/p5sLEGHRqn6sJdDb6'
										className='text-blue font-bold flex items-center mt-2 mr-4'
										target='_blank'
										rel='noreferrer'>
										Get Directions <GreenArrow className='ml-2 w-6 h-6' />
									</a>
								</div>
							</Card>
						</div>
						<div className='basis-5/12 max-w-5/12 shrink-0'>
							<Card color='white' radius='br'>
								<h2 className='text-blue text-2xl font-bold mt-8 mr-2 mb-4'>
									Call Us
								</h2>
								<div className='mb-6'>
									<a
										href='tel:01243545837'
										className='text-black duration-700 font-bold flex items-center mt-4 mr-4 hover:text-green'>
										0124 354 5837
									</a>
								</div>
								<div className='mb-6'>
									<a
										href='tel:01307961200'
										className='text-black duration-700 font-bold flex items-center mt-4 mr-4 hover:text-green'>
										0130 796 1200
									</a>
								</div>
								<div className='mb-6'>
									<a
										href='tel:+919812442487'
										className='text-black duration-700 font-bold flex items-center mt-4 mr-4 hover:text-green'>
										+91 98124 42487
									</a>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ContactPage;

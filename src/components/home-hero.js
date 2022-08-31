import React from "react";
import { Link } from "gatsby";

import GreenArrow from "../images/green-arrow.inline.svg";

const Hero = () => {
	return (
		<section className="bg-[url('../images/hero-image.jpg')] relative">
			<div className='absolute h-full w-full z-0'>
				<div className='row h-full w-full'>
					<div className='mt-48 rounded-tr-10xl bg-white basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12'></div>
				</div>
			</div>
			<div className='container relative z-10'>
				<div className='row'>
					<div className='mt-48 basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12'>
						<div className='p-16'>
							<h1 className='mb-4 text-5xl text-blue font-bold'>
								A 360&deg; Financial Solution
							</h1>
							<p>
								We are commited to providing tailor-made services for the
								individual needs of each client. We take care of all the
								essentials for you and offer proactive advice on how you can
								improve your personal or business finances.
							</p>
							<Link
								to='/contact/'
								className='text-blue text-xl font-bold flex items-center mt-4'>
								Book an Appointment <GreenArrow className='ml-4' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

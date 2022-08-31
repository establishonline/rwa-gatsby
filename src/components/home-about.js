import React from "react";
import { Link } from "gatsby";

import GreenArrow from "../images/green-arrow.inline.svg";
import OurTeam from "../images/our-team.inline.svg";
import WhoWeAre from "../images/who-we-are.inline.svg";
import Card from "./card";

const HomeAbout = () => {
	return (
		<section className='bg-light_gray py-32'>
			<div className='container'>
				<div className='row justify-evenly'>
					<div className='basis-5/12 max-w-5/12 shrink-0'>
						<Card color='white' radius='tl'>
							<WhoWeAre className='m-auto' />
							<h2 className='text-center text-green text-2xl font-bold mt-8 mx-2 mb-4'>
								Who We Are
							</h2>
							<p className='text-center'>
								R. Wadhwa &amp; Associates is one of the leading Chartered
								Accountancy firms specializing in Financial &amp; Tax Advisory.
								The firm also provides a gamut of services like accounting,
								auditing, financial services and much more.
							</p>
							<Link
								to='/about/'
								className='text-blue text-xl font-bold flex items-center justify-end mt-4 mr-4'>
								Read More <GreenArrow className='ml-4' />
							</Link>
						</Card>
					</div>
					<div className='basis-5/12 max-w-5/12 shrink-0'>
						<Card color='white' radius='br'>
							<OurTeam className='m-auto' />
							<h2 className='text-center text-green text-2xl font-bold mt-8 mx-2 mb-4'>
								Our Team
							</h2>
							<p className='text-center'>
								The unique professional background of the team at R. Wadhwa
								&amp; Associates helps us to approach problems in innovative
								ways and make sure to handle all matters in a prompt and
								effective manner.
							</p>
							<Link
								to='/about/'
								className='text-blue text-xl font-bold flex items-center justify-end mt-4 mr-4'>
								Read More <GreenArrow className='ml-4' />
							</Link>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;

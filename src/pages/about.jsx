import React from "react";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import ArrowButton from "../components/arrow-button";

const AboutPage = () => {
	return (
		<Layout pageTitle='Homepage'>
			<section className="bg-[url('../images/about-page-banner.jpg')] bg-cover bg-no-repeat relative bg-right">
				<div className='absolute h-full w-full z-0'>
					<div className='row h-full'>
						<div className='rounded-tr-10xl bg-white mt-48 basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12'></div>
					</div>
				</div>
				<div className='container relative z-10'>
					<div className='row'>
						<div className='mt-48 basis-full max-w-full shrink-0 px-4 md:basis-9/12 md:max-w-9/12'>
							<div className='p-8 lg:p-16'>
								<h1 className='mb-4 text-5xl text-blue font-bold'>
									Get to know us
								</h1>
								<div className='child:mb-4'>
									<p>
										R. Wadhwa &amp; Associates is one of the leading Chartered
										Accountancy firms specializing in Financial &amp; Tax
										Advisory. The firm also provides a gamut of services related
										to accounting, auditing, income tax, financial services,
										company law matters, Sales Tax/ VAT matters, Service Tax,
										etc.
									</p>
									<p>
										Founded by CA. Ramesh Wadhwa, the firm has offices in
										Sonepat, Haryana &amp; Dwarka, New Delhi. Thirty years into
										conception, R. Wadhwa &amp; Associates is well-known for its
										highly ethical standards, quality work and transparency. The
										biggest strength of the firm is its core values and
										experienced personnel. This helps in responding to clients'
										complex business challenges and in establishing a
										long-lasting relationship with our clients. Constant
										dialogue with the clients helps us to understand their needs
										and wants and offer them customized solutions.
									</p>
									<p>
										We are committed to providing tailor-made services for the
										individual needs of each client. We take care of all the
										essentials for you and offer proactive advice on how you can
										improve your personal, or business finances.
									</p>
									<p>
										Our team offers a formidable range of expertise and
										experience. All the team members of R. Wadhwa &amp;
										Associates have a strong academic background, teamwork
										abilities, expertise and progressive vision to cater to the
										varied needs of its vast clients in the best possible manner
										and provide them with best possible solutions.
									</p>
								</div>
								<ArrowButton to='/our-team/' content='Meet our Team' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AboutPage;

export const Head = () => (
	<Seo
		title='About Us'
		description='Learn about R Wadhwa &amp; Associates and what got them started'
	/>
);

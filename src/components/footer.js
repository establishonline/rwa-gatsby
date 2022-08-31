import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
	return (
		<footer className='py-14'>
			<div className='container'>
				<div className='row'>
					<div className='shrink-0 basis-5/12 max-w-5/12 p-4'>
						<StaticImage
							src='../images/logo.png'
							loading='eager'
							width={250}
							alt='Logo of R. Wadhwa &amp; Associates'
						/>
					</div>
					<div className='shrink-0 basis-7/12 max-w-7/12 flex items-center'>
						<div className='w-full'>
							<div className='border-b-2 border-black border-solid'>
								<nav className='py-4'>
									<ul className='flex gap-x-8'>
										<li>
											<Link className='font-semibold text-gray' to='/'>
												Home
											</Link>
										</li>
										<li>
											<Link className='font-semibold text-gray' to='/#services'>
												Services
											</Link>
										</li>
										<li>
											<Link className='font-semibold text-gray' to='/about/'>
												About Us
											</Link>
										</li>
										<li>
											<Link className='font-semibold text-gray' to='/our-team/'>
												Our Team
											</Link>
										</li>
										<li>
											<Link className='font-semibold text-gray' to='/contact/'>
												Contact Us
											</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div className='py-4 flex items-center justify-between'>
								<p className='text-xs font-bold'>
									Copyright &copy; R. Wadhwa Associates |{" "}
									<Link to='/privacy-policy'>Privacy Policy</Link>
								</p>
								<p className='text-xs font-bold'>
									Designed &amp; Developed by{" "}
									<a href='https://establishonline.io'>EstablishOnline.io</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

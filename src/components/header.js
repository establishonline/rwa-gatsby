import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
	return (
		<header className='sticky top-0 bg-white z-50'>
			<div className='container'>
				<div className='row'>
					<div className='shrink-0 basis-4/12 max-w-4/12 p-4'>
						<Link to='/'>
							<StaticImage
								src='../images/logo.png'
								loading='eager'
								width={250}
								alt='Logo of R. Wadhwa &amp; Associates'
							/>
						</Link>
					</div>
					<div className='shrink-0 basis-8/12 max-w-8/12 flex items-center justify-end'>
						<nav>
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
				</div>
			</div>
		</header>
	);
};

export default Header;

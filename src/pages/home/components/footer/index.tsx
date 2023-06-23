import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../../assets/logo-black.svg";
import { Link } from "react-router-dom";
import twitter from "../../../../assets/icons/twitter.png";
import instagram from "../../../../assets/icons/instagram.png";
import linkedin from "../../../../assets/icons/linkedin.png";
import facebook from "../../../../assets/icons/faceboo.png";

const Footer: React.FC = () => {
	return (
		<footer className={`${styles.footer}`}>
			<div className='content pt-32 pb-4'>
				<div className='content flex flex-col-reverse gap-14 justify-between items-start  lg:flex-row lg:gap-0'>
					<div className={`${styles.left} flex flex-col-reverse gap-4 lg:flex-col`}>
						<div>
							<img src={logo} alt='logo' />
						</div>
						<div className='flex items-center gap-6'>
							<a href=''>
								<img src={twitter} alt='twitter' />
							</a>
							<a href=''>
								<img src={instagram} alt='instagram' />
							</a>
							<a href=''>
								<img src={linkedin} alt='linkedin' />
							</a>
							<a href=''>
								<img src={facebook} alt='facebook' />
							</a>
						</div>
					</div>
					<div className={`${styles.right}`}>
						<div>
							<p className='font-bold mb-2'>Why Scissor ?</p>
							<Link to='' className='hover:text-primary300'>
								Scissor 101
							</Link>
							<Link to='' className='hover:text-primary300'>
								Integrations & API
							</Link>
							<a href='#pricing' className='smooth-scroll hover:text-primary300'>
								Pricing
							</a>
						</div>

						<div>
							<p className='font-bold mb-2'>Solutions</p>
							<Link to='' className='hover:text-primary300'>
								Social Media
							</Link>
							<Link to='' className='hover:text-primary300'>
								Digital Marketing
							</Link>
							<Link to='' className='hover:text-primary300'>
								Customer Service
							</Link>
							<Link to='' className='hover:text-primary300'>
								For Developers
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Products</p>
							<Link to='' className='hover:text-primary300'>
								Link Management
							</Link>
							<Link to='' className='hover:text-primary300'>
								QR Codes
							</Link>
							<Link to='' className='hover:text-primary300'>
								Link-in-bio
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Company</p>
							<Link to='' className='hover:text-primary300'>
								About Scissor
							</Link>
							<Link to='' className='hover:text-primary300'>
								Careers
							</Link>
							<Link to='' className='hover:text-primary300'>
								Partners
							</Link>
							<Link to='' className='hover:text-primary300'>
								Press
							</Link>
							<Link to='' className='hover:text-primary300'>
								Contact
							</Link>
							<Link to='' className='hover:text-primary300'>
								Reviews
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Resources</p>
							<Link to='' className='hover:text-primary300'>
								Blog
							</Link>
							<Link to='' className='hover:text-primary300'>
								Resource Library
							</Link>
							<Link to='' className='hover:text-primary300'>
								Developers
							</Link>
							<Link to='' className='hover:text-primary300'>
								App Connectors
							</Link>
							<Link to='' className='hover:text-primary300'>
								Support
							</Link>
							<Link to='' className='hover:text-primary300'>
								Trust Center
							</Link>
							<Link to='' className='hover:text-primary300'>
								Browser Extension
							</Link>
							<Link to='' className='hover:text-primary300'>
								Mobile App
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Features</p>
							<Link to='' className='hover:text-primary300'>
								Branded Links
							</Link>
							<Link to='' className='hover:text-primary300'>
								Mobile Links
							</Link>
							<Link to='' className='hover:text-primary300'>
								Campaign
							</Link>
							<Link to='' className='hover:text-primary300'>
								Management & Analytics
							</Link>
							<Link to='' className='hover:text-primary300'>
								Support
							</Link>
							<Link to='' className='hover:text-primary300'>
								QR Code generation
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Legal</p>
							<Link to='' className='hover:text-primary300'>
								Privacy Policy
							</Link>
							<Link to='' className='hover:text-primary300'>
								Cookie Policy
							</Link>
							<Link to='' className='hover:text-primary300'>
								Terms of Service
							</Link>
							<Link to='' className='hover:text-primary300'>
								Acceptable Use Policy
							</Link>
							<Link to='' className='hover:text-primary300'>
								Code of Conduct
							</Link>
						</div>
					</div>
				</div>
				<p className='flex justify-between  mt-4 lg:mt-0 lg:justify-end'>
					<a
						href=''
						className='hidden px-4 border-r-2 border-neutral hover:text-primary300 lg:px-4 lg:block'
					>
						Term of Service
					</a>
					<a
						href=''
						className='hidden px-4 border-r-2 border-neutral hover:text-primary300 lg:px-4 lg:block'
					>
						Security
					</a>

					<span className='mx-auto lg:px-4 lg:mx-0'>
						&copy; Scissor {new Date().getFullYear()}
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

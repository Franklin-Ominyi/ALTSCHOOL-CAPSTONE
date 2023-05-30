import React from "react";
import styles from "./Landing.module.css";
import home1 from "../../../../assets/home1.svg";
import home2 from "../../../../assets/home2.svg";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
	return (
		<main className={`${styles.landing}`}>
			<div className='container min-h-screen  mx-auto flex flex-col justify-center gap-7 lg:flex-col-reverse lg:pt-24 lg:pb-6'>
				<div className='container mx-auto flex flex-col w-3/4 lg:w-1/2 '>
					<img src={home1} alt='home page' />
					<img src={home2} alt='home page' />
				</div>
				<div className='flex flex-col items-center gap-5 lg:gap-11'>
					<h1 className='max-w-md text-3xl leading-normal font-bold text-center lg:text-5xl lg:max-w-5xl lg:leading-normal'>
						Optimize Your Online Experience with Our Advanced{" "}
						<span className={`${styles.strokeWrapper} text-primary300`}>
							URL Shortening
						</span>{" "}
						Solution
					</h1>
					<p className='container w-11/12 text-center  font-semibold  lg:text-lg lg:w-1/2'>
						Personalize your shortened URLs to align with your brand identity. Utilize
						custom slugs, branded links, and domain customization options to reinforce
						your brand presence and enhance user engagement.
					</p>
					<div className='flex items-center gap-6'>
						<Link
							to='/signup'
							className='bg-primary400 text-white p-4 px-10 rounded-full hover:bg-primary300'
						>
							Sign Up
						</Link>
						<a
							href=''
							className='text-primary300 font-semibold hover:text-primary400'
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Landing;

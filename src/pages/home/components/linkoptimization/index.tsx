import React from "react";
import styles from "./LinkOptimization.module.css";
import { Link } from "react-router-dom";

const LinkOptimization: React.FC = () => {
	return (
		<section
			className={`${styles.wrapper}  h-96 flex flex-col justify-center items-center gap-10`}
		>
			<h1 className='text-white text-center text-3xl font-bold lg:text-4xl'>
				Revolutionizing Link Optimization
			</h1>
			<Link
				to='/signup'
				className='bg-primary400 text-white p-4 px-16 rounded-full hover:bg-primary300'
			>
				Get Started
			</Link>
		</section>
	);
};

export default LinkOptimization;

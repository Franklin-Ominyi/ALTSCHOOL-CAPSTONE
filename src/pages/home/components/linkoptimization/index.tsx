import React from "react";
import styles from "./LinkOptimization.module.css";

const LinkOptimization: React.FC = () => {
	return (
		<section
			className={`${styles.wrapper}  h-96 flex flex-col justify-center items-center gap-10`}
		>
			<h1 className='text-white text-center text-4xl font-bold'>
				Revolutionizing Link Optimization
			</h1>
			<a
				href=''
				className='bg-primary400 text-white p-4 px-16 rounded-full hover:bg-primary300'
			>
				Get Started
			</a>
		</section>
	);
};

export default LinkOptimization;

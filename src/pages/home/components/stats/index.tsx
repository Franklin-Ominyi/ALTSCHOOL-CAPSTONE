import React from "react";
import styles from "./Stats.module.css";

const Stats: React.FC = () => {
	return (
		<section className='content flex flex-col gap-5 items-start justify-between py-24 md:flex-row md:gap-0'>
			<div className={`${styles.statsLeft} mx-auto lg:mx-0`}>
				<h1 className='text font-bold text-center text-3xl flex flex-col gap-2 lg:flex-col lg:gap-1 lg:text-left'>
					<span>One Stop.</span>
					<span>
						Four <span className='text-primary400'>Possibilities</span>.
					</span>
				</h1>
			</div>

			<div className={`${styles.statsRight} flex justify-between`}>
				<div className={`flex flex-col ${styles.statsItem}`}>
					<h4 className='font-bold text-3xl mb-2'>3M</h4>
					<p>Active users</p>
				</div>

				<div className={`flex flex-col ${styles.statsItem}`}>
					<h4 className='font-bold text-3xl mb-2'>60M</h4>
					<p className='lg:w-2/3'>Links & QR codes created</p>
				</div>

				<div className={`flex flex-col ${styles.statsItem}`}>
					<h4 className='font-bold text-3xl mb-2'>1B</h4>
					<p className='lg:w-5/6'>Clicked & Scanned connections</p>
				</div>

				<div className={`flex flex-col ${styles.statsItem}`}>
					<h4 className='font-bold text-3xl mb-2'>300k</h4>
					<p>App Integrations</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;

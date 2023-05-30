import React from "react";
import styles from "./Pricing.module.css";
import checkIcon from "../../../../assets/icons/check-circle.png";
import checkIconWhite from "../../../../assets/icons/check-circle-white.png";

const Pricing: React.FC = () => {
	return (
		<div className='content py-36 flex flex-col gap-20'>
			<div className={`${styles.heading}`}>
				<h1 className={`${styles.pricingTitle} text-3xl  font-bold`}>
					A <span className='text-primary400'>price perfect</span> for your needs.
				</h1>
				<div>
					<p className='ml-11 text-center max-w-lg'>
						From catering for your personal, business, event, socials needs, you can
						be rest assured we have you in mind in our pricing.
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-10  items-center lg:flex-row lg:gap-0'>
				<div
					className={`${styles.card} py-8 px-20 border border-primary400 rounded-xl`}
				>
					<p className='text-xl mb-10'>Basic</p>
					<h5 className='font-bold text-4xl mb-5'>Free</h5>
					<p className='text-xl mb-5'>Free plan for all users</p>
					<div className='flex flex-col gap-5'>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Unlimited URL Shortening</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Basic Link Analytics</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Customizable Short Links</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Standard Support</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Ad-supported</p>
						</div>
					</div>
				</div>

				<div
					className={`${styles.card} ${styles.professional}  py-8 px-20 border text-white border-primary400 rounded-xl lg:py-28`}
				>
					<p className='text-xl mb-10'>Professional</p>
					<h5 className='font-bold text-4xl mb-5'>$15/month</h5>
					<p className='text-xl mb-5'>Ideal for business creators</p>
					<div className='flex flex-col gap-5'>
						<div className='flex items-center gap-2'>
							<img src={checkIconWhite} alt='check item' />
							<p>Enhanced Link Analytics</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIconWhite} alt='check item' />
							<p>Custom Branded Domains</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIconWhite} alt='check item' />
							<p>Advanced Link Customization</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIconWhite} alt='check item' />
							<p>Priority Support</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIconWhite} alt='check item' />
							<p>Ad-free Experience</p>
						</div>
					</div>
				</div>

				<div
					className={`${styles.card} py-8 px-20 border border-primary400 rounded-xl`}
				>
					<p className='text-xl mb-10'>Teams</p>
					<h5 className='font-bold text-4xl mb-5'>$25/month</h5>
					<p className='text-xl mb-5'>Share with up to 10 users</p>
					<div className='flex flex-col gap-5'>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Team Collaboration</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>User Roles and Permissions</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Enhanced Security</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>API Access</p>
						</div>
						<div className='flex items-center gap-2'>
							<img src={checkIcon} alt='check item' />
							<p>Dedicated Account Manager</p>
						</div>
					</div>
				</div>
			</div>
			<button className=' w-fit mx-auto bg-primary400 text-white p-4 px-10 rounded-full hover:bg-primary300'>
				Select Pricing
			</button>
		</div>
	);
};

export default Pricing;

import React, { useState } from "react";
import styles from "./Faqs.module.css";
import plus from "../../../../assets/icons/plus.png";
import minus from "../../../../assets/icons/minus.png";

interface ItemPropType {
	title: string;
	description: string;
}

const Item = ({ title, description }: ItemPropType) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className={`${styles.faqItem} flex flex-col gap-3`}>
			<div className='flex justify-between items-center'>
				<p className={`${styles.left} font-medium text-lg`}>{title}</p>
				<div className={`${styles.right}`}>
					<img
						src={isOpen ? minus : plus}
						alt='toggle faq'
						className='cursor-pointer'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div>
			{isOpen && <p>{description}</p>}
		</div>
	);
};

export const Faqs: React.FC = () => {
	return (
		<section className={`${styles.faqWrapper} py-32`} id='faqs'>
			<div className='content lg:w-1/2'>
				<h1 className={`${styles.faqsTitle} text-3xl  font-bold`}>FAQs</h1>
				<div className='mt-3'>
					<Item
						title='How does URL shortening work?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>
					<Item
						title='Is it necessary to create an account to use the URL shortening service?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>
					<Item
						title='Are the shortened links permanent? Will they expire?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='Are there any limitations on the number of URLs I can shorten?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='Can I customize the shortened URLs to reflect my brand or content?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='Can I track the performance of my shortened URLs?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='What is a QR code and what can it do?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>

					<Item
						title='Is there an API available for integrating the URL shortening service into my own applications or websites?'
						description='	URL shortening works by taking a long URL and creating a shorter, condensed
					version that redirects to the original URL. When a user clicks on the
					shortened link, they are redirected to the intended destination.'
					/>
				</div>
			</div>
		</section>
	);
};

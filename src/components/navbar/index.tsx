import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	document.querySelectorAll(".smooth-scroll").forEach((item) => {
		item.addEventListener("click", () => setIsSidebarOpen(false));
	});

	return (
		<div className='relative'>
			<aside
				className={`${styles.sidebar} ${
					isSidebarOpen ? "left-0 " : "-left-full "
				} fixed flex flex-col items-center justify-center gap-14 w-8/12 h-screen bg-slate-950 z-50 opacity-90 lg:hidden`}
			>
				<Link to='/' className='smooth-scroll'>
					<img src={logo} alt='logo' />
				</Link>
				<div className='flex flex-col items-center justify-between w-full text-center text-white font-semibold'>
					<a
						href='#myurl'
						className='smooth-scroll w-full py-2 border-t-2 hover:text-primary300'
					>
						My URLs
					</a>
					<a
						href='#features'
						className='smooth-scroll w-full py-2 border-t-2 hover:text-primary300'
					>
						Features
					</a>
					<a
						href='#pricing'
						className='smooth-scroll w-full py-2 border-t-2 hover:text-primary300'
					>
						Pricing
					</a>
					<Link
						to='/dashboard'
						className='w-full py-2 border-t-2 hover:text-primary300'
					>
						Analytics
					</Link>
					<a
						href='#faqs'
						className='smooth-scroll w-full py-2 border-t-2 border-b-2 hover:text-primary300'
					>
						FAQs
					</a>
				</div>
				<div className='flex items-center gap-5'>
					<Link to='/login' className='text-white hover:text-primary400'>
						Log in
					</Link>
					<Link
						to='/signup'
						className='bg-primary400 text-white p-4 rounded-full hover:bg-primary300'
					>
						Try for free
					</Link>
				</div>
			</aside>
			<nav className={`${styles.navbar} navbar fixed z-40 w-full bg-white py-3`}>
				<div className='content flex justify-between items-center'>
					<div>
						<Link to='/'>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<div className='hidden items-center justify-between gap-8 lg:flex'>
						<a href='#myurl' className='smooth-scroll hover:text-primary300'>
							My URLs
						</a>
						<a href='#features' className='smooth-scroll hover:text-primary300'>
							Features
						</a>
						<a href='#pricing' className='smooth-scroll hover:text-primary300'>
							Pricing
						</a>
						<Link to='/dashboard' className='hover:text-primary300'>
							Analytics
						</Link>
						<a href='#faqs' className='smooth-scroll hover:text-primary300'>
							FAQs
						</a>
					</div>
					<div className='hidden items-center gap-3 lg:flex'>
						<Link to='/login' className='text-primary300 hover:text-primary400'>
							Log in
						</Link>
						<Link
							to='/signup'
							className='bg-primary400 text-white p-4 rounded-full hover:bg-primary300'
						>
							Try for free
						</Link>
					</div>
					<div className='block lg:hidden'>
						{!isSidebarOpen && (
							<i
								className='fa fa-bars text-2xl text-primary300 cursor-pointer'
								aria-hidden='true'
								onClick={toggleSidebar}
							></i>
						)}

						{isSidebarOpen && (
							<i
								className='fa fa-window-close text-2xl text-primary300 cursor-pointer'
								aria-hidden='true'
								onClick={toggleSidebar}
							></i>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

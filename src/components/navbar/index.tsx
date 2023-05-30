import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='bg-white py-3'>
			<div className='mx-8 flex justify-between items-center'>
				<div>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<div className='flex items-center justify-between gap-8'>
					<a href='' className='hover:text-primary300'>
						My URLs
					</a>
					<a href='' className='hover:text-primary300'>
						Features
					</a>
					<a href='' className='hover:text-primary300'>
						Pricing
					</a>
					<a href='' className='hover:text-primary300'>
						Analytics
					</a>
					<a href='' className='hover:text-primary300'>
						FAQs
					</a>
				</div>
				<div className='flex items-center gap-3'>
					<a href='' className='text-primary300 hover:text-primary400'>
						Log in
					</a>
					<a
						href=''
						className='bg-primary400 text-white p-4 rounded-full hover:bg-primary300'
					>
						Try for free
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

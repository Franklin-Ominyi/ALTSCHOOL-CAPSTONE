import { FC, Fragment } from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import notfound from "../../assets/notfound.gif";
import { Helmet } from "react-helmet";

const NotFound: FC = () => {
	return (
		<Fragment>
			<Helmet>
				<title>404 - Page Not Found | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div className='flex flex-col justify-center bg-lightBlue min-h-screen '>
				<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
					<div className='flex flex-col gap-4 '>
						<div className='flex flex-col items-center gap-4 mb-4'>
							<div>
								<Link to='/'>
									<img src={logo} alt='logo' />
								</Link>
							</div>
							<p className='text-2xl text-primary400 font-semibold'>
								404 - Page Not Found
							</p>
							<img src={notfound} alt='404 - not found' />
						</div>

						<p className='text-center text-lg text-errorRed'>
							The page you requested for does not exist, please click the link below to
							go back to homepage.
						</p>
						<Link
							to='/'
							className='text-primary400 hover:text-primary300 text-center text-lg font-semibold'
						>
							Homepage
						</Link>
					</div>
					<div className='flex justify-center border-t-2 pt-5'>
						<p className='text-center text-lg text-grayText '>
							Already have an account?{" "}
							<Link to='/login' className='text-primary400 hover:text-primary300'>
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default NotFound;

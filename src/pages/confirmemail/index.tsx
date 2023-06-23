import { FC } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.svg";

const ConfirmEmail: FC = () => {
	const { id, token } = useParams();

	const verifyEmail = async () => {
		const response = await axios.get(
			`${import.meta.env.VITE_API_URL}/account-verification/${id}/${token}`
		);
		return response.data;
	};

	const { isLoading, isError } = useQuery("confirmEmail", verifyEmail);

	return (
		<div className='flex flex-col justify-center bg-lightBlue h-screen '>
			<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
				<div className='flex flex-col gap-4 '>
					<div className='flex flex-col items-center gap-4 mb-4'>
						<div>
							<Link to='/'>
								<img src={logo} alt='logo' />
							</Link>
						</div>
						{!isError && isLoading && (
							<p className='text-2xl text-primary300 font-semibold'>Verifying Email</p>
						)}
						{!isError && !isLoading && (
							<p className='text-2xl text-primary300 font-semibold'>
								Email Verification Successful
							</p>
						)}
						{isError && !isLoading && (
							<p className='text-2xl text-primary300 font-semibold'>
								Email Verification Failed
							</p>
						)}
					</div>
					{!isError && isLoading && (
						<div className='text-center'>
							<i
								className='fa fa-spinner text-primary300 fa-spin fa-2x loading-spinner'
								aria-hidden='true'
							></i>
						</div>
					)}
					{!isError && !isLoading && (
						<div className='flex flex-col items-center gap-10 pb-4'>
							<p className='text-center font-semibold text-lg'>
								You have successfully verified your email address, you can now login to
								your account
							</p>

							<div>
								<Link
									to='/login'
									className='p-4 bg-primary400 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none'
								>
									Login
								</Link>
							</div>
						</div>
					)}
					{isError && !isLoading && (
						<div className='flex flex-col items-center gap-10 pb-4'>
							<p className='text-center text-errorRed font-semibold text-lg'>
								An error occured, please try agian.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ConfirmEmail;

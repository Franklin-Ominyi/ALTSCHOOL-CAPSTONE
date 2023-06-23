import { FC, Fragment, useContext } from "react";
// import styles from "./ResetPassword.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import logo from "../../assets/logo.svg";
import { Helmet } from "react-helmet";

const ResetPassword: FC = () => {
	const navigate = useNavigate();

	const { setToken } = useContext(AppContext);

	const formSchema = Yup.object().shape({
		password: Yup.string()
			.min(6, "Password must not be less than 6 characters")
			.required("Password is required"),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref("password"), ""],
			"Password and confirm password must match"
		),
	});

	type formTypes = {
		password: string;
		confirmPassword: string;
	};

	const initialValues: formTypes = {
		password: "",
		confirmPassword: "",
	};

	const { id, token } = useParams();

	const resetPassword = async (data: object) => {
		try {
			const response = await axios.put(
				`${import.meta.env.VITE_API_URL}/request-new-password/${id}/${token}`,
				data
			);

			if (response.data.message === "successfully updated your password") {
				await swal(
					"You're in",
					"You have successfully updated your password",
					"success"
				);

				// window.location.assign(`${import.meta.env.BASE_URL}/login`);
				navigate("/login");
				setToken("");
				return;
			} else {
				swal("Oops", response.data.message, "error");
				setToken("");
				return;
			}
		} catch (error: any) {
			console.log(error);
			if (error.response) {
				console.log(error.response);
				const responseError = error.response.data;
				if (responseError.message === "token has expired") {
					swal("Oops!", "Password reset token has expired", "error");
					setToken("");
					return;
				} else if (responseError.message === "token is not valid") {
					swal("Oops!", "Password reset token is not valid", "error");
					setToken("");
					return;
				} else {
					swal("Oops!", responseError.message, "error");
					setToken("");
					return;
				}
			} else {
				swal("Oops!", error.message, "error");
				setToken("");
			}
		}
	};

	const { mutateAsync: handleResetPassword, isLoading } =
		useMutation(resetPassword);

	const handleSubmit = async (values: object) => {
		handleResetPassword(values);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Reset Password | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div className='flex flex-col justify-center bg-lightBlue h-screen '>
				<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
					<div className='flex flex-col gap-4 '>
						<div className='flex flex-col items-center gap-4 mb-4'>
							<Link to='/'>
								<img src={logo} alt='logo' />
							</Link>
							<p className='text-2xl text-primary400 font-semibold'>Reset Password</p>
						</div>
						<Formik
							initialValues={initialValues}
							validationSchema={formSchema}
							onSubmit={handleSubmit}
						>
							{({ isValid, handleSubmit }) => {
								return (
									<Form onSubmit={handleSubmit}>
										<div className='flex flex-col gap-8'>
											<div className='flex flex-col gap-1'>
												<Field
													name='password'
													type='password'
													placeholder='Enter password'
													className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
												/>
												<ErrorMessage
													className='text-errorRed'
													name='password'
													component='p'
												/>
											</div>
											<div className='flex flex-col gap-1'>
												<Field
													name='confirmPassword'
													type='password'
													placeholder='Confirm password'
													className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
												/>
												<ErrorMessage
													className='text-errorRed'
													name='confirmPassword'
													component='p'
												/>
											</div>
											<button
												disabled={!isValid || isLoading}
												className='p-3 bg-primary400 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none disabled:cursor-not-allowed lg:p-4'
											>
												{isLoading ? (
													<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>
												) : (
													"Save Password"
												)}
											</button>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ResetPassword;

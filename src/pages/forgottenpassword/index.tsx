import { FC, Fragment, useRef } from "react";
// import styles from "./ForgottenPassword.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import swal from "sweetalert";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Helmet } from "react-helmet";

const ForgottenPassword: FC = () => {
	const formikRef = useRef<any>(null);

	interface FormValues {
		email: string;
	}

	const initialValues: FormValues = {
		email: "",
	};

	const forgottenPasswordSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Email is required"),
	});

	const forgottenPassword = async (data: object) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/forgotten-password`,
				data
			);

			if (!response.data.error) {
				swal(
					"You're In!",
					"Password reset email has been sent to your email. NOTE: Password reset token is valid for 10 minutes",
					"success"
				);
				formikRef.current.resetForm();
			} else if (response.data.message === "email address is not valid") {
				swal("Oops!", "Email address is not valid", "error");
			}
		} catch (error: any) {
			swal("Oops", `${error?.message}`, "error");
		}
	};

	const { mutateAsync: handleForgottenPassword, isLoading } =
		useMutation(forgottenPassword);

	const handleSubmit = async (values: object) => {
		handleForgottenPassword(values);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Forgotten Password | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div className='flex flex-col justify-center bg-lightBlue h-screen '>
				<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
					<div className='flex flex-col gap-4 '>
						<div className='flex flex-col items-center gap-4 mb-4'>
							<div>
								<Link to='/'>
									<img src={logo} alt='logo' />
								</Link>
							</div>
							<p className='text-2xl text-primary300 font-semibold'>
								Forgotten Password
							</p>
						</div>
						<Formik
							initialValues={initialValues}
							validationSchema={forgottenPasswordSchema}
							onSubmit={handleSubmit}
							innerRef={formikRef}
						>
							{({ isValid, handleSubmit }) => {
								return (
									<Form onSubmit={handleSubmit}>
										<div className='flex flex-col gap-8'>
											<div className='flex flex-col gap-1'>
												<Field
													name='email'
													type='text'
													placeholder='Enter email'
													className='p-3 rounded-xl border-2 focus:outline-none focus:border-secondaryBlue lg:p-4'
												/>
												<ErrorMessage
													className='text-errorRed'
													name='email'
													component='p'
												/>
											</div>

											<button
												disabled={isLoading || !isValid}
												className='p-3 bg-primary300 text-white text-lg font-semibold rounded-2xl border-2 hover:border-primary400 focus:outline-none disabled:cursor-not-allowed lg:p-4'
											>
												{isLoading ? (
													<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>
												) : (
													"Request New Password"
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

export default ForgottenPassword;

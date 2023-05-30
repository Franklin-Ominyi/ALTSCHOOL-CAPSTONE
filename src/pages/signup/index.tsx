import { FC, useRef, useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useMutation } from "react-query";
import swal from "sweetalert";
import logo from "../../assets/logo.svg";

const Signup: FC = () => {
	const [email, setEmail] = useState<string>("");
	const formikRef = useRef(null);

	type initialTypes = {
		email: string;
		firstName: string;
		lastName: string;
		password: string;
	};
	const INITIAL_VALUES: initialTypes = {
		email: "",
		firstName: "",
		lastName: "",
		password: "",
	};

	const signupSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Email is required"),
		firstName: Yup.string().required("Firstname is required"),
		lastName: Yup.string().required("Lastname is required"),
		password: Yup.string()
			.min(6, "Password must not be less than 6 characters")
			.required("Password is required"),
	});

	const createUser = async (data: any) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/register`,
				data
			);

			if (!response.data.error) {
				swal({
					title: response.data.message,
					icon: "success",
					text: `Verify your email, we have sent an email to ${email}, you need to verify your email to continue. If the verification email is not in your inbox, please check your Spam folder`,
					button: "Ok",
					dangerMode: false,
					closeOnClickOutside: false,
					closeOnEsc: false,
				}).then((ok) => {
					if (ok) {
						window.location.assign("http://localhost:5000/login");
					}
				});
				formikRef.current.resetForm();
			}

			if (response.data.error) {
				swal("Oops", response.data.message, "error");
			}
		} catch (error: any) {
			swal("Oops", `${error?.message}`, "error");
		}
	};

	const { mutateAsync: handleSignup, isLoading } = useMutation(createUser);

	const handleSubmit = async (values: {
		email: string;
		firstName: string;
		lastName: string;
		password: string;
	}) => {
		setEmail(values.email);
		handleSignup(values);
	};

	return (
		<div className='flex flex-col justify-center bg-lightBlue min-h-screen '>
			<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
				<div className='flex flex-col gap-4 '>
					<div className='flex flex-col items-center gap-4 mb-4'>
						<div>
							<Link to='/'>
								<img src={logo} alt='logo' />
							</Link>
						</div>
						<p className='text-2xl text-primary400 font-semibold'>Signup</p>
					</div>

					<Formik
						initialValues={INITIAL_VALUES}
						validationSchema={signupSchema}
						onSubmit={handleSubmit}
						innerRef={formikRef}
					>
						{({ isValid, isSubmitting, handleSubmit }) => {
							return (
								<Form onSubmit={handleSubmit}>
									<div className='flex flex-col gap-8'>
										<div className='flex flex-col gap-1'>
											<Field
												type='text'
												name='email'
												placeholder='Enter email'
												className='p-4 rounded-xl border-2 focus:outline-none focus:border-primary300'
											/>
											<ErrorMessage
												className='text-errorRed'
												name='email'
												component='div'
											/>
										</div>
										<div className='flex flex-col gap-8 items-start justify-between md:flex-row md:gap-2'>
											<div className={`flex flex-col gap-1 w-full md:w-fit`}>
												<Field
													type='text'
													name='firstName'
													placeholder='Enter firstname'
													className={`${styles.bioInput} p-4 rounded-xl border-2 focus:outline-none focus:border-primary300`}
												/>
												<ErrorMessage
													className='text-errorRed'
													name='firstName'
													component='div'
												/>
											</div>
											<div className='flex flex-col gap-1 w-full md:w-fit'>
												<Field
													type='text'
													name='lastName'
													placeholder='Enter lastname'
													className={`${styles.bioInput} p-4 rounded-xl border-2 focus:outline-none focus:border-primary300`}
												/>
												<ErrorMessage
													className='text-errorRed'
													name='lastName'
													component='div'
												/>
											</div>
										</div>
										<div className='flex flex-col gap-1'>
											<Field
												type='password'
												name='password'
												placeholder='Enter password'
												className='p-4 rounded-xl border-2 focus:outline-none focus:border-primary300 '
											/>
											<ErrorMessage
												className='text-errorRed'
												name='password'
												component='p'
											/>
										</div>
										<button
											type='submit'
											disabled={isLoading || !isValid}
											className='p-4 bg-primary400 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none  disabled:cursor-not-allowed'
										>
											{isSubmitting ? "Submitting" : "Signup"}
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
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
	);
};

export default Signup;

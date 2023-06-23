import { FC, Fragment, useContext } from "react";
// import styles from "./Login.module.css";
import { Form, Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useMutation } from "react-query";
import logo from "../../assets/logo.svg";
import { AppContext } from "../../contexts/AppContext";
import { Helmet } from "react-helmet";

const Login: FC = () => {
	// const [token, setToken] = useState<string | boolean>("");
	const { setToken } = useContext(AppContext);
	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must not be less than 6 characters")
			.max(40, "Password must not be exceed 40 characters")
			.required("Password is required"),
	});

	interface FormValues {
		email: string;
		password: string;
	}

	const initialValues: FormValues = {
		email: "",
		password: "",
	};

	const login = async (data: any) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/login`,
				data
			);

			if (response.data.error) {
				swal("Oops", response.data.message, "error");
			}
			setToken(response.data.data.token);
		} catch (error: any) {
			if (error.response) {
				const responseError = error.response.data.errors;

				if (responseError.message === "email address has not been verified") {
					swal("Oops!", "Your email address has not been verified", "error");
					setToken("");
				} else {
					if (responseError.message) {
						swal("Oops!", responseError.message, "error");
						setToken("");
					} else {
						swal("Oops!", "An error occured, please try again", "error");
						setToken("");
					}
				}

				return;
			} else {
				swal("Oops", `${error?.message}`, "error");
			}
		}
	};

	const { mutateAsync: handleLogin, isLoading } = useMutation(login);

	const handleSubmit = async (values: { email: string; password: string }) => {
		handleLogin(values);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Login | Scissor | Developed by Franklin Alegu</title>
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
							<p className='text-2xl text-primary400 font-semibold'>Login</p>
						</div>
						<div className='flex flex-col gap-8'>
							<Formik
								initialValues={initialValues}
								validationSchema={loginSchema}
								onSubmit={handleSubmit}
							>
								{({ isValid, handleSubmit }) => {
									return (
										<Form onSubmit={handleSubmit}>
											<div className='flex flex-col gap-8'>
												<div className='flex flex-col gap-1'>
													<Field
														type='text'
														name='email'
														placeholder='Enter email'
														className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
													/>
													<ErrorMessage
														className='text-errorRed'
														name='email'
														component='div'
													/>
												</div>

												<div className='flex flex-col gap-1'>
													<Field
														type='password'
														name='password'
														placeholder='Enter password'
														className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
													/>
													<ErrorMessage
														className='text-errorRed'
														name='password'
														component='div'
													/>
												</div>
												<button
													type='submit'
													disabled={!isValid || isLoading}
													className='p-3 bg-primary400 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none disabled:cursor-not-allowed lg:p-4'
												>
													{isLoading ? (
														<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>
													) : (
														"Login"
													)}
												</button>
											</div>
										</Form>
									);
								}}
							</Formik>

							<Link
								className='text-center text-lg text-grayText hover:text-black'
								to='/forgotten-password'
							>
								Forgotten Password
							</Link>
						</div>
					</div>
					<div className='flex justify-center border-t-2 pt-5'>
						<p className='text-center text-lg text-grayText '>
							Don't have an account?{" "}
							<Link to='/signup' className='text-primary400 hover:text-primary300'>
								Signup
							</Link>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./TrimUrl.module.css";
import magicIcon from "../../../../assets/icons/magic.png";
import { useNavigate } from "react-router-dom";

const TrimUrl: React.FC = () => {
	const navigate = useNavigate();

	const trimSchema = Yup.object().shape({
		url: Yup.string().url("Please enter a valid url").required("Url is required"),
	});

	type initalValues = {
		url: string;
		alias: string;
	};
	const INITIAL_VALUES: initalValues = {
		url: "",
		alias: "",
	};
	const handleSubmit = (values: any) => {
		navigate("/dashboard");
		console.log(values);
	};
	return (
		<div className={`${styles.wrapper} py-20`}>
			<div className='content flex flex-col p-7 justify-center bg-white text-primary300 rounded-xl gap-8 md:w-1/2 xl:w-1/3'>
				<Formik
					initialValues={INITIAL_VALUES}
					validationSchema={trimSchema}
					onSubmit={handleSubmit}
				>
					{({ isValid, isSubmitting, handleSubmit }) => {
						return (
							<Form onSubmit={handleSubmit}>
								<div className='flex flex-col gap-8'>
									<div className='flex flex-col gap-1'>
										<Field
											type='text'
											name='url'
											placeholder='Paste URL here...'
											className='p-4 rounded-xl border border-primary300 focus:outline-none focus:border-primary400'
										/>
										<ErrorMessage className='text-errorRed' name='url' component='div' />
									</div>
									<div className='flex flex-col gap-8 items-start justify-between md:flex-row md:gap-2'>
										<div className={`flex flex-col gap-1 w-full md:w-fit`}>
											<Field
												as='select'
												name='customizedomain'
												className={`${styles.urlInput} p-4 rounded-xl border border-primary300 focus:outline-none focus:border-primary400`}
											>
												<option disabled defaultChecked>
													Customize domain
												</option>
												<option>www.example.com</option>
												<option>www.sample.com</option>
												<option>www.simple.com</option>
											</Field>
											<ErrorMessage
												className='text-errorRed'
												name='customizedomain'
												component='div'
											/>
										</div>
										<div className='flex flex-col gap-1 w-full md:w-fit'>
											<Field
												type='text'
												name='alias'
												placeholder='Type Alias here'
												className={`${styles.urlInput} p-4 rounded-xl border border-primary300 focus:outline-none focus:border-primary400`}
											/>
											<ErrorMessage
												className='text-errorRed'
												name='alias'
												component='div'
											/>
										</div>
									</div>

									<button
										type='submit'
										disabled={!isValid}
										className='flex items-center justify-center gap-3 p-4 bg-primary400 text-white text-lg font-semibold rounded-full border-2 hover:bg-primary300 focus:outline-none  disabled:cursor-not-allowed'
									>
										{isSubmitting ? "Submitting" : "Trim URL"}{" "}
										<img src={magicIcon} alt='magic' />
									</button>

									<p className='text-primary300'>
										By clicking TrimURL, I agree to the{" "}
										<span className='text-primary400 font-bold'>
											Terms of Service, Privacy Policy
										</span>
										and Use of Cookies.
									</p>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default TrimUrl;

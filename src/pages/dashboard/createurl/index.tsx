import React, { Fragment, useRef } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Helmet } from "react-helmet";

const CreateURL: React.FC = () => {
	const formikRef = useRef<any>(null);
	const queryClient = useQueryClient();

	const createURLSchema = Yup.object().shape({
		url: Yup.string().url("URL is not valid").required("URL is required"),
		customUrl: Yup.string(),
	});

	interface FormValues {
		url: string;
		customUrl: string;
	}

	const initialValues: FormValues = {
		url: "",
		customUrl: "",
	};

	const postURL = async (data: any) => {
		const tokenDOM = localStorage.getItem("token");

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/url`,
				data,
				{ headers: { Authorization: `Bearer ${tokenDOM}` } }
			);

			if (response.data.error) {
				swal("Oops", response.data.message, "error");
			}

			if (response.data.message === "URL shortened successfully") {
				queryClient.invalidateQueries("getURL");
				swal("Awesome!", "You have successfully shortened your link", "success");
				formikRef.current.resetForm();
			}
		} catch (error: any) {
			console.log({ error });
			const responseError = error.response.data;

			if (responseError.message === "Short URL already exists") {
				swal(
					"Custom URL already in use",
					"Please try again with another custom URL",
					"error"
				);
			} else {
				swal("Oops", error?.message, "error");
			}
		}
	};

	const { mutateAsync: handleCreateURL, isLoading } = useMutation(postURL);

	const handleSubmit = async (values: { url: string; customUrl: string }) => {
		handleCreateURL(values);
	};
	return (
		<Fragment>
			<Helmet>
				<title>Create URL | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div className='relative top-20 '>
				<h1 className='text-center text-xl text-primary300 mb-8 lg:text-3xl'>
					Create URL
				</h1>
				<div>
					<Formik
						initialValues={initialValues}
						validationSchema={createURLSchema}
						onSubmit={handleSubmit}
						innerRef={formikRef}
					>
						{({ isValid, handleSubmit }) => {
							return (
								<Form onSubmit={handleSubmit}>
									<div className='flex flex-col gap-8 w-full mx-auto lg:w-2/5'>
										<div className='flex flex-col gap-1'>
											<Field
												type='text'
												name='url'
												placeholder='Enter url'
												className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
											/>
											<ErrorMessage className='text-errorRed' name='url' component='div' />
										</div>

										<div className='flex flex-col gap-1'>
											<Field
												type='customUrl'
												name='customUrl'
												placeholder='Customize URL (Optional)'
												className='p-3 rounded-xl border-2 focus:outline-none focus:border-primary300 lg:p-4'
											/>
											<ErrorMessage
												className='text-errorRed'
												name='customUrl'
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
												"Shorten URL"
											)}
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</Fragment>
	);
};

export default CreateURL;

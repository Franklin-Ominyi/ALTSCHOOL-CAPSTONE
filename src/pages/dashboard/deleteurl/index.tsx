import styles from "./DeleteURL.module.css";
import React, { Fragment, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { ButtonList } from "sweetalert/typings/modules/options/buttons";
import { Helmet } from "react-helmet";

const DeleteURL: React.FC = () => {
	const appContext = useContext(AppContext);
	const urls = appContext?.urls;

	const queryClient = useQueryClient();

	const deleteURL = async (url: any) => {
		const tokenDOM = localStorage.getItem("token");

		try {
			const response = await axios.delete(
				`${import.meta.env.VITE_API_URL}/url/${url.shortUrl}`,
				{
					headers: { Authorization: `Bearer ${tokenDOM}` },
				}
			);

			if (
				!response.data.error &&
				response.data.message === "delete was successful"
			) {
				queryClient.invalidateQueries("getURL");
				swal("Splendid!", `You have successfully deleted a URL`, "success");
			}

			if (response.data.error) {
				swal("Oops!", `${response.data.message}`, "error");
			}
		} catch (error: any) {
			console.log(error);
			swal("Oops!", error?.message, "error");
		}
	};

	const { mutateAsync: handleDelete, isLoading } = useMutation(deleteURL);

	const handleDeleteURL = async (url: any) => {
		await swal("Hello!", "Are you sure you want to delete this URL?", "info", {
			buttons: {
				cancel: "Cancel",
				delete: { text: "Delete", className: styles.swalDeleteBtn },
			} as ButtonList,
		}).then((value) => {
			switch (value) {
				case "delete":
					handleDelete(url);
					break;

				case "cancel":
					return;

				default:
					return;
			}
		});
		// handleDelete(url);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Delete URL | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div>
				{urls.length < 1 && (
					<div className='shadow-md bg-slate-400 rounded-lg p-10 py-20 flex flex-col gap-10 w-full lg:w-3/4'>
						<p className='text-lg font-semibold text-white'>
							You have not created any short URL. When you do they will appear here
						</p>
						<div>
							<Link
								to='/dashboard/create-url'
								className='bg-primary400 text-white p-4 px-10 rounded-full hover:bg-primary300'
							>
								Create Short URL
							</Link>
						</div>
					</div>
				)}

				{urls.length >= 1 && (
					<div className='pb-6 hidden lg:block'>
						<h1 className='text-center text-3xl text-primary300 mb-8'>Delete URL</h1>
						<table className={`${styles.table}`}>
							<tr className={`${styles.tr}`}>
								<th className={`${styles.th}`}>Date Created</th>
								<th className={`${styles.th}`}>Long URL</th>
								<th className={`${styles.th}`}>Short URL</th>
							</tr>
							{urls?.map((item: any) => (
								<tr className={`${styles.tr}`} key={item._id}>
									<td className={`${styles.td}`}>
										{moment(item.createdAt).format("MMM do yy")}
									</td>
									<td className={`${styles.td}`}>
										{item.longUrl.length > 50
											? item.longUrl.substring(0, 50) + "..."
											: item.longUrl}
									</td>
									<td className={`${styles.td}`}>
										https://6or.netlify.com/{item.shortUrl}
									</td>
									<td className='cursor-pointer pr-3'>
										<i
											className='fa fa-trash text-red-500 hover:text-primary300 mr-4'
											aria-hidden='true'
											onClick={() => {
												if (isLoading) return;
												handleDeleteURL(item);
											}}
										></i>
									</td>
								</tr>
							))}
						</table>
					</div>
				)}

				{urls.length >= 1 && (
					<div className='pb-6 lg:hidden'>
						<h1 className='text-center text-xl text-primary300 mb-8'>Delete URL</h1>
						<div className='flex flex-col gap-6 mx-auto'>
							{urls?.map((url: any) => (
								<div
									className='flex flex-col gap-3 shadow-md px-6 py-8 border rounded-xl'
									key={url._id}
								>
									<div className='flex items-center gap-2'>
										<span className='text-primary300 font-semibold'>
											<i className='fa fa-external-link' aria-hidden='true'></i>
										</span>
										<span>
											{url.longUrl.length > 50
												? url.longUrl.substring(0, 50) + "..."
												: url.longUrl}
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-primary300 font-semibold'>
											<i className='fa fa-link' aria-hidden='true'></i>
										</span>
										<span>https://6or.netlify.com/{url.shortUrl}</span>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-primary300 font-semibold'>
											<i className='fa fa-calendar' aria-hidden='true'></i>
										</span>
										<span>{moment(url.createdAt).format("hh:mm A, Do MMMM YYYY")}</span>
									</div>
									<div className='flex items-center justify-end font-semibold'>
										<button
											className='mt-3  p-2 px-4 bg-red-600 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none disabled:cursor-not-allowed'
											onClick={() => {
												if (isLoading) return;
												handleDeleteURL(url);
											}}
										>
											<i className='fa fa-trash' aria-hidden='true'></i>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default DeleteURL;

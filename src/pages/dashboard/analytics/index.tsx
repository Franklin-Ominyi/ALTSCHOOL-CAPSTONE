import styles from "./Analytics.module.css";
import React, { Fragment, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";

const Analytics: React.FC = () => {
	const appContext = useContext(AppContext);
	const urls = appContext?.urls;

	return (
		<Fragment>
			<Helmet>
				<title>Analytics | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div>
				{urls.length < 1 && (
					<div className='shadow-md bg-slate-400 rounded-lg p-10 py-20 flex flex-col gap-10 w-3/4'>
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
						<h1 className='text-center text-3xl text-primary300 mb-8'>Analytics</h1>
						<table className={`${styles.table}`}>
							<tr className={`${styles.tr}`}>
								<th className={`${styles.th}`}>Date Created</th>
								<th className={`${styles.th}`}>Long URL</th>
								<th className={`${styles.th}`}>Short URL</th>
								<th className={`${styles.th}`}>Visits</th>
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
									<td className={`pr-3' ${styles.td}`}>{item.visits}</td>
								</tr>
							))}
						</table>
					</div>
				)}

				{urls.length >= 1 && (
					<div className='pb-6 lg:hidden'>
						<h1 className='text-center text-xl text-primary300 mb-8'>Analytics</h1>
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
									<div className='flex items-center gap-2 justify-end font-semibold'>
										<span className='text-primary300 font-semibold'>Visits:</span>
										<span>{url.visits}</span>
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

export default Analytics;

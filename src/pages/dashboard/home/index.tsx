import styles from "./Home.module.css";
import React, { Fragment, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
	const appContext = useContext(AppContext);
	const urls = appContext?.urls;
	const setQrCodeModalActive = appContext.setQrCodeModalActive;
	const setSelectedQrCode = appContext.setSelectedQrCode;

	const handleCopy = (shortUrl: string) => {
		navigator.clipboard.writeText(`https://6or.netlify.com/${shortUrl}`);
		swal("Great!", "You have successfully copied short URL", "success");
	};

	const handleQrCode = (shortUrl: string) => {
		setSelectedQrCode(`https://6or.netlify.com/${shortUrl}`);
		setQrCodeModalActive(true);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Dashboard | Scissor | Developed by Franklin Alegu</title>
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
						<h1 className='text-center text-3xl text-primary300 mb-8'>All URLs</h1>
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
									<td className=' lg:pr-3'>
										<i
											className='fa fa-clone hover:text-primary300 mr-4 cursor-pointer'
											aria-hidden='true'
											onClick={() => handleCopy(item.shortUrl)}
										></i>

										<i
											className='fa fa-qrcode hover:text-primary300 cursor-pointer'
											aria-hidden='true'
											onClick={() => handleQrCode(item.shortUrl)}
										></i>
									</td>
								</tr>
							))}
						</table>
					</div>
				)}

				{urls.length >= 1 && (
					<div className='pb-6 lg:hidden'>
						<h1 className='text-center text-xl text-primary300 mb-8'>All URLs</h1>
						<div className='flex flex-col gap-6 mx-auto'>
							{urls?.map((url: any) => (
								<div
									className='flex flex-col gap-3 shadow-md px-6 py-8 border rounded-xl overflow-hidden'
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
									<div className='flex items-center justify-between font-semibold'>
										<p
											className='flex items-center gap-2  text-primary300 cursor-pointer hover:text-black'
											onClick={() => handleCopy(url.shortUrl)}
										>
											<span>Copy</span>
											<i className='fa fa-clone' aria-hidden='true'></i>
										</p>
										<p
											className='flex items-center gap-2 text-primary300 cursor-pointer hover:text-black'
											onClick={() => handleQrCode(url.shortUrl)}
										>
											<span>QR Code</span>
											<i className='fa fa-qrcode' aria-hidden='true'></i>
										</p>
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

export default Home;

import React, { Fragment, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import moment from "moment";
import { Helmet } from "react-helmet";

const Setting: React.FC = () => {
	const appContext = useContext(AppContext);
	const firstName =
		typeof appContext.user !== "boolean" ? appContext.user.firstName : "";
	const lastName =
		typeof appContext.user !== "boolean" ? appContext.user.lastName : "";
	const email =
		typeof appContext.user !== "boolean" ? appContext.user.email : "";
	const urls = appContext.urls;
	const clicks = urls.reduce((result, current) => {
		return result + current.visits;
	}, 0);
	const accountCreationDate =
		typeof appContext.user !== "boolean" ? appContext.user.createdAt : "";

	return (
		<Fragment>
			<Helmet>
				<title>Setting | Scissor | Developed by Franklin Alegu</title>
			</Helmet>

			<div className='mb-6 '>
				<h1 className='text-center text-xl text-primary300 mb-8 lg:text-3xl'>
					Setting
				</h1>
				<div className='p-6 border shadow-md rounded-lg '>
					<div className='flex items-center gap-2 text-md  border-b border-b2 py-2 overflow-x-scroll lg:text-lg lg:overflow-x-hidden'>
						<span className='text-primary300 font-semibold'>Name:</span>
						<span className='flex gap-1'>
							<span className='capitalize'>{lastName}</span>
							<span className='capitalize'>{firstName}</span>
						</span>
					</div>
					<div className='flex items-center gap-2 text-md border-b border-b2 py-2 overflow-x-scroll lg:text-lg lg:overflow-x-hidden'>
						<span className='text-primary300 font-semibold'>Email:</span>
						<span>{email}</span>
					</div>
					<div className='flex items-center gap-2 text-md border-b border-b2 py-2 lg:text-lg'>
						<span className='text-primary300 font-semibold'>Total Short Links:</span>
						<span>{urls.length}</span>
					</div>
					<div className='flex items-center gap-2 text-md border-b border-b2 py-2 lg:text-lg'>
						<span className='text-primary300 font-semibold'>Total Clicks:</span>
						<span>{clicks}</span>
					</div>
					<div className='flex items-center gap-2 text-md border-b border-b2 py-2 overflow-x-scroll lg:text-lg lg:overflow-x-hidden'>
						<span className='text-primary300 font-semibold'>
							Account Creation Date:
						</span>
						<span>{moment(accountCreationDate).format("do MMMM YYYY")}</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Setting;

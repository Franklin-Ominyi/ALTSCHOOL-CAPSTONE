import React, { useContext } from "react";
import userIcon from "../../../../assets/icons/user.png";
import { AppContext } from "../../../../contexts/AppContext";

const Topbar: React.FC = () => {
	const appContext = useContext(AppContext);
	const userName =
		typeof appContext.user !== "boolean" ? appContext.user.firstName : "John Doe";

	const dashboardSidebarOpen = appContext.dashboardSidebarOpen;
	const setDashboardSidebarOpen = appContext.setDashboardSidebarOpen;

	const toggleSidebar = () => {
		setDashboardSidebarOpen(!dashboardSidebarOpen);
	};

	return (
		<div className='w-full shadow-md p-3 px-6 flex justify-between items-center gap-3 lg:justify-end lg:px-14'>
			<div className='flex items-center gap-3'>
				<img height={40} width={40} src={userIcon} alt='userName placeholder' />
				<p className='font-bold text-xl capitalize'>{userName}</p>
			</div>
			<div className='block lg:hidden'>
				{!dashboardSidebarOpen && (
					<i
						className='fa fa-bars text-2xl text-primary300 cursor-pointer'
						aria-hidden='true'
						onClick={toggleSidebar}
					></i>
				)}

				{dashboardSidebarOpen && (
					<i
						className='fa fa-window-close text-2xl text-primary300 cursor-pointer'
						aria-hidden='true'
						onClick={toggleSidebar}
					></i>
				)}
			</div>
		</div>
	);
};

export default Topbar;

import styles from "./Sidebar.module.css";
import React, { useState, useContext, useEffect } from "react";
import logo from "../../../../assets/logo-black.svg";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../../contexts/AppContext";

const Sidebar: React.FC = () => {
	const [selectedLink, setSelectedLink] = useState<string>("home");
	const appContext = useContext(AppContext);
	const handleLogout = appContext.logOut;

	const dashboardSidebarOpen = appContext.dashboardSidebarOpen;
	const setDashboardSidebarOpen = appContext.setDashboardSidebarOpen;

	const location = useLocation();
	useEffect(() => {
		setSelectedLink(location.pathname.split("dashboard/")[1]);
	}, [location]);

	document.querySelectorAll(".sidebar-link").forEach((item) => {
		item.addEventListener("click", () => setDashboardSidebarOpen(false));
	});

	return (
		<div
			className={`fixed py-14 z-50 px-4 h-screen flex flex-col overflow-y-scroll ${
				dashboardSidebarOpen ? "left-0" : "-left-full"
			}  gap-24 bg-primary400 ${
				styles.sidebar
			} lg:flex lg:left-0 lg:overflow-y-hidden`}
		>
			<div className='flex justify-center'>
				<img src={logo} alt='logo' className={`${styles.logo}`} />
			</div>
			<div className='flex flex-col gap-4 lg:gap-5'>
				<Link
					className={`sidebar-link text-white text-xl flex items-center gap-3 p-2 hover:bg-infoBlue hover:rounded-lg  ${
						selectedLink === "home" ? "bg-infoBlue rounded-lg" : ""
					}`}
					to='/dashboard/home'
				>
					<i className='fa fa-home' aria-hidden='true'></i>
					<span>Home</span>
				</Link>
				<Link
					className={`sidebar-link text-white text-xl flex items-center gap-3 p-2 hover:bg-infoBlue hover:rounded-lg  ${
						selectedLink === "create-url" ? "bg-infoBlue rounded-lg" : ""
					}`}
					to='/dashboard/create-url'
				>
					<i className='fa fa-pencil-square-o' aria-hidden='true'></i>
					<span>Create URL</span>
				</Link>
				<Link
					className={`sidebar-link text-white text-xl flex items-center gap-3 p-2 hover:bg-infoBlue hover:rounded-lg  ${
						selectedLink === "analytics" ? "bg-infoBlue rounded-lg" : ""
					}`}
					to='/dashboard/analytics'
				>
					<i className='fa fa-line-chart' aria-hidden='true'></i>
					<span>Analytics</span>
				</Link>
				<Link
					className={`sidebar-link text-white text-xl flex items-center gap-3 p-2 hover:bg-infoBlue hover:rounded-lg  ${
						selectedLink === "delete-url" ? "bg-infoBlue rounded-lg" : ""
					}`}
					to='/dashboard/delete-url'
				>
					<i className='fa fa-trash' aria-hidden='true'></i>
					<span>Delete URL</span>
				</Link>
				<Link
					className={`sidebar-link text-white text-xl flex items-center gap-3 p-2 hover:bg-infoBlue hover:rounded-lg  ${
						selectedLink === "setting" ? "bg-infoBlue rounded-lg" : ""
					}`}
					to='/dashboard/setting'
				>
					<i className='fa fa-gear' aria-hidden='true'></i>
					<span>Setting</span>
				</Link>
				<span
					className={`text-white text-xl flex items-center gap-3 p-2 cursor-pointer hover:bg-infoBlue hover:rounded-lg`}
					onClick={() => handleLogout()}
				>
					<i className='fa fa-sign-out' aria-hidden='true'></i>
					<span>Logout</span>
				</span>
			</div>
		</div>
	);
};

export default Sidebar;

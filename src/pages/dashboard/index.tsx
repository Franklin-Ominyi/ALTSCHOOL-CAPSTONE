import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import Modal from "./components/modal";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Dashboard: React.FC = () => {
	const appContext = useContext(AppContext);
	const qrCodeModalActive = appContext.qrCodeModalActive;
	return (
		<>
			{qrCodeModalActive && <Modal />}
			<div className='relative flex'>
				<div className={`h-screen overflow-hidden ${styles.sidebar}`}>
					<Sidebar />
				</div>

				<div className={`${styles.main} flex flex-col gap-10 `}>
					<Topbar />
					<div className='px-6'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

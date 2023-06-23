import styles from "./Loader.module.css";
import React from "react";
import logo from "../../assets/logo.svg";

const Loader: React.FC = () => {
	return (
		<div className={`${styles.loader}`}>
			<img src={logo} alt='logo' height='50px' />
		</div>
	);
};

export default Loader;

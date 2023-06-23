import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Redirect = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const handleRedirect = async () => {
		try {
			const { data } = await axios.get(
				`${import.meta.env.VITE_API_URL}/url/${id}`
			);
			if (data) window.location.href = data.data;
		} catch (error: any) {
			if (error.response) {
				if (error.response.data.message === "URL not found") {
					await swal("404 - Not Found", "URL was not found", "error");
					navigate("/");
				}
			} else {
				await swal("Oops", `${error.message}`, "error");
				navigate("/");
			}
		}
	};

	useEffect(() => {
		handleRedirect();
	}, []);

	return <div></div>;
};

export default Redirect;

import axios from "axios";
import React, {
	createContext,
	useState,
	ReactNode,
	FC,
	useEffect,
} from "react";
import { useQuery } from "react-query";

type urlsType = {
	_id: string;
	longUrl: string;
	shortUrl: string;
	userId: string;
	visits: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

type userDataType = {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	urls: [urlsType];
	createdAt: string;
};

interface AppContextDefault {
	auth: boolean;
	setAuth: React.Dispatch<React.SetStateAction<boolean>>;
	token: string | null;
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
	user: userDataType | boolean;
	setUser: React.Dispatch<React.SetStateAction<boolean | userDataType>>;
	qrCodeModalActive: boolean;
	setQrCodeModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	selectedQrCode: any;
	setSelectedQrCode: React.Dispatch<React.SetStateAction<any>>;
	dashboardSidebarOpen: boolean;
	setDashboardSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	urls: urlsType[];
	logOut: () => Promise<void>;
	checkAuth: () => Promise<void>;
}

const initialContext: AppContextDefault = {
	token: "",
	auth: false,
	user: false,
	urls: [],
	qrCodeModalActive: false,
	selectedQrCode: null,
	dashboardSidebarOpen: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAuth: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setToken: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setUser: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setQrCodeModalActive: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setSelectedQrCode: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setDashboardSidebarOpen: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	logOut: async () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	checkAuth: async () => {},
};

const AppContext = createContext<AppContextDefault>(initialContext);

interface Props {
	children: ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {
	const [auth, setAuth] = useState<boolean>(false);
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem("token")
	);
	const [user, setUser] = useState<userDataType | boolean>(false);
	const [urls, setUrls] = useState<urlsType[] | []>([]);
	const [qrCodeModalActive, setQrCodeModalActive] = useState<boolean>(false);
	const [selectedQrCode, setSelectedQrCode] = useState<any>(null);
	const [dashboardSidebarOpen, setDashboardSidebarOpen] =
		useState<boolean>(false);

	useEffect(() => {
		if (token) localStorage.setItem("token", token);
		checkAuth();
	}, [token]);

	const logOut = async () => {
		try {
			await axios.get(`${import.meta.env.VITE_API_URL}/logout`);
			localStorage.setItem("token", "");
			// navigate("/");
			setUser(false);
		} catch (error) {
			localStorage.setItem("token", "");
			console.log(error);
		}
	};

	const checkAuth = async () => {
		const tokenDOM = localStorage.getItem("token");

		try {
			const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth`, {
				headers: { Authorization: `Bearer ${tokenDOM}` },
			});

			setUser(response.data.user);
			setUrls(response.data.user.urls);
		} catch (error: any) {
			if (error?.response?.data === null) {
				localStorage.setItem("token", "");
			}
			setUser(false);
		}
	};

	const getURL = async () => {
		const tokenDOM = localStorage.getItem("token");

		const response = await axios.get(`${import.meta.env.VITE_API_URL}/url`, {
			headers: { Authorization: `Bearer ${tokenDOM}` },
		});
		return response.data;
	};

	const { data } = useQuery("getURL", getURL);

	useEffect(() => {
		if (data) setUrls(data?.data);
	}, [data]);

	return (
		<AppContext.Provider
			value={{
				auth,
				setAuth,
				token,
				setToken,
				user,
				setUser,
				urls,
				qrCodeModalActive,
				selectedQrCode,
				setSelectedQrCode,
				setQrCodeModalActive,
				dashboardSidebarOpen,
				setDashboardSidebarOpen,
				logOut,
				checkAuth,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
export { AppContext };

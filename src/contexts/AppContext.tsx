// import axios from "axios";
import React, { createContext, useState, ReactNode, FC } from "react";

interface AppContextDefault {
	auth: boolean;
	setAuth: React.Dispatch<React.SetStateAction<boolean>>;
	token: boolean | string;
	setToken: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextDefault | null>(null);

interface Props {
	children: ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {
	const [auth, setAuth] = useState<boolean>(false);
	const [token, setToken] = useState<boolean>(false);

	return (
		<AppContext.Provider value={{ auth, setAuth, token, setToken }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
export { AppContext };

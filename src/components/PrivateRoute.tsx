import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (
	auth: boolean,
	component: ReactNode,
	redirect: string
) => {
	return auth ? component : <Navigate to={redirect} />;
};

import { useContext } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider as Router,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/index.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { Fragment } from "react";
import Login from "./pages/login/index.tsx";
import { AppContext } from "./contexts/AppContext.tsx";
import Signup from "./pages/signup/index.tsx";
import ForgottenPassword from "./pages/forgottenpassword/index";
import ResetPassword from "./pages/resetpassword/index";
import Home from "./pages/home/index.tsx";
import ConfirmEmail from "./pages/confirmemail/index.tsx";
import Redirect from "./pages/redirect/index.tsx";
import DashboardHome from "./pages/dashboard/home/index.tsx";
import CreateURL from "./pages/dashboard/createurl/index.tsx";
import DeleteURL from "./pages/dashboard/deleteurl/index.tsx";
import Analytics from "./pages/dashboard/analytics/index.tsx";
import Setting from "./pages/dashboard/setting/index.tsx";

const App = () => {
	const appContext = useContext(AppContext);
	const auth = Boolean(appContext?.user);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/:id",
			element: <Redirect />,
		},
		{
			path: "/signup",
			element: PrivateRoute(!auth, <Signup />, "/dashboard"),
		},
		{
			path: "/login",
			element: PrivateRoute(!auth, <Login />, "/dashboard"),
		},
		{
			path: "/forgotten-password",
			element: PrivateRoute(!auth, <ForgottenPassword />, "/dashboard"),
		},
		{
			path: "/reset-password/:id/:token",
			element: PrivateRoute(!auth, <ResetPassword />, "/dashboard"),
		},
		{
			path: "/confirm-email/:id/:token",
			element: PrivateRoute(!auth, <ConfirmEmail />, "/dashboard"),
		},
		{
			path: "/dashboard",
			element: PrivateRoute(auth, <Dashboard />, "/login"),
			children: [
				{
					path: "/dashboard",
					element: <Navigate to='home' replace />,
				},
				{
					path: "home",
					element: <DashboardHome />,
				},
				{
					path: "analytics",
					element: <Analytics />,
				},
				{
					path: "create-url",
					element: <CreateURL />,
				},
				{
					path: "delete-url",
					element: <DeleteURL />,
				},
				{
					path: "setting",
					element: <Setting />,
				},
			],
		},
		{
			path: "/*",
			element: <h1>404 - Not Found</h1>,
		},
	]);
	return (
		<Fragment>
			<Router router={router} />
		</Fragment>
	);
};

export default App;

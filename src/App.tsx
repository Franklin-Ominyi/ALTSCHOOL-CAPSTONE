import { useContext } from "react";
import {
	createBrowserRouter,
	RouterProvider as Router,
} from "react-router-dom";
import "./App.css";
import HelloWorld from "./components/HelloWorld.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { Fragment } from "react";
import Login from "./pages/login/";
import { AppContext } from "./contexts/AppContext.tsx";
import Signup from "./pages/signup/index.tsx";
import ForgottenPassword from "./pages/forgottenpassword/index";
import ResetPassword from "./pages/resetpassword/index";
import Home from "./pages/home/index.tsx";

const App = () => {
	const { auth } = useContext(AppContext);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
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
			path: "/dashboard",
			element: PrivateRoute(auth, <HelloWorld />, "/login"),
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

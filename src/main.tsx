import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppContextProvider from "./contexts/AppContext.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
console.log(import.meta.env.VITE_API_URL);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppContextProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</AppContextProvider>
	</React.StrictMode>
);

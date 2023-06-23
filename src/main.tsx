import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppContextProvider from "./contexts/AppContext.tsx";
import { QueryClientProvider, QueryClient } from "react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

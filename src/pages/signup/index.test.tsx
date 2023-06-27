import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Signup from "./index";

const queryClient = new QueryClient();

describe("Signup", () => {
	it("renders the component correctly", () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Signup />
				</QueryClientProvider>
			</BrowserRouter>
		);

		// Verify that the component renders without throwing an error
		expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter firstname")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter lastname")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
	});
});

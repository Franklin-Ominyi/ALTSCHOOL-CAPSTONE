import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import ForgottenPassword from "./index";

const queryClient = new QueryClient();

describe("ForgottenPassword", () => {
	it("renders the component", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ForgottenPassword />
				</BrowserRouter>
			</QueryClientProvider>
		);

		// Verify that the component renders without throwing an error
		expect(screen.getByText("Forgotten Password")).toBeInTheDocument();
	});
});

// it("submits the form", async () => {
// 	render(
// 		<QueryClientProvider client={queryClient}>
// 			<BrowserRouter>
// 				<ForgottenPassword />
// 			</BrowserRouter>
// 		</QueryClientProvider>
// 	);

// 	// Simulate user input and submit the form
// 	fireEvent.change(screen.getByPlaceholderText("Enter email"), {
// 		target: { value: "test@example.com" },
// 	});
// 	fireEvent.click(screen.getByText("Request New Password"));

// 	// Wait for the form submission to complete
// 	await screen.findByText("Email address is not valid");

// 	// Verify that the success message is present in the rendered output
// 	expect(screen.getByText("Email address is not valid")).toBeInTheDocument();
// });

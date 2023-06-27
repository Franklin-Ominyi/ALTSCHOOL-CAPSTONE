import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "./index";

describe("Landing", () => {
	it("renders the component", () => {
		render(
			<BrowserRouter>
				<Landing />
			</BrowserRouter>
		);

		// Verify that the component renders without throwing an error
		expect(
			screen.getByText(
				"Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement."
			)
		).toBeInTheDocument();
	});
});

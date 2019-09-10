import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { Login } from "./login";

const mockResponse = {
	user: "1",
	pass: "1",
};

global.fetch = jest.fn(() => {
	return new Promise(() => ({
		json: () => mockResponse,
		ok: true,
	}));
});

describe("Login", () => {
	let Subject;
	const updateCurrentUser = jest.fn();

	beforeEach(() => {
		Subject = render(<Login updateCurrentUser={updateCurrentUser} />);
	});

	it("should render", () => {
		expect(Subject).toBeTruthy();
	});

	it("should login with correct user and pass", () => {
		const { getByLabelText, getByText } = Subject;

		const userInput = getByLabelText("Username");
		const passwordInput = getByLabelText("Pass");

		fireEvent.change(userInput, { target: "1" });
		fireEvent.change(passwordInput, { target: "1" });

		const loginButton = getByText("Login");

		fireEvent.click(loginButton);

		expect(fetch).toHaveBeenCalled();

		wait(() => {
			expect(updateCurrentUser).toHaveBeenCalledWith(mockResponse);
		});
	});
});

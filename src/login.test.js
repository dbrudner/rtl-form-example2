import React from 'react';
import Login from './login';
import { render, fireEvent, waitForElement } from '@testing-library/react';

describe('Login', () => {
	jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
		return Promise.resolve({
			json: () => Promise.resolve({})
		});
	});

	let wrapper;
	beforeEach(() => {
		wrapper = render(<Login />);
	});

	it('should display an error message after logging in', async () => {
		const userInput = wrapper.getByLabelText('Username');
		const passwordInput = wrapper.getByLabelText('Pass');
		const button = wrapper.getByText('Login');

		fireEvent.change(userInput, { target: { value: 'dave' } });
		fireEvent.change(passwordInput, { target: { value: 'password' } });
		fireEvent.click(button);

		const successMessage = await waitForElement(() =>
			wrapper.getByText('You are logged in')
		);

		expect(successMessage).toBeTruthy();
	});
});

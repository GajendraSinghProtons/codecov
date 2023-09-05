import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";



test("renders login form", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByLabelText("Username:");
  const passwordInput = screen.getByLabelText("Password:");
  const loginButton = screen.getByText("Login");
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  LoginForm
});

test("submits login form with user input", () => {
  const onLoginMock = jest.fn();
  render(<LoginForm onLogin={onLoginMock} />);

  const usernameInput = screen.getByLabelText("Username:");
  const passwordInput = screen.getByLabelText("Password:");
  const loginButton = screen.getByText("Login");

  // Simulate user input
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  // Submit the form
  fireEvent.click(loginButton);

  // Ensure the form was submitted with the correct data
  expect(onLoginMock).toHaveBeenCalledWith({
    username: "testuser",
    password: "testpassword",
  });
});

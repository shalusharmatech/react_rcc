import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axiosMock from "axios";

describe("Testing Login Component", () => {
  
  beforeEach(() => {
    console.log("Before Each I run.");
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render documentation link.", () => {
    render(<Login />);
    const apiDocumentationLink = screen.getByText("API Documentation");
    expect(apiDocumentationLink).toBeInTheDocument();
  });

  it("should have two testfields.", () => {
    render(<Login />);
    const textfieldElements = screen.getAllByRole("textbox");
    expect(textfieldElements.length).toBe(2);
  });

  it("should update username on type.", () => {
    render(<Login />);
    const usernameTextfield = screen.getByTestId("textfield-username");
    const event = {
      target: {
        value: "apple",
      },
    };
    console.log(event.target.value);
    fireEvent.change(usernameTextfield, event);
    expect(usernameTextfield.value).toBe("apple");
  });

  it("should update password on type.", () => {
    render(<Login />);
    const passwordTextfield = screen.getByTestId("textfield-password");
    fireEvent.change(passwordTextfield, { target: { value: "mango" } });
    expect(passwordTextfield.value).toBe("mango");
  });

  it("should Login successfully and Navigate to `/home.`", async () => {
    const mockLoginResponse = {
      data: {
        token: "dummy_api_token",
      },
      status: 200,
    };
    axiosMock.post.mockResolvedValueOnce(mockLoginResponse);

    // This is a mock dummy component for testing.
    const DummyComponent = () => <h1>dummy_home</h1>;
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<DummyComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    );

    act(() => {
      const loginButton = screen.getByTestId("button-login");
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      let heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent("dummy_home");
    });
  });

  it("should fail Login and display message on Snackbar", async () => {
    axiosMock.post.mockResolvedValueOnce({ data: {}, status: 400 });

    render(<Login />);

    act(() => {
      const loginButton = screen.getByTestId("button-login");
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      let snackbar = screen.getByTestId("snackbar-status");
      expect(snackbar).toHaveTextContent("Login Failed");
    });
  });
});

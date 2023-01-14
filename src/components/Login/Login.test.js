import { fireEvent, screen, render, waitFor  } from "@testing-library/react";
import { act } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axiosMock from "axios";

describe("Testing Login Component", () => {

    beforeEach(() =>{
        jest.clearAllMocks();
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });

    it("should validate documentation link is present", () => {
        render(<Login />);
        const apiDocumentationLink = screen.getByText("API Documentation");
        expect(apiDocumentationLink).toBeInTheDocument();
    })

    it("should have two textFields", () => {
        render(<Login />);
        const textFieldElements = screen.getAllByRole("textbox");
        expect(textFieldElements.length).toBe(2);
    });

    it("should update username on type", () => {
        render(<Login />);
        const textFieldUsername = screen.getByTestId("textfield-username");
        const event = {target: {value:"shalu"}};
        fireEvent.change(textFieldUsername, event);
        expect(textFieldUsername.value).toBe("shalu");
    });

    it("should update password on type", () => {
        render(<Login />);
        const textFieldPassword = screen.getByTestId("textfield-password");
        fireEvent.change(textFieldPassword, {target:{value:"sharma"}});
        expect(textFieldPassword.value).toBe("sharma");
    })

    it("should successfully login abd navigate to home", async() => {
        const mockLoginResponse = {
            data:{
                token: "dummy_api_token"
            }, status: 200
        };

        axiosMock.post.mockResolvedValueOnce(mockLoginResponse);

        const DummyComponent = () => <h1>dummy_home</h1>

        render(
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Login />}></Route>
                    <Route path = "/home" element = {<DummyComponent />}></Route>
                </Routes>
            </BrowserRouter>
        );

        act(() => {
            const loginButton = screen.getByTestId("button-login");
            fireEvent.click(loginButton);

        });

        await waitFor(()=> {
            let heading = screen.getByRole("heading");
            expect(heading).toHaveTextContent("dummy_home");
        });
    });

    it.only("should fail login and display message on snackbar", async() => {
        axiosMock.post.mockResolvedValueOnce({data:{}, status: 400});

        render(<Login />);

        act(() => {
            const loginButton = screen.getByTestId("button-login");
            fireEvent.click(loginButton);
        })

        await waitFor(() => {
            let snackbar = screen.getByTestId("snackbar-status");
            expect(snackbar).toHaveTextContent("Login Failed");
        });
    });



});
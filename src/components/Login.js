import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import AuthAPI from "../Rest/AuthAPI";
import { useNavigate } from "react-router-dom";
import AuthService from "../settings/AuthUtils";


// function Toyo() {
//   const navigate = useNavigate();
//   navigate("/");
// }


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.mainCss = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    };

    this.formCss = {
      display: "flex",
      flexDirection: "column",
    };

    this.childCss = {
      margin: "5px",
    };
    
    this.state = {
      username: "",
      password: "",
      loginStatus: "" ,
      snackbarStatus: false 
    };
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleOnClick = async() => {
    console.log("Login clicked");
    console.log(this.state.username);
    console.log(this.state.password);

    try {
        const authAPI = new AuthAPI();
        // const navigate = useNavigate();
        const auth = new AuthService();
        let response = await authAPI.authenticateUser(this.state.username, this.state.password);
        if(response.status === 200){
            console.log("Login Success");
            console.log(response.data.token);
            this.setState({snackbarStatus: true})
            this.setState({loginStatus: "Login Success"});

            auth.setApiKey(response.data.token);
            console.log(auth.getApiKey());

            auth.setUserRole(['admin']);
            console.log(auth.getUserRole());

            auth.setUserPermission(['read_user']);
            console.log(auth.getUserPermission());

            // navigate("/");
            // Toyo();
            return;
        }

    } catch(err) {
        console.log(err)
    }
    console.log("Login Failed");
    this.setState({snackbarStatus: true})
    this.setState({loginStatus: "Login Failed"})
  };

  render() {
    return (
      <div style={this.mainCss}>
        <div style={this.formCss}>
          <div style={this.childCss}>
            <a href="https://dummyjson.com/docs/auth">API Documentation</a>
          </div>
          <div style={this.childCss}>
            <TextField
              required
              id="outlined-required"
              label="Username"
              onChange={(e) => this.handleUsername(e)}
            />
          </div>
          <div style={this.childCss}>
            <TextField
              required
              id="outlined-required"
              label="Password"
              onChange={(e) => this.handlePassword(e)}
            />
          </div>
          <div style={this.childCss}>
            <Button variant="contained" onClick={this.handleOnClick}>
              Sign In
            </Button>
          </div>
          <div>
          <Snackbar
            open={this.state.snackbarStatus}
            autoHideDuration={2000}
            message={this.state.loginStatus}
          />
          </div>
        </div>
      </div>
    );
  }
}
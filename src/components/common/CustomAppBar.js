import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";

export default class CustomAppBar extends Component {
  constructor(props) {
    super(props);
    // this.myNav = useNavigate();
    this.state = {
      redirect: false,
      redirectUrl:"/"
    };
  }

  handleOnClickLogout = () => {
    this.setState({ redirect: true, redirectUrl:"/logout" });
  }

  render() {

    const { redirect } = this.state;
    if (redirect) {
      return (<Navigate to={this.state.redirectUrl} />);
    }

    return (
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <div style={{flex:"1"}}>
              <Typography variant="h6" noWrap component="div" align="center">
                Curefy/Sourc
              </Typography>
            </div>
            <Button color="inherit" onClick={this.handleOnClickLogout}>LogOut</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

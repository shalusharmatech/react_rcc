//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import HomeScreen from "./components/HomeScreen";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path= "/test" element = {<Test></Test>}></Route>
          <Route path= "/logOut" element = {<LogOut></LogOut>}></Route> */}
          <Route path= "/" element = {<Login></Login>}></Route>
          <Route path= "/test" element = {<Test></Test>}></Route>
          {/* <Route path= "/logOut" element = {<LogOut></LogOut>}></Route>
          <Route path= "/home" element = {<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]} ><HomeScreen></HomeScreen></ProtectedRoute>}></Route>
          <Route path= "*" element = {<PageNotFound></PageNotFound>}></Route> */}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

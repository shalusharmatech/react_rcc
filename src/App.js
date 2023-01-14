//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import Login from "./components/Login";
import Logout from "./components/Logout";
import HomeScreen from "./components/HomeScreen";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Products from "./components/Products";
import Chat from "./components/Chat";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import WithAppBar from "./components/common/WithAppBar";
import SearchProducts from "./components/SearchProducts";
import DisplayProduct from "./components/DisplayProduct";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<Login></Login>}></Route>
          <Route path= "/logout" element = {<Logout></Logout>}></Route>
          <Route path= "/home" element = {<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={['read_user']} ><WithAppBar><HomeScreen></HomeScreen></WithAppBar></ProtectedRoute>}></Route>
          <Route path= "/products" element = {<WithAppBar><Products></Products></WithAppBar>}></Route>
          <Route path= "/chat" element = {<WithAppBar><Chat></Chat></WithAppBar>}></Route>
          <Route path= "/search" element={<WithAppBar><SearchProducts></SearchProducts></WithAppBar>}></Route>
          <Route path= "/display" element={<WithAppBar><DisplayProduct></DisplayProduct></WithAppBar>}></Route>
          {/* <Route path= "/display" element={<DisplayProduct></DisplayProduct>}></Route> */}
          <Route path= "/test" element = {<Test></Test>}></Route>
          <Route path= "*" element = {<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

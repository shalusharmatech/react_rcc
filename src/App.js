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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<Login></Login>}></Route>
          <Route path= "/logout" element = {<Logout></Logout>}></Route>
          <Route path= "/home" element = {<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={['read_user']} ><HomeScreen></HomeScreen></ProtectedRoute>}></Route>
          <Route path= "/products" element = {<Products></Products>}></Route>
          <Route path= "/chat" element = {<Chat></Chat>}></Route>
          <Route path= "/search" element={<SearchProducts></SearchProducts>}></Route>
          <Route path= "/test" element = {<Test></Test>}></Route>
          <Route path= "*" element = {<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

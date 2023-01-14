import "./App.css";
import React, { Component } from 'react';
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Products from "./components/Products/Products";
import Chat from "./components/Chat/Chat";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithAppBar from "./components/common/WithAppBar";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import DisplayProduct from "./components/DisplayProduct/DisplayProduct";

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
          <Route path= "*" element = {<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

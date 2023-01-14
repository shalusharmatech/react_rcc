import React, { Component } from 'react'
import Login from './components/Login'
import CustomAppBar from './components/common/CustomAppBar'
import CustomDrawer from './components/common/CustomDrawer'
import WithAppBar from './components/common/WithAppBar'
import Products from './components/Products'
import Chat from './components/Chat'
import SearchProducts from './components/SearchProducts'
import DisplayProduct from './components/DisplayProduct'

export default class Test extends Component {
  render() {
    return (

      //<SearchProducts></SearchProducts>
      <DisplayProduct></DisplayProduct>
      //<Chat></Chat>
      //<Products></Products>
      //<Login/>
      //<WithAppBar />
      // <CustomAppBar></CustomAppBar>
      // <CustomDrawer></CustomDrawer>
    )
  }
}

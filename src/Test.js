import React, { Component } from 'react'
import Login from './components/Login'
import CustomAppBar from './components/common/CustomAppBar'
import CustomDrawer from './components/common/CustomDrawer'
import WithAppBar from './components/common/WithAppBar'

export default class Test extends Component {
  render() {
    return (
      //<Login/>
      <WithAppBar />
      //<CustomAppBar></CustomAppBar>
      //<CustomDrawer></CustomDrawer>
    )
  }
}

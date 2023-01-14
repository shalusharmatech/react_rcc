import React, { Component } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import CustomAppBar from './CustomAppBar';
import CustomDrawer from './CustomDrawer';


export default class WithAppBar extends Component {
    constructor(props){
        super(props);
        this.children = props.children;
    }
  render() {
    return (
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <CustomAppBar />
              <CustomDrawer />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {this.children}
              </Box>
            </Box>
          );
        }
  }

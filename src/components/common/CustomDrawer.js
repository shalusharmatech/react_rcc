import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Navigate } from 'react-router-dom';


export default class CustomDrawer extends Component {
    constructor(props){
        super(props);

        this.drawerWidth = 240;

        this.itemNames1 = [
            ["Products", "/products"],
            ["Chat", "/chat"],
            ["Active orders", "/active-orders"],
            ["Pending orders", "/pending-orders"],
            ["Upload Records", "/upload-records"],
            ["User Management", "user-management"],
            ["Search Products", "/search-products"]
        ]
    
        this.itemNames2 = [
            ["All Mail" , "/all-mail"],
            ["Trash" , "/trash"],
            ["Spam" , "/spam"]
        ]

        // this.state={
        //   redirect: false,
        //   redirectURL : ""
        // };
    }

    // handleOnClick1 = (i) => {
      
    //   let url1 = this.itemNames1[i][1];
    //   console.log(url1);
    //   this.setState({ redirect: true, redirectUrl: url1 });      
    // };

    // handleonClick2 = (i) => {
    //   let url2 = this.itemNames2[i][1]
    //   this.setState({redirect: true, redirectURL: url2})
    // }

  render() {
    // console.log(this.state);
    // if (this.state.redirect){
    //   // console.log("Inside...")
    //   // return (<Navigate to = {this.state.redirectURL} />)
    //   let ddd =this.state.redirectURL;
    //   console.log(ddd);
    //   return (<Navigate replace to = {ddd} />)
    // }

    return (
        <Drawer
        variant="permanent"
        sx={{
          width: this.drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: this.drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {this.itemNames1.map((text,i) => (
              <ListItem key={text} disablePadding onClick={e => this.handleOnClick1(i)}>
                <ListItemButton>
                  <ListItemIcon>
                    {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text[0]} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {this.itemNames2.map((text, i) => (
              <ListItem key={text[0]} disablePadding onClick={e => this.handleonClick2(i)} >
                <ListItemButton>
                  <ListItemIcon>
                    {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text[0]} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
    )
  }
}

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
            ["Search Products", "search-products"]
        ]
    
        this.itemNames2 = [
            ["All Mail" , "/all-mail"],
            ["Trash" , "/trash"],
            ["Spam" , "/spam"]
        ]

        this.state={
          redirect: false
        };

        this.redirectURL = "/";

        console.log("The state is :");
        console.log(this.state.redirect)
        console.log("I'm in Constructor.");

    }

    componentDidMount = () => {
      console.log("I'm in Mount.");
    }

    componentDidUpdate = () => {
      console.log("I'm in Update.");
      // if (this.state.redirect){
      //   this.setState({ redirect: false });    
      // } 
    }

    handleOnClick1 = (i) => {
      let url = this.itemNames1[i][1];
      this.redirectURL = url;
      this.setState({ redirect: true });      
    };

    handleonClick2 = (i) => {
      let url = this.itemNames2[i][1];
      this.redirectURL = url;
      this.setState({ redirect: true });     
    }

  render() {
    if (this.state.redirect){
      console.log("I am TRUE");
      return (<Navigate replace to = {this.redirectURL} />)
    }
    console.log("I am FALSE");    
    
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

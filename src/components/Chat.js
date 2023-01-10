import React, { Component } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ProductsAPI from '../Rest/ProductsAPI';

export default class Chat extends Component {
    constructor(){
        super();

        this.count =0;
        this.limit= 18;

        this.state={
            products: []

        }
    }

    componentDidMount = () => {
        if(this.count==0){
            this.fetchData();
        }
        this.count=1;
    }

    loadMoreItems =(e) => {
        if (Math.abs(e.target.scrollHeight - (e.target.clientHeight + e.target.scrollTop)) < 5){
            console.log("condition met...");
            this.fetchData();
        }
    }

    async fetchData(){
        try{
            let skip = this.state.products.length;
            const prod = new ProductsAPI();
            let response = await prod.getProducts({limit: this.limit, skip: skip, select:"title,brand,descrition,thumbnail"});
            if (response.status == 200){
                console.log(response);
                let newProducts =response.data.products;

                if (this.state.products.length > 0){
                    let tmp = this.state.products;
                    tmp = tmp.concat(newProducts);
                    this.setState({products: tmp})
                }else{
                    this.setState({products: newProducts})
                }
            }
        }catch(err){
            console.log(err);
        }
        
    }

  render() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "90vh" }}>
            <div style={{ alignItems: "flex-start", width: "100%", overflowY: "scroll" }} onScroll={(e) => this.loadMoreItems(e)}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {this.state.products.map((e,i) => (
                        <div>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={e.thumbnail} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={e.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {e.brand}
                                            </Typography>
                                            {e.descrition}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                    <Divider variant="inset" component="li" />
                </List>
            </div>
            <div style={{display: "flex", flexDirection:"row", flex: "1", width: "100%"}}>
                <div style={{ flex: "1", margin: "10px", paddingTop: "10px" }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                    />
                </div>
                <div style={{margin: "10px"}}>>
                    <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                </div>
            </div>   
        </div>
    )
  }
}

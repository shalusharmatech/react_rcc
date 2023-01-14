import React, { Component } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";

import * as productUtils from "./ProductUtils";

export default class Products extends Component {
  constructor() {
    super();

    this.count = 0;
    this.limit = 12;

    this.state = {
      products: [],
      totalPages: 0,
    };
  }

  renderProducts = (pagenumber) => {
    this.fetchData(pagenumber);
  };

  fetchData = async (pagenumber) => {
    const result = await productUtils.getProductsData(pagenumber, this.limit);
    console.log(result);
    this.setState({ products: result.products, totalPages: result.totalPages });
  };

  componentDidMount = () => {
    if (this.count == 0) {
      this.fetchData(1);
    }
    this.count = 1;
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }} data-testid="list-products-id">
          {this.state.products.map((e, i) => (
            <div key={i}>
              <ListItem alignItems="flex-start" data-testid="list-items-id">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={e.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={e.brand}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {e.title}
                      </Typography>
                      {e.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
        <Pagination
          count={this.state.totalPages}
          color="primary"
          onChange={(e) => this.renderProducts(e.target.textContent)}
          data-testid="pagination-id"
        ></Pagination>
      </div>
    );
  }
}

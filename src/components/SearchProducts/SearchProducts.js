import React, { Component } from 'react'
import SearchProductsAPI from './SearchProductsAPI'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Navigate } from 'react-router-dom';

export default class SearchProducts extends Component {

    constructor(){
        super();

        this.tmp = []
        this.productsArray = []

        this.state ={
            productText : [],
            products: [],
            redirect: false
        }

        this.selectedProduct = {};
        this.redirectUrl = "/display";
    }

    async fetchData(searchText){
        try{
            const search = new SearchProductsAPI();
            const response = await search.searchProducts({q:searchText });
            // console.log(response);
            if (response.status == 200){
                this.productsArray = response.data.products;
                this.tmp = []
                for (let i=0; i< this.productsArray.length; i++){
                    let data = this.productsArray[i].title.substring(0,25) + "| " + this.productsArray[i].description.substring(0,50) + "| " + this.productsArray[i].id
                    this.tmp.push(data);
                }
            }
            this.setState({productText : this.tmp});
            this.setState({products: this.productsArray });
        }catch(err){
            console.log(err);
        }
    }

    handleSelectedValue = (e,value) => {
        //console.log(value);
        //console.log(this.state.productText);
        let index = this.state.productText.indexOf(value);
        //console.log(index);
        // console.log(this.state.products[index]);
        this.selectedProduct = this.state.products[index];
        this.redirectUrl = "/display";
        this.setState({redirect: true});
        // this.setState({selectedProduct : this.state.products[index]});
        //console.log(this.selectedProduct);
        
    }

    handleSearch = (e) => {
        let searchText = e.target.value;
        if (searchText.length > 2){
            // console.log(searchText);
            this.fetchData(searchText);
        }
    }


  render() {
    if (this.state.redirect){
        console.log(this.redirectUrl);
        return (<Navigate to ={this.redirectUrl} />);
    }
    
    return (
      <div>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={this.state.productText}
            sx={{ width: 300 }}
            onChange={(e,value) => this.handleSelectedValue(e,value)}
            renderInput={(params) => <TextField {...params} label="Movie" onChange={e => this.handleSearch(e)}/>}
        />
      </div>
    )

  }
}

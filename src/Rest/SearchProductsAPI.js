import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../settings/Constants';

export default class SearchProductsAPI extends Component {
    constructor(){
        super();
    }

    async searchProducts(params){
        let response = await axios.get(API_URL + "/products/search",{params: params})
        return response;
    }
}

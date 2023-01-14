import axios from 'axios'
import React, { Component } from 'react'
import { API_URL } from "../../settings/Constants";

export default class ChatAPI extends Component {
    constructor() {
        super();
    }

    async getProducts(params){
        const response = await axios.get(API_URL + "/products", {params: params});
        return response;
    }
}

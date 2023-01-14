import AuthService from '../../settings/AuthUtils'
import { Navigate } from 'react-router-dom'
import React, { Component } from 'react'

export default class Logout extends Component {

    constructor(props){
        super(props);
        const auth = new AuthService();
        auth.logOut();
    }

  render() {
    return (
        <Navigate to="/" />
    )
  }
}


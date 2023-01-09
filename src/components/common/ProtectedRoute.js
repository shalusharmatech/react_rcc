import React, { Children, Component } from 'react'
import AuthService from '../../settings/AuthUtils'
import { Navigate } from 'react-router-dom';

export default class ProtectedRoute extends Component {
    constructor(props) {
        super(props)
        this.children = props.children;
        this.roles = props.roles;
        this.permissions = props.permissions;
    }


    render() {
        const auth = new AuthService();

        if (!auth.isAuthenticated()) {
            console.log("User not autheticated. Navigating to Login.");
            return <Navigate to="/" replace></Navigate>
        }


        let hasRequiredRole = false;

        this.roles.forEach(function (role) {
            if (auth.getUserRole().includes(role)) {
                hasRequiredRole = true;
            }
        });

        if (!hasRequiredRole) {
            console.log("User doesn't have required `ROLE` for this component, navigating to Login.");
            return <Navigate to="/" replace></Navigate>
        }

        
        let hasRequiredPermission = false;

        if (this.permissions.length === 0) {
            hasRequiredPermission = true;
        }

        this.permissions.forEach(function (permission) {
            if (auth.getUserPermission().includes(permission)) {
                hasRequiredPermission = true;
            }
        });
        
        if (!hasRequiredPermission) {
            console.log("User doesn't have required `PERMISSIONS` for this component, navigating to Login.");
            return <Navigate to="/" replace></Navigate>
        }

        console.log("User have required `ROLE` and `PERMISSIONS` for this component.");
        return this.children;
    }
}

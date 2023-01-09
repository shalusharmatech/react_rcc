// import React, { Children, Component } from 'react'
// import AuthService from '../../settings/AuthUtils'
// import { Navigate } from 'react-router-dom';

// export default class ProtectedRoute extends Component {
//   constructor(props){
//     super(props)
//     const auth = new AuthService();
//   }
  

//   if (!auth.isAuthenticated()){
//     console.log("User not autheticated");
//     <Navigate to ="/" replace></Navigate>
//   }

//   hasRequiredRole = false;

//   roles.forEach(function (role) {
//     if(auth.getUserRole().includes(role)){
//       hasRequiredRole = true;
//     }
//   });

//   if (!hasRequiredRole){
//     console.log("No Role");
//     <Navigate to="/" replace></Navigate>
//   }

//   hasRequiredPermission = false;

//   if (permissions.length === 0){
//     hasRequiredPermission = true;
//   }

//   permissions.forEach(function(permission){
//     if(auth.getUserPermission().includes(permission)){
//       hasRequiredPermission = true;
//     }
//   }

//   return children;
// }

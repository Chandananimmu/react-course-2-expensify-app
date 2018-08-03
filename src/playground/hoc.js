import React from "react";
import ReactDOM from "react-dom";
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is from:{props.info}</p>
  </div>
);
const WithAdminWarning=(WrappedComponent)=>{
  return(props)=>(
<div>{props.isAdmin&&<p> This is from Admin</p>}
<WrappedComponent {...props}/></div>);
}
const WithAuthentication=(WrappedText)=>{
  return(props)=>(
    <div>{props.isAuth?<WrappedText {...props}/>:<p>Please login</p>}</div>
  );
}
const Admin=WithAdminWarning(Info);
const Auth=WithAuthentication(Info);
//ReactDOM.render(<Admin isAdmin={false} info="INFO" />, document.getElementById("app"));
ReactDOM.render(<Auth isAuth={false} info="INFO" />, document.getElementById("app"));
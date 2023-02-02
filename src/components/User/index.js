import React from "react";
import "./user.css";
import Header from "../header";
import {Navigate } from "react-router-dom";

function User() {
  
  let isAuthenticated = localStorage.getItem("isLogin"); 
  return (
    <>
    {isAuthenticated ? (   
       <div>
      <Header login={true} />
    </div>) : <> {<Navigate to="/"/>} </>}
    </>

  );
}

export default User;

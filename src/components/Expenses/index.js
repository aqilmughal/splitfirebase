import React, { useEffect} from "react";
import Header from "../header";
import "./expense.css";
import Button from "@mui/material/Button";
import BasicModal from "../modal";
import {Navigate, useNavigate } from "react-router-dom";

function Expense() {

  const navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isLogin"); 

  return (
    <>
    {isAuthenticated ? (    
    <>
      <Header login={true} />
      <div className="main_container">
        <header className="header_container">
          <h3>Dashboard</h3>
          <div style={{ display: "flex" }}>
            <BasicModal />
            {/* <Button variant="contained" style={{ backgroundColor: "#48be9d" }}>
              settle up
            </Button> */}
          </div>
        </header>
        <div className="header_content">
          <img
            src="https://assets.splitwise.com/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png"
            alt="lo"
          />
          <div className="text_container">
            <h3> Welcome to Splitwise!</h3>
            <p>
              Splitwise helps you split bills with friends. <br />
              <br />
              Click “Add an expense” above to get started, or invite some
              friends first!
            </p>
            {/* <Button
              variant="contained"
              style={{ backgroundColor: "#ff652f", marginRight: 5 }}
            >
              Add friends on expense
            </Button> */}
          </div>
        </div>
      </div>
    </>):
    <> { <Navigate to="/" />} </>}  </>
  );
}

export default Expense;

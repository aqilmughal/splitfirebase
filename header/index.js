import React from "react";
import "./header.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = ({ login }) => {
  const navigate = useNavigate();
  const handleRoute = () => navigate("/expense");

  const onHandleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");

    navigate("/")
  }

  return (
    <header className="main_header">
      <img
        id="logo"
        src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg"
        alt="logo"
        width={100}
        height={100}
      />
      <div>
        {!login ? (
          <>
            <div
              variant="text"
              style={{ color: "white" }}
            >
              
            </div>
          </>
        ) : (
          <>
            {/* <Button
              variant="text"
              style={{ color: "white" }}
              onClick={() => navigate("/user")}
            >
              User
            </Button> */}
            {/* <Button
              variant="text"
              style={{ color: "white" }}
              onClick={() => navigate("/expense")}
            >
              Add Expense
            </Button> */}
            <Button
              variant="contained"
              style={{ backgroundColor: "#48be9d" }}
              onClick={() => onHandleSignOut()}
            >
              SignOut
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./Signin.css";
import Header from "../header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function SignIn() {
  
  let isAuthenticated = localStorage.getItem("isLogin"); 

  const navigate = useNavigate();
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const [errorMsg, setErrorMsg] = useState(" ");

  const handlesubmission = () => {

    if (!values.Email || !values.Password) {

      setErrorMsg("Please fill both Email and Password");

    }else if (values.Email || values.Password) {

      signInWithEmailAndPassword(auth, values.Email, values.Password)
      .then((userCredential) => {
        localStorage.setItem("accessToken", userCredential.user.accessToken);
        localStorage.setItem("isLogin", true);
        navigate("/expense");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      setErrorMsg(errorMessage);
        console.log(errorCode, errorMessage);
})
        };

      }
    return (
      <>
      {!isAuthenticated ? (    
          <>
        <Header login={false} />
        <div className="sign_container">
          <Card sx={{ width: "40%", maxHeight: 250, marginTop: 20 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, Email: event.target.value }))
                }
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ marginBottom: 20 }}
              />
              <TextField
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, Password: event.target.value }))
                }
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </CardContent>
            <CardActions>
              <b>{errorMsg}</b>
              <Button
                size="small"
                variant="text"
                style={{ color: "#48be9d" }}
                onClick={ () => handlesubmission()}
              >Login  
                {/* <h2>
                  {" "}
                  {props.name ? "Welcome - $ {props.name}" : "Login"}
                </h2> */}
              </Button>

              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "#48be9d" }}
              >
                SignUp
              </Button>
            </CardActions>
          </Card>
        </div>
        </>) : <>
        {<Navigate to={"/expense"}/>}
        </>}
      </>
    );
  };

// }
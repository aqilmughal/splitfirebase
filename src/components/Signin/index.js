import React, { useState } from "react";
import "./Signin.css";
import Header from "../header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function SignIn() {
  const navigate = useNavigate();
  const handleRoute = () => navigate("/");
  console.log(navigate);
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const [errorMsg, setErrorMsg] = useState(" ");

  const handlesubmission = () => {
    if (!values.Email || !values.Password) {
      setErrorMsg("Please fill both Email and Password");}
     else if (values.Email || values.Password) {
      return (handleRoute);
        };
      signInWithEmailAndPassword(auth, values.Email, values.Password)
        .then((userCredential) => {
          // const user = userCredential.user;
          return navigate("/");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  })
      }
    return (
      <>
        <Header login={false} />
        <div className="sign_container">
          <Card sx={{ width: "40%", maxHeight: 250, marginTop: 20 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ marginBottom: 20 }}
              />
              <TextField
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
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
                onClick={ () => {handlesubmission(); handleRoute();}   }
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
                onClick={handleRoute}
              >
                SignUp
              </Button>
            </CardActions>
          </Card>
        </div>
      </>
    );
  };

// }
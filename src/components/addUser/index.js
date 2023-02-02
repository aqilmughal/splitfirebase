import React , { useState }from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// import { Email } from "firebase/auth";
// import { auth } from "./Signin/firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
};

export default function UserModal({ mail, setMail }) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const handleSave = () => {
    setMail([...mail,text]);
    handleClose();
  };
  

  return (
    <div>
      <Button
        size="small"
        variant="text"
        style={{ color: "#48be9d" }}
        onClick={handleOpen}
      >
        Add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => setText(event.target.value)}
            style={{ width: "100%", marginBottom: 5 }}
          />
         <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#48be9d" }}
            onClick={handleSave}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

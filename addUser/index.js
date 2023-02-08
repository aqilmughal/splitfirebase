import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { database } from "../Signin/firebase";
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
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    console.log(email)
    const domeMail=email;
    if(email.indexOf(text) ===-1){
      alert("User Does not Exist")
      return;
    }
    setMail([...mail, text]);
    handleClose();
  };
  useEffect(() => {
    const readRef = ref(database, "/");
    onValue(readRef, (snap) => {
      const data = snap.val();
      setEmail(data.emails);
    });
  }, []);
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

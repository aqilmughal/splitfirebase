import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { ListItemButton, Typography } from "@mui/material";
import UserModal from "../addUser";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { itemList } from "./constant";
import Report from "../report ";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: 0,
  display: "flex",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [mail, setMail] = React.useState([]);
  const [openCat, setOpenCat] = React.useState(false);
  const [btnImage, setBtnImage] = React.useState(itemList[0]);
  const [inputValue, setInputValue] = React.useState({});

  const date = new Date().toLocaleDateString("en-US");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (ev) => {
    setBtnImage(ev);
  };
  function handleUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) => {};
    };
    input.click();
  }
  const handleChange = (ev) => {
    setInputValue({ ...inputValue, [ev.target.name]: ev.target.value });
  };
  const handleSave = () => {
    let value = inputValue;
    value.emails = mail;
    setInputValue({ ...value });
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ backgroundColor: "#ff652f", marginRight: 5 }}
      >
        Add an expense
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <Card>
            <div
              className="modal_header"
              style={{
                display: "flex",
                background: "#48be9d",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 5,
              }}
            >
              <p>Add an Expense</p>
              <button
                style={{ border: "none", borderRadius: "20px", height: "20px" }}
                onClick={handleClose}
              >
                x
              </button>
            </div>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  {/* <Typography variant="p" component="p" sx={{ width: "150px" }}>
                    with you and
                  </Typography> */}
                  <UserModal setMail={setMail} mail={mail} />
                </div>
                <TextField
                  sx={{ width: "100%" }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Enter name or email address"
                  value={mail}
                />
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenCat(!openCat)}
                  sx={{ padding: 0 }}
                >
                  <img
                    src={btnImage?.image}
                    alt={btnImage?.name}
                    width={70}
                    height={60}
                  />
                </Button>
                <div style={{ marginLeft: 5 }}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    variant="standard"
                    placeholder="Enter description"
                    name="des"
                    onChange={(event) => handleChange(event)}
                    value={inputValue?.des}
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    variant="standard"
                    placeholder="$ 0.00"
                    name="value"
                    onChange={(event) => handleChange(event)}
                    value={inputValue?.value}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "35px",
                }}
              >
                <button
                  style={{
                    border: "none",
                    borderRadius: "15px",
                    width: "150px",
                    padding: "5px",
                  }}
                >
                  {date}
                </button>
                <input type="file"/>
              </div>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button size="small" variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              {/* <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "#48be9d" }}
                onClick={handleSave}
              >
                Save
              </Button> */}
              <Report handleSave={handleSave} inputValue={inputValue}/>
            </CardActions>
          </Card>
          {openCat ? (
            <Card sx={{ marginLeft: 2 }}>
              <div
                className="modal_header"
                style={{
                  display: "flex",
                  background: "#48be9d",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <p>Choose a catogary</p>
                <button
                  style={{
                    border: "none",
                    borderRadius: "20px",
                    height: "20px",
                  }}
                  onClick={() => setOpenCat(false)}
                >
                  x
                </button>
              </div>
              <List
                sx={{
                  width: 260,
                }}
              >
                {itemList?.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemButton onClick={() => handleClick(item)}>
                        <ListItemText primary={item?.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}

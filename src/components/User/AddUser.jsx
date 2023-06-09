import React, { useState } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { addUser } from "../../service/api";
import { useNavigate } from "react-router-dom";
import "./User.css";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const [success, setSuccess] = useState(false);
  const { name, username, email, phone } = user;

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    setSuccess(true);
    navigate("/all");
  };

  return (
    <section className="container">
      <Box sx={{ minWidth: 650 }}>
        <Typography
          variant="body2"
          component={"div"}
          sx={{ fontSize: 20, fontWeight: "bold" }}
          mb={4}
        >
          Add User Details
        </Typography>
        {success && (
          <Typography component={"div"} className="success">
            {"User successfully registered."}
          </Typography>
        )}
        <Card variant="outlined" className="card">
          <CardContent>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <br />
              <InputLabel>Name</InputLabel>
              <Input
                onChange={(e) => onValueChange(e)}
                name="name"
                value={name}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <br />
              <InputLabel>User Name</InputLabel>
              <Input
                onChange={(e) => onValueChange(e)}
                name="username"
                value={username}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <br />
              <InputLabel>Email address</InputLabel>
              <Input
                onChange={(e) => onValueChange(e)}
                name="email"
                value={email}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <br />
              <InputLabel>Phone Number</InputLabel>
              <Input
                onChange={(e) => onValueChange(e)}
                name="phone"
                value={phone}
              />
            </FormControl>
            <Box my={3}>
              <Button
                variant="contained"
                onClick={() => addUserDetails()}
                color="primary"
                align="center"
              >
                Add User
              </Button>
              <Button
                onClick={() => navigate("/all")}
                variant="contained"
                color="secondary"
                align="center"
                style={{ margin: "0px 20px" }}
              >
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
};

export default AddUser;

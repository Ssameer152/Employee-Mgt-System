import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  CardContent,
  Button,
} from "@mui/material";
import { editUser, getallUsers } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import "./User.css";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  });

  const loadUserData = async () => {
    const response = await getallUsers(id);
    setUser(response.data);
  };

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  return (
    <section className="container">
      <Box my={5}>
        <Typography
          variant="body2"
          component={"div"}
          sx={{ fontSize: 20, fontWeight: "bold" }}
          mb={4}
        >
          Update User Details
        </Typography>
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
                onClick={() => editUserDetails()}
                color="primary"
                align="center"
              >
                Update User
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

export default EditUser;

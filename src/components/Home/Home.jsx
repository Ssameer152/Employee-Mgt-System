import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const login = JSON.parse(localStorage.getItem("userLogin"));
  const logout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management System
          </Typography>
          {login && (
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to={"/addUser"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add User
              </Link>
            </Button>
          )}
          {login && (
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to={"/editUser/:id"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Edit User
              </Link>
            </Button>
          )}
          {!login && (
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Login
              </Link>
            </Button>
          )}
          {login && (
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "bold",
              }}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Signup
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

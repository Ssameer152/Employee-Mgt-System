import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = [];
    let user = values;
    try {
      if (localStorage.getItem("user")) {
        users = JSON.parse(localStorage.getItem("user") || "");
      } else {
        users = [];
      }
      const duplicate = users.find((em) => em.email);

      if (duplicate && duplicate.email === values.email) {
        setError(true);
      }
      user.id = users.length + 1;
      users.push(user);
      localStorage.setItem("user", JSON.stringify(users));
      setSuccess(true);
      setError(false);
      resetForm();
    } catch (err) {
      setError(true);
    }
  };

  const resetForm = () => {
    setValues({
      username: "",
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    resetForm();
  }, []);

  return (
    <section className={styles.container}>
      <Box sx={{ minWidth: 650 }}>
        <Card variant="outlined" className={styles.card}>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography
                variant="body2"
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                SIGN UP
              </Typography>

              {error && (
                <Typography className={styles.error}>
                  {"Failed to register user, email already exists"}
                </Typography>
              )}
              {success && (
                <Typography className={styles.success}>
                  {"User successfully registered."}
                </Typography>
              )}
              <Typography variant="body2">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <br />
                  <InputLabel htmlFor="standard-adornment-username">
                    Username
                  </InputLabel>
                  <Input
                    id="standard-adornment-username"
                    type="text"
                    name="username"
                    value={values.username}
                    required
                    onChange={handleChange}
                  />
                </FormControl>
                <br />
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <br />
                  <InputLabel htmlFor="standard-adornment-email">
                    Email
                  </InputLabel>
                  <Input
                    id="standard-adornment-email"
                    type="email"
                    name="email"
                    value={values.email}
                    required
                    onChange={handleChange}
                  />
                </FormControl>
                <br />
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <br />
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </FormControl>
              </Typography>
            </CardContent>
            <CardActions className={styles.cardAction}>
              <Button
                className={styles.btn}
                variant="contained"
                size="small"
                type="submit"
              >
                Register
              </Button>

              <p className={styles}>
                Already have an account then please{" "}
                <Link to="/login">Login</Link> yourself
              </p>
            </CardActions>
          </form>
        </Card>
      </Box>
    </section>
  );
};

export default Signup;

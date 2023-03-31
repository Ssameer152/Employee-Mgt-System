import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  Input,
  InputLabel,
  CardActions,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("user"));

    const useremail = users.find((usr) => usr.email);
    const userpassword = users.find((usr) => usr.password);

    if (
      useremail.email !== null &&
      useremail.email === values.email &&
      userpassword.password !== null &&
      userpassword.password === values.password
    ) {
      setSuccess(true);
      localStorage.setItem("userLogin", true);
      navigate("/employee");
      window.location.reload();
    } else {
      setError(true);
    }
  };

  return (
    <section className={styles.container}>
      <Box sx={{ minWidth: 650 }}>
        <Card variant="outlined" className={styles.card}>
          <form onSubmit={handleLogin}>
            <CardContent>
              <Typography
                component={"div"}
                variant="body2"
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                LOGIN
              </Typography>
              {error && (
                <Typography component={"div"} className={styles.error}>
                  {"Invalid username or password"}
                </Typography>
              )}
              {success && (
                <Typography component={"div"} className={styles.success}>
                  {"successfully logged in"}
                </Typography>
              )}
              <Typography component={"div"} variant="body2">
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
                    onChange={handleChange}
                    required
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
                    values={values.password}
                    onChange={handleChange}
                  />
                </FormControl>
              </Typography>
            </CardContent>
            <CardActions className={styles.cardAction}>
              <Button
                className={styles.btn}
                variant="contained"
                size="large"
                type="submit"
              >
                Login
              </Button>
              <p className={styles}>
                Don'thave an account then please{" "}
                <Link to="/register">Register</Link> yourself
              </p>
            </CardActions>
          </form>
        </Card>
      </Box>
    </section>
  );
};

export default Login;

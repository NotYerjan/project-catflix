import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Button,
  FormLabel,
  Typography,
  InputAdornment,
  IconButton,
  formLabelClasses,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const users = [
    {
      id: 1,
      name: "Sama Jabri",
      password: "s",
    },
    {
      id: 2,
      name: "a",
      password: "a",
    },
    {
      id: 3,
      name: "alvaroDixio",
      password: "aa",
    },
  ];

  const doesUserExist = () => {
    const filteredUsers = users.filter((user) => user.name === username);
    return filteredUsers.length === 0 ? false : true;
  };

  const isUserDataCorrect = () => {
    const filteredUsers = users.filter(
      (user) => user.name === username && user.password === password
    );
    return filteredUsers.length === 0 ? false : true;
  };

  const handleUserLogin = () =>
    doesUserExist()
      ? isUserDataCorrect()
        ? setAuth(true) && setErrorMessage("")
        : setErrorMessage("Username or password incorrect")
      : setErrorMessage("User data not found, try signing up first");

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "1px 1px 10px -2px #0d345a",
          borderRadius: "0.2rem",
          width: "20rem",
          height: "26rem",
        }}
      >
        <FormLabel
          style={{
            color: "#1976d2",
            fontSize: "2rem",
            marginBottom: "1.8rem",
          }}
        >
          Log In
        </FormLabel>

        <FormHelperText error id="username">
          {errorMessage}
        </FormHelperText>

        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "80.5%" }}
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setShowPassword((show) => !show)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          disabled={!(username && password)}
          variant="contained"
          style={{ marginTop: "2rem", width: "80%" }}
          onClick={handleUserLogin}
        >
          <Link
            to={auth ? "/" : "/login"}
            style={{ width: "100%", color: "inherit", textDecoration: "none" }}
          >
            Log In
          </Link>
        </Button>

        <Typography variant="body2" color="text.secondary">
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </Typography>
      </FormControl>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  TextField,
  Button,
  FormLabel,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useUserStore from "../store/storeUsers";

const Login = () => {
  // Form Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Authentication Variables
  const [auth, setAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Functions from store
  const users = useUserStore((state) => state.users);
  const loginUser = useUserStore((state) => state.loginUser);

  const doesUserExist = () => {
    const filteredUsers = users.filter((user) => user.username === username);
    return filteredUsers.length === 0 ? false : true;
  };

  // User exists ? return data : return undefined
  const userData = users.find(
    (user) => user.username === username && user.password === password
  );

  const handleUserLogin = () => {
    if (doesUserExist()) {
      if (userData) {
        setAuth(true);
        setErrorMessage("");

        loginUser(userData.id);

        navigate("/");
      } else {
        setErrorMessage("Username or password incorrect");
      }
    } else {
      setErrorMessage("User data not found, try signing up first");
    }
  };

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
          }}
        >
          Log In
        </FormLabel>

        {
          <Alert
            sx={{
              marginBottom: "0.5rem",
              visibility: errorMessage ? "visible" : "hidden",
            }}
            severity="error"
          >
            {errorMessage}
          </Alert>
        }

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
                  {showPassword ? <FiEyeOff /> : <FiEye />}
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
          Log In
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

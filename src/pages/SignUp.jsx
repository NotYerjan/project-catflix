import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  TextField,
  Button,
  FormLabel,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const users = [
    {
      id: 1,
      name: "Sama Jabri",
    },
    {
      id: 2,
      name: "a",
    },
    {
      id: 3,
      name: "alvaroDixio",
    },
  ];

  const check = () => {
    const findMatchUser = users.map((user) =>
      user.name === username ? false : null
    );
    const matchedUsers = findMatchUser.filter((user) => user === false);
    return matchedUsers.length === 0 ? true : false;
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
          height: "29rem",
        }}
      >
        <FormLabel
          style={{
            color: "#1976d2",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          Sign Up
        </FormLabel>
        <TextField
          color={check() ? "primary" : "error"}
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "80.5%" }}
        />
        <FormHelperText
          id="username"
          style={{
            color: `${check() ? "#1976d2" : "#d32f2f"}`,
            margin: "-0.5rem",
          }}
        >
          {username
            ? check()
              ? "Valid username"
              : "Username already taken"
            : ""}
        </FormHelperText>

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          color={password === confirmPassword ? "primary" : "error"}
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

        <TextField
          id="confirm-password"
          label="Confirm Password"
          variant="outlined"
          color={password === confirmPassword ? "primary" : "error"}
          value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setShowConfirmPassword((show) => !show)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          disabled={!(username && password && confirmPassword)}
          variant="contained"
          style={{ marginTop: "1.5rem", width: "80%" }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Button>

        <Typography variant="body2" color="text.secondary">
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </FormControl>
    </Container>
  );
};

export default SignUp;

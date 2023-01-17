import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  FormLabel,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../store/storeUsers";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const SignUp = () => {
  // Form Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Authentication Variables
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Functions from store
  const users = useUserStore((state) => state.users);
  const signUpUser = useUserStore((state) => state.createAndLoginUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const doesUserNameExist = users.find((user) =>
    user.username === username ? true : false
  );

  const handleUserSignUp = (e) => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      username: username,
      password: password,
    };

    signUpUser(newUser);
    navigate(-1) || navigate("/");
  };

  useEffect(() => {
    if (!username) {
      setError("empty field");
    } else if (doesUserNameExist) {
      setError("Username is already taken");
    } else if (!(password && confirmPassword)) {
      setError("empty field");
    } else if (password !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError("");
    }
  }, [username, password, confirmPassword, doesUserNameExist]);

  if (isLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <form
      onSubmit={(e) => handleUserSignUp(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 8,
        width: "100%",
      }}
    >
      <FormLabel sx={{ fontSize: "2rem" }}>Sign Up</FormLabel>

      {
        <Alert
          sx={{
            marginBottom: "0.5rem",
            visibility: error && error !== "empty field" ? "visible" : "hidden",
          }}
          severity="error"
        >
          {error}
        </Alert>
      }

      <TextField
        color={doesUserNameExist ? "error" : "primary"}
        id="username"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

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
        disabled={Boolean(error)}
        variant="contained"
        type="submit"
        sx={{ marginY: 2 }}
      >
        Sign Up
      </Button>

      <Typography variant="body2" color="text.secondary">
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </form>
  );
};

export default SignUp;

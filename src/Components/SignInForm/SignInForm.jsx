import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
  const lnameHandler = (e) => {
    setLname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const showErrorMsg = (msg) => {
    setError(msg);
  };

  const showSuccessMsg = (msg) => {
    setSuccessMsg(msg);
  };

  const clearError = () => {
    setTimeout(() => {
      showErrorMsg(" ");
    }, 2500);
  };

  const navToHome = useNavigate();

  const isFormValid = () => {
    if (!(fname || lname || email || password)) {
      showErrorMsg("All fields are mandatory");
      clearError();
      return false;
    } else if (!fname) {
      showErrorMsg("Please enter first name");
      clearError();
      return false;
    } else if (!lname) {
      showErrorMsg("Please enter last name");
      clearError();
      return false;
    } else if (!email) {
      showErrorMsg("Please enter email");
      clearError();
      return false;
    } else if (!email.match(emailPattern)) {
      showErrorMsg("Please enter valid email");
      clearError();
      return false;
    } else if (!password) {
      showErrorMsg("Please enter password");
      clearError();
      return false;
    } else if (!confirmPassword) {
      showErrorMsg("Please confirm password");
      clearError();
      return false;
    } else if (password !== confirmPassword) {
      showErrorMsg("Password does not match");
      clearError();
      return false;
    } else {
      showSuccessMsg("Successfull logged in, navigating to Home Page");
      setTimeout(() => {
        navToHome("/");
      }, 2000);
      return true;
    }
  };

  const submitHandler = () => {
    if (!isFormValid()) {
      return false;
    }
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "whitesmoke",
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
          m: "auto",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            m: "auto",
            mt: { xs: 8, lg: 16 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "600" }}
          >
            Sign In
          </Typography>
          <TextField
            onChange={fnameHandler}
            value={fname}
            variant="outlined"
            label="First Name"
            sx={{ my: 2 }}
          />
          <TextField
            onChange={lnameHandler}
            value={lname}
            variant="outlined"
            label="Last Name"
            sx={{ my: 2 }}
          />
          <TextField
            onChange={emailHandler}
            value={email}
            variant="outlined"
            label="Email"
            sx={{ my: 2 }}
          />
          <TextField
            onChange={passwordHandler}
            value={password}
            variant="outlined"
            label="Password"
            sx={{ my: 2 }}
          />
          <TextField
            onChange={confirmPasswordHandler}
            value={confirmPassword}
            variant="outlined"
            label="Confirm Password"
            sx={{ my: 2 }}
          />
          <Typography
            sx={{
              bgcolor: "#ff4d2f",
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            {error}
          </Typography>
          <Typography
            sx={{
              bgcolor: "#ff4d2f",
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            {successMsg}
          </Typography>
          <Button
            variant="contained"
            onClick={submitHandler}
            sx={{ my: 2, bgcolor: "#ff4d2f" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};

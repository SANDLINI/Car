import React, {  useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };


  const showErrorMsg = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError(" ");
    }, 3000);
  };

  const showSuccessMsg = (msg) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess(" ");
    }, 3000);
  };

  const isFormValid = () => {
    if (!(name || email || message)) {
      showErrorMsg("All fields are mandatory");

      return false;
    } else if (!name) {
      showErrorMsg("Name cannot be empty");
      return false;
    } else if (!email) {
      showErrorMsg("Email is required");
      return false;
    } else if (!message) {
      showErrorMsg("Please write your message");
      return false;
    } else {
      showSuccessMsg("Thank you for your feedback");
      return true;
    }
  };

  const submitHander = () => {
    if (!isFormValid()) {
      return false;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Need Additional Information ?
          </Typography>
          <Typography variant="h6">
            Email : www.support@carrental.com
          </Typography>
          <Typography variant="h6"> Phone : (+91) 123 456 7890</Typography>
          <Typography variant="h6">
            Address : Haridwar Uttarakhand (India)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{fontWeight:'600'}}>
            How we can improve ? Fill the form and tell us how we can improve.
          </Typography>
          <TextField
            onChange={nameHandler}
            value={name}
            variant="outlined"
            label="Full Name"
            sx={{ width: "100%", my: 3 }}
          />
          <TextField
            onChange={emailHandler}
            value={email}
            variant="outlined"
            label="Email"
            sx={{ width: "100%", my: 3 }}
          />
          <TextField
            onChange={messageHandler}
            value={message}
            variant="outlined"
            label="Message"
            multiline rows={4}
            sx={{ width: "100%", mt: 3 }}
          />
          <Box sx={{ bgcolor: "#ff4d2f" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "white" }}
            >
              {error}
            </Typography>
          </Box>
          <Box sx={{ bgcolor: "#ff4d2f" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "white" }}
            >
              {success}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={submitHander}
            sx={{ mt: 3, bgcolor: "#ff4d2f" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

export const Footer = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccessMsg] = useState("");

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const errorMessage = (msg) => {
    setError(msg);
  };

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 2500);
  };

  const isFormValid = () => {
    if (!input) {
      errorMessage("Please enter email");
      clearError();
      return false;
    }
    if (!input.match(emailPattern)) {
      errorMessage("Please enter valid email address");
      clearError();
      return false;
    } else {
      setSuccessMsg("Subscribed for NewsLetter");
      setInput(" ");
      setTimeout(() => {
        setSuccessMsg("");
      }, 2500);

      return true;
    }
  };

  const submitHandler = () => {
    if (!isFormValid()) {
      return false;
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        m: "auto",
        mt: 20,
        flexWrap: "wrap",
        position: "relative",
        mb: { xs: 7 },
        display: "flex",
        justifyContent: { sm: "center" },
        gap: { xs: "15px", sm: "10px", md: "0" },
        textAlign: { xs: "center", md: "space-between" },
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "40%", md: "25%" }, mb: { xs: 3 } }}>
        <Typography variant="h5">
          <span style={{ fontWeight: "600" }}>CAR</span> RENTAL
        </Typography>
        <Typography sx={{ color: "gray" }}>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </Typography>
        <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
          (123) -456-789
        </Typography>
        <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
          carrental@gmail.com
        </Typography>
        <Typography sx={{ fontWeight: "100" }}>
          Design by XpeedStudio
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "40%", md: "20%" }, mb: { xs: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: "700", letterSpacing: 1 }}>
          COMPANY
        </Typography>
        <Typography sx={{ py: 1 }}>Delhi</Typography>
        <Typography sx={{ pb: 1 }}>Careers</Typography>
        <Typography sx={{ pb: 1 }}>Mobile</Typography>
        <Typography sx={{ pb: 1 }}>Blog</Typography>
        <Typography sx={{ pb: 1 }}>How we Work</Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "40%", md: "20%" }, mb: { xs: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          WORKING HOURS
        </Typography>
        <Typography sx={{ py: 1 }}>Mon-Fri 9:00 AM - 9:00 PM</Typography>
        <Typography sx={{ pb: 1 }}>Sat 9:00 AM - 07:00 PM </Typography>
        <Typography sx={{ pb: 1 }}>Sunday Closed</Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "40%", md: "25%" }, mb: { xs: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          SUBSCRIPTION
        </Typography>
        <Typography sx={{ py: 1 }}>
          Subscribe with your Email address for latest news & updates.
        </Typography>
        <Input
          sx={{ display: "block" }}
          placeholder="Enter Email Address"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Typography sx={{ fontWeight: "600" }}>{error}</Typography>
        <Typography sx={{ fontWeight: "600" }}>{success}</Typography>

        <Button
          onClick={submitHandler}
          variant="contained"
          sx={{ width: "100%", mt: 2, bgcolor: "#ff4d2f" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

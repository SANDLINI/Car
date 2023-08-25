import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./FAQs.module.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const FAQ = ({ Question, Answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%", md: "60%" },
        m: "auto",
        backgroundColor: " whitesmoke",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: "relative",
      }}
    >
      <Typography
        
        sx={{
          cursor: "pointer",
          width: "90%",
          px:2,
          mb: 4,
          py: 1,
        }}
        onClick={() => {
          setIsAnswerShowing((prev) => !prev);
        }}
      >
        {Question}
        {isAnswerShowing ? (
          <span className={styles.span}>
            <RemoveCircleOutlineIcon />
          </span>
        ) : (
          <span className={styles.span}>
            <AddCircleOutlineIcon />
          </span>
        )}
      </Typography>
      {isAnswerShowing && (
        <Typography
          sx={{
            mt: -4,
            px: { xs: 2, sm: 2, md: 4 },
            pb: 2,
            color: "gray",
          }}
        >
          {Answer}
        </Typography>
      )}
    </Box>
  );
};

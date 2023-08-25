import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import heroesImage from "../../Images/hero/heroes-bg.png";
import styles from "./Heroes.module.css";
export const Heroes = ({heading}) => {
  return (
    <>
      <Box sx={{width:'100%', mb:{xs:15, sm:28, md:33, lg:40}}}>
        <AppBar
          sx={{
            zIndex: -100,
            bgcolor: "transparent",
            boxShadow: "none",
            position: "absolute",
          }}
        >
          <img src={heroesImage} alt="heroesImage" className={styles.image} />
        </AppBar>
        <Typography variant="h5" sx={{ textAlign: "center", mt:{xs:9, lg:16}, fontWeight:'600' }}>{heading}</Typography>
      </Box>
    </>
  );
};

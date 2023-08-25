import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./AboutCompany.module.css";
import AboutImage from "../../Images/about/about-main.jpg";
import icon1 from "../../Images/about/icon1.png";
import icon2 from "../../Images/about/icon2.png";
import icon3 from "../../Images/about/icon3.png";
export const AboutCompany = () => {
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          mb: { xs: 10, md: 12, lg: 15 },
          display: "flex",
          width: { xs: "100%", lg: "80%" },
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: { xs: "98%", sm: "60%", md: "50%", lg: "35%" } }}>
          <img src={AboutImage} alt="" className={styles.image} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "98%", sm: "60%", md: "45%", lg: "40%" },
          }}
        >
          <Box sx={{}}>
            <Typography variant="h5" sx={{ fontWeight: "600", py: 1 }}>
              About Company
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "600", pb: 1 }}>
              You start the engine and your adventure begins
            </Typography>
            <Typography sx={{ color: "gray", pb: 3 }}>
              That said, we don't want to be remembered as just another Car
              Rental company. Our mission is to 'Make every Indian fall in love
              with Road Travel. Roaming on serpentine roads of India, where
              ancient mountains whisper tales of time and saree-clad silhouettes
              pirouette in marigold sunsets.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "33%" }}>
              <img src={icon1} alt="" />
              <Typography>
                <span className={styles.span}>20</span> Car Types
              </Typography>
            </Box>
            <Box sx={{ width: "33%" }}>
              <img src={icon2} alt="" />
              <Typography>
                <span className={styles.span}>85</span> Rental Outlets
              </Typography>
            </Box>
            <Box sx={{ width: "33%" }}>
              <img src={icon3} alt="" />
              <Typography>
                <span className={styles.span}>75</span> Repair Shops
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

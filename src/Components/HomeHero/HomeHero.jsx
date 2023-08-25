import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./HomeHero.module.css";
import heroBg from "../../Images/hero/hero-bg.png";
import mainCar from "../../Images/hero/main-car.png";
import { useNavigate } from "react-router-dom";

export const HomeHero = () => {
  const navToRentCar = useNavigate();
  const navToAbout = useNavigate();

  return (
    <>
      <Box className={styles.heroSection}>
        <img className={styles.bgImage} src={heroBg} alt="" />
        <Box className={styles.homeHero}>
          <Box
            className={styles.content}
            sx={{ width: { xs: "100%", md: "40%" } }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Plan your trip now
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Save <span className={styles.span}>big</span> with our car rental
            </Typography>
            <Typography sx={{ color: "gray", mt: 3 }}>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </Typography>
            <button
              className={styles.one}
              onClick={() => {
                navToRentCar("/RentCar");
              }}
            >
              Book Ride
            </button>
            <button
              className={styles.two}
              onClick={() => {
                navToAbout("./About");
              }}
            >
              Learn More
            </button>
          </Box>
          <Box
            className={styles.image}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img className={styles.mainCar} src={mainCar} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

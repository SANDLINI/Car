import React from "react";
import styles from "./Navbar.module.css";
import { AppBar, Box, Button } from "@mui/material";
import logo from "../../Images/logo/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const navLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "#ff4d2f" : "black",
    };
  };

  return (
    <>
      <AppBar sx={{bgcolor:'transparent',}}>
        <Box
          className={styles.navBarContainer}
          sx={{py:2,display: { xs: "none", md: "flex" } }}
        >
          <Box className={styles.logo}>
            <img src={logo} alt="" onClick={() => navigate("/")} />
          </Box>
          <Box className={styles.navlinkContainer}>
            <NavLink style={navLinkActive} className={styles.navlink} to={"/"}>
              Home
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navlink}
              to={"/About"}
            >
              About
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navlink}
              to={"/VehicleModels"}
            >
              Vehicle Models
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navlink}
              to={"/RentCar"}
            >
              Rent Car
            </NavLink>

            <NavLink
              style={navLinkActive}
              className={styles.navlink}
              to={"/Contact"}
            >
              Contact
            </NavLink>
          </Box>
       
            <Button

              onClick={() => navigate("/signIn")}
              variant="contained"
              sx={{ bgcolor: "#ff4d2f", mr:5,width:'120px', height: '45px' }}
            >
              Sign In
            </Button>
        </Box>
      </AppBar>
    </>
  );
};

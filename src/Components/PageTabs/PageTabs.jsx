import React from "react";
import styles from "./PageTabs.module.css";

import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const PageTabs = () => {
  const navLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "#ff4d2f" : "none",
    };
  };

  return (
    <>
      <AppBar
        className={styles.appBar}
        sx={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
          m: "auto",
          display: { xs: "block", md: "none" },
        }}
      >
        <Toolbar
          className={styles.toolBar}
          sx={{
            bgcolor: "black",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            minHeight: "45px",
          }}
        >
          <Box
            sx={{
              gap: "9px",
              py: 1,
              display: "flex",
              m: "auto",
              textDecoration: "none",
            }}
          >
            <NavLink className={styles.navLinks} style={navLinkActive} to={"/"}>
              Home
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/About"}
            >
              About
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/VehicleModels"}
            >
              Models
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/RentCar"}
            >
              Rent
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/Contact"}
            >
              Contact
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/SignIn"}
            >
              SignIn
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

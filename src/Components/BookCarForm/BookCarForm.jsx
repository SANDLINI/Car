import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./BookCarForm.module.css";
export const BookCarForm = () => {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const carTypeHandler = (e) => {
    setCarType(e.target.value);
  };
  const pickUpHandler = (e) => {
    setPickUp(e.target.value);
  };
  const dropOffHandler = (e) => {
    setDropOff(e.target.value);
  };
  const pickUpDateHandler = (e) => {
    setPickUpDate(e.target.value);
  };
  const dropOffDateHandler = (e) => {
    setDropOffDate(e.target.value);
  };

  const showErrorMsg = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError(" ");
    }, 2500);
  };

  const showSuccessMsg = (msg) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess(" ");
    }, 2500);
  };

  const isFormValid = () => {
    if (!(carType || pickUp || dropOff || pickUpDate || dropOffDate)) {
      showErrorMsg("All fields are required.");
      return false;
    } else if (!carType) {
      showErrorMsg("Please enter car type.");
      return false;
    } else if (!pickUp) {
      showErrorMsg("Please enter pick up location.");
      return false;
    } else if (pickUp === dropOff) {
      showErrorMsg(
        "Pick up location and drop off location cannot be same. Please enter two different locations."
      );
    } else if (!pickUpDate) {
      showErrorMsg("Please enter pick up date.");
    } else if (!dropOffDate) {
      showErrorMsg("Please enter drop off date.");
    } else if (dropOffDate < pickUpDate) {
      showErrorMsg("Pick up date should be earlier than drop off date.");
    } else {
      showSuccessMsg("Your booking has been successful.");
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
      <Box className={styles.main} sx={{ width: { xs: "100%", md: "85%" } }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", my: 4, fontWeight: 600, pt: 3 }}
        >
          Book a Car
        </Typography>
        <Box
          className={styles.form}
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: { xs: "center", lg: "space-between" },
            margin: { xs: "auto", lg: "40px" },
            pb: 10,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <label htmlFor="Select Car Type" className={styles.formLabel}>
              Select Your Car Type <span>*</span>
            </label>
            <select
              className={styles.formSelect}
              onChange={carTypeHandler}
              name="carType"
              value={carType}
            >
              <option> Select Your Car Type </option>
              <option value="Maruti Dzire">Maruti Dzire</option>
              <option value="VW Polo"> VW Polo</option>
              <option value="Toyota Innova"> Toyota Innova</option>
              <option value="BMW 320d"> BMW 320d</option>
              <option value="Mahindra Scorpio N"> Mahindra Scorpio N</option>
              <option value="Suzuki Ertiga">Suzuki Ertiga </option>
            </select>
          </Box>
          <Box>
            <label htmlFor="Pick Up" className={styles.formLabel}>
              Pick Up <span>*</span>
            </label>
            <select
              className={styles.formSelect}
              onChange={pickUpHandler}
              name="pickUp"
              value={pickUp}
            >
              <option>Select Your Pick Up Location</option>
              <option value="Dehradun"> Dehradun</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Rishikesh"> Rishikesh</option>
              <option value="Pauri Garhwal"> Pauri Garhwal</option>
              <option value="Rudraprayag"> Rudraprayag</option>
              <option value="KaranPrayag"> Karanprayag</option>
            </select>
          </Box>
          <Box>
            <label htmlFor="Drop-of" className={styles.formLabel}>
              Select Your Drop-off Location <span>*</span>
            </label>
            <select
              className={styles.formSelect}
              onChange={dropOffHandler}
              name="dropOff"
              value={dropOff}
            >
              <option> Select Your Car Type </option>
              <option value="Dehradun">Dehradun </option>
              <option value="Haridwar"> Haridwar</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Pauri Garhwal">Pauri Garhwal</option>
              <option value="Rudraprayag">Rudraprayag</option>
              <option value="KaranPrayag">KaranPrayag</option>
            </select>
          </Box>
          <Box>
            <label htmlFor="Date" className={styles.formLabel}>
              Pick Up <span>*</span>
            </label>
            <input
              type="date"
              className={styles.formInput}
              onChange={pickUpDateHandler}
              name="pickupDate"
              value={pickUpDate}
            />
          </Box>
          <Box>
            <label htmlFor="Date" className={styles.formLabel}>
              Drop Off <span>*</span>
            </label>
            <input
              type="date"
              className={styles.formInput}
              onChange={dropOffDateHandler}
              name="dropOffDate"
              value={dropOffDate}
            />
          </Box>
          <Box>
            <Button
              className={styles.formButton}
              onClick={submitHandler}
              variant="contained"
              sx={{ mt: { xs: 2, sm: 4.5 }, backgroundColor: "#ff4d2f" }}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Typography
          variant="h6"
          className={styles.error}
          sx={{ fontWeight: 600, color: "white" }}
        >
          {error}
        </Typography>
        <Typography
          variant="h6"
          className={styles.success}
          sx={{ fontWeight: 600, color: "white" }}
        >
          {success}
        </Typography>
      </Box>
    </>
  );
};

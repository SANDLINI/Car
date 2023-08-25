import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./ChooseCar.module.css";
import { CAR_DATA } from "../../cardata";
import { carImages } from "../../cardata";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export const ChooseCar = () => {
  const [loading, setLoading] = useState(false);

  const [changeTab, setChangeTab] = useState(0);

  const { name, price, mark, year, fuel, Ac, transmission } =
    CAR_DATA[changeTab];

  const [activeBtn, setActivebtn] = useState("btn0");
  const btnID = (id) => {
    setActivebtn(activeBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return activeBtn === id ? styles.colored : styles.btn;
  };

  const [carBox, setCarBox] = useState("");

  const { car1, car2, car3, car4, car5, car6 } = carImages[changeTab];

  const loaderStop = () => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const navtoRentCar = useNavigate();

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600}>
          Vehicle Models
        </Typography>
        <Typography variant="h3" fontWeight={600} sx={{ my: 2 }}>
          Our Rental Fleet
        </Typography>
        <Typography sx={{ color: "gray", maxWidth: "500px", m: "auto", my: 5 }}>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </Typography>
      </Box>
      <Box
        className={styles.tabContainer}
        sx={{
          gap: { xs: "15px", lg: "30px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "85%",
          m: "auto",
        }}
      >
        <Box
          className={styles.tabHeader}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "row", lg: "column" },
          }}
        >
          <button
            className={coloringButton("btn0")}
            onClick={() => {
              setChangeTab(0);
              btnID("btn0");
              setLoading(true);
              setCarBox(0);
              loaderStop();
            }}
          >
            Maruti Dzire
          </button>
          <button
            className={coloringButton("btn1")}
            onClick={() => {
              setChangeTab(1);
              btnID("btn1");
              setLoading(true);
              setCarBox(1);
              loaderStop();
            }}
          >
            VW Polo
          </button>
          <button
            className={coloringButton("btn2")}
            onClick={() => {
              setChangeTab(2);
              btnID("btn2");
              setLoading(true);
              setCarBox(2);
              loaderStop();
            }}
          >
            Totota Innova
          </button>
          <button
            className={coloringButton("btn3")}
            onClick={() => {
              setChangeTab(3);
              btnID("btn3");
              setLoading(true);
              setCarBox(3);
              loaderStop();
            }}
          >
            BMW 320d
          </button>
          <button
            className={coloringButton("btn4")}
            onClick={() => {
              setChangeTab(4);
              btnID("btn4");
              setLoading(true);
              setCarBox(4);
              loaderStop();
            }}
          >
            Mahindra Scorpio N
          </button>
          <button
            className={coloringButton("btn5")}
            onClick={() => {
              setChangeTab(5);
              btnID("btn5");
              setLoading(true);
              setCarBox(5);
              loaderStop();
            }}
          >
            Suzuki Ertiga
          </button>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "40%", lg: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {loading ? (
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#ff4d2f"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          ) : (
            <>
              <img className={styles.boxImage} src={car1} alt="" />
              <img className={styles.boxImage} src={car2} alt="" />
              <img className={styles.boxImage} src={car3} alt="" />
              <img className={styles.boxImage} src={car4} alt="" />
              <img className={styles.boxImage} src={car5} alt="" />
              <img className={styles.boxImage} src={car6} alt="" />
            </>
          )}
        </Box>

        <Box className={styles.tabContent} sx={{ my: 3 }}>
          <table>
            <tbody>
              <tr>
                <th>Price / Day</th>
                <td>{price}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Mark</th>
                <td>{mark}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{year}</td>
              </tr>
              <tr>
                <th>Fuel</th>
                <td>{fuel}</td>
              </tr>
              <tr>
                <th>Ac</th>
                <td>{Ac}</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>{transmission}</td>
              </tr>
            </tbody>
          </table>
          <Button
            onClick={() => navtoRentCar("/RentCar")}
            variant="contained"
            sx={{ bgcolor: "#ff4d2f", width: "100%", m: "auto" }}
          >
            Reserve Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

import React, { useState } from "react";
import { CAR_DATA } from "../../cardata";
import { Box } from "@mui/material";
import { VehicleCard } from "./VehicleCard";
export const Vehicles = () => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", lg: "80%" },
          mx: { xs: "auto" },
          mb: 15,
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {CAR_DATA.map(
          ({ car, name, price, mark, year, Ac, transmission, fuel }) => {
            return (
              <>
                <VehicleCard
                  car={car}
                  name={name}
                  price={price}
                  mark={mark}
                  year={year}
                  Ac={Ac}
                  transmission={transmission}
                  fuel={fuel}
                />
              </>
            );
          }
        )}
      </Box>
    </>
  );
};

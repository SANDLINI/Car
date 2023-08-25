import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const VehicleCard = ({
  car,
  name,
  price,
  mark,
  year,
  Ac,
  transmission,
  fuel,
}) => {

  const navToRentCar = useNavigate()


  return (
    <Box>
      <Card
        sx={{
          maxWidth: "350px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <CardMedia sx={{ width: 350, height: 200 }} image={car} />
        <CardContent>
          <Typography>Name :{name}</Typography>
          <Typography>Price :{price}</Typography>
          <Typography>Mark :{mark}</Typography>
          <Typography>Year :{year}</Typography>
          <Typography>Ac :{Ac}</Typography>
          <Typography>Transmission :{transmission}</Typography>
          <Typography>Fuel :{fuel}</Typography>
          <Button variant="contained" sx={{ bgcolor: "#ff4d2f", mt: 2 }} onClick={()=>{navToRentCar('/RentCar')}}>
            Book Ride
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

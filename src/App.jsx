import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { VehiclesModels } from "./Pages/VehicleModels/VehiclesModels";
import { Contact } from "./Pages/Contact/Contact";
import { SignIn } from "./Pages/SignIn/SignIn";
import { RentCar } from "./Pages/RentCar/RentCar";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/VehicleModels" element={<VehiclesModels />} />
        <Route path="/RentCar" element={<RentCar />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

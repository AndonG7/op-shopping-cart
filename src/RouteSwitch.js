import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import M4 from "./images/bmwm4.jpg";
import E63 from "./images/merce63.jpg";
import GLE53 from "./images/mercgle53.jpg";

const RouteSwitch = () => {
  const [cars, setCarss] = useState([
    {name: "BMW M4 Competition", hp: 510, acs: 3.5, price: 79990, src:M4, alt:"BMW M4 Competition", id:0},
    {name: "Mercedes-Benz E63 AMG", hp: 612, acs: 3.3, price: 112800, src:E63, alt:"Mercedes-Benz E63 AMG", id:1},
    {name: "Mercedes-Benz GLE53 AMG", hp: 450, acs: 5.3, price: 74500, src:GLE53, alt:"Mercedes-Benz GLE53 AMG", id:2},
  ]);

  const [selectedCars, setSelectedCars] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  function addCar(car) {
    let contains = false;

    //Check if a car is added
    for (let i=0; i<selectedCars.length; i++) {
      if (car.name === selectedCars[i].name) {
        contains = true;
      }
    }

    if (!contains) {
      const newArr = [{name: car.name, price: car.price, src: car.src, alt: car.alt}];
      setSelectedCars(selectedCars.concat(newArr));
      setItemCount(itemCount+1);
    }

    console.log(selectedCars);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cars={cars} selectedCars={selectedCars} itemCount={itemCount} />} />
        <Route path="/shop" element={<Shop cars={cars} addCar={addCar} selectedCars={selectedCars} itemCount={itemCount} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

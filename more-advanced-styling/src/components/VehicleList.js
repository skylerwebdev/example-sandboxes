import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleCard from "./VehicleCard";

export default function VehicleList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/vehicles/`, {
        params: {}
      })
      .then(response => {
        const vehicle = response.data;
        console.log("studio ghibli vehicle", vehicle);
        setVehicle(vehicle);
      });
  }, []);

  return (
    <div className="film">
      {vehicle.map(vehicle => {
        return (
          <VehicleCard
            id={vehicle.id}
            name={vehicle.name}
            description={vehicle.description}
            vehicle_class={vehicle.vehicle_class}
          />
        );
      })}
    </div>
  );
}

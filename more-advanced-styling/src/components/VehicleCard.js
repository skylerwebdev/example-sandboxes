import React from "react";

const VehichleCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <div className="film-list " key={props.id}>
      <h2>Vehicle: {props.name}</h2>
      <p>{props.description}</p>
      <p>{props.vehicle_class}</p>
    </div>
  );
};
export default VehichleCard;

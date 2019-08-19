import React from "react";
import PropTypes from "prop-types";

function AvengersList(props) {
  console.log("AvengersList", props);
  return (
    <div className="characters-list-wrapper">
      {props.avengersList.map(avenger => (
        <div className="character-card" key={avenger.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <h3
            onClick={() => props.history.push(`/avengers/${avenger.id}/info`)}
          >
            {avenger.name}
          </h3>
          <p>({avenger.nickname})</p>
        </div>
      ))}
    </div>
  );
}

AvengersList.propTypes = {
  avengersList: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default AvengersList;

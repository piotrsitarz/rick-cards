import PropTypes from "prop-types";
import React from "react";

const LocationsCards = ({ locations }) =>
  locations.map(({ id, name, type, dimension }) => (
    <div key={id}>
      <p>{name}</p>
      <p>{type}</p>
      <p>{dimension}</p>
    </div>
  ));

LocationsCards.propTypes = {
  locations: PropTypes.array
};

export default LocationsCards;

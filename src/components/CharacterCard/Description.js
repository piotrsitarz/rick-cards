import React from "react";
import PropTypes from "prop-types";

const Description = ({ name, species, gender }) => (
  <div className="descripion-container">
    <h1 className="desc__title">{name}</h1>
    <p className="desc__paragraph">Species: {species}</p>
    <p className="desc__paragraph">Gender: {gender}</p>
  </div>
);

Description.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string
};

export default Description;

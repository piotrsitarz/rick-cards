import React from "react";
import PropTypes from "prop-types";

const CharacterCard = ({ children }) => (
  <div className="card-container">{children}</div>
);

CharacterCard.propTypes = {
  children: PropTypes.element
};

export default CharacterCard;

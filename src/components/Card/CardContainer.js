import React from "react";
import PropTypes from "prop-types";

const CardContainer = ({ children }) => (
  <div className="card-container">{children}</div>
);

CardContainer.propTypes = {
  children: PropTypes.array
};

export default CardContainer;

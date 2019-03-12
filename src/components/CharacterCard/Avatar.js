import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ image, name }) => (
  <div className="avatar-container">
    <img className="avatar__image" src={image} alt={`${name}'s avatar`} />
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Avatar;

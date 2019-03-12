import React from "react";
import PropTypes from "prop-types";

import Avatar from "./Avatar";
import Description from "./Description";

const CharacterCard = ({ name, image, species, gender }) => {
  return (
    <div className="card-container" key={name}>
      <Avatar image={image} name={name} />
      <Description name={name} species={species} gender={gender} />
    </div>
  );
};

CharacterCard.propTypes = {
  gender: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string
};

export default CharacterCard;

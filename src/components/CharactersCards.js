import React from "react";
import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard/CharacterCard";
import FetchError from "./shared/FetchError";
import LoadingSpinner from "./shared/LoadingSpinner";

const CharactersCards = ({ characters, loading, error }) => {
  if (error) {
    return <FetchError />;
  } else if (loading) {
    return <LoadingSpinner />;
  }

  return characters.map(({ name, image, species, gender }) => (
    <CharacterCard
      name={name}
      image={image}
      species={species}
      gender={gender}
      key={name}
    />
  ));
};

CharactersCards.propTypes = {
  characters: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default CharactersCards;

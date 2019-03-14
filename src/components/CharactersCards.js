import React from "react";
import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard/CharacterCard";
import FetchError from "./shared/FetchError";
import LoadingSpinner from "./shared/LoadingSpinner";
import Avatar from "./CharacterCard/Avatar";
import Description from "./CharacterCard/Description";

const CharactersCards = ({ characters, loading, error }) => {
  if (error) {
    return <FetchError />;
  } else if (loading) {
    return <LoadingSpinner />;
  }

  return characters.map(({ name, image, species, gender }) => (
    <CharacterCard key={name}>
      <Avatar image={image} name={name} />
      <Description name={name} species={species} gender={gender} />
    </CharacterCard>
  ));
};

CharactersCards.propTypes = {
  characters: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default CharactersCards;

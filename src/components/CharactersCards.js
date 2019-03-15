import PropTypes from "prop-types";
import React from "react";
import Avatar from "./CharacterCard/Avatar";
import CharacterCard from "./CharacterCard/CharacterCard";
import Description from "./CharacterCard/Description";

const CharactersCards = ({ characters }) =>
  characters.map(({ name, image, species, gender }) => (
    <CharacterCard key={name}>
      <Avatar image={image} name={name} />
      <Description name={name} species={species} gender={gender} />
    </CharacterCard>
  ));

CharactersCards.propTypes = {
  characters: PropTypes.array
};

export default CharactersCards;

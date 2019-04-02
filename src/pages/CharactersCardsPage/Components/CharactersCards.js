import PropTypes from "prop-types";
import React from "react";
import Avatar from "./CharactersCards/Avatar";
import CharacterCard from "./CharactersCards/CharacterCard";
import Description from "./CharactersCards/Description";

const CharactersCards = ({ characters }) =>
  characters.map(({ id, name, image, species, gender }) => (
    <CharacterCard key={id}>
      <Avatar image={image} name={name} />
      <Description name={name} species={species} gender={gender} />
    </CharacterCard>
  ));

CharactersCards.propTypes = {
  characters: PropTypes.array
};

export default CharactersCards;

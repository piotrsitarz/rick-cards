import PropTypes from "prop-types";
import React from "react";
import CardAvatar from "../../../components/Card/CardAvatar";
import CardDescription from "../../../components/Card/CardDescription";
import CardContainer from "../../../components/Card/CardContainer";

const CharactersCards = ({ characters }) =>
  characters.map(({ id, name, image, species, gender }) => (
    <CardContainer key={id}>
      <CardAvatar image={image} name={name} />
      <CardDescription name={name} species={species} gender={gender} />
    </CardContainer>
  ));

CharactersCards.propTypes = {
  characters: PropTypes.array
};

export default CharactersCards;

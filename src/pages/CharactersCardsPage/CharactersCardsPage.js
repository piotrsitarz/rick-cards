import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CharactersCards from "./Components/CharactersCards";

const CharactersCardsPage = ({ charactersData }) => (
  <CharactersCards characters={charactersData} />
);

const mapStateToProps = state => {
  const {
    characters: { charactersData }
  } = state;

  return {
    charactersData
  };
};

CharactersCardsPage.propTypes = {
  charactersData: PropTypes.array
};

export default connect(mapStateToProps)(CharactersCardsPage);

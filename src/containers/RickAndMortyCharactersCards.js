import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { fetchData } from "../helpers/fetchData";
import CharactersCards from "../components/CharactersCards";
import withHandleError from "../components/shared/hoc/withHandleError";
import withLoading from "../components/shared/hoc/withLoading";

const CharactersCardsWithHandleErrorAndLoading = compose(
  withLoading,
  withHandleError
)(CharactersCards);

class RickAndMortyCharactersCards extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchData("character", dispatch);
    fetchData("location", dispatch);
    fetchData("episode", dispatch);
  }

  render() {
    const {
      charactersData,
      loadingCharacters,
      loadingLocations,
      loadingEpisodes,
      error
    } = this.props;

    return (
      <CharactersCardsWithHandleErrorAndLoading
        characters={charactersData}
        loadingCharacters={loadingCharacters}
        loadingLocations={loadingLocations}
        loadingEpisodes={loadingEpisodes}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  const {
    characters: { charactersData, loadingCharacters, errorCharacters },
    locations: { loadingLocations, errorLocations },
    episodes: { loadingEpisodes, errorEpisodes }
  } = state;

  const error = errorCharacters || errorLocations || errorEpisodes;

  return {
    charactersData,
    loadingCharacters,
    loadingLocations,
    loadingEpisodes,
    error
  };
};

RickAndMortyCharactersCards.propTypes = {
  charactersData: PropTypes.array,
  loadingCharacters: PropTypes.bool,
  loadingLocations: PropTypes.bool,
  loadingEpisodes: PropTypes.bool,
  error: PropTypes.bool
};

export default connect(mapStateToProps)(RickAndMortyCharactersCards);

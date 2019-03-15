import React from "react";
import axios from "axios";
import { compose } from "recompose";
import CharactersCards from "../components/CharactersCards";
import withHandleError from "../components/shared/hoc/withHandleError";
import withLoading from "../components/shared/hoc/withLoading";

const API_URL = "https://rickandmortyapi.com/api/character/";

const CharactersCardsWithHandleErrorAndLoading = compose(
  withLoading,
  withHandleError
)(CharactersCards);

class RickAndMortyCharactersCards extends React.Component {
  state = {
    characters: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => {
        this.setState({ characters: results, loading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { characters, loading, error } = this.state;
    return (
      <CharactersCardsWithHandleErrorAndLoading
        characters={characters}
        loading={loading}
        error={error}
      />
    );
  }
}

export default RickAndMortyCharactersCards;

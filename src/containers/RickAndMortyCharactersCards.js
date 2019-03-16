import React from "react";
import axios from "axios";
import { compose } from "recompose";
import CharactersCards from "../components/CharactersCards";
import withHandleError from "../components/shared/hoc/withHandleError";
import withLoading from "../components/shared/hoc/withLoading";

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
    let charactersIterator = 1;
    let characters = [];

    const getCharacters = () => {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?page=${charactersIterator}`
        )
        .then(({ data: { info: { pages } }, data: { results } }) => {
          characters = characters.concat(results);
          charactersIterator++;
          if (charactersIterator > pages) {
            this.setState({ loading: false, characters });
            return "stop fetching data";
          }
          return getCharacters();
        })
        .catch(error => {
          this.setState({ loading: false, error });
        });
    };

    getCharacters();
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

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
    locations: [],
    episodes: [],
    loadingCharacters: true,
    loadingLocations: true,
    loadingEpisodes: true,
    error: null
  };

  componentDidMount() {
    let charactersIterator = 1;
    let locationsIterator = 1;
    let episodesIterator = 1;
    let characters = [];
    let locations = [];
    let episodes = [];

    const fetchData = (
      data,
      pageIterator,
      fetchingData,
      loadingKey,
      dataKey
    ) => {
      axios
        .get(`https://rickandmortyapi.com/api/${data}/?page=${pageIterator}`)
        .then(({ data: { info: { pages } }, data: { results } }) => {
          fetchingData = fetchingData.concat(results);
          pageIterator++;
          if (pageIterator > pages) {
            this.setState({ [loadingKey]: false, [dataKey]: fetchingData });
            return "stop fetching data";
          }
          return fetchData(
            data,
            pageIterator,
            fetchingData,
            loadingKey,
            dataKey
          );
        })
        .catch(error => {
          this.setState({
            loadingCharacters: false,
            loadingLocations: false,
            loadingEpisodes: false,
            error
          });
        });
    };

    fetchData(
      "character",
      charactersIterator,
      characters,
      "loadingCharacters",
      "characters"
    );
    fetchData(
      "location",
      locationsIterator,
      locations,
      "loadingLocations",
      "locations"
    );
    fetchData(
      "episode",
      episodesIterator,
      episodes,
      "loadingEpisodes",
      "episodes"
    );
  }

  render() {
    const {
      characters,
      loadingCharacters,
      loadingLocations,
      loadingEpisodes,
      error
    } = this.state;

    return (
      <CharactersCardsWithHandleErrorAndLoading
        characters={characters}
        loadingCharacters={loadingCharacters}
        loadingLocations={loadingLocations}
        loadingEpisodes={loadingEpisodes}
        error={error}
      />
    );
  }
}

export default RickAndMortyCharactersCards;

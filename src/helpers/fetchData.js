import axios from "axios";
import { charactersActions } from "../actions/characters";
import { locationsActions } from "../actions/locations";
import { episodesActions } from "../actions/episodes";

export const fetchData = (
  endpoint,
  dispatch,
  fetchingData = [],
  pageIterator = 1
) => {
  axios
    .get(`https://rickandmortyapi.com/api/${endpoint}/?page=${pageIterator}`)
    .then(({ data: { info: { pages }, results } }) => {
      fetchingData = fetchingData.concat(results);
      pageIterator++;

      if (pageIterator > pages) {
        switch (endpoint) {
          case "character":
            return dispatch(charactersActions.success(fetchingData));
          case "location":
            return dispatch(locationsActions.success(fetchingData));
          default:
            return dispatch(episodesActions.success(fetchingData));
        }
      }
      return fetchData(endpoint, dispatch, fetchingData, pageIterator);
    })
    .catch(error => {
      const { message } = error;

      switch (endpoint) {
        case "character":
          return dispatch(charactersActions.error(message));
        case "location":
          return dispatch(locationsActions.error(message));
        default:
          return dispatch(episodesActions.error(message));
      }
    });
};

import axios from "axios";
import { charactersActions } from "../actions/characters";
import { locationsActions } from "../actions/locations";
import { episodesActions } from "../actions/episodes";

export const fetchData = (
  data,
  dispatch,
  fetchingData = [],
  pageIterator = 1
) => {
  axios
    .get(`https://rickandmortyapi.com/api/${data}/?page=${pageIterator}`)
    .then(({ data: { info: { pages }, results } }) => {
      fetchingData = fetchingData.concat(results);
      pageIterator++;

      if (pageIterator > pages) {
        switch (data) {
          case "character":
            return dispatch(charactersActions.success(fetchingData));
          case "location":
            return dispatch(locationsActions.success(fetchingData));
          default:
            return dispatch(episodesActions.success(fetchingData));
        }
      }
      return fetchData(data, dispatch, fetchingData, pageIterator);
    })
    .catch(error => {
      switch (data) {
        case "character":
          return dispatch(charactersActions.error(error));
        case "location":
          return dispatch(locationsActions.error(error));
        default:
          return dispatch(episodesActions.error(error));
      }
    });
};

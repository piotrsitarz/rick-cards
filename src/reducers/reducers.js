import { combineReducers } from "redux";

import { characters } from "./characters.reducer";
import { locations } from "./locations.reducer";
import { episodes } from "./episodes.reducer";

const appReducer = combineReducers({
  characters,
  locations,
  episodes
});

export default appReducer;

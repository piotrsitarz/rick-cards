const initialState = {
  loadingEpisodes: true
};

export const episodes = (state = initialState, action) => {
  switch (action.type) {
    case "EPISODES_SUCCESS":
      return {
        episodesData: action.episodes,
        loadingEpisodes: false
      };
    case "EPISODES_FAILURE":
      return {
        errorEpisodes: true,
        loadingEpisodes: false
      };
    default:
      return state;
  }
};

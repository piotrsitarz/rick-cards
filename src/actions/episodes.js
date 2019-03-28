const success = episodes => ({
  type: "EPISODES_SUCCESS",
  episodes
});

const error = message => ({
  type: "EPISODES_FAILURE",
  message
});

export const episodesActions = {
  success,
  error
};

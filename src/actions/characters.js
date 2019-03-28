const success = characters => ({
  type: "CHARACTERS_SUCCESS",
  characters
});

const error = message => ({
  type: "CHARACTERS_FAILURE",
  message
});

export const charactersActions = {
  success,
  error
};

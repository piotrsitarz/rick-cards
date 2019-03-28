const initialState = {
  loadingCharacters: true
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTERS_SUCCESS":
      return {
        charactersData: action.characters,
        loadingCharacters: false
      };
    case "CHARACTERS_FAILURE":
      return {
        errorCharacters: true,
        loadingCharacters: false
      };
    default:
      return state;
  }
};

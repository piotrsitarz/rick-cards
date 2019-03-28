const initialState = {
  loadingLocations: true
};

export const locations = (state = initialState, action) => {
  switch (action.type) {
    case "LOCATIONS_SUCCESS":
      return {
        locationsData: action.locations,
        loadingLocations: false
      };
    case "LOCATIONS_FAILURE":
      return {
        errorLocations: true,
        loadingLocations: false
      };
    default:
      return state;
  }
};

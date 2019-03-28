const success = locations => ({
  type: "LOCATIONS_SUCCESS",
  locations
});

const error = message => ({
  type: "LOCATIONS_FAILURE",
  message
});

export const locationsActions = {
  success,
  error
};

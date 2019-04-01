import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default WrappedComponent => {
  const hocComponent = ({
    loadingCharacters,
    loadingLocations,
    loadingEpisodes,
    ...props
  }) => {
    if (loadingCharacters || loadingLocations || loadingEpisodes) {
      return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    loadingCharacters: PropTypes.bool,
    loadingLocations: PropTypes.bool,
    loadingEpisodes: PropTypes.bool
  };

  return hocComponent;
};

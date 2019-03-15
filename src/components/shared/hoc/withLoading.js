import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default WrappedComponent => {
  const hocComponent = ({ loading, ...props }) => {
    if (loading) {
      return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    loading: PropTypes.bool
  };

  return hocComponent;
};

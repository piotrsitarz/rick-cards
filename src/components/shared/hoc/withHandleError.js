import React from "react";
import PropTypes from "prop-types";
import FetchError from "../FetchError/FetchError";

export default WrappedComponent => {
  const hocComponent = ({ error, ...props }) => {
    if (error) {
      return <FetchError />;
    }

    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    error: PropTypes.string
  };

  return hocComponent;
};

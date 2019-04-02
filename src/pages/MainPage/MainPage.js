import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { fetchData } from "../../helpers/fetchData";
import MainPageContent from "./Components/MainPageContent";
import withHandleError from "../../components/hoc/withHandleError";
import withLoading from "../../components/hoc/withLoading";

const MainPageWithHandleErrorAndLoading = compose(
  withLoading,
  withHandleError
)(MainPageContent);

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchData("character", dispatch);
    fetchData("location", dispatch);
    fetchData("episode", dispatch);
  }

  render() {
    const {
      loadingCharacters,
      loadingLocations,
      loadingEpisodes,
      error
    } = this.props;

    return (
      <MainPageWithHandleErrorAndLoading
        loadingCharacters={loadingCharacters}
        loadingLocations={loadingLocations}
        loadingEpisodes={loadingEpisodes}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  const {
    characters: { loadingCharacters, errorCharacters },
    locations: { loadingLocations, errorLocations },
    episodes: { loadingEpisodes, errorEpisodes }
  } = state;

  const error = errorCharacters || errorLocations || errorEpisodes;

  return {
    loadingCharacters,
    loadingLocations,
    loadingEpisodes,
    error
  };
};

MainPage.propTypes = {
  loadingCharacters: PropTypes.bool,
  loadingLocations: PropTypes.bool,
  loadingEpisodes: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default connect(mapStateToProps)(MainPage);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EpisodesCards from "./Components/EpisodesCards";

const EpisodesCardsPage = ({ episodesData }) => (
  <EpisodesCards episodes={episodesData} />
);

const mapStateToProps = state => {
  const {
    episodes: { episodesData }
  } = state;

  return {
    episodesData
  };
};

EpisodesCardsPage.propTypes = {
  episodesData: PropTypes.array
};

export default connect(mapStateToProps)(EpisodesCardsPage);

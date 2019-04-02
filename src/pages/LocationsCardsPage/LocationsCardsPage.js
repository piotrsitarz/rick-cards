import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LocationsCards from "./Components/LocationsCards.js";

const LocationsCardsPage = ({ locationsData }) => (
  <LocationsCards locations={locationsData} />
);

const mapStateToProps = state => {
  const {
    locations: { locationsData }
  } = state;

  return {
    locationsData
  };
};

LocationsCardsPage.propTypes = {
  locationsData: PropTypes.array
};

export default connect(mapStateToProps)(LocationsCardsPage);

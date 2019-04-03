import PropTypes from "prop-types";
import React from "react";
import CardContainer from "../../../components/Card/CardContainer";
import CardDescription from "../../../components/Card/CardDescription";

const LocationsCards = ({ locations }) =>
  locations.map(({ id, name, type, dimension }) => (
    <CardContainer key={id}>
      <CardDescription name={name} type={type} dimension={dimension} wide />
    </CardContainer>
  ));

LocationsCards.propTypes = {
  locations: PropTypes.array
};

export default LocationsCards;

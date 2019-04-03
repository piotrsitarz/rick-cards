import PropTypes from "prop-types";
import React from "react";
import CardContainer from "../../../components/Card/CardContainer";
import CardDescription from "../../../components/Card/CardDescription";

const EpisodesCards = ({ episodes }) =>
  episodes.map(({ id, name, air_date, episode }) => (
    <CardContainer key={id}>
      <CardDescription name={name} airDate={air_date} episode={episode} wide />
    </CardContainer>
  ));

EpisodesCards.propTypes = {
  episodes: PropTypes.array
};

export default EpisodesCards;

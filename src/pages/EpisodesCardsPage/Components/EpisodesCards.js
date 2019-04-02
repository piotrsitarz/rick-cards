import PropTypes from "prop-types";
import React from "react";

const EpisodesCards = ({ episodes }) =>
  episodes.map(({ id, name, air_date, episode }) => (
    <div key={id}>
      <p>{name}</p>
      <p>{air_date}</p>
      <p>{episode}</p>
    </div>
  ));

EpisodesCards.propTypes = {
  episodes: PropTypes.array
};

export default EpisodesCards;

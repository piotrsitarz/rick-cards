import React from "react";
import PropTypes from "prop-types";

const CardDescription = ({
  name,
  species,
  gender,
  airDate,
  episode,
  type,
  dimension,
  wide
}) => (
  <div
    className={!wide ? "descripion-container" : "descripion-container__wide"}
  >
    <h4 className="description__title">{name}</h4>
    {species && <p className="description__paragraph">Species: {species}</p>}
    {gender && <p className="description__paragraph">Gender: {gender}</p>}
    {airDate && <p className="description__paragraph">Air Date: {airDate}</p>}
    {episode && <p className="description__paragraph">Episode: {episode}</p>}
    {type && <p className="description__paragraph">Type: {type}</p>}
    {dimension && (
      <p className="description__paragraph">Dimension: {dimension}</p>
    )}
  </div>
);

CardDescription.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  airDate: PropTypes.string,
  episode: PropTypes.string,
  type: PropTypes.string,
  dimension: PropTypes.string,
  wide: PropTypes.bool
};

export default CardDescription;

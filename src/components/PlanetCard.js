import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="cards-container">
        <div data-testid="planet-card" className="card">
          <div className="img-container">
            <img src={ planetImage } alt={ `Planeta ${planetName}` } />
          </div>
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

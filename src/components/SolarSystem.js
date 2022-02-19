import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="container">
        <Title headline="Planetas" />
        <div className="container-planets">
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

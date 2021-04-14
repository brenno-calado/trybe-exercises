import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const {
      pokemon,
    } = this.props;
    const { 
      name,
      type,
      averageWeight,
      image,
    } = pokemon;
    return (
      <article className="pokemon">
        <img className="pokemon-image" src={image} alt={`${name} sprite`}></img>
        <h4>{name}</h4>
        <span>{type}</span>
        <span>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
      </article>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
};

export default Pokemon;

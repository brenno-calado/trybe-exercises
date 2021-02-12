import PropTypes from 'prop-types';
import { Components } from 'react';

class Pokemon extends Components {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
        <span>{type}</span>
        <p>Average weight: {value} {measurementUnit}</p>
      </div>
    )
  }
}

Pokemon.PropTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Pokemon;

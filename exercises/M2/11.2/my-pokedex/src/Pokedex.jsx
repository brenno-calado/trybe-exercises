import { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    const pokemonList = pokemons
      .map((pokemon) => <Pokemon keys={ pokemon.id } pokemon={ pokemon } />)
    return (
      <section className="pokedex">
        {pokemonList}
      </section>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
}

export default Pokedex

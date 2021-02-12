import { Components } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Components {
  render() {
    const list = this.props.list;
    return list.map(value => <Pokemon pokemon={value} />)
  }
}

export default PokemonList

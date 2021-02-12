import { Components } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Components {
  render() {
    return (
      <div>
        {this.props.list.map(value => <Pokemon pokemon={value} />)}
      </div>
    ) 
  }
}

export default PokemonList

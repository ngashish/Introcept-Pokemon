import { POKEMON_LIST } from '../action';

function pokemonDataReducer(state = { pokemons: [] }, action) {
  switch (action.type) {
    case POKEMON_LIST:
      return {
        ...state,
        ...{
          pokemons: action.pokemons
        }
      };
    default:
      return state;
  }
}

export default pokemonDataReducer;

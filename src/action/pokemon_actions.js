import axios from 'axios';
import { API_ENDPOINT } from '../config/apiConstant';

export const POKEMON_LIST = 'POKEMON_LIST';
export const pokemonList = () => {
  return dispatch => {
    axios.get(`${API_ENDPOINT}/pokemon`).then(async response => {
      const { results } = response.data;
      const pokemons = [];
      const requests = results.map(pokemon => {
        return axios.get(pokemon.url).then(response => {
          pokemons.push(response.data);
        });
      });
      Promise.all(requests).then(() => {
        dispatch({ type: POKEMON_LIST, pokemons });
      });
    });
  };
};

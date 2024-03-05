import apiService from './configs/ApiService'

export interface Pokemon {
  id: number
  name: string
  is_main_series: boolean
  generation: any
  names: any[]
  effect_entries: any[]
  effect_changes: any[]
  flavor_text_entries: any[]
  pokemon: any[]
}

// Weather API URL and API Key from .env file
const apiUrl = import.meta.env.VITE_POKEMON_API_URL;

/**
 * Fetch all countries from REST Countries API
 * @returns {Promise<Countries[]>} - List of countries
 */
export const fetchPokemon = async (pokemonName: string): Promise<Pokemon> => {
  const url = apiUrl + '/pokemon/' + pokemonName;
  const response = await apiService.get<Pokemon>(url);
  return response.data;
}


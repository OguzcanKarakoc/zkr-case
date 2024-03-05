import apiService from "./configs/ApiService";

export interface Countries {
  flags: {
    png: string
    svg: string
    alt: string
  },
  name: {
    common: string;
    official: string;
    native: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
}

const apiUrl = import.meta.env.VITE_REST_COUNTRIES_API_URL;

/**
 * Fetch all countries from REST Countries API
 * @returns {Promise<Countries[]>} - List of countries
 */
export const fetchCountries = async (): Promise<Countries[]> => {
  const url = apiUrl + "/all?fields=name&fields=flags";
  const response = await apiService.get<Countries[]>(url);
  return response.data;
};

/**
 * Fetch country data from REST Countries API by country name
 * @param country {string} - Country name
 * @returns {Promise<Countries>} - Country data
 */
export const fetchCountry = async (country: string): Promise<Countries> => {
  const url = apiUrl + "/name/" + country + "?fields=name&fields=flags";
  const response = await apiService.get<Countries>(url);
  return response.data;
};

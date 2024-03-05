import apiService from "./configs/ApiService";

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// Weather API URL and API Key from .env file
const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
const appId = import.meta.env.VITE_WEATHER_API_KEY;
const units = "metric";

/**
 * Fetch weather data from OpenWeatherMap API by city name
 * @param city {string} - City name
 * @returns {Promise<WeatherData>} - Weather data
 */
export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const url = new URL(apiUrl);
    url.searchParams.append("q", city);
    url.searchParams.append("appid", appId);
    url.searchParams.append("units", units);
    const response = await apiService.get<WeatherData>(url.toString());
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

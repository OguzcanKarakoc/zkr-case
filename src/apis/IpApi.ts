import apiService from "./configs/ApiService"

export interface IpData {
  ip: string
  city: string
  region: string
  region_code: string
  country: string
  country_name: string
  continent_code: string
  in_eu: boolean
  postal: string
  latitude: number
  longitude: number
  timezone: string
  utc_offset: string
  country_calling_code: string
  currency: string
  languages: string
  asn: string
  org: string
}

const apiUrl = import.meta.env.VITE_IP_API_URL;

/**
 * Fetch Client IP from IP API
 * @returns {Promise<IpData>} - List of countries
 */
export const fetchClientIp = async (): Promise<IpData> => {
  const url = apiUrl + '/json';
  const response = await apiService.get<IpData>(url);
  return response.data;
}

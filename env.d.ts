/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_URL: string
  readonly VITE_WEATHER_API_KEY: string
  readonly VITE_POKEMON_API: string
  readonly VITE_REST_COUNTRIES_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

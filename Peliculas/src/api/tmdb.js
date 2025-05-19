import axios from 'axios';

const API_KEY = '4d8aad7d620364e89dcb5ee498190079';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'es-MX',
  },
});

import axios from 'axios'

export const BASE_URL = 'https://imdb-api.com'
export const API_KEY = 'k_i1qz0ikr'
export const TOP_250_MOVIE = 'en/API/Top250Movies'

const API = axios.create({
    headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    baseURL: BASE_URL
})

export default API
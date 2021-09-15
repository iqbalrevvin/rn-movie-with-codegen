import API, { API_KEY, BASE_URL, TOP_250_MOVIE } from "../../Services/API/ApiContainer"

export const getMovie = async () => {
    try {
        const request = await API.get(`${BASE_URL}/${TOP_250_MOVIE}/${API_KEY}`)
        return request
    } catch (error) {
        console.log('Playgrounds.action@getFilm', error)
    }
}
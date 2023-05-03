import axios from "axios";

const apiMovies = axios.create({
    baseURL: "https://dadosabertos.camara.leg.br/api/v2",
})

export default apiMovies
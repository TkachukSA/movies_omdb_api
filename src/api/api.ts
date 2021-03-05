import axios from 'axios';

export type ResponseType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export type RatingResponseType = {
    Source: string
    Value: string
}

export type FilmDescriptionType = {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Rated: string
    Ratings: RatingResponseType[]
    Released: string
    Response: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
    Error: string
}

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=d5fd4a90';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return  axiosInstance.get(query)
    },
    searchPage: (page: number, title: string) => {
        const query = `${key}&s=${title}&page=${page}`
        return  axiosInstance.get(query)
    },
    searchFilmsByType: (id: string) => {
        const query = `${key}&i=${id}`
        return  axiosInstance.get(query)
    }
};

//http://www.omdbapi.com/?apikey=d5fd4a90&i=tt10821190
export default API;
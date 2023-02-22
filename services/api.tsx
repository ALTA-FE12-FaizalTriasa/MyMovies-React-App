import axios from "axios";


const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/now_playing?api_key={import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=1`,
})

export default {
    getAllMovies: () =>{
        instance({
            method: "GET",
            url: 
        })
    }
}
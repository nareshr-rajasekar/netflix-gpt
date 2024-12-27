import { useDispatch } from "react-redux"
import { MOVIES_API_OPTIONS, VIDEOS_MOVIE_API_URL } from "../utils/constants"
import { addTrailerMovie } from "../utils/moviesSlice"
import { useEffect } from "react"

const useTrailerMovie = (id) =>{
    const dispatch = useDispatch()
    const movieVideos = async () =>{
      
        const res = await fetch(VIDEOS_MOVIE_API_URL(id), MOVIES_API_OPTIONS)
        const data = await res.json()
        const trailerVideo = data?.results?.find((vdo)=> vdo.type == 'Trailer') || data?.results[0] 
        dispatch(addTrailerMovie(trailerVideo))
        
    }
    

    useEffect(()=>{
        movieVideos()
    },[])
}

export default useTrailerMovie;
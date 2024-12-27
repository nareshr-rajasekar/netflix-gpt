import { useEffect } from "react"
import { MOVIES_API_OPTIONS, MOVIES_API_URL, VIDEOS_MOVIE_API_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingListMovies, addTrailerMovie } from "../utils/moviesSlice"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const handleFetchMoviesList = async () =>{

        try {
            
            const res = await fetch(MOVIES_API_URL, MOVIES_API_OPTIONS) //now playing movies
            const data = await res.json()
            
            dispatch(addNowPlayingListMovies(data?.results))
          
            
    
            
            
        } catch (error) {
            console.error(error);
            
        }
    
    
    }
    useEffect(() =>{
        handleFetchMoviesList()
    },[])
}

export default useNowPlayingMovies
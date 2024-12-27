import { useEffect } from "react";
import { MOVIES_API_OPTIONS, VIDEOS_MOVIE_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/moviesSlice";
import appSore from "../utils/appStore";
import useTrailerMovie from "../hooks/useTrailerMovie";

const VideoBackground = ({id}) =>{
    useTrailerMovie(id)
    const trailerVideo = useSelector((appSore) => appSore?.movies?.trailerMovie)
    
    

    return (
        <div className="w-screen">

            <iframe className="w-screen aspect-video"
             src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
              title="YouTube video player" 
              allow="accelerometer; autoplay; 
             clipboard-write; encrypted-media; 
             gyroscope; picture-in-picture; web-share" >
             </iframe>
        </div>
    )
}

export default VideoBackground;
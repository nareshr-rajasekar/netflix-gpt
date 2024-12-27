import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VIdeoTitle"

const MainContainer = () =>{
    const movies = useSelector((appSore) => appSore?.movies?.nowPlayingMoviesList)
    if(!movies) return ; //early return 
    const {original_title, overview, id} = movies[0]

    

    
 return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
 )   
}

export default MainContainer
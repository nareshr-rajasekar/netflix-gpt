import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import appSore from "../utils/appStore";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    
    

    useNowPlayingMovies()
    // const movies = useSelector((appStore) => appStore?.movies?.nowPlayingMoviesList)
    // console.log("movies",movies);


    return (
        <div className="w-full h-screen">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;
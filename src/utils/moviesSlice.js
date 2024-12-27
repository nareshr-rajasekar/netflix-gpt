import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMoviesList : null,
        trailerMovie : null
    },
    reducers :{
        addNowPlayingListMovies : (state, action) =>{
            
         state.nowPlayingMoviesList = action.payload
        },
        addTrailerMovie : (state, action) =>{
        state.trailerMovie = action.payload
        }
    }
})

export const {addNowPlayingListMovies, addTrailerMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
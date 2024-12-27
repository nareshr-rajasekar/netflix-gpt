export const MOVIES_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWM5MjY0Y2ExNmFmN2JjMTU0Nzg1MTUxNTIzZTQ4OSIsIm5iZiI6MTczNTI4OTIyMy43ODMsInN1YiI6IjY3NmU2OTg3YWE4ZjMxNTlkNjEyYjAyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nu54f43lwCBlh6Ze0zILfowHFKIw1sQjnMD4yH9VtA'
    }
  };

  export const MOVIES_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

  export const VIDEOS_MOVIE_API_URL = (movie_id)=>{
    return `https://api.themoviedb.org/3/movie/${movie_id}/videos`
  }
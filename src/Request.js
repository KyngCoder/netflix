const API_KEY = 'c3382d8497f01a44aedc5fa5f9798796'

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=c3382d8497f01a44aedc5fa5f9798796`,
    fetchTopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=c3382d8497f01a44aedc5fa5f9798796',
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=c3382d8497f01a44aedc5fa5f9798796`,
    
  };
export default requests
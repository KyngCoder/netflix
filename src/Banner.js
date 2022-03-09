import React from 'react'
import './banner.css'
import axios from '../../netflixx/src/axios'
import requests from './Request'


function Banner() {

  const [movie,setMovie] = React.useState([])
  
  React.useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
      // setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
      // return request
      
    
    }
    fetchData()
  },[])

console.log(movie)

  function truncate(string,n){
    return string?.length > n ? string.substring(0,n-1) + '...': string
  }
  return (
   
    <header className="banner" style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
        backgroundPosition:'center center'
    }}>

    <div className="banner-content">
    {console.log(movie.title)}
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>

    <div className="banner-title">
        <button className="banner-button">play</button>
        <button className="banner-button">my List</button>
    </div>
    <h3 className='banner-description'>{
      truncate(`${movie?.overview}`,150)
    }</h3>

  </div>
  <div className="banner-fade" />
  
    </header>

  
  )
}

export default Banner
import React,{useState,useEffect} from 'react'
import './row.css'
import axios from 'axios'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'

function Row({title,fetchUrl,isLargeRow}) {
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
          const request = await axios.get(fetchUrl)
          setMovie(request.data.results)
          return request
        }

        fetchData()

    },[fetchUrl])

    const base = 'https://image.tmdb.org/t/p/w500'

    console.log(movie)
  return (
    <div className="row">
        <h2>{title}</h2>
        <h4>{movie.name}</h4>
        <div className="row-posters">
          {movie.map(mov => {
          return(
            
            <img className={`row-poster {isLargeRow && "row-poster-large"}`}
          src={`${base}${isLargeRow?mov.poster_path:mov.backdrop_path}`} 
          alt={mov.name} />
          )
          })}
        </div>
     
    </div>
  )
}

export default Row
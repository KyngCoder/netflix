import React from 'react'
import './homeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />
        <Banner />

        <Row 
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow = {true} 
        />

        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
        <Row   title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  )
}

export default HomeScreen
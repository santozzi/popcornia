import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getMovieById, getMoviesByPage,getCertifications,languagesList,getCredits,getMovieByProtagonist } from './models/tmdbAPI/movie.model'
import MovieView from './components/MovieView/MovieView'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import YoutubeView from './components/YoutubeView/YoutubeView'
import MovieDetail from './components/MovieDetail/MovieDetail'
import HandlerForm from './components/HandlerForm'

function App() {
 
  

    return (
    <>
{/*       <Header />
       <Home /> */}
      <HandlerForm />
   
    </>
    
  )
}

export default App

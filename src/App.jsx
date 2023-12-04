import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getMovieById, getMoviesByPage,getCertifications,languagesList,getCredits,getMovieByProtagonist } from './models/tmdbAPI/movie.model'
import MovieView from './components/MovieView/MovieView'
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

 

  useEffect( () => {

/*    async function getMovie(){
    const res = await tmdbapi();
    setMovie(res.results);
    console.log(res.results);
    }
    getMovie(); */
   
    languagesList().then((res) => {
     //console.log(res);
   
    }
    );
    getCredits(551).then((res) => {
      console.log(res);

    }
    )
    .catch((err) => {
      console.log("err");
    }
    );

    

    getCertifications().then((res) => {
     // console.log(res);
    }
    );
    getMoviesByPage(1,'2023').then((res) => {

      //setMovies(res.results);
     // console.log(res);
    }
    );
    getMovieById(872585).then((res) => {
      //setMovie(res);
     // console.log(res);
    }
    );

    return () => {
      console.log("cleanup");
    }
  }, [])
  

    return (
    <>
      <Header />
      <section className='movies-section'>
    {movies.map((movie) => (
        <MovieView key={movie.id} {...movie} />
      ))
 
      }
      </section>
    </>
  )
}

export default App

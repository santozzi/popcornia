"use client";
import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { useEffect, useState } from 'react'
import { getMovieById, getMoviesByPage,getCertifications,languagesList,getCredits,getMovieByProtagonist, getMovieTrailer } from '../../models/tmdbAPI/movie.model'
import MovieView from '../MovieView/MovieView'
import PropTypes from 'prop-types';

const Home = ({}) => {
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
	  getMovieTrailer(551).then((res) => {
		console.log(res);
  
	  }
	  );
	  languagesList().then((res) => {
	   //console.log(res);
	 
	  }
	  );
	  getCredits(551).then((res) => {
		//console.log(res);
  
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
  
		setMovies(res.results);
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
	
		<section className='movies-section'>
	  {movies.map((movie) => (
		  <MovieView key={movie.id} {...movie} />
		))
   
		}
		</section>
	  </>
	)
  }
  

Home.propTypes = {};

export default Home;
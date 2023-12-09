"use client";
import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import {
  getMovieById,
  getMovieTrailer,
} from "../../models/tmdbAPI/movie.model";
import PropTypes from "prop-types";
import YoutubeView from "../YoutubeView/YoutubeView";
import { useParams } from 'react-router-dom';

const MovieDetail = ({}) => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [keyVideo, setKeyVideo] = useState("");
  const [siteTrailer, setStiteTrailer] = useState("");
  const [isTrailer,setIsTrailer] = useState(false);

  useEffect(() => {
    
    getMovieById(id).then((res) => {
      setMovie(res);
      // console.log(res);
    });
	getMovieTrailer(id).then((res) => {
		console.log(res);
		  if(res.success  || res.success != undefined || res.results[0].key!= "undefined" ){
      setStiteTrailer(res.results[0].site)
			setIsTrailer(true);
			setKeyVideo(res.results[0].key);
		  }
		  
	
  
	  });
    return () => {
      console.log("cleanup");
	  setIsTrailer(false);
    };
  }, []);

  return (
    <>
	<div
        className="moviedetail"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`,
        }}
      >
       
      </div>
	 
      <div className="moviedetailfront">
	  <div className="movie-card-detail">
		   <h1>{movie.title}</h1>
		   <div>{movie.overview}</div>
		</div>
		{isTrailer 
      ?
        <div className="video-player">
          <YoutubeView keyVideo={keyVideo} site={siteTrailer}/>
        </div>
         :<div>Video no encontrado</div>
		}
	
      </div>
    </>
  );
};

MovieDetail.propTypes = {};

export default MovieDetail;

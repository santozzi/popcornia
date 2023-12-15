
import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import {
  getMovieById,
  getMovieTrailer,

} from "../../models/movie.model";

import YoutubeView from "../YoutubeView/YoutubeView";
import Reparto from "../Reparto/Reparto";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [keyVideo, setKeyVideo] = useState("");
  const [siteTrailer, setStiteTrailer] = useState("");
  const [isTrailer, setIsTrailer] = useState(false);

  useEffect(() => {
    getMovieById(id).then((res) => {
      setMovie(res);
      // console.log(res);
    });

    getMovieTrailer(id).then((res) => {
     
      if (
        res.success ||
        res.success != undefined ||
        res.results[0].key != "undefined"
      ) {
        setStiteTrailer(res.results[0].site);
       
        setIsTrailer(true);
       const oficial = res.results.find((video) => video.name === "Official Trailer");
       
         if(oficial==undefined){
         
     
           setKeyVideo(res.results[0].key);
         }else
          setKeyVideo(oficial.key);

      }
    });
    return () => {
     
    
    };
  }, []);

  return (
    <>
    { 
      movie && movie.poster_path &&
      <div
        className="moviedetail"
        
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`,
        }}
      
      >
        <div className="moviedetailfront">
          <div className="back-button">
            <button onClick={()=>navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>
          </div>
          
          <div className="movie-detail-trailer">
            <div className="movie-card-detail">
              <h1>{movie.title}</h1>
              <div className="movie-card-detail-text">{movie.overview}</div>
            </div>
            {isTrailer ? (
              <div className="video-player">
                <YoutubeView keyVideo={keyVideo} site={siteTrailer} />
                <p className="titulo-reparto">Estreno: {movie.release_date}</p>
              </div>
            ) : (
              <div>Video no encontrado</div>
            )}
          </div>
          <h2>Reparto</h2>
          <Reparto id={id} />
        </div>
      </div>
}
    </>
  );
};

MovieDetail.propTypes = {};

export default MovieDetail;

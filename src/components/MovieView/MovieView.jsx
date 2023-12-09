import React from 'react';
import './MovieView.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieView = (props) => {
	const {id,title,overview,poster_path,release_date} = props;
	return (
		<div className='movie-view-card'>
          {/* <h3 className='movie-view-title'>{title}</h3> */}
        
          <Link to={`/movie/${id}`}> <img src={"https://image.tmdb.org/t/p/w300"+poster_path} alt={title} /> </Link>
		 {/*  <p>{overview}</p> */}
      
        </div>
	);
};

MovieView.propTypes = {};

export default MovieView;
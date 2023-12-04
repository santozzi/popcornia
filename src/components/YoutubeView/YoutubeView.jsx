"use client";
import React from 'react';
import './YoutubeView.css';
import PropTypes from 'prop-types';

const YoutubeView = ({keyVideo="UdFeVo0cODs"}) => {
	return (
		<div className='youtubeview'>
		
			 <iframe width="560" height="315" src={`https://www.youtube.com/embed/${keyVideo}`} title="YouTube video player"  allowFullScreen></iframe>
 		</div>
	);
};

YoutubeView.propTypes = {};

export default YoutubeView;
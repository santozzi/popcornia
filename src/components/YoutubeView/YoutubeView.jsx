"use client";
import React from 'react';
import './YoutubeView.css';
import PropTypes from 'prop-types';

const YoutubeView = ({keyVideo="UdFeVo0cODs",site}) => {
	
	
	return (
		<div className='youtubeview'>
		    {site == "YouTube" 
			 
			 ?<iframe width="450" height="215" src={`https://www.youtube.com/embed/${keyVideo}`} title="YouTube video player"  allowFullScreen></iframe>

			 :<iframe src={`https://player.vimeo.com/video/${keyVideo}?h=fea5646523`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
			}
			 </div>
	);
};

YoutubeView.propTypes = {};

export default YoutubeView;
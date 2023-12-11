"use client";
import React from 'react';
import './ErrorPage.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import errorImage from '../ErrorPage/images/error.jpg';

const ErrorPage = ({}) => {
	return (
		<div className='errorpage'>
 			<Header />
			<div className="error-page-container">
				<img src={errorImage} alt="Imagen de error" className='error-page-img'/>
				<div className="error-code">
					<p>404</p>
					<p className='error-message'>Página no encontrada</p>
				</div>
			</div>
			
 		</div>
	);
};

ErrorPage.propTypes = {};

export default ErrorPage;
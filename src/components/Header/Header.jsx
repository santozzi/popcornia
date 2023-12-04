"use client";
import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import logo from '../Header/images/popcorn.png'
import title from '../Header/images/titulo.png'

const Header = ({}) => {
	return (
		<header className='header'>
			<div className="header-title">
				<img src={title} alt="popcornia" />
			</div>
 			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			
 		</header>
	);
};

Header.propTypes = {};

export default Header;
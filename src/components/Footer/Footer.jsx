"use client";
import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({}) => {
	return (
		<footer>
		<div class="logo">S. J. A.</div>
		<div class="socialMedias">
		  <div>
			<i class="fa-brands fa-github"></i
			><a href="https://github.com/santozzi" target="_blank">Github</a>
		  </div>
		  <div>
			<i class="fa-brands fa-linkedin"></i
			><a
			  href="https://www.linkedin.com/in/sergio-antozzi-961891173/"
			  target="_blank"
			  >Linkedin</a
			>
		  </div>
		</div>
	  </footer>
	);
};

Footer.propTypes = {};

export default Footer;

import React,{useState,useEffect} from 'react';
import './Reparto.css';
import PropTypes from 'prop-types';
import { getCredits } from '../../models/movie.model';
import imagenError from '../Reparto/images/nohayimagen.jpg';


const Reparto = ({id}) => {
	const [reparto, setReparto] = useState([]);

	useEffect(() => {
		getCredits(id).then((res) => {
			setReparto(res.cast);
	
		}
		)
		.catch((err) => {
			console.log("err");
		}
		);
	}, []);
	return (
		<article className='reparto'>
 			{
		 				reparto.map((actor,index) => {
 					return (
						
 						(actor.known_for_department === "Acting"&&actor.popularity>10 || actor.popularity>2)
						&&<div className='actor' key={index}>
							{(actor.profile_path!=null)
 							?<img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
 							:<img src={imagenError} alt={actor.name} />
						    
						}
 							<h3>{actor.name}</h3>
 							<p>{actor.character}</p>
							
 						</div>
					
 					);
 				})			
			}
 		</article>
	);
};

Reparto.propTypes = {};

export default Reparto;
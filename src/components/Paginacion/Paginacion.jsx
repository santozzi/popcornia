import React,{useState,useEffect} from 'react';
import './Paginacion.css';
import PropTypes from 'prop-types';
const cantUnidades = 10;

const Paginacion = (props) => {
	const {totalPaginas,page,setPage} = props
   

	const [media, setMedia] = useState(4);


    const nextHandler = () => {
		if(page==media+1)
		 setMedia(page+1);
		else if(page==1)
		 setMedia(4);
		setPage(page+1);
	}
	const prevHandler = () => {
		if(page==media-1&&page!=3)
		 setMedia(page-1);
		else if(page==totalPaginas)
		 setMedia(page-3);


		setPage(page-1);
	}
	



	const estiloActivo = {
		activado: {
			color: 'white',
			padding: 0
			
		
		},
		desactivado: {
			color: 'grey',
			padding: 0
		
		}
	}
	
	return (
		<div className='paginacion'>
		   { <>
			
 		   <button onClick={prevHandler } disabled = {page<=1} ><i className="fa-solid fa-arrow-left" style={(page>1)?estiloActivo.activado :estiloActivo.desactivado}></i></button>
	        {(totalPaginas>7)
			?<>
				<button onClick={()=>setPage(1)} key={1} className={(page==1)?"activo":"d"}>{1}</button>
				{media-1<=3
				?<button onClick={()=>setPage(2)} key={2} className={(page==2)?"activo":"d"}>{2}</button>
				:<button  key={"2a"} disabled={true}>...</button>
				}
				<button onClick={()=>setPage(media-1)} key={media-1} className={(page==(media-1))?"activo":"d"}>{media-1}</button>
				<button onClick={()=>setPage(media)}  key={media} className={(page==media)?"activo":"d"}>{media}</button>
				<button onClick={()=>setPage(media+1)} key={media+1} className={(page==(media+1))?"activo":"d"}>{media+1}</button>

				{media+2==totalPaginas-1
				?<button onClick={()=>setPage(totalPaginas-1)} key={totalPaginas-1} className={(page==(totalPaginas-1))?"activo":"d"} >{totalPaginas-1}</button>
				:<button key={totalPaginas - 1+"a"} disabled={true}>...</button>
				}

				<button onClick={()=>setPage(totalPaginas)}  key={totalPaginas}  className={(page==totalPaginas)?"activo":"d"}>{totalPaginas}</button>
			</>
			:<>  
			    {
				[...Array(totalPaginas)].map((x,i)=>{
					return <button onClick={()=>setPage(i+1)} key={i+"n"} className={(page==i+1)?"activo":"d"}>{i+1}</button>
				}
				)
		        }
					
			</>
			}
		   <button onClick={nextHandler} disabled = {page>=totalPaginas}><i className="fa-solid fa-arrow-right" style={(page<totalPaginas)?estiloActivo.activado :estiloActivo.desactivado}></i></button>
		   </>
		   }
 		</div>
	);
};

Paginacion.propTypes = {};

export default Paginacion;
"use client";
import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getMoviesByPage,
  getCertifications,
  languagesList,
  getCredits,
  getMovieTrailer,
  getIdProtagonistaByName,
  getMoviesByTitle,
  getMoviesByProtagonist,
  getMoviesByYear,
} from "../../models/movie.model";
import MovieView from "../MovieView/MovieView";
import PropTypes from "prop-types";
import Paginacion from "../Paginacion/Paginacion";

const Home = ({}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [placeholder, setPlaceholder] = useState("");

  const [protagonistaQ, setProtagonistaQ] = useState("");
  const [search, setSearch] = useState("");
  const [radios, setRadios] = useState(1);
  const [entro, setEntro] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const limpiar = () => {
    setProtagonistaQ("");
  };

  const checkHandler = (e) => {
    limpiar();
    if (e.target.id === "op1") {
      setRadios(1);
    } else if (e.target.id === "op2") {
      setRadios(2);
    } else if (e.target.id === "op3") {
      setRadios(3);
    }
  };
  useEffect(() => {
    if (!entro) {
      getMoviesByPage(page, protagonistaQ).then((res) => {
        setTotalPaginas(res.total_pages);
        setMovies(res.results);
      });
      setEntro(true);
    }
    if (radios == 1) {
      setPlaceholder("Año");
      getMoviesByYear(page, search).then((res) => {
        setTotalPaginas(res.total_pages > 500 ? 500 : res.total_pages);
        setMovies(res.results);
      });
    } else if (radios == 2) {
      setPlaceholder("Título");

      if (search === "") {
        getMoviesByPage(page, protagonistaQ).then((res) => {
          setTotalPaginas(res.total_pages);
          setMovies(res.results);
        });
      } else {
        getMoviesByTitle(page, search).then((res) => {
          setTotalPaginas(res.total_pages > 500 ? 500 : res.total_pages);
          setMovies(res.results);
        });
      }
    } else if (radios == 3) {
      setPlaceholder("Protagonista");
      getIdProtagonistaByName(search).then((res) => {
        let prota = "";

        if (res.results.length > 0) {
          let ultimo = res.results[res.results.length - 1];
          res.results.map((protagonista, i) => {
            if (i != res.results.length - 1) prota += protagonista.id + " || ";
          });

          setProtagonistaQ(prota + ultimo.id);
        }
      });

      getMoviesByProtagonist(page, protagonistaQ).then((res) => {
        setTotalPaginas(res.total_pages > 500 ? 500 : res.total_pages);
        setMovies(res.results);
        console.log(protagonistaQ);
      });
    }

    return () => {
      if (search === "") {
        limpiar();
      }
    };
  }, [page, protagonistaQ, search, radios]);

  return (
    <>
      <div className="formulario">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => searchHandler(e)}
        />
        <div className="radio-opciones">
          <input
            type="radio"
            name="opcion"
            id="op1"
            checked={radios == 1 ? true : false}
            onChange={(e) => checkHandler(e)}
          />
          <label htmlFor="op1">Año</label>
          <input
            type="radio"
            name="opcion"
            id="op2"
            checked={radios == 2 ? true : false}
            onChange={(e) => checkHandler(e)}
          />
          <label htmlFor="op2">Título</label>
          <input
            type="radio"
            name="opcion"
            id="op3"
            checked={radios == 3 ? true : false}
            onChange={(e) => checkHandler(e)}
          />
          <label htmlFor="op3">Protagonista</label>
        </div>
      </div>

      <section className="movies-section">
        {movies.map(
          (movie) =>
            movie.poster_path != undefined && (
              <MovieView key={movie.id} {...movie} />
            )
        )}
      </section>
      <Paginacion totalPaginas={totalPaginas} page={page} setPage={setPage} />
    </>
  );
};

Home.propTypes = {};

export default Home;

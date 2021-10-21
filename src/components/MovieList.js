import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <div className ="MovieList">
      <div class="d-flex flex-row bd-highlight mb-3">
        {props.movies.map((movie, index) => (
          <div key={movie.imdbID} className = "MovieListItem" onClick={() => props.handleFavouritesClick(movie)}>
            <div class="box">
              <img class="img-responsive" src={movie.Poster} alt="movie"  />
              <props.component/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
